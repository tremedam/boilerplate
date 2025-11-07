// Configure o conteúdo do seu projeto acadêmico aqui
export const projectData = {
    // Cabeçalho
    header: {
        title: "Título do Seu Projeto Acadêmico",
        subtitle: "Subtítulo ou Descrição Curta do Projeto",
        logo: "/images/logo.png", // opcional
    },

    // Hero / Seção Principal
    hero: {
        title: "Apresentando o Projeto",
        description:
            "Uma breve descrição do projeto, explicando o problema que resolve, os objetivos principais e o contexto acadêmico em que foi desenvolvido.",
        image: "/images/hero-image.jpg",
        buttons: [
            {
                text: "Ver Demo",
                href: "#demo",
                primary: true,
            },
            {
                text: "Documentação",
                href: "/docs/documentation.pdf",
                primary: false,
            },
        ],
    },

    // Sobre o Projeto
    about: {
        title: "Sobre o Projeto",
        content: `
      Este projeto foi desenvolvido como parte da disciplina [Nome da Disciplina] 
      do curso de [Nome do Curso] na [Nome da Universidade].
      
      O objetivo principal é [descrever objetivo]. Para isso, foram utilizadas 
      técnicas de [metodologia/técnicas] e ferramentas modernas de desenvolvimento.
    `,
        stats: [
            { label: "Duração", value: "4 meses" },
            { label: "Linguagens", value: "3" },
            { label: "Linhas de Código", value: "5.000+" },
        ],
    },

    // Funcionalidades
    features: {
        title: "Principais Funcionalidades",
        items: [
            {
                icon: "🚀",
                title: "Funcionalidade 1",
                description: "Descrição detalhada da primeira funcionalidade implementada.",
            },
            {
                icon: "💡",
                title: "Funcionalidade 2",
                description: "Descrição detalhada da segunda funcionalidade implementada.",
            },
            {
                icon: "⚡",
                title: "Funcionalidade 3",
                description: "Descrição detalhada da terceira funcionalidade implementada.",
            },
            {
                icon: "🎯",
                title: "Funcionalidade 4",
                description: "Descrição detalhada da quarta funcionalidade implementada.",
            },
        ],
    },

    // Tecnologias
    technologies: {
        title: "Tecnologias Utilizadas",
        items: [
            {
                name: "React",
                description: "Biblioteca JavaScript para interfaces",
                image: "/images/tech/react.png",
            },
            {
                name: "Node.js",
                description: "Ambiente de execução JavaScript",
                image: "/images/tech/nodejs.png",
            },
            {
                name: "PostgreSQL",
                description: "Banco de dados relacional",
                image: "/images/tech/postgresql.png",
            },
            {
                name: "Docker",
                description: "Containerização da aplicação",
                image: "/images/tech/docker.png",
            },
        ],
    },

    // Equipe
    team: {
        title: "Equipe do Projeto",
        members: [
            {
                name: "Nome do Aluno 1",
                role: "Desenvolvedor Full-Stack",
                image: "/images/team/member1.jpg",
                github: "https://github.com/usuario1",
                linkedin: "https://linkedin.com/in/usuario1",
            },
            {
                name: "Nome do Aluno 2",
                role: "Desenvolvedor Backend",
                image: "/images/team/member2.jpg",
                github: "https://github.com/usuario2",
                linkedin: "https://linkedin.com/in/usuario2",
            },
        ],
        advisor: {
            name: "Prof. Dr. Nome do Orientador",
            role: "Orientador",
            email: "orientador@universidade.edu.br",
        },
    },

    // Galeria / Screenshots
    gallery: {
        title: "Capturas de Tela",
        images: [
            {
                src: "/images/screenshots/screen1.jpg",
                caption: "Tela inicial da aplicação",
            },
            {
                src: "/images/screenshots/screen2.jpg",
                caption: "Dashboard principal",
            },
            {
                src: "/images/screenshots/screen3.jpg",
                caption: "Funcionalidade em ação",
            },
        ],
    },

    // Resultados
    results: {
        title: "Resultados Alcançados",
        content: `
      O projeto alcançou todos os objetivos propostos, resultando em uma aplicação
      funcional e eficiente. Os principais resultados incluem:
    `,
        achievements: [
            "Implementação completa de todas as funcionalidades planejadas",
            "Performance otimizada com tempo de resposta < 100ms",
            "Cobertura de testes de 85%",
            "Documentação técnica completa",
        ],
    },

    // Rodapé
    footer: {
        university: "Universidade Federal de [Estado]",
        course: "Curso de [Nome do Curso]",
        semester: "2024.2",
        year: "2024",
        contact: {
            email: "contato@projeto.com",
            github: "https://github.com/usuario/projeto",
        },
    },

    // Configuração de Cores
    theme: {
        primary: "#2563eb", // azul
        secondary: "#7c3aed", // roxo
        accent: "#f59e0b", // laranja
        background: "#ffffff",
        text: "#1f2937",
    },
};
