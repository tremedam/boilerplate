# Boilerplate Next.js + Tailwind para Projetos Acadêmicos

Um template genérico criado em Next.js para apresentar projetos acadêmicos de forma bonita e organizada. Inclui seções prontas (Hero, Sobre, Funcionalidades, Tecnologias, Equipe, Galeria, Resultados e Rodapé) com conteúdo centralizado em um único arquivo de dados.

## 🚀 Stack

- Next.js 14 (`next@^14.2.33`)
- React 18 (`react@18.2.0` / `react-dom@18.2.0`)
- Tailwind CSS 3 (`tailwindcss@^3.4.0`)
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
│  │  └─ Project/        # Componentes reutilizáveis
│  │     ├─ AboutSection.jsx
│  │     ├─ FeaturesSection.jsx
│  │     ├─ Footer.jsx
│  │     ├─ GallerySection.jsx
│  │     ├─ Header.jsx
│  │     ├─ HeroSection.jsx
│  │     ├─ ProjectLayout.jsx  # Layout comum (Header + Footer)
│  │     ├─ ResultsSection.jsx
│  │     ├─ TeamSection.jsx
│  │     └─ TechnologiesSection.jsx
│  ├─ data/
│  │  └─ projectData.js  # Fonte única de conteúdo do site
│  ├─ pages/
│  │  ├─ _app.js
│  │  ├─ index.jsx        # Redireciona para /project
│  │  ├─ project.jsx      # Página principal com seções resumidas
│  │  ├─ features.jsx     # Página dedicada: Funcionalidades
│  │  ├─ technologies.jsx # Página dedicada: Tecnologias
│  │  └─ team.jsx         # Página dedicada: Equipe
│  └─ styles/
│     └─ globals.css
├─ jsconfig.json          # Atalho @ para ./src
├─ next.config.js
├─ package.json
├─ postcss.config.js
└─ tailwind.config.js
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

- `header`: título, subtítulo e logo
- `hero`: título, descrição, imagem e botões (ex.: Demo, Documentação)
- `about`: texto livre e estatísticas (duração, linguagens, etc.)
- `features`: lista de funcionalidades (ícone, título, descrição)
- `technologies`: tecnologias usadas (nome, descrição, imagem)
- `team`: membros e orientador (links de GitHub/LinkedIn)
- `gallery`: capturas de tela
- `results`: resultados alcançados
- `footer`: informações institucionais e contato
- `theme`: paleta de cores (primária, secundária, accent, etc.)

Imagens: coloque seus arquivos em `public/images/...` e referencie-os (ex.: `/images/tech/react.png`).

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
- Classes utilitárias são usadas diretamente nos componentes.
- Cores do tema (`theme` em `projectData.js`) aplicadas dinamicamente via inline styles.

## 🔧 Configurações do Next.js

`next.config.js` habilita `reactStrictMode` por padrão. Ajuste conforme necessário.

## 🏗️ Arquitetura de componentes

- **ProjectLayout** — Layout reutilizável com Header e Footer para páginas dedicadas.
- **Seções modulares** — Cada seção (About, Features, etc.) é um componente independente.
- **Páginas dedicadas** — Features, Technologies e Team têm rotas próprias para melhor organização e SEO.

## 📑 Licença

Este projeto está licenciado sob a licença MIT. Veja `docs/LICENSE` para mais detalhes.

## 💡 Ideias de melhoria

- Adicionar testes de componentes (Jest + React Testing Library)
- Dark mode baseado no tema
- Animações leves em seções (Framer Motion)
- Otimização de imagens com `next/image`
- Breadcrumb nas páginas dedicadas
- Menu mobile responsivo completo
- Internacionalização (i18n)

---

Feito para acelerar a apresentação do seu projeto acadêmico. Edite o `projectData.js`, adicione imagens em `public/images/` e publique! 🎓
