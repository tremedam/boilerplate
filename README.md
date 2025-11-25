# Boilerplate Next.js + Tailwind para Projetos Acadêmicos

Um template genérico e moderno criado em Next.js para apresentar projetos acadêmicos de forma bonita e organizada. Inclui **Dark Mode automático** com sistema de temas totalmente configurável, seções prontas (Hero, Sobre, Funcionalidades, Tecnologias, Galeria, Resultados e Equipe) com conteúdo centralizado em um único arquivo de dados.

## 📖 Documentação

- **[GUIA_DE_USO.md](GUIA_DE_USO.md)** — Tutorial completo passo a passo de como personalizar e usar o template
- **[README.md](README.md)** — Documentação técnica e referência completa

## ✨ Destaques

- 🌓 **Dark Mode Completo** — Alternância automática entre temas claro/escuro com persistência de preferência
- 🎨 **Temas 100% Configuráveis** — Personalize 14+ propriedades de cores para light e dark mode
- 📱 **Design 100% Responsivo** — Interface adaptável para mobile, tablet e desktop
- ⚡ **Performance Otimizada** — Next.js 14 com SSR, SSG e otimização automática
- 🎯 **Fácil Customização** — Edite apenas um arquivo (`projectData.js`) para mudar todo o conteúdo
- 🖼️ **Galeria Completa** — Sistema de galeria com modal de visualização ampliada
- 📊 **Páginas Dedicadas** — Rotas separadas para melhor organização e SEO
- ✨ **Transições Suaves** — Animações elegantes entre temas e interações

## 🚀 Stack

- Next.js 14 (`next@^14.2.33`)
- React 18 (`react@18.2.0` / `react-dom@18.2.0`)
- Tailwind CSS 3 (`tailwindcss@^3.4.0`)
- next-themes (`next-themes@latest`) — Gerenciamento de dark mode
- PostCSS + Autoprefixer

Requisitos de ambiente:
- Node.js 18.17+ ou 20+ (recomendado LTS)
- npm (ou pnpm/yarn, se preferir)

## 🎯 Início Rápido

Para começar a usar este template:

1. **Instale as dependências:**
   ```powershell
   npm install
   ```

2. **Rode em desenvolvimento:**
   ```powershell
   npm run dev
   ```

3. **Personalize o conteúdo:**
   - Edite `src/data/projectData.js` com as informações do seu projeto
   - Adicione suas imagens em `public/images/`
   - Configure as cores do tema (light/dark mode)

4. **Consulte o guia completo:**
   - Veja [GUIA_DE_USO.md](GUIA_DE_USO.md) para tutorial passo a passo

## 🗂️ Estrutura do projeto

