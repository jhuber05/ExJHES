import { prisma } from "@/lib/db";

// PATCH — rename a project
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const project = await prisma.project.update({
      where: { id },
      data: { name: body.name },
    });
    return Response.json(project);
  } catch (error) {
    console.error("PATCH /api/projects/[id] error:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}

// DELETE a project
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.project.delete({ where: { id } });
    return Response.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/projects/[id] error:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
