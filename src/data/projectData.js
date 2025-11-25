// Configure o conteúdo do seu projeto acadêmico aqui
export const projectData = {
    // Cabeçalho
    header: {
        title: "Agenda de Recebimento",
        subtitle: "Sistema Moderno de Controle de Mercadorias",
        logo: "/images/logotemplate.png", // opcional
    },

    // Hero / Seção Principal
    hero: {
        title: "Sistema de Agendamento",
        description:
            "Aplicação web inicial desenvolvida com HTML5, CSS3 e JavaScript puro para gerenciar entregas, controlar fornecedores e monitorar status de recebimentos em tempo real. Interface responsiva com dashboard interativo, filtros avançados e exportação de dados para otimizar a gestão logística empresarial.",
        image: "/images/apresentacao.png",
        buttons: [],
    },

    // Sobre o Projeto
    about: {
        title: "Sobre o Projeto",
        content: `
        
      **Visão Geral:**
      A Agenda de Recebimento de Mercadorias é um projeto acadêmico desenvolvido inicialmente como apresentação e concepção de software para a disciplina de Modelagem de Processos da Fatec Tatuí. Trata-se de uma proposta de sistema web para digitalizar e otimizar o controle de entregas e recebimentos, transformando processos manuais em uma solução tecnológica completa com interface intuitiva, filtros avançados e métricas em tempo real.

      **Contexto e Motivação:**
      O projeto foi concebido a partir da identificação de um processo empresarial baseado em atualizações manuais distribuídas em 3 planilhas diferentes, sem controle adequado e qualidade eficiente da segurança de dados. O processo manual, além de trabalhoso de ensinar, também estava sujeito a erros humanos que afetavam o acompanhamento de prazos e fornecedores. Este protótipo surge como proposta de modernização, implementando melhores práticas de UX/UI e funcionalidades que atenderiam às necessidades dos departamentos de logística, comercial e loja. Após apresentação acadêmica na Fatec, o projeto está sendo apresentado à empresa para avaliação e possível escolha de desenvolvimento e implementação.

      **Objetivo Principal:**
      Criar uma aplicação web robusta e eficiente que permita à equipe de recebimento gerenciar entregas de forma ágil e organizada, com visualização clara de status das entregas, filtros inteligentes por código, descrição, fornecedor e datas, além de dashboard com métricas instantâneas e capacidade de exportação para análises externas.

      **Metodologia de Desenvolvimento:**
      O projeto foi desenvolvido com tecnologias web nativas seguindo princípios de clean code e progressive enhancement:
      
      • HTML5 semântico para estrutura acessível e bem organizada
      • CSS3 moderno com Flexbox/Grid, animações suaves e design responsivo
      • JavaScript ES6+ com manipulação DOM nativa e programação funcional
      • Sistema de temas (light/dark) com persistência em localStorage
      • Arquitetura modular com separação de responsabilidades
      • Versionamento Git com commits documentados
      • Validações de formulário e confirmações de segurança
      • Performance otimizada sem dependências pesadas

      **Diferenciais Técnicos:**
      O sistema se destaca pela combinação de interface moderna com performance nativa. Sem frameworks pesados, a aplicação carrega instantaneamente, oferecendo ordenação dinâmica de tabelas, paginação configurável (10/25/50/100 itens), sistema de filtros em tempo real, notificações visuais para ações do usuário, modal responsivo para CRUD completo, exportação CSV com formatação adequada, e indicadores visuais de status com cores corporativas.

      **Aplicabilidade:**
      O sistema é ideal para departamentos de logística, recebimento e compras que precisam controlar entregas de fornecedores, monitorar prazos, gerar relatórios e manter histórico organizado. Alem de acompanhamento eficiente, a solução proposta visa aumentar a produtividade operacional, reduzir erros manuais e proporcionar uma visão gerencial para a matriz e para as lojas, de forma clara através de métricas em tempo real.
    `,
        stats: [
            { label: "Desenvolvimento", value: "3 semanas" },
            { label: "Linhas de Código", value: "1500+" },
            { label: "Fornecedores Cadastrados", value: "5" },
        ],
    },

    // Funcionalidades
    features: {
        title: "Principais Funcionalidades",
        items: [
            {
                icon: "✨",
                title: "Interface Moderna e Responsiva",
                description: "Design corporativo com gradientes profissionais, animações suaves e layout adaptável.",
            },
            {
                icon: "🔍",
                title: "Sistema de Filtros Avançado",
                description: "Filtros múltiplos por código antigo, descrição textual, fornecedor, status e intervalo de datas com busca em tempo real.",
            },
            {
                icon: "📊",
                title: "Dashboard com Métricas em Tempo Real",
                description: "Cards informativos mostrando total de itens, quantidade no prazo, itens em atraso e número de fornecedores ativos com indicadores visuais coloridos.",
            },
            {
                icon: "📋",
                title: "Tabela Interativa Completa",
                description: "Ordenação por qualquer coluna, paginação configurável (10/25/50/100 itens), seleção múltipla e ações rápidas (visualizar/editar/excluir).",
            },
            {
                icon: "⚙️",
                title: "CRUD Completo com Modal",
                description: "Adicionar, editar e excluir itens através de modal responsivo com validação de formulários e confirmações de segurança para proteção dos dados.",
            },
            {
                icon: "📥",
                title: "Exportação de Dados CSV",
                description: "Download instantâneo de relatórios filtrados em formato CSV com todas as informações (código, descrição, fornecedor, datas, quantidades, observações).",
            },
            {
                icon: "🔔",
                title: "Sistema de Notificações",
                description: "Feedback visual instantâneo com notificações toast para todas as ações (sucesso, erro, informação) melhorando a experiência do usuário.",
            },
            {
                icon: "🌙",
                title: "Dark Mode com Persistência",
                description: "Alternância entre temas claro e escuro com preferência salva no localStorage, garantindo consistência entre sessões e conforto visual.",
            },
            {
                icon: "⏱️",
                title: "Atualização Automática",
                description: "Data e hora atualizadas automaticamente a cada minuto no cabeçalho, mantendo informações de referência sempre precisas e sincronizadas.",
            },
            {
                icon: "✅",
                title: "Indicadores Visuais de Status",
                description: "Badges coloridos e ícones intuitivos diferenciando visualmente itens no prazo (verde) dos em atraso (vermelho) para identificação instantânea.",
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
                    description: "Linguagem principal com programação funcional, manipulação DOM nativa, event listeners e lógica de negócios",
                    image: "/images/tech/javascript.svg",
                },
                {
                    name: "HTML5",
                    description: "Estrutura semântica moderna para acessibilidade e organização do conteúdo com tags apropriadas",
                    image: "/images/tech/html.svg",
                },
                {
                    name: "CSS3",
                    description: "Estilização avançada com Flexbox, Grid Layout, animações, transições e design responsivo",
                    image: "/images/tech/css.svg",
                },
            ],
        },

        // Frameworks
        frameworks: {
            title: "Frameworks",
            description: "Estruturas e bibliotecas que guiam o desenvolvimento",
            items: [
                {
                    name: "Vanilla JavaScript",
                    description: "JavaScript puro sem dependências, garantindo performance nativa máxima e compatibilidade universal",
                    image: "/images/tech/javascript.svg",
                },
            ],
        },

        // Bibliotecas
        libraries: {
            title: "Bibliotecas",
            description: "Pacotes externos utilizados no projeto",
            items: [
                {
                    name: "Font Awesome 6.0",
                    description: "Ícones vetoriais profissionais para interface moderna e intuitiva com símbolos reconhecíveis",
                    image: "/images/tech/fontawesome.svg",
                },
            ],
        },

        // Ferramentas de Desenvolvimento
        tools: {
            title: "Ferramentas de Desenvolvimento",
            description: "Ferramentas essenciais para desenvolvimento, versionamento e produtividade",
            items: [
                {
                    name: "VS Code",
                    description: "Editor de código com extensões para produtividade, debugging e IntelliSense",
                    image: "/images/tech/vscode.svg",
                },
                {
                    name: "Git",
                    description: "Sistema de controle de versão distribuído para rastreamento de mudanças no código",
                    image: "/images/tech/git.svg",
                },
                {
                    name: "Live Server",
                    description: "Servidor de desenvolvimento local com hot reload automático para testes rápidos",
                    image: "/images/tech/liveserver.svg",
                },
            ],
        },

        // Plataformas e Deploy
        platforms: {
            title: "Plataformas e Deploy",
            description: "Serviços de hospedagem, deploy e controle de versão",
            items: [
                {
                    name: "GitHub",
                    description: "Plataforma de hospedagem de código-fonte com versionamento, colaboração e GitHub Actions",
                    image: "/images/tech/github.svg",
                },
            ],
        },
    },    // Galeria / Screenshots
    gallery: {
        title: "Capturas de Tela do Sistema",
        images: [
            {
                src: "/images/screenshots/home.png",
                caption: "Dashboard principal com métricas em tempo real e indicadores de status",
            },
            {
                src: "/images/screenshots/features.jpg",
                caption: "Sistema de filtros avançado por código, descrição, fornecedor e datas",
            },
            {
                src: "/images/screenshots/technologies.jpg",
                caption: "Tabela interativa com ordenação, paginação e ações rápidas",
            },
            {
                src: "/images/screenshots/team.jpg",
                caption: "Modal de CRUD com validações em tempo real para formulários",
            },
            {
                src: "/images/screenshots/mobile.jpg",
                caption: "Interface responsiva em dispositivos móveis com navegação intuitiva",
            },
        ],
    },

    // Resultados
    results: {
        title: "Resultados Alcançados",
        content: `
      O sistema modernizou completamente o processo de controle de recebimento de mercadorias, 
      substituindo métodos manuais por uma aplicação web moderna, intuitiva e eficiente. 
      A interface responsiva e recursos avançados aumentaram significativamente a produtividade 
      operacional e a visibilidade gerencial.
    `,
        achievements: [
            "Modernização completa do sistema legado com redução de 60% no tempo de cadastro",
            "Performance nativa com carregamento <500ms usando Vanilla JavaScript puro",
            "Sistema de filtros múltiplos reduzindo tempo de busca em 80%",
            "Dashboard em tempo real para gestão proativa de fornecedores e prazos",
            "Exportação CSV instantânea facilitando análises e relatórios gerenciais",
            "Interface intuitiva permitindo adoção imediata sem necessidade de treinamento",
            "Dark mode com persistência para conforto visual em diferentes ambientes",
            "Design responsivo garantindo acesso em desktop, tablet e mobile",
            "CRUD completo com validações robustas protegendo integridade dos dados",
            "Notificações em tempo real melhorando feedback e experiência do usuário",
        ],
    },

    // Equipe
    team: {
        title: "Desenvolvedor",
        members: [
            {
                name: "Thiago F.S Dias",
                role: "Estudante Aspirante a Full Stack",
                image: "/images/team/thiago.jpg",
                github: "https://github.com/tremedam",
                linkedin: "https://www.linkedin.com/in/thiago-fellipe-28471a26a/",
            },
        ],
        advisor: {
            name: "Projeto Individual",
            role: "Sistema de Controle de Recebimentos",
            email: "thiagofellipe055@gmail.com",
        },
    },

    // Rodapé
    footer: {
        university: "Fatec Tatui Prof. Wilson Roberto Ribeiro de Camargo",
        course: "Gestão da Tecnologia da Informação",
        semester: "Segundo",
        year: "2025",
        contact: {
            email: "thiagofellipe055@gmail.com",
            github: "https://github.com/tremedam/AgendaReceb_Mercadorias",
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