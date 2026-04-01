import Link from "next/link";
import {
  Camera,
  Palette,
  Layers,
  FileImage,
  Calculator,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Room Photo Upload",
    description:
      "Upload a photo of your client's actual space and see the epoxy coating applied in real-time.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description:
      "Choose base colors, flake types, metallic effects, gloss levels, and textures.",
  },
  {
    icon: Layers,
    title: "Preset Library",
    description:
      "Start with popular epoxy styles — metallic, vinyl chip, quartz broadcast, and more.",
  },
  {
    icon: FileImage,
    title: "Before/After Comparison",
    description:
      "Interactive slider to show clients the dramatic transformation side by side.",
  },
  {
    icon: Calculator,
    title: "Material Estimates",
    description:
      "Input square footage and get material quantity estimates for your next job.",
  },
  {
    icon: Building2,
    title: "White-Label Ready",
    description:
      "Brand the visualizer as your own tool. Premium contractors close more deals.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/3 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Powered by AI
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
              Visualize Epoxy Floors{" "}
              <span className="accent-gradient-text">Before You Pour</span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
              Upload a photo of any room. Choose your epoxy coating — color,
              flakes, finish. Get a photorealistic AI-generated preview in
              seconds. Close more deals with stunning visualizations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/editor"
                className="inline-block bg-accent hover:bg-accent-hover hover:scale-105 hover:shadow-lg text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition-all duration-500 ease-in-out"
              >
                Try the Visualizer
              </Link>
              <a
                href="#features"
                className="inline-block border border-card-border hover:border-muted hover:scale-105 hover:shadow-lg px-8 py-3.5 rounded-xl text-lg transition-all duration-500 ease-in-out"
              >
                See Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative rounded-2xl border border-card-border bg-card overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-red-500 mx-auto mb-4 flex items-center justify-center">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <p className="text-muted text-lg">
                Interactive demo — try the editor
              </p>
              <Link
                href="/editor"
                className="inline-block mt-4 text-accent hover:text-accent-hover font-medium"
              >
                Open Editor &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 border-t border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Everything Contractors Need to Close Deals
            </h2>
            <p className="text-muted mt-3 max-w-xl mx-auto">
              Built specifically for epoxy flooring professionals. Show clients
              exactly what their floor will look like.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border border-card-border rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Win More Clients?
          </h2>
          <p className="text-muted mb-8">
            Start visualizing epoxy floors in minutes. No credit card required
            for your first 5 generations.
          </p>
          <Link
            href="/editor"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition-colors"
          >
            Start Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-muted">
          <p>EpoxyViz &mdash; AI-Powered Floor Visualization</p>
          <p>Built for contractors, by contractors.</p>
        </div>
      </footer>
    </main>
  );
}
