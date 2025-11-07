// Configure o conteúdo do seu projeto acadêmico aqui
export const projectData = {
    // Cabeçalho
    header: {
        title: "Template Acadêmico Pro",
        subtitle: "Boilerplate para Apresentação de Projetos Universitários",
        logo: "/images/logotemplate.png", // opcional
    },

    // Hero / Seção Principal
    hero: {
        title: "Sistema de Apresentação de Projetos Acadêmicos",
        description:
            "Um template moderno e responsivo desenvolvido com Next.js e Tailwind CSS, criado para facilitar a documentação e apresentação visual de trabalhos acadêmicos, TCCs e projetos universitários.",
        image: "/images/apresentacao.png",
        buttons: [
            {
                text: "Ver GitHub",
                href: "https://github.com/tremedam/boilerplate",
                primary: true,
            },
            {
                text: "Documentação",
                href: "/docs/LICENSE",
                primary: false,
            },
        ],
    },

    // Sobre o Projeto
    about: {
        title: "Sobre o Projeto",
        content: `
      Este projeto foi desenvolvido como um trabalho acadêmico que documenta sua 
      própria criação - um template reutilizável para apresentação de projetos 
      universitários.
      
      O objetivo principal é fornecer uma base sólida e moderna para estudantes 
      apresentarem seus trabalhos de forma profissional, eliminando a necessidade 
      de criar estruturas do zero e permitindo foco total no conteúdo do projeto.
      
      Utilizamos Next.js para performance otimizada, Tailwind CSS para estilização 
      rápida e componentização React para máxima reutilização de código.
    `,
        stats: [
            { label: "Tempo de Desenvolvimento", value: "3 semanas" },
            { label: "Tecnologias", value: "5+" },
            { label: "Componentes", value: "12" },
        ],
    },

    // Funcionalidades
    features: {
        title: "Principais Funcionalidades",
        items: [
            {
                icon: "",
                title: "Design Responsivo",
                description: "Interface totalmente adaptável a diferentes tamanhos de tela, garantindo ótima experiência em desktop, tablet e mobile.",
            },
            {
                icon: "",
                title: "Performance Otimizada",
                description: "Utiliza Next.js com SSG e otimização automática de imagens para carregamento ultra-rápido das páginas.",
            },
            {
                icon: "",
                title: "Componentes Modulares",
                description: "Arquitetura baseada em componentes React reutilizáveis, facilitando manutenção e customização.",
            },
            {
                icon: "",
                title: "Configuração Centralizada",
                description: "Todo conteúdo gerenciado através de um único arquivo (projectData.js), simplificando edições sem tocar no código.",
            },
            {
                icon: "",
                title: "Rotas Dedicadas",
                description: "Páginas separadas para funcionalidades, tecnologias e equipe, melhorando navegação e SEO.",
            },
            {
                icon: "",
                title: "Temas Personalizáveis",
                description: "Sistema de cores configurável permitindo adaptar a identidade visual do projeto facilmente.",
            },
        ],
    },

    // Tecnologias
    technologies: {
        title: "Tecnologias Utilizadas",
        items: [
            {
                name: "Next.js 14",
                description: "Framework React para aplicações web modernas com SSR e SSG",
                image: "/images/tech/nextjs.png",
            },
            {
                name: "React 18",
                description: "Biblioteca JavaScript para construção de interfaces de usuário",
                image: "/images/tech/react.png",
            },
            {
                name: "Tailwind CSS",
                description: "Framework CSS utility-first para estilização rápida e responsiva",
                image: "/images/tech/tailwind.png",
            },
            {
                name: "JavaScript (ES6+)",
                description: "Linguagem de programação moderna com recursos avançados",
                image: "/images/tech/javascript.png",
            },
            {
                name: "Git & GitHub",
                description: "Controle de versão e hospedagem de código-fonte",
                image: "/images/tech/git.png",
            },
            {
                name: "Vercel",
                description: "Plataforma de deploy otimizada para projetos Next.js",
                image: "/images/tech/vercel.png",
            },
        ],
    },

    // Equipe
    team: {
        title: "Desenvolvedor",
        members: [
            {
                name: "Thiago F.S Dias",
                role: "Desenvolvedor Full-Stack & Designer",
                image: "/images/team/thiago.jpg",
                github: "https://github.com/tremedam",
                linkedin: "https://linkedin.com/in/thiago-dias",
            },
        ],
        advisor: {
            name: "Projeto Individual",
            role: "Trabalho Acadêmico Autônomo",
            email: "contato@thiagodias.dev",
        },
    },

    // Galeria / Screenshots
    gallery: {
        title: "Capturas de Tela do Template",
        images: [
            {
                src: "/images/screenshots/home.jpg",
                caption: "Página principal com Hero Section e seções de preview",
            },
            {
                src: "/images/screenshots/features.jpg",
                caption: "Página dedicada de funcionalidades com grid responsivo",
            },
            {
                src: "/images/screenshots/technologies.jpg",
                caption: "Showcase de tecnologias utilizadas no projeto",
            },
            {
                src: "/images/screenshots/team.jpg",
                caption: "Página da equipe com perfis e redes sociais",
            },
            {
                src: "/images/screenshots/mobile.jpg",
                caption: "Design responsivo em dispositivos móveis",
            },
        ],
    },

    // Resultados
    results: {
        title: "Resultados Alcançados",
        content: `
      O projeto alcançou todos os objetivos propostos, resultando em um template funcional, 
      profissional e facilmente customizável. A estrutura modular permite rápida adaptação 
      para diferentes tipos de projetos acadêmicos.
    `,
        achievements: [
            "Template totalmente funcional com 12 componentes reutilizáveis",
            "Sistema de rotas implementado com navegação fluida entre páginas",
            "Documentação completa no README com instruções de uso",
            "Performance otimizada com Next.js alcançando 90+ no Lighthouse",
            "Design responsivo testado em múltiplos dispositivos e resoluções",
            "Código versionado no GitHub com licença MIT (open-source)",
        ],
    },

    // Rodapé
    footer: {
        university: "Projeto de Estudo Pessoal",
        course: "Desenvolvimento Web Full-Stack",
        semester: "2025",
        year: "2025",
        contact: {
            email: "thiagofellipe055@gmail.com",
            github: "https://github.com/tremedam/boilerplate",
        },
    },

    // Configuração de Cores
    theme: {
        primary: "#0a47c9ff", // azul
        secondary: "#7c3aed", // roxo
        accent: "#f59e0b", // laranja
        background: "#ffffff",
        text: "#1f2937",
    },
};