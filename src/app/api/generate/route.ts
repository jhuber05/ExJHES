import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

function buildPrompt(config: {
  baseColor: string;
  secondaryColor: string;
  flakeType: string;
  flakeDensity: number;
  flakeSize: string;
  glossLevel: string;
  metallicEffect: boolean;
  texture: string;
  roomType: string;
}) {
  const flakeDesc =
    config.flakeType !== "none"
      ? `with ${config.flakeDensity}% density ${config.flakeSize}-sized ${config.flakeType} flakes in ${config.secondaryColor} color`
      : "with no flakes, solid color";

  const metallicDesc = config.metallicEffect
    ? "with a metallic pearlescent depth effect"
    : "";

  const textureDesc = {
    smooth: "perfectly smooth and level",
    "orange-peel": "with subtle orange-peel texture",
    broadcast: "with full broadcast chip/flake coverage",
    swirl: "with artistic metallic swirl patterns",
  }[config.texture];

  return `Transform only the floor in this photo to show a professional epoxy floor coating. Keep everything else in the room exactly the same — walls, furniture, objects, lighting, perspective.

The epoxy floor should be:
- Base color: ${config.baseColor}
- Finish: ${config.glossLevel}% gloss level, highly reflective like a mirror-finish epoxy
- Flakes: ${flakeDesc}
- Texture: ${textureDesc}
- ${metallicDesc}
- Room type context: ${config.roomType}

Make the epoxy coating look photorealistic with proper light reflections on the glossy surface. The floor should look wet and deep like a professionally poured epoxy. Show realistic reflections of the room's lighting on the floor surface. The coating should look seamless, self-leveling, and factory-perfect.`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { config, image } = body;

    if (!image) {
      return Response.json({ error: "No image provided" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "your_gemini_api_key_here") {
      return Response.json(
        { error: "Gemini API key not configured. Add GEMINI_API_KEY to .env.local" },
        { status: 500 }
      );
    }

    const prompt = buildPrompt(config);

    // Extract base64 data and mime type from data URL
    const matches = image.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
      return Response.json({ error: "Invalid image format" }, { status: 400 });
    }
    const mimeType = matches[1];
    const base64Data = matches[2];

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType,
                data: base64Data,
              },
            },
            { text: prompt },
          ],
        },
      ],
      config: {
        responseModalities: ["image", "text"],
      },
    });

    // Extract generated image from response
    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) {
      return Response.json(
        { error: "No response from Gemini" },
        { status: 500 }
      );
    }

    for (const part of parts) {
      if (part.inlineData) {
        const generatedImage = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        return Response.json({ image: generatedImage });
      }
    }

    // If no image was returned, return the text response as error context
    const textParts = parts.filter((p) => p.text).map((p) => p.text);
    return Response.json(
      {
        error: "Gemini did not return an image. Response: " + textParts.join(" "),
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Generate error:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Generation failed" },
      { status: 500 }
    );
  }
}
