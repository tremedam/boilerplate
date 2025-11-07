# 🎓 Template de Projeto Acadêmico - Next.js + Tailwind CSS# 🚀 Boilerplate Next.js + Tailwind



Template genérico, modular e totalmente reutilizável para apresentar projetos acadêmicos da faculdade de forma profissional e interativa.Um template moderno e reutilizável para criação rápida de sites e aplicações web usando Next.js e Tailwind CSS.



## ✨ Características## 📋 Sobre o Projeto



- ✅ **Totalmente Responsivo** - Funciona perfeitamente em desktop, tablet e mobileEste boilerplate foi criado para acelerar o desenvolvimento de novos projetos web, fornecendo uma base sólida e bem estruturada com as melhores práticas do ecossistema React/Next.js.

- ✅ **Componentes Modulares** - Estrutura organizada e reutilizável

- ✅ **Fácil de Customizar** - Edite apenas um arquivo de dados### ✨ Características

- ✅ **Design Profissional** - Visual limpo e moderno

- ✅ **Next.js 14 + Tailwind CSS** - Tecnologias modernas e performáticas- **⚡ Next.js 14** - Framework React de produção

- **🎨 Tailwind CSS** - Framework CSS utilitário para estilização rápida

## 📁 Estrutura do Projeto- **📱 Design Responsivo** - Layout que se adapta a diferentes dispositivos

- **🧩 Componentes Modulares** - Estrutura organizada e reutilizável

```- **🔗 Navegação Otimizada** - Usando Next.js Link para melhor performance

boilerplate/- **📄 Páginas Pré-configuradas** - Home, Sobre e Contato já implementadas

├── src/

│   ├── components/## 🏗️ Estrutura do Projeto

│   │   └── Project/              # Componentes modulares do projeto

│   │       ├── Header.jsx        # Cabeçalho com navegação```

│   │       ├── HeroSection.jsx   # Seção principal com imagem├── src/

│   │       ├── AboutSection.jsx  # Sobre o projeto│   ├── components/

│   │       ├── FeaturesSection.jsx    # Funcionalidades│   │   ├── Header.jsx      # Cabeçalho com navegação

│   │       ├── TechnologiesSection.jsx # Tecnologias usadas│   │   ├── Footer.jsx      # Rodapé com copyright

│   │       ├── TeamSection.jsx   # Equipe do projeto│   │   └── Layout.jsx      # Layout principal

│   │       └── Footer.jsx        # Rodapé│   ├── pages/

│   ├── data/│   │   ├── _app.js         # Configuração global do app

│   │   └── projectData.js        # ← EDITE AQUI (único arquivo de dados)│   │   ├── index.jsx       # Página inicial

│   ├── pages/│   │   ├── about.jsx       # Página sobre

│   │   ├── _app.js              # Configuração global do app│   │   └── contact.jsx     # Página de contato

│   │   ├── index.jsx            # Redireciona para /project│   └── styles/

│   │   └── project.jsx          # Página principal do projeto│       └── globals.css     # Estilos globais com Tailwind

│   └── styles/├── public/

│       └── globals.css          # Estilos globais│   └── favicon.ico         # Ícone do site

├── public/├── docs/

│   └── images/                  # Suas imagens aqui│   └── LICENSE            # Licença do projeto

├── jsconfig.json               # Configuração do alias @/└── README.md              # Este arquivo

├── next.config.js```

├── package.json

├── postcss.config.js## 🛠️ Stack Tecnológica

├── tailwind.config.js

└── README.md- **Framework:** Next.js 14.2.0

```- **Biblioteca UI:** React 18.2.0

- **Estilização:** Tailwind CSS 3.4.0

## 🚀 Início Rápido- **Build Tool:** Vite integrado ao Next.js

- **Linguagem:** JavaScript (JSX)

### Pré-requisitos

## 🚀 Como Usar

- Node.js 18.17.0 ou superior

- npm ou yarn### Pré-requisitos



### Instalação- Node.js 18+ 

- npm ou yarn

1. **Clone o repositório:**

   ```bash### Instalação

   git clone https://github.com/tremedam/boilerplate.git

   cd boilerplate1. **Clone este repositório:**

   ```   ```bash

   git clone https://github.com/tremedam/boilerplate.git

2. **Instale as dependências:**   cd boilerplate

   ```bash   ```

   npm install

   ```2. **Instale as dependências:**

   ```bash

3. **Execute em modo desenvolvimento:**   npm install

   ```bash   # ou

   npm run dev   yarn install

   ```   ```



