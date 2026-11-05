# Deploy do apps308 no Cloudflare Pages

O projeto é Astro SSG. Não requer banco de dados, funções, adaptador SSR ou segredos de produção.

## Integração pelo GitHub

- Repositório preparado: https://github.com/josivaldo88f-crypto/apps308
- Branch de produção: `main`
- Diretório raiz no repositório: `/` (o conteúdo desta pasta deve estar na raiz do repositório)
- Framework: Astro
- Versão de Node: 24, definida em `.node-version`
- Instalação: pnpm com o lockfile rastreado (o build deve usar `pnpm install --frozen-lockfile` antes de compilar)
- Build: `pnpm build && pnpm verify`
- Saída: `dist`

No painel do Cloudflare, abra Workers & Pages > Create application > Pages > Connect to Git. Selecione o repositório e configure os campos acima. O primeiro deploy cria um endereço `pages.dev` que deve ser testado antes de vincular o domínio.

Depois do deploy, adicione `www.apps308.com` em Custom domains dentro do próprio projeto Pages. Use o fluxo do Cloudflare para criar ou validar o registro necessário. Redirecione o domínio sem www apenas depois de confirmar seu destino. Não substitua registros de e-mail ou de serviços existentes durante essa migração.

## Domínio canônico

O canônico configurado é `https://www.apps308.com`. A raiz `/` encaminha para `/en/` por `_redirects`, com status 302 e sem lógica de geolocalização. Os idiomas permanecem acessíveis em `/en/`, `/es/` e `/pt/`.

Sitemap: `/sitemap-index.xml`. Robots: `/robots.txt`. Não há inscrição, cookies de análise ou publicidade nesta versão.

## Validar após o deploy

Confira a home nos três idiomas, um artigo e sua troca de idioma, imagem WebP, `/404.html`, sitemap e canonical. Execute PageSpeed Insights no endereço publicado. As notas locais do Lighthouse são apenas medidas de laboratório; não demonstram métricas de campo nem garantem uma nota no domínio de produção.

## Fontes oficiais de implantação

- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- https://docs.astro.build/en/guides/deploy/cloudflare/
