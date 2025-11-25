// Configure o conteúdo do seu projeto acadêmico aqui
export const projectData = {
    // Cabeçalho
    header: {
        title: "Controle de Veículos - Portaria",
        subtitle: "Sistema de Gestão de Veículos Corporativos",
        logo: "/images/logotemplate.png", // opcional
    },

    // Hero / Seção Principal
    hero: {
        title: "Sistema de Controle de Uso de Carros Particulares da Empresa",
        description:
            "Uma solução web completa desenvolvida com Django para gerenciar o uso dos veículos corporativos, controlar motoristas autorizados, registrar entregas e monitorar a disponibilidade da frota em tempo real. Sistema intuitivo com interface moderna usando Tailwind CSS.",
        image: "/images/apresentacao.jpg",
        buttons: [
            {
                text: "Ver GitHub",
                href: "https://github.com/PaivaOfc/Controle-Carros-Portaria",
                primary: true,
            },
            {
                text: "Demonstração",
                href: "#",
                primary: false,
            },
        ],
    },

    // Sobre o Projeto
    about: {
        title: "Sobre o Projeto",
        content: `
        
      **Visão Geral:**
      O Sistema de Controle de Carros de Portaria é uma aplicação web completa desenvolvida para gerenciar o uso eficiente dos veículos corporativos de uma empresa. O sistema permite o registro de motoristas autorizados, cadastro de veículos, controle de saídas e retornos, agendamentos e geração de relatórios detalhados de uso da frota.

      **Contexto e Motivação:**
      Empresas com frotas de veículos particulares enfrentam desafios diários no controle de quem está utilizando cada veículo, quando saíram, para onde foram e quando retornaram. O controle manual através de planilhas ou papéis é suscetível a erros, dificulta auditorias e não fornece visão em tempo real da disponibilidade dos veículos. Este projeto surge como solução digital para modernizar e automatizar todo esse processo de gestão.

      **Objetivo Principal:**
      Fornecer uma ferramenta centralizada e intuitiva para a equipe de portaria registrar, monitorar e controlar o uso dos veículos corporativos, permitindo rastreamento em tempo real de disponibilidade, histórico completo de utilização, validação de motoristas autorizados e geração de relatórios gerenciais para análise e tomada de decisões.

      **Metodologia de Desenvolvimento:**
      O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento web com Python e Django:
      
      • Arquitetura MVT (Model-View-Template) do Django para separação de responsabilidades
      • Modelos relacionais com ORM do Django para integridade dos dados
      • Validações de formulários com Django Forms e Crispy Forms com Tailwind
      • Interface moderna e responsiva com Tailwind CSS
      • Sistema de mensagens (messages framework) para feedback visual ao usuário
      • Filtros e buscas dinâmicas para relatórios customizados
      • Controle de estados (disponível/em uso) em tempo real
      • Validações de regras de negócio (motorista só pode usar 1 veículo por vez)

      **Diferenciais Técnicos:**
      O sistema possui recursos avançados como controle de estado de veículos em tempo real (disponível/em uso), validação automática impedindo uso simultâneo de veículos pelo mesmo motorista, formulários dinâmicos que filtram apenas motoristas e veículos disponíveis, registro automático de quilometragem e horários, modais interativos para edição rápida sem recarregar página, sistema de agendamentos para planejamento futuro, e relatórios com filtros múltiplos (data, motorista, veículo).

      **Aplicabilidade:**
      O sistema é ideal para empresas de médio e grande porte que possuem frota corporativa, prestadoras de serviços de entrega e logística, condomínios empresariais com veículos compartilhados, organizações governamentais e públicas com controle patrimonial rigoroso, e qualquer instituição que necessite rastreabilidade e controle de uso de veículos. A interface intuitiva permite uso por funcionários sem treinamento técnico extensivo.
    `,
        stats: [
            { label: "Tempo de Desenvolvimento", value: "3 meses" },
            { label: "Tecnologias", value: "12" },
            { label: "Modelos de Dados", value: "4" },
        ],
    },

    // Funcionalidades
    features: {
        title: "Principais Funcionalidades",
        items: [
            {
                icon: "👥",
                title: "Gestão de Motoristas",
                description: "Cadastro completo de motoristas com CNH, RE, empresa de origem e cargo. Edição e exclusão de registros com validação de dados e controle de motoristas já em uso de veículos.",
            },
            {
                icon: "🚗",
                title: "Controle de Veículos",
                description: "Cadastro detalhado da frota com placa, marca, modelo, ano e cor. Sistema automático de status (disponível/em uso) que atualiza em tempo real conforme registros de saída e retorno.",
            },
            {
                icon: "📝",
                title: "Registro de Uso",
                description: "Formulários inteligentes que mostram apenas motoristas e veículos disponíveis. Registro automático de data, horário de saída, destino e quilometragem inicial com validações de unicidade.",
            },
            {
                icon: "🏁",
                title: "Finalização de Uso",
                description: "Interface rápida para registrar retorno de veículos com horário automático, quilometragem final e atualização instantânea de disponibilidade do veículo para novo uso.",
            },
            {
                icon: "📊",
                title: "Relatórios Detalhados",
                description: "Sistema completo de relatórios com filtros por data, motorista e veículo. Visualização de histórico de usos, distâncias percorridas, tempo de utilização e estatísticas gerenciais.",
            },
            {
                icon: "📅",
                title: "Sistema de Agendamento",
                description: "Funcionalidade para agendar uso futuro de veículos, permitindo planejamento antecipado de entregas e comprometimento da frota para datas específicas.",
            },
            {
                icon: "🔍",
                title: "Visão em Tempo Real",
                description: "Dashboard principal com cards informativos mostrando status atual de cada veículo, motorista responsável quando em uso, e informações de tooltip com detalhes do uso atual.",
            },
            {
                icon: "✅",
                title: "Validações Inteligentes",
                description: "Sistema de validação que impede motorista usar múltiplos veículos simultaneamente, veículo ser usado por mais de um motorista, e garante consistência dos dados através do ORM Django.",
            },
            {
                icon: "🎨",
                title: "Interface Moderna e Responsiva",
                description: "Design profissional com Tailwind CSS totalmente responsivo para uso em desktop, tablet e mobile. Modais interativos, formulários crispy e feedback visual com mensagens toast.",
            },
            {
                icon: "🔐",
                title: "Controle de Dados",
                description: "Proteção CSRF em todos os formulários, validação de dados no backend, relacionamentos com integridade referencial e auditoria através de timestamps automáticos de criação.",
            },
        ],
    },

    // Tecnologias
    technologies: {
        title: "Stack Tecnológico",
        subtitle: "Tecnologias, ferramentas e plataformas utilizadas no desenvolvimento.",

        // Linguagens de Programação
        languages: {
            title: "Linguagens de Programação",
            description: "Linguagens utilizadas no desenvolvimento do projeto.",
            items: [
                {
                    name: "Python",
                    description: "Linguagem principal do backend com tipagem dinâmica e sintaxe clara para desenvolvimento rápido",
                    image: "/images/tech/python.svg",
                },
                {
                    name: "JavaScript",
                    description: "Linguagem para interatividade no frontend, modais dinâmicos e validações em tempo real.",
                    image: "/images/tech/javascript.svg",
                },
                {
                    name: "HTML5",
                    description: "Linguagem de marcação para estruturação semântica das páginas e templates Django.",
                    image: "/images/tech/html.svg",
                },
                {
                    name: "CSS3",
                    description: "Linguagem de estilização para layouts responsivos e design moderno.",
                    image: "/images/tech/css.svg",
                },
            ],
        },

        // Frameworks
        frameworks: {
            title: "Frameworks",
            description: "Estruturas robustas que guiam a arquitetura e desenvolvimento.",
            items: [
                {
                    name: "Django",
                    description: "Framework web Python de alto nível que incentiva desenvolvimento rápido e design limpo com arquitetura MVT.",
                    image: "/images/tech/django.svg",
                },
                {
                    name: "Tailwind CSS",
                    description: "Framework CSS utility-first para estilização rápida, responsiva e componentes customizados.",
                    image: "/images/tech/tailwind.svg",
                },
            ],
        },

        // Bibliotecas
        libraries: {
            title: "Bibliotecas",
            description: "Pacotes e módulos que estendem as funcionalidades do projeto.",
            items: [
                {
                    name: "Django Crispy Forms",
                    description: "Biblioteca para renderização elegante de formulários Django com controle total do HTML.",
                    image: "/images/tech/django.svg",
                },
                {
                    name: "Crispy Tailwind",
                    description: "Template pack para integração entre Django Crispy Forms e Tailwind CSS.",
                    image: "/images/tech/tailwind.svg",
                },
                {
                    name: "Font Awesome",
                    description: "Biblioteca de ícones vetoriais para interface moderna e intuitiva.",
                    image: "/images/tech/fontawesome.svg",
                },
            ],
        },

        // Ferramentas de Desenvolvimento
        tools: {
            title: "Ferramentas de Desenvolvimento",
            description: "Ferramentas essenciais para desenvolvimento, versionamento e produtividade.",
            items: [
                {
                    name: "SQLite",
                    description: "Banco de dados relacional leve e embutido para armazenamento de motoristas, veículos e registros de uso.",
                    image: "/images/tech/sqlite.svg",
                },
                {
                    name: "Git",
                    description: "Sistema de controle de versão distribuído para rastreamento de mudanças e colaboração.",
                    image: "/images/tech/git.svg",
                },
                {
                    name: "VS Code",
                    description: "Editor de código com extensões Python/Django, IntelliSense e debugger integrado.",
                    image: "/images/tech/vscode.svg",
                },
            ],
        },

        // Plataformas e Deploy
        platforms: {
            title: "Plataformas e Deploy",
            description: "Serviços de hospedagem, deploy e controle de versão.",
            items: [
                {
                    name: "GitHub",
                    description: "Plataforma de hospedagem de código-fonte com versionamento, colaboração e documentação.",
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
                caption: "Dashboard principal com visão em tempo real dos veículos disponíveis e em uso",
            },
            {
                src: "/images/screenshots/cadastro-motorista.jpg",
                caption: "Modal de cadastro de motorista com validação de CNH, RE e empresa",
            },
            {
                src: "/images/screenshots/registro-uso.jpg",
                caption: "Formulário inteligente de registro de uso com filtro de disponíveis",
            },
            {
                src: "/images/screenshots/relatorio.jpg",
                caption: "Página de relatórios com filtros por data, motorista e veículo",
            },
            {
                src: "/images/screenshots/mobile.jpg",
                caption: "Interface responsiva adaptada para tablets e smartphones",
            },
        ],
    },

    // Resultados
    results: {
        title: "Resultados Alcançados",
        content: `
      O Sistema de Controle de Veículos de Portaria atingiu seus objetivos acadêmicos e 
      funcionais, resultando em uma solução web completa, robusta e fácil de usar. A aplicação 
      moderniza o processo de controle de frotas, substituindo planilhas e papéis por um 
      sistema digital inteligente com validações automáticas e visão em tempo real da 
      disponibilidade dos veículos, ajudando tanto os gestores, quanto os porteiros.
    `,
        achievements: [
            "Eliminação completa do controle manual em planilhas, reduzindo erros operacionais e aumentando a confiabilidade dos registros;",
            "Visão em tempo real da disponibilidade da frota, permitindo tomada de decisões ágeis pela equipe de portaria e gestores;",
            "Automatização do controle de saídas e retornos, economizando tempo operacional e facilitando auditorias internas;",
            "Geração de relatórios gerenciais que antes eram impossíveis, fornecendo insights sobre uso da frota e otimização de recursos;",
            "Interface intuitiva que não requer treinamento técnico extensivo, permitindo adoção imediata pela equipe de portaria;",
            "Sistema desenvolvido com arquitetura escalável e robusta, atualmente em fase de ajustes finais para deploy em produção na empresa.",
        ],
    },

    // Equipe
    team: {
        title: "Desenvolvedor",
        members: [
            {
                name: "Erik Paiva",
                role: "Desenvolvedor Python/Django",
                image: "/images/team/paiva.png",
                github: "https://github.com/PaivaOfc",
                linkedin: "http://www.linkedin.com/in/erik-paiva-4a7b02245",
            },
        ],
        advisor: {
            name: "Projeto Individual",
            role: "Sistema de Gestão Corporativa",
            email: "contato@projeto.com",
        },
    },

    // Rodapé
    footer: {
        university: "Projeto de Desenvolvimento Profissional",
        course: "Sistema de Gestão Corporativa com Django",
        semester: "2025",
        year: "2025",
        contact: {
            email: "contato@projeto.com",
            github: "https://github.com/PaivaOfc/Controle-Carros-Portaria",
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