```
boilerplate/
├─ docs/
│  └─ LICENSE
├─ public/
│  └─ images/            # Logos, screenshots, ícones de tecnologias, etc.
│     ├─ screenshots/    # Imagens para a galeria
│     ├─ team/           # Fotos da equipe
│     └─ tech/           # Ícones de tecnologias
├─ src/
│  ├─ components/
│  │  ├─ Project/        # Componentes reutilizáveis
│  │  │  ├─ AboutSection.jsx
│  │  │  ├─ Cards.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Gallery.jsx     # Componente de galeria com modal
│  │  │  ├─ Header.jsx
│  │  │  ├─ HeroSection.jsx
│  │  │  ├─ ProjectLayout.jsx
│  │  │  └─ Results.jsx     # Componente de resultados
│  │  └─ ThemeToggle.jsx    # Botão flutuante de alternância dark/light
│  ├─ contexts/
│  ├─ data/
│  │  └─ projectData.js     # Fonte única de conteúdo + temas configuráveis
│  ├─ hooks/
│  │  └─ useThemeColors.js  # Hook customizado para cores do tema
│  ├─ pages/
│  │  ├─ _app.js            # ThemeProvider configurado
│  │  ├─ index.jsx          # Redireciona para /project
│  │  ├─ project.jsx        # Página principal com previews
│  │  ├─ features.jsx       # Página dedicada: Funcionalidades
│  │  ├─ technologies.jsx   # Página dedicada: Tecnologias
│  │  ├─ gallery.jsx        # Página dedicada: Galeria completa
│  │  ├─ results.jsx        # Página dedicada: Resultados
│  │  └─ team.jsx           # Página dedicada: Equipe
│  └─ styles/
│     └─ globals.css        # Estilos globais + transições dark mode
├─ GUIA_DE_USO.md           # Tutorial completo de personalização
├─ README.md                # Este arquivo - documentação técnica
├─ jsconfig.json            # Atalho @ para ./src
├─ next.config.js
├─ package.json
├─ postcss.config.js
└─ tailwind.config.js       # darkMode: 'class' configurado
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
- `/project` — Página principal com Hero, Sobre, e previews de todas as seções
- `/features` — Listagem completa de funcionalidades (8 itens com ícones e descrições)
- `/technologies` — Grade completa de tecnologias utilizadas (7 tecnologias)
- `/gallery` — Galeria de imagens com modal de visualização ampliada
- `/results` — Resultados alcançados com achievements e estatísticas
- `/team` — Membros da equipe e orientador com links sociais

A navegação no Header inclui todas as rotas e se adapta ao tema ativo.

## 🧩 Como personalizar o conteúdo

> **💡 Dica:** Para um guia detalhado passo a passo, consulte [GUIA_DE_USO.md](GUIA_DE_USO.md)

Edite apenas `src/data/projectData.js`. Todas as páginas lêem deste arquivo:

### Conteúdo das Seções

- `header`: título, subtítulo e logo do projeto
- `hero`: título principal, descrição, imagem de destaque e botões de ação
- `about`: texto completo sobre o projeto (com Markdown) e estatísticas (tempo, tecnologias, componentes)
- `features`: lista de 8 funcionalidades com ícones emoji, títulos e descrições
- `technologies`: 7 tecnologias utilizadas (nome, descrição, imagem/ícone)
- `gallery`: array de imagens com src e caption para a galeria
- `results`: texto de resumo e lista de 10 achievements/conquistas
- `team`: membros da equipe (nome, foto, role, GitHub, LinkedIn) e orientador
- `footer`: informações institucionais e dados de contato

### 🎨 Sistema de Temas (Configurável)

Configure **todas as cores** do light mode e dark mode em um único lugar no `projectData.js`:

```javascript
theme: {
  light: {
    primary: "#2563eb",      // Cor principal (links, destaques)
    secondary: "#0f172a",    // Cor secundária
    accent: "#09c8aea3",     // Cor de destaque/acentuação
    background: "#ffffff",   // Fundo das páginas
    text: "#1f2937",         // Cor do texto principal
    title: "#2563eb",        // Cor específica dos títulos
    
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
    title: "#3b82f6",        // Cor dos títulos no dark mode
    
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

**Propriedades configuráveis por tema:**

- ✅ Cores principais: `primary`, `secondary`, `accent`
- ✅ Cores de conteúdo: `background`, `text`, `title`
- ✅ Header: `bg`, `text`
- ✅ Footer: `bg`, `text`
- ✅ Cards: `bg`, `text`, `border`

**Total: 14+ propriedades de cores personalizáveis**

**Recursos do Dark Mode:**

- ✅ Alternância automática entre light/dark com botão flutuante
- ✅ Persistência da preferência do usuário (localStorage)
- ✅ Respeita a preferência do sistema operacional (prefers-color-scheme)
- ✅ Transições suaves entre temas (300ms)
- ✅ Todas as cores configuráveis em `projectData.js`
- ✅ Hook customizado `useThemeColors()` para fácil acesso às cores
- ✅ Ícones sol/lua no botão de alternância
- ✅ Consistência visual em todos os componentes

### 🖼️ Galeria de Imagens

Configure as imagens da galeria em `projectData.js`:

```javascript
gallery: {
  title: "Capturas de Tela do Template",
  images: [
    {
      src: "/images/screenshots/home.png",
      caption: "Página principal com Hero Section",
    },
    {
      src: "/images/screenshots/features.jpg",
      caption: "Página de funcionalidades",
    },
    // ... adicione mais imagens
  ],
}
```

**Funcionalidades da galeria:**

- ✅ Grid responsivo (1 coluna mobile, 2 tablet, 3 desktop)
- ✅ Modal de visualização ampliada ao clicar
- ✅ Imagens com object-fit automático
- ✅ Hover effects nos cards
- ✅ Preview de 3 imagens na página principal
- ✅ Página dedicada `/gallery` com todas as imagens

### 📊 Resultados e Achievements

Configure conquistas e estatísticas:

```javascript
results: {
  title: "Resultados Alcançados",
  content: "Descrição resumida dos resultados...",
  achievements: [
    "Template totalmente funcional com 8 componentes",
    "Dark Mode completo com persistência",
    "Sistema de temas configurável com 14+ propriedades",
    // ... até 10 achievements
  ],
}
```

### Imagens

Coloque seus arquivos em `public/images/` e referencie-os com `/images/...`:

- Screenshots da galeria: `public/images/screenshots/`
- Fotos da equipe: `public/images/team/`
- Ícones de tecnologias: `public/images/tech/`
- Logo do projeto: `public/images/logotemplate.png`

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

**Dicas de deploy:**
- **Vercel** (recomendado para Next.js): apenas importe o repositório
- **Netlify**: conecte com GitHub para deploy automático
- **Docker**: crie uma imagem que execute `npm run build` e `npm run start`
- **Outras plataformas Node** (Railway, Render, etc.): defina o comando de start como `npm run start`

> **📖 Guia de Deploy:** Veja instruções detalhadas de deploy em [GUIA_DE_USO.md](GUIA_DE_USO.md#-deploy-e-publicação)

## 🎨 Estilos

- Tailwind CSS já configurado em `tailwind.config.js` e `postcss.config.js`.
- Dark mode habilitado com estratégia `'class'` no Tailwind.
- Classes utilitárias são usadas nos componentes.
- Cores do tema aplicadas dinamicamente via hook `useThemeColors()`.
- Transições suaves entre temas configuradas em `globals.css`.

## 🌓 Como funciona o Dark Mode

O sistema de dark mode usa a biblioteca `next-themes` e um hook customizado `useThemeColors`:

### Arquitetura do Sistema

1. **ThemeProvider** — Configurado em `_app.js`, gerencia o tema global
   ```javascript
   <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
   ```

2. **useThemeColors** — Hook customizado que retorna as cores do tema atual
   - Lê do `projectData.js` as configurações de `theme.light` ou `theme.dark`
   - Retorna objeto `colors` com todas as propriedades configuráveis
   - Detecta automaticamente o tema ativo

3. **ThemeToggle** — Botão flutuante fixo no canto inferior direito
   - Alterna entre light e dark mode
   - Ícones sol (🌞) e lua (🌙)
   - Só aparece após o componente montar (evita flash)

4. **projectData.js** — Define todas as cores para ambos os temas
   - Objeto `theme.light` com todas as propriedades de cores
   - Objeto `theme.dark` com as mesmas propriedades ajustadas

### Exemplo de uso do hook:

```javascript
import { useThemeColors } from "@/hooks/useThemeColors";

export default function MeuComponente() {
  const { colors, isDark, currentTheme } = useThemeColors();
  
  return (
    <div style={{ backgroundColor: colors.background, color: colors.text }}>
      <h1 style={{ color: colors.title }}>Meu Título</h1>
      <div style={{ backgroundColor: colors.cards.bg }}>
        Card com tema dinâmico
      </div>
    </div>
  );
}
```

### Propriedades retornadas pelo hook:

- `colors` — Objeto com todas as cores do tema atual
- `isDark` — Boolean indicando se está no dark mode
- `currentTheme` — String: 'light', 'dark' ou 'system'

## 🔧 Configurações do Next.js

`next.config.js` habilita `reactStrictMode` por padrão. Ajuste conforme necessário.

## 🏗️ Arquitetura de componentes

### Componentes principais:

- **ProjectLayout** — Layout reutilizável com Header e Footer para páginas dedicadas
- **Header** — Cabeçalho fixo com navegação para todas as rotas (adapta ao tema)
- **Footer** — Rodapé com informações institucionais e contato
- **ThemeToggle** — Botão flutuante de alternância de tema (canto inferior direito)

### Seções modulares:

- **HeroSection** — Seção principal com título, descrição, imagem e botões de ação
- **AboutSection** — Sobre o projeto com texto completo (Markdown) e estatísticas
- **Cards** — Componente reutilizável para cards expansíveis
- **Gallery** — Grid de imagens com modal de visualização ampliada (click para ampliar)
- **Results** — Exibe achievements numerados e cards de estatísticas

### Páginas dedicadas:

Cada página tem sua própria rota com SEO otimizado:

- **features.jsx** — Grade de 8 funcionalidades com ícones e descrições
- **technologies.jsx** — Showcase de 7 tecnologias utilizadas
- **gallery.jsx** — Galeria completa com todas as imagens
- **results.jsx** — Resultados alcançados com 10 achievements
- **team.jsx** — Membros da equipe e orientador com links sociais

### Hook customizado:

- **useThemeColors** — Retorna cores do tema atual, estado do dark mode e tema ativo

## 📑 Licença

Este projeto está licenciado sob a licença MIT. Veja `docs/LICENSE` para mais detalhes.

## 💡 Ideias de melhoria

- ✅ ~~Dark mode baseado no tema~~ — **Implementado!**
- ✅ ~~Sistema de temas configurável~~ — **Implementado!**
- ✅ ~~Galeria de imagens com modal~~ — **Implementado!**
- ✅ ~~Páginas dedicadas para Gallery e Results~~ — **Implementado!**
- ✅ ~~Hook customizado para gerenciamento de cores~~ — **Implementado!**
- Adicionar testes de componentes (Jest + React Testing Library)
- Animações leves em seções (Framer Motion ou react-spring)
- Menu mobile responsivo completo com hamburger
- Breadcrumb nas páginas dedicadas
- Internacionalização (i18n) para múltiplos idiomas
- Sistema de busca de conteúdo
- Integração com CMS headless (Contentful, Sanity, Strapi)
- Modo de acessibilidade aprimorado (ARIA labels, navegação por teclado)
- PWA (Progressive Web App) para instalação offline
- Analytics integration (Google Analytics, Plausible)

## 📈 Estatísticas do Projeto

- **8 componentes** reutilizáveis e responsivos
- **7 páginas** com rotas dedicadas
- **14+ propriedades** de cores configuráveis
- **8 funcionalidades** documentadas
- **7 tecnologias** utilizadas
- **100% TypeScript** ready (adicione types conforme necessário)
- **Score Lighthouse** 90+ (performance otimizada)

---

**Desenvolvido com ❤️ para acelerar a apresentação do seu projeto acadêmico.**

Edite o `projectData.js`, personalize as 14+ cores do tema light/dark, adicione suas imagens em `public/images/`, configure a galeria e publique! 🎓✨

**Recursos implementados:**
- ✅ Dark Mode completo com persistência
- ✅ Sistema de temas 100% configurável  
- ✅ Galeria de imagens com modal
- ✅ 7 páginas com rotas dedicadas
- ✅ Hook customizado de gerenciamento de cores
- ✅ Design 100% responsivo
- ✅ Performance otimizada (Next.js 14)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## � Recursos Adicionais

- **[GUIA_DE_USO.md](GUIA_DE_USO.md)** — Tutorial completo passo a passo
- **[Next.js Documentation](https://nextjs.org/docs)** — Documentação oficial do Next.js
- **[Tailwind CSS](https://tailwindcss.com/docs)** — Documentação do Tailwind
- **[next-themes](https://github.com/pacocoursey/next-themes)** — Biblioteca de temas

##  Contato

Para dúvidas ou sugestões:
- GitHub: [@tremedam](https://github.com/tremedam)
- Email: thiagofellipe055@gmail.com

## 🆘 Precisa de Ajuda?

Se você está tendo dificuldades para personalizar ou usar o template:

1. **Consulte o guia completo:** [GUIA_DE_USO.md](GUIA_DE_USO.md) tem instruções detalhadas passo a passo
2. **Verifique a seção de problemas comuns:** O guia inclui solução de erros frequentes
3. **Abra uma issue:** [GitHub Issues](https://github.com/tremedam/boilerplate/issues)
4. **Entre em contato:** Use os canais acima para suporte direto

---

**Desenvolvido com ❤️ para acelerar a apresentação do seu projeto acadêmico.**

🎯 **Próximos passos:**
1. Leia o [GUIA_DE_USO.md](GUIA_DE_USO.md) completo
2. Edite o `projectData.js` com as informações do seu projeto
3. Personalize as 14+ cores do tema light/dark
4. Adicione suas imagens em `public/images/`
5. Teste localmente com `npm run dev`
6. Publique no Vercel ou Netlify

🎓✨ Boa sorte com seu projeto acadêmico!
