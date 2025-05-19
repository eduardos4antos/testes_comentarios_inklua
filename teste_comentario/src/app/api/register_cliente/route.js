import prisma from "@/app/lib/prisma";

export async function POST(req) {
  const { nome, email, senha } = await req.json();

  try {
    const cliente = await prisma.cliente.create({
      data: {
        nome: nome,
        email: email,
        senha: senha
      },
    });
    return new Response(JSON.stringify(cliente), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro ao criar cliente" }), { status: 500 });
  }
}