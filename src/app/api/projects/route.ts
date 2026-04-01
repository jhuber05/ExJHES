import { prisma } from "@/lib/db";

export const maxDuration = 30;
export const dynamic = "force-dynamic";

// GET all projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return Response.json(projects);
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}

// POST create a project
export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("POST /api/projects - originalImage:", body.originalImage ? `${body.originalImage.length} chars` : null);
    console.log("POST /api/projects - generatedImage:", body.generatedImage ? `${body.generatedImage.length} chars` : null);

    const project = await prisma.project.create({
      data: {
        name: body.name,
        baseColor: body.config.baseColor,
        secondaryColor: body.config.secondaryColor,
        flakeType: body.config.flakeType,
        flakeDensity: body.config.flakeDensity,
        flakeSize: body.config.flakeSize,
        glossLevel: body.config.glossLevel,
        metallicEffect: body.config.metallicEffect,
        texture: body.config.texture,
        roomType: body.config.roomType,
        originalImage: body.originalImage ?? null,
        generatedImage: body.generatedImage ?? null,
      },
    });

    return Response.json(project);
  } catch (error) {
    console.error("POST /api/projects error:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
