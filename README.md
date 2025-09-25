# 🚀 Boilerplate Next.js + Tailwind

Um template moderno e reutilizável para criação rápida de sites e aplicações web usando Next.js e Tailwind CSS.

## 📋 Sobre o Projeto

Este boilerplate foi criado para acelerar o desenvolvimento de novos projetos web, fornecendo uma base sólida e bem estruturada com as melhores práticas do ecossistema React/Next.js.

### ✨ Características

- **⚡ Next.js 14** - Framework React de produção
- **🎨 Tailwind CSS** - Framework CSS utilitário para estilização rápida
- **📱 Design Responsivo** - Layout que se adapta a diferentes dispositivos
- **🧩 Componentes Modulares** - Estrutura organizada e reutilizável
- **🔗 Navegação Otimizada** - Usando Next.js Link para melhor performance
- **📄 Páginas Pré-configuradas** - Home, Sobre e Contato já implementadas

## 🏗️ Estrutura do Projeto

```
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Cabeçalho com navegação
│   │   ├── Footer.jsx      # Rodapé com copyright
│   │   └── Layout.jsx      # Layout principal
│   ├── pages/
│   │   ├── _app.js         # Configuração global do app
│   │   ├── index.jsx       # Página inicial
│   │   ├── about.jsx       # Página sobre
│   │   └── contact.jsx     # Página de contato
│   └── styles/
│       └── globals.css     # Estilos globais com Tailwind
├── public/
│   └── favicon.ico         # Ícone do site
├── docs/
│   └── LICENSE            # Licença do projeto
└── README.md              # Este arquivo
```

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 14.2.0
- **Biblioteca UI:** React 18.2.0
- **Estilização:** Tailwind CSS 3.4.0
- **Build Tool:** Vite integrado ao Next.js
- **Linguagem:** JavaScript (JSX)

## 🚀 Como Usar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/tremedam/boilerplate.git
   cd boilerplate
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

### Comandos Disponíveis

```bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Gera build de produção
npm run start    # Executa build de produção
npm run lint     # Executa linter
```

## 🎨 Personalização

### Cores e Tema

O projeto usa um esquema de cores padrão que pode ser facilmente personalizado no `tailwind.config.js` ou diretamente nas classes CSS:

- **Primária:** Azul (`bg-blue-600`)
- **Secundária:** Cinza (`bg-gray-800`)
- **Background:** Cinza claro (`bg-gray-100`)

### Adicionando Novas Páginas

1. Crie um novo arquivo em `src/pages/`
2. Importe o componente `Layout`
3. Adicione o link no `Header.jsx`

Exemplo:
```jsx
import Layout from "@/components/Layout";

export default function NovaPagina() {
    return (
        <Layout>
            <h2 className="text-2xl font-semibold mb-4">Nova Página</h2>
            <p>Conteúdo da nova página...</p>
        </Layout>
    );
}
```

## 📦 Deploy

Este projeto pode ser facilmente deployado em:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **GitHub Pages**
- **Heroku**

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](docs/LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@tremedam](https://github.com/tremedam)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!