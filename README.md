# Boilerplate Next.js + Tailwind para Projetos Acadêmicos

Um template genérico e moderno criado em Next.js para apresentar projetos acadêmicos de forma bonita e organizada. Inclui **Dark Mode automático** com sistema de temas totalmente configurável, seções prontas (Hero, Sobre, Funcionalidades, Tecnologias, Equipe, Galeria, Resultados e Rodapé) com conteúdo centralizado em um único arquivo de dados.

## ✨ Destaques

- 🌓 **Dark Mode** — Alternância automática entre temas claro/escuro com persistência
- 🎨 **Temas Configuráveis** — Personalize todas as cores em um único lugar
- 📱 **100% Responsivo** — Design adaptável para mobile, tablet e desktop
- ⚡ **Performance Otimizada** — Next.js com SSR e otimização automática
- 🎯 **Fácil Customização** — Edite apenas um arquivo para mudar todo o conteúdo

## 🚀 Stack

- Next.js 14 (`next@^14.2.33`)
- React 18 (`react@18.2.0` / `react-dom@18.2.0`)
- Tailwind CSS 3 (`tailwindcss@^3.4.0`)
- next-themes (`next-themes@latest`) — Gerenciamento de dark mode
- PostCSS + Autoprefixer

Requisitos de ambiente:
- Node.js 18.17+ ou 20+ (recomendado LTS)
- npm (ou pnpm/yarn, se preferir)

## 🗂️ Estrutura do projeto

```
boilerplate/
├─ docs/
│  └─ LICENSE
├─ public/
│  └─ images/            # Logos, screenshots, ícones de tecnologias, etc.
├─ src/
│  ├─ components/
│  │  ├─ Project/        # Componentes reutilizáveis
│  │  │  ├─ AboutSection.jsx
│  │  │  ├─ Cards.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ HeroSection.jsx
│  │  │  └─ ProjectLayout.jsx
│  │  └─ ThemeToggle.jsx  # Botão de alternância dark/light mode
│  ├─ contexts/
│  ├─ data/
│  │  └─ projectData.js  # Fonte única de conteúdo + configuração de temas
│  ├─ hooks/
│  │  └─ useThemeColors.js  # Hook para acessar cores do tema atual
│  ├─ pages/
│  │  ├─ _app.js          # ThemeProvider configurado aqui
│  │  ├─ index.jsx        # Redireciona para /project
│  │  ├─ project.jsx      # Página principal com seções resumidas
│  │  ├─ features.jsx     # Página dedicada: Funcionalidades
│  │  ├─ technologies.jsx # Página dedicada: Tecnologias
│  │  └─ team.jsx         # Página dedicada: Equipe
│  └─ styles/
│     └─ globals.css      # Estilos globais + transições dark mode
├─ jsconfig.json          # Atalho @ para ./src
├─ next.config.js
├─ package.json
├─ postcss.config.js
└─ tailwind.config.js     # darkMode: 'class' configurado
```

