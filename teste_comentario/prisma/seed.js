import { PrismaClient } from '../prismaClient/index.js'
import { gerarSlugUnico } from '../utils/auth.js'
const prisma = new PrismaClient()

async function main() {
    // Criando o usuário padrão
    await prisma.cliente.upsert({
        where: { email: 'admin@projeto.com' },
        update: {},
        create: {
            nome: 'Caralinhos Pereira',
            email: 'caralinhos@admin.com',
            biografia: 'o user mais loco do mundo',
            telefone: '(11) 99999-9999',
            data_criacao: new Date(),
            senha: '123456',
        },
    })

    // Criando outro usuário com dados diferentes
    await prisma.cliente.upsert({
        where: { email: 'joao@admin.com' },
        update: {},
        create: {
            nome: 'João Silva',
            email: 'joao@admin.com',
            biografia: 'Programador de sistemas',
            telefone: '(11) 98888-7777',
            data_criacao: new Date(),
            senha: 'senha123',
        },
    })

    // Criação de múltiplas empresas
    await prisma.empresa.createMany({
        data: [
            {
                nome: "Empresa Teste 1",
                logo: "logo1.png",
                banner: "banner1.png",
                sobre: "Descrição da Empresa Teste 1",
                slug: await gerarSlugUnico("Empresa Teste 1", "empresa"),
                email: "empresa1@teste.com",
                telefone: "1111111111",
                senha: "senha123",
                cnpj: "11111111000101",
                data_criacao: new Date(),
            },
            {
                nome: "Empresa Teste 2",
                logo: "logo2.png",
                banner: "banner2.png",
                sobre: "Descrição da Empresa Teste 2",
                slug: await gerarSlugUnico("Empresa Teste 2", "empresa"),
                email: "empresa2@teste.com",
                telefone: "2222222222",
                senha: "senha456",
                cnpj: "22222222000102",
                data_criacao: new Date(),
            },
            {
                nome: "Empresa Teste 3",
                logo: "logo3.png",
                banner: "banner3.png",
                sobre: "Descrição da Empresa Teste 3",
                slug: await gerarSlugUnico("Empresa Teste 3", "empresa"),
                email: "empresa3@teste.com",
                telefone: "3333333333",
                senha: "senha789",
                cnpj: "33333333000103",
                data_criacao: new Date(),
            },
            {
                nome: "Empresa Teste 4",
                logo: "logo4.png",
                banner: "banner4.png",
                sobre: "Descrição da Empresa Teste 4",
                slug: await gerarSlugUnico("Empresa Teste 4", "empresa"),
                email: "empresa4@teste.com",
                telefone: "4444444444",
                senha: "senha101",
                cnpj: "44444444000104",
                data_criacao: new Date(),
            },
            {
                nome: "Empresa Teste 5",
                logo: "logo5.png",
                banner: "banner5.png",
                sobre: "Descrição da Empresa Teste 5",
                slug: await gerarSlugUnico("Empresa Teste 5", "empresa"),
                email: "empresa5@teste.com",
                telefone: "5555555555",
                senha: "senha202",
                cnpj: "55555555000105",
                data_criacao: new Date(),
            },
        ],
    })

    // Criação de categorias
    await prisma.categoria.createMany({
        data: ["Esporte", "Tecnologia", "Shows", "Gastronomia", "Negócios"].map((nome) => ({ nome })),
    })

    // Criação de hashtags
    await prisma.hashtag.createMany({
        data: [
            "InteligenciaArtificial", "VidaLoka", "Felicidade", "Tecnologia", "Saúde",
            "Educação", "Viagens", "Arte", "Música", "Cultura", "Gastronomia",
            "Empreendedorismo", "Inovação", "Networking", "Eventos", "Diversão",
            "Experiências", "Aprendizado", "Criatividade", "Colaboração", "Comunidade",
            "Sustentabilidade", "TecnologiaVerde", "SaúdeMental", "BemEstar",
            "Autoconhecimento", "Motivação", "Empoderamento", "Diversidade", "Inclusão",
            "segueSDica", "jaComi", "rayMeComeu", "banana", 'cachorro', "morango",
            "segueSDica", "jaComi", "rayMeComeu", "banana",
            "InteligenciaArtificial", "VidaLoka", "Felicidade", "Tecnologia", "Saúde",
            "Educação", "Viagens", "Arte", "Música", "Cultura", "Gastronomia",
            "Empreendedorismo", "Inovação", "Networking", "Eventos", "Diversão",
            "Experiências", "Aprendizado", "Criatividade", "Colaboração", "Comunidade",
            "Sustentabilidade", "TecnologiaVerde", "SaúdeMental", "BemEstar",
            "Autoconhecimento", "Motivação", "Empoderamento", "Diversidade", "Inclusão",
            "segueSDica", "jaComi", "rayMeComeu", "banana", 'cachorro', "morango",
            "segueSDica", "jaComi", "rayMeComeu", "banana"
        ].map((nome) => ({ nome })),
    })

    // Buscar dados criados
    const empresas = await prisma.empresa.findMany()
    const categorias = await prisma.categoria.findMany()
    const hashtags = await prisma.hashtag.findMany()

    // Criação de eventos por empresa
    for (const empresa of empresas) {
        await prisma.evento.createMany({
            data:
                [
                    {
                        nome: `Evento 1 da ${empresa.nome}`,
                        data_inicio: new Date(),
                        data_fim: new Date(),
                        descricao: "Descrição do Evento 1",
                        imagem: "imagem1.png",
                        capacidade: 100,
                        cep: "12345678",
                        uf: "SP",
                        bairro: "Centro",
                        cidade: "São Paulo",
                        logradouro: "Rua das Flores",
                        complemento: "Apto 101",
                        numero: "123",
                        slug: await gerarSlugUnico(`Evento 1 da ${empresa.nome}`, 'evento'),
                        destaque: true,
                        fk_empresa_id_empresa: empresa.id_empresa,
                    },
                    {
                        nome: `Evento 2 da ${empresa.nome}`,
                        data_inicio: new Date(),
                        data_fim: new Date(),
                        descricao: "Descrição do Evento 2",
                        imagem: "imagem2.png",
                        capacidade: 200,
                        cep: "87654321",
                        uf: "RJ",
                        bairro: "Copacabana",
                        cidade: "Rio de Janeiro",
                        logradouro: "Avenida Atlântica",
                        complemento: "Sala 202",
                        numero: "456",
                        slug: await gerarSlugUnico(`Evento 2 da ${empresa.nome}`, 'evento'),
                        destaque: false,
                        fk_empresa_id_empresa: empresa.id_empresa,
                    },
                    {
                        nome: `Evento 3 da ${empresa.nome}`,
                        data_inicio: new Date(),
                        data_fim: new Date(),
                        descricao: "Descrição do Evento 3",
                        imagem: "imagem3.png",
                        capacidade: 300,
                        cep: "23456789",
                        uf: "MG",
                        bairro: "Savassi",
                        cidade: "Belo Horizonte",
                        logradouro: "Rua do Ouro",
                        complemento: "Sala 303",
                        numero: "789",
                        slug: await gerarSlugUnico(`Evento 3 da ${empresa.nome}`, 'evento'),
                        destaque: false,
                        fk_empresa_id_empresa: empresa.id_empresa,
                    },
                    {
                        nome: `Evento 4 da ${empresa.nome}`,
                        data_inicio: new Date(),
                        data_fim: new Date(),
                        descricao: "Descrição do Evento 4",
                        imagem: "imagem4.png",
                        capacidade: 150,
                        cep: "34567890",
                        uf: "RS",
                        bairro: "Moinhos",
                        cidade: "Porto Alegre",
                        logradouro: "Rua Bela Vista",
                        complemento: "Casa 10",
                        numero: "321",
                        slug: await gerarSlugUnico(`Evento 4 da ${empresa.nome}`, 'evento'),
                        destaque: true,
                        fk_empresa_id_empresa: empresa.id_empresa,
                    },
                    {
                        nome: `Evento 5 da ${empresa.nome}`,
                        data_inicio: new Date(),
                        data_fim: new Date(),
                        descricao: "Descrição do Evento 5",
                        imagem: "imagem5.png",
                        capacidade: 250,
                        cep: "45678901",
                        uf: "BA",
                        bairro: "Barra",
                        cidade: "Salvador",
                        logradouro: "Avenida Oceânica",
                        complemento: "Cobertura",
                        numero: "654",
                        slug: await gerarSlugUnico(`Evento 5 da ${empresa.nome}`, 'evento'),
                        destaque: false,
                        fk_empresa_id_empresa: empresa.id_empresa,
                    },
                    {
                        nome: `Evento 6 da ${empresa.nome}`,
                        data_inicio: new Date(),
                        data_fim: new Date(),
                        descricao: "Descrição do Evento 6",
                        imagem: "imagem6.png",
                        capacidade: 350,
                        cep: "56789012",
                        uf: "PR",
                        bairro: "Centro",
                        cidade: "Curitiba",
                        logradouro: "Rua XV de Novembro",
                        complemento: "Loja 01",
                        numero: "987",
                        slug: await gerarSlugUnico(`Evento 6 da ${empresa.nome}`, 'evento'),
                        destaque: true,
                        fk_empresa_id_empresa: empresa.id_empresa,
                    },
                    {
                        nome: `Evento 7 da ${empresa.nome}`,
                        data_inicio: new Date(),
                        data_fim: new Date(),
                        descricao: "Descrição do Evento 7",
                        imagem: "imagem7.png",
                        capacidade: 400,
                        cep: "67890123",
                        uf: "PE",
                        bairro: "Boa Viagem",
                        cidade: "Recife",
                        logradouro: "Rua da Praia",
                        complemento: "Bloco A",
                        numero: "741",
                        slug: await gerarSlugUnico(`Evento 7 da ${empresa.nome}`, 'evento'),
                        destaque: false,
                        fk_empresa_id_empresa: empresa.id_empresa,
                    },
                    {
                        nome: `Evento 8 da ${empresa.nome}`,
                        data_inicio: new Date(),
                        data_fim: new Date(),
                        descricao: "Descrição do Evento 8",
                        imagem: "imagem8.png",
                        capacidade: 500,
                        cep: "78901234",
                        uf: "CE",
                        bairro: "Meireles",
                        cidade: "Fortaleza",
                        logradouro: "Avenida Beira Mar",
                        complemento: "Ap 808",
                        numero: "852",
                        slug: await gerarSlugUnico(`Evento 8 da ${empresa.nome}`, 'evento'),
                        destaque: false,
                        fk_empresa_id_empresa: empresa.id_empresa,
                    },
                ]
        })
    }

    // Buscar eventos após criação
    const eventos = await prisma.evento.findMany()

    // Relacionar categorias com eventos
    let categoriaIndex = 0
    for (const categoria of categorias) {
        await prisma.contem_pertence.createMany({
            data: [
                {
                    fk_id_evento: eventos[categoriaIndex]?.id_evento,
                    fk_id_categoria: categoria.id_categoria,
                },
                {
                    fk_id_evento: eventos[categoriaIndex + 1]?.id_evento,
                    fk_id_categoria: categoria.id_categoria,
                },
                {
                    fk_id_evento: eventos[categoriaIndex + 2]?.id_evento,
                    fk_id_categoria: categoria.id_categoria,
                },
                {
                    fk_id_evento: eventos[categoriaIndex + 3]?.id_evento,
                    fk_id_categoria: categoria.id_categoria,
                },
                {
                    fk_id_evento: eventos[categoriaIndex + 4]?.id_evento,
                    fk_id_categoria: categoria.id_categoria,
                },
                {
                    fk_id_evento: eventos[categoriaIndex + 5]?.id_evento,
                    fk_id_categoria: categoria.id_categoria,
                },
                {
                    fk_id_evento: eventos[categoriaIndex + 6]?.id_evento,
                    fk_id_categoria: categoria.id_categoria,
                },
                {
                    fk_id_evento: eventos[categoriaIndex + 7]?.id_evento,
                    fk_id_categoria: categoria.id_categoria,
                },
            ],
        })
        categoriaIndex += 8
    }

    // Relacionar hashtags com eventos
    let hashtagIndex = 0
    for (const evento of eventos) {
        await prisma.pertence_associada.createMany({
            data: [
                {
                    fk_id_hashtag: hashtags[hashtagIndex]?.id_hashtag,
                    fk_id_evento: evento.id_evento,
                },
                {
                    fk_id_hashtag: hashtags[hashtagIndex + 1]?.id_hashtag,
                    fk_id_evento: evento.id_evento,
                }

            ],
        })
        hashtagIndex += 2
    }
    function naosei(m, n) {
        let resultado = m + n
        return resultado
    }
    console.log(naosei(5, 10))




    console.log('Usuários, Empresas, eventos e derivados padrões criados.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
