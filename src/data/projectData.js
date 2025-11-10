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
        
      **Visão Geral:**
      Este projeto acadêmico representa a criação de um template moderno e profissional para apresentação de trabalhos universitários, TCCs e projetos de pesquisa. Desenvolvido como um trabalho que documenta sua própria construção, ele demonstra na prática os conceitos e tecnologias utilizadas em seu desenvolvimento.

      **Contexto e Motivação:**
      Durante a graduação, observei que muitos estudantes enfrentam dificuldades para apresentar seus projetos de forma visual e profissional. A maioria das apresentações se limita a slides em PowerPoint ou documentos em PDF, que não conseguem transmitir adequadamente a complexidade e qualidade dos trabalhos desenvolvidos. Este template surge como solução para democratizar apresentações web de alta qualidade.

      **Objetivo Principal:**
      Fornecer uma base sólida, moderna e totalmente customizável que permita estudantes focarem no conteúdo de seus projetos, sem precisar investir tempo aprendendo desenvolvimento web do zero. O template é projetado para ser intuitivo: basta editar um único arquivo de dados (projectData.js) para personalizar todo o conteúdo.

      **Metodologia de Desenvolvimento:**
      O projeto foi desenvolvido seguindo as melhores práticas de engenharia de software moderna:
      
      • Arquitetura baseada em componentes React para máxima reutilização
      • Next.js para otimização automática de performance e SEO
      • Tailwind CSS para estilização rápida e consistente
      • Sistema de rotas dedicadas para melhor organização do conteúdo
      • Configuração centralizada para facilitar personalização
      • Versionamento com Git para rastreamento de mudanças

      **Diferenciais Técnicos:**
      Este não é apenas um template estático. Ele incorpora recursos avançados como Server-Side Rendering (SSR), otimização automática de imagens, geração de páginas estáticas, e um sistema de temas configurável. Tudo isso mantendo simplicidade de uso para quem não tem conhecimento técnico profundo.

      **Aplicabilidade:**
      O template é versátil e pode ser adaptado para diversos tipos de projetos acadêmicos: TCCs, projetos de iniciação científica, trabalhos de disciplinas, portfólios de projetos de extensão, documentação de pesquisas, e até mesmo apresentações de defesa de mestrado/doutorado.
    `,
        stats: [
            { label: "Tempo de Desenvolvimento", value: "3 semanas" },
            { label: "Tecnologias", value: "6" },
            { label: "Componentes", value: "5" },
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
                image: "/images/tech/nextjs.svg",
            },
            {
                name: "React 18",
                description: "Biblioteca JavaScript para construção de interfaces de usuário",
                image: "/images/tech/react.svg",
            },
            {
                name: "Tailwind CSS",
                description: "Framework CSS utility-first para estilização rápida e responsiva",
                image: "/images/tech/tailwind.svg",
            },
            {
                name: "JavaScript (ES6+)",
                description: "Linguagem de programação moderna com recursos avançados",
                image: "/images/tech/javascript.svg",
            },
            {
                name: "Git & GitHub",
                description: "Controle de versão e hospedagem de código-fonte",
                image: "/images/tech/github.svg",
            },
            {
                name: "Vercel",
                description: "Plataforma de deploy otimizada para projetos Next.js",
                image: "/images/tech/vercel.svg",
            },
        ],
    },

    // Equipe
    team: {
        title: "Desenvolvedor",
        members: [
            {
                name: "Thiago F.S Dias",
                role: "Aspirante a Full-Stack Developer",
                image: "/images/team/thiago.jpg",
                github: "https://github.com/tremedam",
                linkedin: "https://www.linkedin.com/in/thiago-fellipe-28471a26a/",
            },
        ],
        advisor: {
            name: "Projeto Individual",
            role: "Trabalho Acadêmico Autônomo",
            email: "thiagofellipe055@gmail.com",
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
        primary: "#2563eb ", // azul tech (Next.js inspired)
        secondary: "#0f172a", // slate escuro (moderno/tech)
        accent: "#09c8aea3", // cyan vibrante (destaque tech)
        background: "#ffffff",
        text: "#1f2937",
    },
};