Atalho de importação configurado em `jsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Isso permite importar com `@/components/...` em vez de `../../components/...`.

## 🌐 Rotas disponíveis

O projeto possui as seguintes páginas:

- `/` — Redireciona automaticamente para `/project`
- `/project` — Página principal com Hero, Sobre, preview de Tecnologias/Equipe, Galeria, Resultados e Rodapé
- `/features` — Listagem completa de funcionalidades
- `/technologies` — Grade completa de tecnologias utilizadas
- `/team` — Membros da equipe e orientador

A navegação no Header ajusta automaticamente entre essas rotas.

## 🧩 Como personalizar o conteúdo

Edite apenas `src/data/projectData.js`. Todas as páginas lêem deste arquivo:

### Conteúdo das Seções

- `header`: título, subtítulo e logo
- `hero`: título, descrição, imagem e botões (ex.: Demo, Documentação)
- `about`: texto livre e estatísticas (duração, linguagens, etc.)
- `features`: lista de funcionalidades (ícone, título, descrição)
- `technologies`: tecnologias usadas (nome, descrição, imagem)
- `team`: membros e orientador (links de GitHub/LinkedIn)
- `gallery`: capturas de tela
- `results`: resultados alcançados
- `footer`: informações institucionais e contato

### 🎨 Sistema de Temas (Novo!)

Configure **todas as cores** do light mode e dark mode em um único lugar:

```javascript
theme: {
  light: {
    primary: "#2563eb",      // Cor principal (títulos, links)
    secondary: "#0f172a",    // Cor secundária
    accent: "#09c8aea3",     // Cor de destaque
    background: "#ffffff",   // Fundo das páginas
    text: "#1f2937",         // Cor do texto principal
    
    // Cores específicas dos componentes
    header: {
      bg: "#1e293b",         // Fundo do cabeçalho
      text: "#ffffff",       // Texto do cabeçalho
    },
    footer: {
      bg: "#0f172a",         // Fundo do rodapé
      text: "#ffffff",       // Texto do rodapé
    },
    cards: {
      bg: "#1e40af",         // Fundo dos cards
      text: "#ffffff",       // Texto dos cards
      border: "#1e40af",     // Borda dos cards
    },
  },
  dark: {
    primary: "#3b82f6",      // Cor principal no dark mode
    secondary: "#1e293b",    // Cor secundária no dark mode
    accent: "#06b6d4",       // Cor de destaque no dark mode
    background: "#0f172a",   // Fundo no dark mode
    text: "#e2e8f0",         // Texto no dark mode
    
    // Cores específicas para dark mode
    header: {
      bg: "#0f172a",
      text: "#e2e8f0",
    },
    footer: {
      bg: "#020617",
      text: "#e2e8f0",
    },
    cards: {
      bg: "#1e293b",
      text: "#e2e8f0",
      border: "#334155",
    },
  },
}
```

**Recursos do Dark Mode:**

- ✅ Alternância automática entre light/dark
- ✅ Persistência da preferência do usuário (localStorage)
- ✅ Respeita a preferência do sistema operacional
- ✅ Transições suaves entre temas
- ✅ Botão flutuante para alternar temas
- ✅ Todas as cores configuráveis em `projectData.js`

### Imagens

Coloque seus arquivos em `public/images/...` e referencie-os (ex.: `/images/tech/react.png`).

## 🧪 Scripts

- `npm run dev` — roda o servidor em desenvolvimento (http://localhost:3000)
- `npm run build` — cria a build de produção
- `npm run start` — inicia o servidor com a build de produção
- `npm run lint` — executa o linter do Next.js

## ▶️ Como executar (Windows PowerShell)

1. Instale as dependências:

```powershell
npm install
```

2. Rode em desenvolvimento:

```powershell
npm run dev
```

3. Acesse:

- Abra http://localhost:3000 — você será redirecionado para `/project`.
- Navegue para `/features`, `/technologies` ou `/team` através do menu.

## 📦 Build e execução em produção

Gerar build e iniciar:

```powershell
npm run build
npm run start
```

Dicas de deploy:
- **Vercel** (recomendado para Next.js): apenas importe o repositório.
- **Docker**: crie uma imagem que execute `npm run build` e `npm run start`.
- **Outras plataformas Node** (Railway, Render, etc.): defina o comando de start como `npm run start`.

## 🎨 Estilos

- Tailwind CSS já configurado em `tailwind.config.js` e `postcss.config.js`.
- Dark mode habilitado com estratégia `'class'` no Tailwind.
- Classes utilitárias são usadas nos componentes.
- Cores do tema aplicadas dinamicamente via hook `useThemeColors()`.
- Transições suaves entre temas configuradas em `globals.css`.

## 🌓 Como funciona o Dark Mode

O sistema de dark mode usa a biblioteca `next-themes` e um hook customizado:

1. **ThemeProvider** — Configurado em `_app.js`, gerencia o tema global
2. **useThemeColors** — Hook que retorna as cores do tema atual (light/dark)
3. **ThemeToggle** — Botão flutuante para alternar entre temas
4. **projectData.js** — Define todas as cores para ambos os temas

### Exemplo de uso do hook:

```javascript
import { useThemeColors } from "@/hooks/useThemeColors";

export default function MeuComponente() {
  const { colors, isDark } = useThemeColors();
  
  return (
    <div style={{ backgroundColor: colors.background, color: colors.text }}>
      <h1 style={{ color: colors.primary }}>Meu Título</h1>
    </div>
  );
}
```

## 🔧 Configurações do Next.js

`next.config.js` habilita `reactStrictMode` por padrão. Ajuste conforme necessário.

## 🏗️ Arquitetura de componentes

- **ProjectLayout** — Layout reutilizável com Header e Footer para páginas dedicadas.
- **Seções modulares** — Cada seção (About, Features, etc.) é um componente independente.
- **Páginas dedicadas** — Features, Technologies e Team têm rotas próprias para melhor organização e SEO.

## 📑 Licença

Este projeto está licenciado sob a licença MIT. Veja `docs/LICENSE` para mais detalhes.

## 💡 Ideias de melhoria

- ✅ ~~Dark mode baseado no tema~~ — **Implementado!**
- Adicionar testes de componentes (Jest + React Testing Library)
- Animações leves em seções (Framer Motion)
- Menu mobile responsivo completo
- Breadcrumb nas páginas dedicadas
- Internacionalização (i18n)
- Sistema de busca de conteúdo
- Integração com CMS headless (Contentful, Sanity)

---

Feito para acelerar a apresentação do seu projeto acadêmico. Edite o `projectData.js`, personalize as cores do tema, adicione imagens em `public/images/` e publique! 🎓✨
