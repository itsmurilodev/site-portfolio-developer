# Murilo Alves Portfolio

Portfólio pessoal desenvolvido com Next.js, React, TypeScript e Tailwind CSS. O site apresenta perfil técnico, jornada, competências, projetos, Async Studio e canais de contato.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Como rodar

Instale as dependências:

```bash
npm install
```

Inicie o ambiente local:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Conteúdo editável

Os principais dados do portfólio ficam nestes arquivos:

- `lib/site.ts`: nome, cargo, bio, e-mail, WhatsApp, redes sociais, localização e URL pública.
- `data/projects.ts`: projetos, stacks, links de repositório e demos.
- `data/skills.ts`: grupos de habilidades e tecnologias.
- `data/timeline.ts`: linha do tempo profissional e acadêmica.
- `data/about.ts`: foto, foco técnico e métricas do perfil.
- `public/og-image.svg`: imagem social estática.

## Deploy

Antes do deploy, configure `NEXT_PUBLIC_SITE_URL` com o domínio público do projeto para manter metadados, sitemap, robots e Open Graph apontando para a URL correta.

## Observações

O arquivo `public/curriculo-murilo-alves.pdf` já está disponível no projeto. Caso o currículo deva aparecer no site, adicione um CTA ou link visível para download.
