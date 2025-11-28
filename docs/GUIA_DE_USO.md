# 📘 Guia de Uso - Template Acadêmico Pro

Guia completo passo a passo para personalizar e utilizar este template para apresentar seu projeto acadêmico.

## 📋 Índice

1. [Primeiros Passos](#-primeiros-passos)
2. [Configuração Inicial](#-configuração-inicial)
3. [Personalizando Conteúdo](#-personalizando-conteúdo)
4. [Configurando Temas e Cores](#-configurando-temas-e-cores)
5. [Adicionando Imagens](#-adicionando-imagens)
6. [Testando Localmente](#-testando-localmente)
7. [Deploy e Publicação](#-deploy-e-publicação)
8. [Dicas e Boas Práticas](#-dicas-e-boas-práticas)
9. [Solução de Problemas](#-solução-de-problemas)

---

## 🚀 Primeiros Passos

### Requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18.17+ ou 20+ (recomendado LTS)
  - Verifique: `node --version`
  - Download: https://nodejs.org/
- **npm** (vem com Node.js)
  - Verifique: `npm --version`
- **Editor de código** (VS Code recomendado)

> **💡 Nota:** Não é necessário instalar Next.js, React, Tailwind ou outras bibliotecas separadamente! Tudo já está configurado no `package.json` e será instalado automaticamente com `npm install`.

### Instalação

1. **Clone ou baixe o repositório:**

```powershell
git clone https://github.com/seu-usuario/boilerplate.git
cd boilerplate
```

2. **Instale as dependências:**

```powershell
npm install
```

Aguarde alguns minutos enquanto as dependências são instaladas.

> **⚠️ Importante:** Este template utiliza a biblioteca `next-themes` para o sistema de dark mode. Ela já está incluída no `package.json` e será instalada automaticamente com o comando acima. Se por algum motivo precisar instalá-la manualmente, use:
>
> ```powershell
> npm install next-themes
> ```

3. **Execute o projeto:**

```powershell
npm run dev
```

4. **Acesse no navegador:**

Abra http://localhost:3000

Você verá o template com conteúdo de exemplo!

---

## ⚙️ Configuração Inicial

### Passo 1: Entenda a estrutura

Todo o conteúdo do seu projeto está centralizado em **um único arquivo**:

```
src/data/projectData.js
```

Este arquivo contém:
- ✅ Textos de todas as páginas
- ✅ Configuração de cores (light/dark mode)
- ✅ Links e informações de contato
- ✅ Dados da equipe
- ✅ Tecnologias utilizadas

### Passo 2: Faça uma cópia de segurança

Antes de editar, faça uma cópia do arquivo original:

```powershell
cp src/data/projectData.js src/data/projectData.backup.js
```

Assim você sempre pode voltar ao exemplo original se necessário.

---

## 📝 Personalizando Conteúdo

Abra `src/data/projectData.js` no seu editor de código.

### 1. Cabeçalho (Header)

```javascript
header: {
    title: "Seu Projeto Aqui",                    // Nome do seu projeto
    subtitle: "Descrição curta do projeto",       // Subtítulo
    logo: "/images/logotemplate.png",             // Caminho do logo (opcional)
},
```

**Dica:** Se não tiver logo, deixe a string vazia: `logo: ""`

### 2. Hero (Seção Principal)

```javascript
hero: {
    title: "Título Principal do Projeto",
    description: "Descrição completa explicando do que se trata o projeto...",
    image: "/images/apresentacao.png",            // Imagem de destaque
    buttons: [
        {
            text: "Ver GitHub",
            href: "https://github.com/seu-usuario/seu-repositorio",
            primary: true,                        // true = botão destacado
        },
        {
            text: "Documentação",
            href: "/docs/LICENSE",
            primary: false,                       // false = botão secundário
        },
    ],
},
```

### 3. Sobre o Projeto (About)

```javascript
about: {
    title: "Sobre o Projeto",
    content: `
      **Visão Geral:**
      Escreva aqui a descrição completa do seu projeto.
      
      **Contexto e Motivação:**
      Por que você criou este projeto? Qual problema ele resolve?
      
      **Objetivo Principal:**
      O que você pretende alcançar com este projeto?
      
      **Metodologia:**
      Como você desenvolveu? Quais ferramentas usou?
      
      **Diferenciais:**
      O que torna seu projeto único?
    `,
    stats: [
        { label: "Tempo de Desenvolvimento", value: "X semanas" },
        { label: "Tecnologias", value: "X" },
        { label: "Componentes", value: "X" },
    ],
},
```

**Nota:** O campo `content` aceita Markdown! Use `**negrito**` para destacar títulos.

### 4. Funcionalidades (Features)

```javascript
features: {
    title: "Principais Funcionalidades",
    items: [
        {
            icon: "🚀",                           // Emoji que representa a funcionalidade
            title: "Nome da Funcionalidade",
            description: "Descrição detalhada do que esta funcionalidade faz...",
        },
        // Adicione até 8 funcionalidades
    ],
},
```

**Dica:** Use emojis relevantes! Exemplos:
- 🎨 Design
- ⚡ Performance
- 🔒 Segurança
- 📱 Responsividade
- 🌐 API
- 💾 Banco de dados

### 5. Tecnologias (Technologies)

```javascript
technologies: {
    title: "Tecnologias Utilizadas",
    items: [
        {
            name: "Nome da Tecnologia",
            description: "Para que você usou esta tecnologia",
            image: "/images/tech/tecnologia.svg",  // Logo da tecnologia
        },
        // Adicione quantas tecnologias quiser
    ],
},
```

**Onde conseguir logos:**
- https://www.svgrepo.com/
- https://simpleicons.org/
- https://devicon.dev/

### 6. Galeria (Gallery)

```javascript
gallery: {
    title: "Capturas de Tela",
    images: [
        {
            src: "/images/screenshots/tela1.png",
            caption: "Descrição da imagem",
        },
        {
            src: "/images/screenshots/tela2.jpg",
            caption: "Outra descrição",
        },
        // Adicione quantas imagens quiser
    ],
},
```

### 7. Resultados (Results)

```javascript
results: {
    title: "Resultados Alcançados",
    content: "Resumo geral dos resultados do seu projeto...",
    achievements: [
        "Primeira conquista ou objetivo alcançado",
        "Segunda conquista",
        "Terceira conquista",
        // Até 10 achievements
    ],
},
```

### 8. Equipe (Team)

```javascript
team: {
    title: "Desenvolvedor",  // ou "Equipe" se for mais de um
    members: [
        {
            name: "Seu Nome Completo",
            role: "Desenvolvedor Full-Stack",
            image: "/images/team/foto.jpg",
            github: "https://github.com/seu-usuario",
            linkedin: "https://linkedin.com/in/seu-perfil",
        },
        // Adicione mais membros se necessário
    ],
    advisor: {
        name: "Projeto Individual",  // ou nome do orientador
        role: "Trabalho Acadêmico",
        email: "seu-email@exemplo.com",
    },
},
```

### 9. Rodapé (Footer)

```javascript
footer: {
    university: "Sua Universidade",
    course: "Seu Curso",
    semester: "2025.1",
    year: "2025",
    contact: {
        email: "seu-email@exemplo.com",
        github: "https://github.com/seu-usuario/seu-projeto",
    },
},
```

---

## 🎨 Configurando Temas e Cores

### Cores do Light Mode

```javascript
theme: {
    light: {
        primary: "#2563eb",        // Cor principal (use um azul, verde, roxo, etc.)
        secondary: "#0f172a",      // Cor secundária
        accent: "#09c8aea3",       // Cor de destaque/acentuação
        background: "#ffffff",     // Fundo (geralmente branco)
        text: "#1f2937",           // Texto principal (cinza escuro)
        title: "#2563eb",          // Cor dos títulos
        
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
```

### Cores do Dark Mode

```javascript
    dark: {
        primary: "#3b82f6",        // Versão mais clara do primary
        secondary: "#1e293b",      // Mais escuro
        accent: "#06b6d4",         // Versão ajustada do accent
        background: "#0f172a",     // Fundo escuro
        text: "#e2e8f0",           // Texto claro
        title: "#3b82f6",          // Títulos no escuro
        
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

### 🎨 Dicas de Cores

**Paletas recomendadas:**

1. **Azul Tech (padrão):**
   - Primary: `#2563eb` (azul)
   - Accent: `#06b6d4` (cyan)

2. **Verde Natureza:**
   - Primary: `#10b981` (verde)
   - Accent: `#84cc16` (lime)

3. **Roxo Criativo:**
   - Primary: `#8b5cf6` (roxo)
   - Accent: `#ec4899` (rosa)

4. **Laranja Energia:**
   - Primary: `#f59e0b` (laranja)
   - Accent: `#ef4444` (vermelho)

**Ferramentas úteis:**
- https://coolors.co/ — Gerar paletas
- https://tailwindcss.com/docs/customizing-colors — Cores do Tailwind

---

## 🖼️ Adicionando Imagens

### Estrutura de Pastas

```
public/
└─ images/
   ├─ apresentacao.png          # Imagem do Hero
   ├─ logotemplate.png          # Logo do projeto
   ├─ screenshots/              # Galeria
   │  ├─ tela1.png
   │  ├─ tela2.jpg
   │  └─ ...
   ├─ team/                     # Fotos da equipe
   │  ├─ membro1.jpg
   │  └─ ...
   └─ tech/                     # Logos de tecnologias
      ├─ react.svg
      ├─ nodejs.png
      └─ ...
```

### Passo a Passo

1. **Prepare suas imagens:**
   - Tamanho recomendado para Hero: 1200x600px
   - Tamanho para screenshots: 800x600px
   - Tamanho para fotos de perfil: 400x400px
   - Formato: PNG, JPG ou SVG

2. **Coloque na pasta correta:**
   - Copie para `public/images/[pasta-correspondente]/`

3. **Referencie no projectData.js:**
   ```javascript
   image: "/images/screenshots/minha-imagem.png"
   ```

**⚠️ IMPORTANTE:** 
- O caminho sempre começa com `/images/`
- Não use `./` ou `../`
- Use apenas letras minúsculas e hífens nos nomes

---

## 🧪 Testando Localmente

### Executar em Desenvolvimento

```powershell
npm run dev
```

Acesse: http://localhost:3000

**Modo de desenvolvimento:**
- ✅ Hot reload (mudanças aparecem automaticamente)
- ✅ Mensagens de erro detalhadas
- ✅ Mais lento, mas melhor para desenvolver

### Testar Build de Produção

```powershell
npm run build
npm run start
```

Acesse: http://localhost:3000

**Modo de produção:**
- ✅ Otimizado e rápido
- ✅ Exatamente como ficará online
- ✅ Teste antes de publicar!

### Checklist de Testes

- [ ] Todas as páginas abrem sem erro?
- [ ] Navegação entre páginas funciona?
- [ ] Dark mode alterna corretamente?
- [ ] Todas as imagens carregam?
- [ ] Links externos (GitHub, LinkedIn) funcionam?
- [ ] Layout responsivo (teste em mobile)?
- [ ] Galeria abre modal ao clicar?

---

## 🚀 Deploy e Publicação

### Opção 1: Vercel (Recomendado)

**Melhor para projetos Next.js!**

1. Acesse https://vercel.com
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione seu repositório
5. Clique em "Deploy"

Pronto! Seu site estará online em minutos.

**URL:** `seu-projeto.vercel.app`

### Opção 2: Netlify

1. Acesse https://netlify.com
2. Arraste a pasta `.next` (após rodar `npm run build`)
3. Ou conecte com GitHub para deploy automático

### Opção 3: GitHub Pages

⚠️ **Não recomendado** para Next.js (requer configuração extra)

### Configurações Importantes

Antes do deploy, verifique:

1. **Links externos:** Todos apontam para URLs reais
2. **Imagens:** Todas as imagens existem em `public/images/`
3. **Build:** Roda sem erros (`npm run build`)
4. **Domínio personalizado:** Configure no Vercel/Netlify se tiver

---

## 💡 Dicas e Boas Práticas

### Conteúdo

✅ **Escreva textos claros e diretos**
- Evite parágrafos muito longos
- Use bullet points quando possível
- Destaque informações importantes com **negrito**

✅ **Use imagens de qualidade**
- Evite imagens borradas ou muito pesadas
- Otimize antes de adicionar (use https://tinypng.com/)
- Prefira PNG para screenshots, SVG para logos

✅ **Mantenha consistência**
- Use o mesmo tom de escrita em todo o projeto
- Mantenha padrão de nomenclatura
- Cores harmoniosas entre si

### Performance

✅ **Otimize imagens:**
```powershell
# Redimensione imagens grandes antes de adicionar
# Máximo 200KB por imagem de screenshot
```

✅ **Teste em diferentes dispositivos:**
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

### SEO

✅ **Configure títulos únicos para cada página**
- Já está configurado automaticamente!

✅ **Adicione meta descriptions relevantes**
- Edite em cada arquivo de página (`pages/*.jsx`)

---

## 🔧 Solução de Problemas

### Erro: "Cannot find module"

**Solução:**
```powershell
rm -rf node_modules
npm install
```

### Erro: "Port 3000 already in use"

**Solução:**
```powershell
# Mate o processo na porta 3000
# Ou rode em outra porta:
npm run dev -- -p 3001
```

### Imagens não aparecem

**Verifique:**
1. Caminho começa com `/images/`
2. Arquivo existe em `public/images/`
3. Nome do arquivo está correto (case-sensitive)
4. Formato suportado (PNG, JPG, SVG, WebP)

### Dark mode não funciona

**Verifique:**
1. `ThemeProvider` está em `_app.js`
2. Cores estão definidas para `light` E `dark`
3. Limpe o cache do navegador

### Build falha

**Passos:**
1. Rode `npm run lint` para ver erros
2. Corrija todos os erros de sintaxe
3. Verifique se todas as importações existem
4. Rode `npm run build` novamente

---

## 📞 Precisa de Ajuda?

### Recursos

- 📖 [README.md](README.md) — Documentação completa
- 🐛 [Issues no GitHub](https://github.com/tremedam/boilerplate/issues) — Reporte bugs
- 💬 [Discussions](https://github.com/tremedam/boilerplate/discussions) — Tire dúvidas

### Contato

- GitHub: [@tremedam](https://github.com/tremedam)
- Email: thiagofellipe055@gmail.com

---

## ✅ Checklist Final

Antes de publicar, confirme:

- [ ] Todos os textos foram personalizados
- [ ] Todas as imagens foram adicionadas
- [ ] Cores do tema foram escolhidas
- [ ] Links externos funcionam
- [ ] Informações de contato estão corretas
- [ ] Testei em desenvolvimento (`npm run dev`)
- [ ] Testei build de produção (`npm run build`)
- [ ] Dark mode funciona corretamente
- [ ] Layout responsivo em mobile
- [ ] Galeria exibe todas as imagens
- [ ] Deploy realizado com sucesso

---