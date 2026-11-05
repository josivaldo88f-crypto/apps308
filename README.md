# apps308

Site editorial multilíngue em **Astro**, com geração estática para **Cloudflare Pages**.

- 5 pautas originais localizadas em inglês, espanhol e português: **15 artigos**.
- 26 páginas HTML, incluindo homes, política editorial, privacidade, seleção de idioma e 404.
- Canonical, hreflang recíproco e x-default por conteúdo, sitemap multilíngue e robots.txt.
- Article, SoftwareApplication e FAQPage em JSON-LD, sem avaliações ou resultados de pagamento inventados.
- Capturas Android originais obtidas via ADB, recortadas para excluir dados pessoais e otimizadas por `astro:assets`.
- Artigos sem JavaScript por padrão; apenas os artigos Freecash carregam o botão de copiar identificador. Busca e filtros usam um script pequeno nas homes.
- Fontes do sistema, CSS responsivo, FAQ e seletor de idioma com elementos nativos.

## Rodar

Node 24 (testado com 24.22.1) e pnpm 10+:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm build
pnpm verify
pnpm preview
```

A configuração também é compatível com `npm run build` depois de instalar dependências com pnpm. O lockfile rastreado é `pnpm-lock.yaml`.

## Conteúdo

`src/data/articles.ts` contém versões estáticas dos artigos. O mesmo `id` conecta as traduções com slugs localizados. `src/data/i18n.ts` contém os textos de interface. `src/data/affiliates.json` centraliza o status de verificação; `null` significa que um código ou link pessoal não foi obtido. Nenhum dado fictício deve preencher esses campos.

## Documentação e entrega

- [Relatório de entrega e URLs](docs/ENTREGA.md)
- [Cloudflare Pages](docs/DEPLOY-CLOUDFLARE.md)
- [Manifesto das capturas](docs/capture-manifest.json)
- Google Trends: arquivos CSV em `docs/`, consulta de 5 de novembro de 2026.

Os endereços `www.apps308.com` são o destino canônico planejado. Um build local ou um repositório criado não confirma que este conteúdo foi publicado no domínio.
