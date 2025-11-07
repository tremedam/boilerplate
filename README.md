# Boilerplate Next.js + Tailwind para Projetos Acadêmicos

Um template opinativo em Next.js para apresentar projetos acadêmicos de forma bonita e organizada. Inclui seções prontas (Hero, Sobre, Funcionalidades, Tecnologias, Equipe, Galeria, Resultados e Rodapé) com conteúdo centralizado em um único arquivo de dados.

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
│  │  └─ Project/        # Seções da página do projeto
│  │     ├─ AboutSection.jsx
│  │     ├─ FeaturesSection.jsx
│  │     ├─ Footer.jsx
│  │     ├─ Header.jsx
│  │     ├─ HeroSection.jsx
│  │     ├─ TeamSection.jsx
│  │     └─ TechnologiesSection.jsx
│  ├─ data/
│  │  └─ projectData.js  # Fonte única de conteúdo do site
│  ├─ pages/
│  │  ├─ _app.js
│  │  ├─ index.jsx        # Redireciona para /project
│  │  └─ project.jsx      # Página principal com todas as seções
│  └─ styles/
│     └─ globals.css
├─ jsconfig.json          # Alias @ para ./src
├─ next.config.js
├─ package.json
├─ postcss.config.js
└─ tailwind.config.js
```

Alias de importação configurado em `jsconfig.json`:

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

## 🧩 Como personalizar o conteúdo

Edite apenas `src/data/projectData.js`. Todas as seções da página lêem deste arquivo:

- `header`: título, subtítulo e logo
- `hero`: título, descrição, imagem e botões (ex.: Demo, Documentação)
- `about`: texto livre e estatísticas (duração, linguagens, etc.)
- `features`: lista de funcionalidades (ícone, título, descrição)
- `technologies`: tecnologias usadas (nome, descrição, imagem)
- `team`: membros e orientador (links de GitHub/LinkedIn)
- `gallery`: capturas de tela
- `results`: resultados alcançados
- `footer`: informações institucionais e contato
- `theme`: paleta de cores (primária, secundária, etc.)

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

- Abra http://localhost:3000 — você será redirecionado para `/project` com todas as seções.

## 📦 Build e execução em produção

Gerar build e iniciar:

```powershell
npm run build
npm run start
```

Dicas de deploy:
- Vercel (recomendado para Next.js): apenas importe o repositório.
- Docker: crie uma imagem que execute `npm run build` e `npm run start`.
- Outras plataformas Node (Railway, Render, etc.): defina o comando de start como `npm run start`.

## 🎨 Estilos

- Tailwind CSS já configurado em `tailwind.config.js` e `postcss.config.js`.
- Classes utilitárias são usadas diretamente nos componentes em `src/components/Project/*`.

## 🔧 Configurações do Next.js

`next.config.js` habilita `reactStrictMode` por padrão. Ajuste conforme necessário.

## 📑 Licença

Este projeto está licenciado sob a licença MIT. Veja `docs/LICENSE` para mais detalhes.

## 💡 Ideias de melhoria

- Adicionar testes de componentes
- Dark mode baseado no tema
- Animações leves em seções
- Links dinâmicos para PDF da documentação

---

Feito para acelerar a apresentação do seu projeto acadêmico. Edite o `projectData.js`, adicione imagens em `public/images/` e publique! 🎓