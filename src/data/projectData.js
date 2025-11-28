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
            "Um template moderno e responsivo com Dark Mode configurável, desenvolvido com Next.js e Tailwind CSS. Criado para facilitar a documentação e apresentação visual de trabalhos acadêmicos, TCCs e projetos universitários com personalização completa através de um único arquivo.",
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
      Este projeto acadêmico representa a criação de um template moderno e profissional para apresentação de trabalhos universitários, TCCs e projetos de pesquisa. Desenvolvido como um trabalho que documenta sua própria construção, ele demonstra na prática os conceitos e tecnologias utilizadas em seu desenvolvimento, incluindo um sistema completo de Dark Mode com temas configuráveis.

      **Contexto e Motivação:**
      Durante a graduação, observei que muitos estudantes enfrentam dificuldades para apresentar seus projetos de forma visual e profissional. A maioria das apresentações se limita a slides em PowerPoint ou documentos em PDF, que não conseguem transmitir adequadamente a complexidade e qualidade dos trabalhos desenvolvidos. Este template surge como solução para democratizar apresentações web de alta qualidade, acessíveis e modernas.

      **Objetivo Principal:**
      Fornecer uma base sólida, moderna e totalmente customizável que permita estudantes focarem no conteúdo de seus projetos, sem precisar investir tempo aprendendo desenvolvimento web do zero. O template é projetado para ser intuitivo: basta editar um único arquivo de dados (projectData.js) para personalizar todo o conteúdo e as cores dos temas claro e escuro.

      **Metodologia de Desenvolvimento:**
      O projeto foi desenvolvido seguindo as melhores práticas de engenharia de software moderna:
      
      • Arquitetura baseada em componentes React para máxima reutilização
      • Next.js para otimização automática de performance e SEO
      • Tailwind CSS para estilização rápida e consistente
      • Sistema de Dark Mode com next-themes e persistência de preferências
      • Hook customizado (useThemeColors) para gerenciamento de cores configuráveis
      • Sistema de rotas dedicadas para melhor organização do conteúdo
      • Configuração centralizada para facilitar personalização
      • Versionamento com Git para rastreamento de mudanças

      **Diferenciais Técnicos:**
      Este não é apenas um template estático. Ele incorpora recursos avançados como Server-Side Rendering (SSR), otimização automática de imagens, geração de páginas estáticas, Dark Mode automático com alternância suave, sistema de temas totalmente configurável (light/dark), e persistência de preferências do usuário. Tudo isso mantendo simplicidade de uso para quem não tem conhecimento técnico profundo.

      **Aplicabilidade:**
      O template é versátil e pode ser adaptado para diversos tipos de projetos acadêmicos: TCCs, projetos de iniciação científica, trabalhos de disciplinas, portfólios de projetos de extensão, documentação de pesquisas, e até mesmo apresentações de defesa de mestrado/doutorado. O sistema de temas permite adaptar a identidade visual de forma profissional e acessível.
    `,
        stats: [
            { label: "Tempo de Desenvolvimento", value: "4 semanas" },
            { label: "Tecnologias", value: "16" },
            { label: "Componentes", value: "8" },
        ],
    },

    // Funcionalidades
    features: {
        title: "Principais Funcionalidades",
        items: [
            {
                icon: "🌓",
                title: "Dark Mode Automático",
                description: "Sistema completo de alternância entre temas claro e escuro com persistência de preferência do usuário e respeito à configuração do sistema operacional.",
            },
            {
                icon: "🎨",
                title: "Temas Totalmente Configuráveis",
                description: "Personalize todas as cores (fundos, textos, cards, header, footer) para light e dark mode em um único arquivo de configuração centralizado.",
            },
            {
                icon: "📱",
                title: "Design 100% Responsivo",
                description: "Interface totalmente adaptável a diferentes tamanhos de tela, garantindo ótima experiência em desktop, tablet e mobile com grid system moderno.",
            },
            {
                icon: "⚡",
                title: "Performance Otimizada",
                description: "Utiliza Next.js com SSR, SSG e otimização automática de imagens para carregamento ultra-rápido das páginas e melhor SEO.",
            },
            {
                icon: "🧩",
                title: "Componentes Modulares",
                description: "Arquitetura baseada em componentes React reutilizáveis com hook customizado (useThemeColors) para gerenciamento de estilos, facilitando manutenção e customização.",
            },
            {
                icon: "⚙️",
                title: "Configuração Centralizada",
                description: "Todo conteúdo e estilos gerenciados através de um único arquivo (projectData.js), simplificando edições sem necessidade de tocar no código dos componentes.",
            },
            {
                icon: "🔗",
                title: "Rotas Dedicadas",
                description: "Páginas separadas para funcionalidades, tecnologias e equipe com navegação fluida, melhorando organização do conteúdo e SEO.",
            },
            {
                icon: "✨",
                title: "Transições Suaves",
                description: "Animações e transições elegantes entre temas, estados de componentes e interações do usuário para uma experiência visual premium.",
            },
        ],
    },

    // Tecnologias
    technologies: {
        title: "Stack Tecnológico",
        subtitle: "Tecnologias, ferramentas e plataformas utilizadas no desenvolvimento",

        // Linguagens de Programação
        languages: {
            title: "Linguagens de Programação",
            description: "Linguagens utilizadas no desenvolvimento do projeto",
            items: [
                {
                    name: "JavaScript (ES6+)",
                    description: "Linguagem de programação moderna com recursos avançados, hooks e programação funcional",
                    image: "/images/tech/javascript.svg",
                },
                {
                    name: "HTML5",
                    description: "Linguagem de marcação para estruturação do conteúdo web",
                    image: "/images/tech/html.svg",
                },
                {
                    name: "CSS3",
                    description: "Linguagem de estilização para design e layout responsivo",
                    image: "/images/tech/css.svg",
                },
            ],
        },

        // Frameworks
        frameworks: {
            title: "Frameworks",
            description: "Estruturas robustas que guiam a arquitetura e desenvolvimento",
            items: [
                {
                    name: "Next.js 14",
                    description: "Framework React para aplicações web modernas com SSR, SSG e otimização automática",
                    image: "/images/tech/nextjs.svg",
                },
                {
                    name: "React 18",
                    description: "Biblioteca JavaScript para construção de interfaces de usuário com componentes reutilizáveis",
                    image: "/images/tech/react.svg",
                },
                {
                    name: "Tailwind CSS 3",
                    description: "Framework CSS utility-first para estilização rápida, responsiva e com suporte a dark mode",
                    image: "/images/tech/tailwind.svg",
                },
            ],
        },

        // Bibliotecas
        libraries: {
            title: "Bibliotecas",
            description: "Pacotes e módulos que estendem as funcionalidades do projeto",
            items: [
                {
                    name: "next-themes",
                    description: "Biblioteca para gerenciamento de temas com persistência, SSR support e alternância light/dark",
                    image: "/images/tech/nextjs.svg",
                },
                {
                    name: "PostCSS",
                    description: "Ferramenta para transformar CSS com JavaScript, usado pelo Tailwind",
                    image: "/images/tech/postcss.svg",
                },
                {
                    name: "Autoprefixer",
                    description: "Plugin PostCSS para adicionar prefixos de navegadores automaticamente",
                    image: "/images/tech/autoprefixer.svg",
                },
            ],
        },

        // Ferramentas de Desenvolvimento
        tools: {
            title: "Ferramentas de Desenvolvimento",
            description: "Ferramentas essenciais para desenvolvimento, versionamento e produtividade",
            items: [
                {
                    name: "Node.js 20",
                    description: "Ambiente de execução JavaScript para desenvolvimento, build e execução do servidor Next.js",
                    image: "/images/tech/nodejs.svg",
                },
                {
                    name: "npm",
                    description: "Gerenciador de pacotes para instalação e controle de dependências do projeto",
                    image: "/images/tech/npm.svg",
                },
                {
                    name: "Git",
                    description: "Sistema de controle de versão distribuído para rastreamento de mudanças no código",
                    image: "/images/tech/git.svg",
                },
                {
                    name: "VS Code",
                    description: "Editor de código moderno com extensões, IntelliSense e integração Git",
                    image: "/images/tech/vscode.svg",
                },
                {
                    name: "ESLint",
                    description: "Ferramenta de linting para identificar e corrigir problemas no código JavaScript",
                    image: "/images/tech/eslint.svg",
                },
            ],
        },

        // Plataformas e Deploy
        platforms: {
            title: "Plataformas e Deploy",
            description: "Serviços de hospedagem, deploy e controle de versão",
            items: [
                {
                    name: "Vercel",
                    description: "Plataforma de deploy otimizada para projetos Next.js com CI/CD automático e edge network",
                    image: "/images/tech/vercel.svg",
                },
                {
                    name: "GitHub",
                    description: "Plataforma de hospedagem de código-fonte com versionamento, colaboração e GitHub Actions",
                    image: "/images/tech/github.svg",
                },
            ],
        },
    },    // Galeria / Screenshots
    gallery: {
        title: "Capturas de Tela do Template",
        images: [
            {
                src: "/images/screenshots/home.png",
                caption: "Página principal com Hero Section e seções de preview",
            },
            {
                src: "/images/screenshots/pages.png",
                caption: "Estrutura de páginas do projeto",
            },
            {
                src: "/images/screenshots/components.png",
                caption: "Componentes reutilizáveis do template",
            },
            {
                src: "/images/screenshots/code1.png",
                caption: "Exemplo de código e implementação",
            },
            {
                src: "/images/screenshots/images.png",
                caption: "Organização de imagens e assets do projeto",
            },
        ],
    },

    // Resultados
    results: {
        title: "Resultados Alcançados",
        content: `
      O projeto superou todos os objetivos propostos, resultando em um template funcional, 
      profissional e altamente customizável. A estrutura modular com sistema de temas 
      configurável permite rápida adaptação para diferentes tipos de projetos acadêmicos 
      mantendo acessibilidade e modernidade visual.
    `,
        achievements: [
            "Template totalmente funcional com 8 componentes reutilizáveis e responsivos",
            "Dark Mode completo com alternância automática e persistência de preferência",
            "Sistema de temas configurável com 14+ propriedades de cores personalizáveis",
            "Hook customizado (useThemeColors) para gerenciamento centralizado de estilos",
            "Sistema de rotas implementado com navegação fluida entre páginas",
            "Documentação completa no README com instruções de uso e customização",
            "Performance otimizada com Next.js alcançando 90+ no Lighthouse",
            "Design responsivo testado em múltiplos dispositivos e resoluções",
            "Código versionado no GitHub com licença MIT (open-source)",
            "Transições suaves e animações para melhor experiência do usuário",
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

    // Configuração de Cores (Light e Dark Mode)
    theme: {
        light: {
            primary: "#2563eb", // azul tech (Next.js inspired)
            secondary: "#0f172a", // slate escuro (moderno/tech)
            accent: "#09c8aea3", // cyan vibrante (destaque tech)
            background: "#ffffff",
            text: "#1f2937",
            title: "#2563eb", // cor dos títulos (igual ao primary)
            // Cores para componentes específicos
            header: {
                bg: "#1e293b", // fundo do header
                text: "#ffffff", // texto do header
            },
            footer: {
                bg: "#0f172a", // fundo do footer
                text: "#ffffff", // texto do footer
            },
            cards: {
                bg: "#1e40af", // fundo dos cards
                text: "#ffffff", // texto dos cards
                border: "#1e40af", // borda dos cards
            },
        },
        dark: {
            primary: "#3b82f6", // azul mais claro para dark mode
            secondary: "#1e293b", // slate ainda mais escuro
            accent: "#06b6d4", // cyan ajustado para dark
            background: "#0f172a",
            text: "#e2e8f0",
            title: "#3b82f6", // cor dos títulos no dark mode (igual ao primary)
            // Cores para componentes específicos
            header: {
                bg: "#0f172a", // fundo do header dark
                text: "#e2e8f0", // texto do header dark
            },
            footer: {
                bg: "#020617", // fundo do footer dark
                text: "#e2e8f0", // texto do footer dark
            },
            cards: {
                bg: "#1e293b", // fundo dos cards dark
                text: "#e2e8f0", // texto dos cards dark
                border: "#334155", // borda dos cards dark
            },
        },
    },
};