4. **Acesse no navegador:**3. **Execute o projeto em modo de desenvolvimento:**

   ```   ```bash

   http://localhost:3000   npm run dev

   ```   # ou

   yarn dev

## 📝 Como Usar   ```



### 1. Edite o Arquivo de Dados4. **Acesse no navegador:**

   ```

Abra `src/data/projectData.js` e personalize todas as seções:   http://localhost:3000

   ```

#### **Cabeçalho**

```javascript### Comandos Disponíveis

header: {

  title: "Título do Seu Projeto Acadêmico",```bash

  subtitle: "Subtítulo ou Descrição Curta",npm run dev      # Executa em modo desenvolvimento

  logo: "/images/logo.png", // opcionalnpm run build    # Gera build de produção

}npm run start    # Executa build de produção

```npm run lint     # Executa linter

```

#### **Hero / Seção Principal**

```javascript## 🎨 Personalização

hero: {

  title: "Apresentando o Projeto",### Cores e Tema

  description: "Descrição do projeto...",

  image: "/images/hero-image.jpg",O projeto usa um esquema de cores padrão que pode ser facilmente personalizado no `tailwind.config.js` ou diretamente nas classes CSS:

  buttons: [

    { text: "Ver Demo", href: "#demo", primary: true },- **Primária:** Azul (`bg-blue-600`)

    { text: "Documentação", href: "/docs/doc.pdf", primary: false }- **Secundária:** Cinza (`bg-gray-800`)

  ]- **Background:** Cinza claro (`bg-gray-100`)

}

```### Adicionando Novas Páginas



#### **Sobre o Projeto**1. Crie um novo arquivo em `src/pages/`

```javascript2. Importe o componente `Layout`

about: {3. Adicione o link no `Header.jsx`

  title: "Sobre o Projeto",

  content: "Descrição detalhada...",Exemplo:

  stats: [```jsx

    { label: "Duração", value: "4 meses" },import Layout from "@/components/Layout";

    { label: "Linguagens", value: "3" },

    { label: "Linhas de Código", value: "5.000+" }export default function NovaPagina() {

  ]    return (

}        <Layout>

```            <h2 className="text-2xl font-semibold mb-4">Nova Página</h2>

            <p>Conteúdo da nova página...</p>

#### **Funcionalidades**        </Layout>

```javascript    );

features: {}

  title: "Principais Funcionalidades",```

  items: [

    {## 📦 Deploy

      icon: "🚀",

      title: "Funcionalidade 1",Este projeto pode ser facilmente deployado em:

      description: "Descrição..."

    }- **Vercel** (recomendado para Next.js)

  ]- **Netlify**

}- **GitHub Pages**

```- **Heroku**



#### **Tecnologias**## 🤝 Contribuições

```javascript

technologies: {Contribuições são bem-vindas! Sinta-se à vontade para:

  title: "Tecnologias Utilizadas",

  items: [1. Fazer fork do projeto

    {2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)

      name: "React",3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)

      description: "Biblioteca JavaScript",4. Push para a branch (`git push origin feature/AmazingFeature`)

      image: "/images/tech/react.png"5. Abrir um Pull Request

    }

  ]## 📄 Licença

}

```Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](docs/LICENSE) para mais detalhes.



#### **Equipe**## 👨‍💻 Autor

```javascript

team: {**Seu Nome**

  title: "Equipe do Projeto",- GitHub: [@tremedam](https://github.com/tremedam)

  members: [

    {---

      name: "Nome do Aluno",

      role: "Desenvolvedor",⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
      image: "/images/team/member1.jpg",
      github: "https://github.com/usuario",
      linkedin: "https://linkedin.com/in/usuario"
    }
  ],
  advisor: {
    name: "Prof. Dr. Orientador",
    role: "Orientador",
    email: "orientador@universidade.edu.br"
  }
}
```

### 2. Adicione suas Imagens

Organize as imagens em `public/images/`:

```
public/images/
├── logo.png
├── hero-image.jpg
├── tech/
│   ├── react.png
│   ├── nodejs.png
│   └── ...
└── team/
    ├── member1.jpg
    └── member2.jpg
```

### 3. Customize as Cores

Edite o tema em `projectData.js`:

```javascript
theme: {
  primary: "#2563eb",      // Cor principal (azul)
  secondary: "#7c3aed",    // Cor secundária (roxo)
  accent: "#f59e0b",       // Cor de destaque (laranja)
  background: "#ffffff",   // Fundo
  text: "#1f2937"         // Texto
}
```

## 🎨 Seções Disponíveis

### 📌 Header
- Título e subtítulo do projeto
- Logo (opcional)
- Menu de navegação responsivo

### 🎯 Hero Section
- Título principal
- Descrição
- Imagem de destaque
- Botões de ação customizáveis

### 📖 About Section
- Descrição detalhada do projeto
- Estatísticas (duração, tecnologias, etc.)

### ⚡ Features Section
- Grid de funcionalidades
- Ícones customizáveis (emojis ou SVG)
- Cards com efeitos hover

### 💻 Technologies Section
- Grid de tecnologias utilizadas
- Logos das tecnologias
- Descrições breves

### 👥 Team Section
- Grid de membros da equipe
- Fotos e funções
- Links para GitHub e LinkedIn
- Seção especial para orientador

### 📄 Footer
- Informações acadêmicas (universidade, curso, semestre)
- Contato (email, GitHub)
- Copyright

## 🔄 Reutilizando para Outros Projetos

Para criar um segundo projeto acadêmico:

1. **Duplique** o arquivo de dados:
   ```bash
   cp src/data/projectData.js src/data/projeto2Data.js
   ```

2. **Edite** `projeto2Data.js` com os novos dados

3. **Crie** uma nova página:
   ```javascript
   // src/pages/projeto2.jsx
   import { projeto2Data } from "@/data/projeto2Data";
   // ... importar componentes e usar projeto2Data
   ```

4. **Acesse**: `http://localhost:3000/projeto2`

## 🎨 Exemplos de Paletas de Cores

### Ciência da Computação (Azul)
```javascript
theme: {
  primary: "#2563eb",
  secondary: "#3b82f6",
  accent: "#60a5fa"
}
```

### Engenharia (Laranja)
```javascript
theme: {
  primary: "#ea580c",
  secondary: "#f97316",
  accent: "#fb923c"
}
```

### Design (Roxo)
```javascript
theme: {
  primary: "#7c3aed",
  secondary: "#8b5cf6",
  accent: "#a78bfa"
}
```

### Saúde (Verde)
```javascript
theme: {
  primary: "#059669",
  secondary: "#10b981",
  accent: "#34d399"
}
```

## 🛠️ Tecnologias Utilizadas

- **Framework:** Next.js 14.2.33
- **Biblioteca UI:** React 18.2.0
- **Estilização:** Tailwind CSS 3.4.0
- **CSS Processing:** PostCSS 8.4.21 + Autoprefixer 10.4.14
- **Linguagem:** JavaScript (JSX)

## 📱 Responsividade

O template é totalmente responsivo:
- **Mobile** (< 768px): Layout em coluna única
- **Tablet** (768px - 1024px): Grid de 2 colunas
- **Desktop** (> 1024px): Grid de 3-4 colunas

## 💡 Dicas de Uso

1. **Imagens**: Use imagens de alta qualidade (recomendado 1200x800px)
2. **Descrições**: Seja claro e objetivo
3. **Cores**: Use cores contrastantes para melhor legibilidade
4. **Ícones**: Use emojis (🚀 💡 ⚡) ou ícones SVG
5. **Links**: Teste todos os links antes de apresentar
6. **Teste Mobile**: Sempre teste em dispositivos móveis

## ✅ Checklist antes de Apresentar

- [ ] Todas as imagens carregando corretamente
- [ ] Todos os links funcionando
- [ ] Textos revisados sem erros
- [ ] Cores adequadas ao tema
- [ ] Testado em mobile, tablet e desktop
- [ ] Dados da equipe corretos
- [ ] Informações do orientador atualizadas
- [ ] Estatísticas e números verificados

## 📦 Deploy

Recomendado para deploy:

- **Vercel** (recomendado para Next.js) - Deploy automático
- **Netlify** - Fácil configuração
- **GitHub Pages** - Gratuito para projetos públicos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](docs/LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@tremedam](https://github.com/tremedam)

---

⭐ **Template criado para facilitar a apresentação de projetos acadêmicos!** 🎓

Se este projeto te ajudou, considere dar uma estrela no repositório!
