# Guia Permanente de Criação, SEO e QA de Novos Artigos — apps308

Manual técnico e editorial obrigatório para qualquer editor ou agente de IA que criar ou atualizar artigos e páginas no projeto **apps308** (`apps308.com`). Consolida a arquitetura real do template Astro, as travas do validador automático (`scripts/verify.mjs`) e os aprendizados validados pelos ciclos de **Google Search Console (GSC) × Google Analytics 4 (GA4)**.

---

## 1. Padrão de `<title>`, `<h1>` e `meta description` (CTR Mobile-First)

Mais de 80% do tráfego do `apps308` ocorre em dispositivos móveis, onde títulos longos são truncados na SERP e reduzem o CTR mesmo no Top 5.

1. **Limite e formato de `article.title`:**
   - Mantenha `article.title` com **até ~50–55 caracteres** (teto prático de 55). O template soma ` | apps308` (+10 caracteres) ao renderizar o `<title>`, então o título final na SERP fica ≤65 caracteres. Títulos base de 60+ caracteres truncam no mobile e cortam o gancho final (aprendizado do ciclo GSC de 2026-11-26: 150/165 títulos truncavam com o teto antigo de 65–68).
   - **Nunca inclua `| apps308`** dentro de `article.title` em `src/data/articles.ts`. O template `src/pages/[locale]/[slug].astro` já renderiza `<Layout title={`${article.title} | apps308`} ...>` automaticamente e usa `article.title` puro no `<h1>`.
2. **Proibição de "Zero-Click Spoilers":**
   - Nunca entregue a resposta seca no título (ex.: *"DramaGood paga mesmo? Teste real mostra que não"*), pois o usuário lê o *"não"* na SERP e não clica.
   - Use o **gancho concreto da trava, valor em tela, conversão de pontos ou prova do teste** entre parênteses ou após os dois-pontos:
     - Bom: `DramaGood Paga Mesmo? A Trava do Saque de R$ 240`
     - Bom: `CashDrama App Review (2026): Is It Legit or a Scam?`
     - Bom: `Does PineDrama Pay Real Money? (2026 Rewards Test)`
3. **Alinhamento com a intenção de busca real (GSC):**
   - Para nomes de apps e ferramentas comerciais (ex.: `surfshark`, `nordvpn`, `dramastack`), avalie se a busca dominante pede **review / opiniões / vale a pena / paga mesmo** em vez de manual técnico de configuração.
   - Inclua **sinônimos, grafias separadas e variações fonéticas reais** observadas no GSC no `intro`, nos `H2` e nas `FAQ` (sem keyword stuffing):
     - Exemplos já validados: `Drama Stack` (junto de `DramaStack`), `Drama Good`, `Pine Drama` / `Painel Drama`, `Cash Drama` / `Cash Fortune Drama`, `Surfshark or NordVPN`, `Google Image Lens`.
4. **Regras de `meta description`:**
   - Escreva entre **140 e 156 caracteres**.
   - Coloque o **dado concreto ou prova logo no início** (ex.: taxa de conversão real `30.000 pontos = R$ 1`, trava de `$100` / `$500`, código bônus `ALNTFL` / `cgfky` / `DL70959891`, ou prazo de expiração de 1 ano).
   - Em artigos `EN`, **nunca use valores em R$ ou métodos locais (PIX) sem equivalência USD** — o público global não conhece a moeda brasileira (ex.: `R$ 240 (~$45)`, `30,000 coins ≈ $0.18–$0.20`). Não comece a description com nome de pacote (`com.…`): isso desperdiça o espaço nobre do snippet.

---

## 2. Padrão de Retenção e Conversão (GSC × GA4)

1. **Resposta direta na 1ª frase do `intro`:**
   - Responda imediatamente à pergunta principal da página na primeira frase. Evite aberturas conceituais longas antes de entregar o veredito, preço ou regra de disponibilidade.
   - Exemplo (`ES`): em serviços sem disponibilidade uniforme (como a aba de recompensas do `PineDrama`), informe na 1ª frase onde o recurso funciona apenas como streaming gratuito e onde há saque promocional.
2. **Uso obrigatório de `topCallout` em guias com subguias ou alternativas:**
   - Sempre que o assunto possuir subguias (ex.: moedas grátis, cancelamento, saque, código de convite) ou quando o app avaliado **não pagar** e exigir alternativa imediata, preencha `article.topCallout` para renderizar o bloco destacado logo abaixo do `intro`.
3. **Tabela resumo *Quick Facts* logo no início (`afterSectionIndex: 0`):**
   - Inclua pelo menos 1 tabela via `article.tables` com `afterSectionIndex: 0` (logo após o 1º H2) resumindo valores verificados, limites, métodos, prazos ou comparativo lado a lado. Tabelas iniciais reduzem a rejeição no mobile e aumentam o tempo médio de leitura.
4. **Equivalência monetária internacional em artigos `ES` e `EN`:**
   - Sempre que um print ou teste tiver valores em moeda local (ex.: `R$ 300`, `R$ 1`, `R$ 240`), apresente no `intro`, em tabela e na `FAQ` a **equivalência aproximada** em dólares (`USD`), euros (`EUR`) e/ou pesos (`MXN`, `COP`) — ex.: `R$ 300 (~$55–$60 USD / ~50 € / ~$1.050 MXN)` ou `30.000 pontos = R$ 1 (~$0,18–$0,20 USD)`.
   - Isso evita que leitores de Espanha, México, Colômbia, EUA ou África do Sul abandonem a página achando que entraram no mercado errado.
5. **Ponte contextual e CTA para alternativas verificadas:**
   - Quando um app analisado **não pagar** ou travar o saque (como `DramaStack`, `CashDrama`, `Cash Fortune Drama`, `DramaGood`) ou oferecer apenas crédito de loja (`Google Opinion Rewards` no Android), faça a ponte contextual no corpo (`parseParagraph()`), no `topCallout` e em `section.cta` (com `sponsored: true` quando usar link de afiliado/convite) para alternativas com status `"verified"` em `src/data/affiliates.json` (`Prime Opinion`, `AttaPoll`, `Pawns.app`, `Freecash`, `TikTok Lite`, `Swagbucks`).

---

## 3. Arquitetura Real do Template e Recursos Suportados

### 3.1. Campos da interface `Article` (`src/data/articles.ts`)

| Campo | Obrigatório | Função no template (`src/pages/[locale]/[slug].astro`) |
|---|---|---|
| `id` | Sim | Identificador único que conecta as 3 traduções (`en`, `es`, `pt`) para `hreflang` recíproco e sitemap. |
| `app` | Sim | Chave do app em `apps` (ex.: `'dramabox'`, `'primeopinion'`) ou `'compare'` para comparativos multi-app. |
| `category` | Sim | `'rewards'` ou `'tools'`. |
| `slug` | Sim | Slug localizado sem barra inicial nem final (a URL gerada é `/{locale}/{slug}/`). |
| `title` / `description` | Sim | Metadados SEO (`title` sem `\| apps308`; `title` também vira o `<h1>`). |
| `intro` | Sim | Parágrafo de abertura; aceita links inline via `parseParagraph()`. |
| `modifiedDate` | Opcional | String `'YYYY-MM-DD'`. Quando omitida, `articleDates(article)` aplica o fallback de `src/data/articleDates.ts`. Sempre defina ao atualizar um artigo existente. |
| `topCallout` | Opcional | `ArticleCallout` (`{ title, text?, links: [{ label, url, sponsored? }] }`) renderizado em `<aside class="article-callout">` logo após o `intro`. |
| `sections[]` | Sim | Array com `heading`, `paragraphs[]`, `callout?` (`ArticleCallout` após `<h2>`), `image?` (`ArticleImage`), `source?`, `sources?` e `cta?` (`{ label, url, sponsored? }`). |
| `tables[]` | Opcional | `{ heading, columns[], rows[][], afterSectionIndex }`. Renderiza `.article-table-wrap` + `<table class="article-table">` ao final da seção `i === afterSectionIndex`. |
| `steps` / `stepsSectionIndex` | `steps` Sim | Lista `<ol>` de passos. Por padrão vai após as seções; use `stepsSectionIndex` para embutir logo após a seção `i`. |
| `pros` / `cons` / `verdict` | Sim | Blocos de prós, contras e veredito final (texto puro; não passam por `parseParagraph()`). |
| `faq[]` | Sim | Array `{ q, a }` obrigatório (também gera schema `FAQPage` em JSON-LD). |
| `imageAlt` / `caption` / `imageKey?` / `imageWide?` / `secondImage?` | Sim / Opcional | Imagem principal (seção 0 ou 1 conforme o `app`, usando `{locale}-{imageKey}.webp`) e segunda imagem opcional (`secondImage` na seção 1 para apps listados no template). |
| `sources?` | Opcional | Fontes extras mescladas por `sourcesFor(article)` com `defaultSourcesFor(article)` e `section.source`/`section.sources`. |
| `relatedIds?` | Opcional | Lista editorial de `id`s relacionados para referência do cluster. *(Nota: os cards de rodapé `relatedArticles` em `[slug].astro` hoje derivam de `isCluster` / `clusterSeries`.)* |

### 3.2. Regra estrita do `parseParagraph()`

Em `src/pages/[locale]/[slug].astro`, apenas `article.intro` e `section.paragraphs` passam por `parseParagraph()`, que reconhece **exclusivamente** o padrão:

```text
[texto-âncora](/caminho-interno/)
[texto-âncora](https://url-externa.com/...)
```

- **Nunca** escreva HTML cru (`<a href="...">`, `<strong>`, `<br>`) dentro de strings de `articles.ts`.
- **Nunca** escreva Markdown de negrito (`**texto**`), itálico ou listas (`- item`) dentro de `intro`, `paragraphs`, `faq`, `tables` ou `verdict` — eles serão impressos literalmente como caracteres no HTML.
- **Nunca** coloque `[texto](url)` fora de `intro` e `section.paragraphs` (por exemplo, em `faq`, `steps`, `verdict`, `tables` ou `callout.text`), pois esses campos não usam `parseParagraph()` e vazariam sintaxe crua para o leitor.
- Prefira sempre caminhos internos iniciados e terminados por `/` (ex.: `/pt/dramagood-paga-mesmo/`).

### 3.3. Screenshots `.webp`, `sharp` e reaproveitamento

- Todas as capturas ficam em `src/assets/screenshots/{locale}-<key>.webp` para os 3 idiomas (`en`, `es`, `pt`).
- Capturas originais são mantidas fora do projeto (ex.: `/tmp/`) e processadas via `sharp` (referência em `scripts/process-screenshots.mjs`) com recorte da barra de status, avatar e dados pessoais do aparelho, redimensionamento para largura máxima `640px` (`withoutEnlargement: true`) e saída `.webp`.
- Em **artigos comparativos** (`app: 'compare'`) ou **novos guias de um cluster já existente**, reutilize os `.webp` existentes usando `imageKey` na seção 0 e `section.image` (`{ key, alt, caption, wide? }`) nas demais seções, além de configurar os nomes das telas na variante correspondente em `src/components/AppCover.astro`.

### 3.4. Links patrocinados (`rel="sponsored noopener"`) e restrições de `verify.mjs`

- **Todo link de afiliado ou convite** em `section.cta`, `topCallout.links` ou `section.callout.links` **deve** definir `"sponsored": true` para que `[slug].astro` gere `rel="sponsored noopener"`.
- **Não** coloque URLs de afiliado/convite como links `[âncora](https://...)` dentro de `intro` ou `section.paragraphs`, pois `parseParagraph()` só atribui `rel="noopener"` (sem `sponsored`) para links externos. Use `section.cta`, `topCallout`/`section.callout` (com `sponsored: true`) ou `AffiliateBox.astro` (que lê `src/data/affiliates.json`).
- **Travas obrigatórias validadas por `scripts/verify.mjs`:**
  - Zero `<script>` cliente extra em páginas de artigo fora das exceções de cópia de código (`freecash`, `pawns`, `prime`, `attapoll`, `tiktok-lite`).
  - Exatamente 1 `<h1>` por página; `<title>` único contendo `apps308`.
  - Canonical válido, **4 tags `<link rel="alternate">` (`en`, `es`, `pt`, `x-default`) com `hreflang` recíproco** entre os 3 idiomas, e zero links internos quebrados.
  - Schemas JSON-LD válidos: `Article` (`datePublished`, `dateModified >= datePublished` idêntico a `<time datetime="...">` e ao `<lastmod>` de `dist/sitemap-0.xml`), `FAQPage`, `BreadcrumbList`, e `SoftwareApplication` (para `app !== 'compare'`), com **zero `aggregateRating` inventado**.
  - Toda `<img>` deve ter `alt`, `width`, `height` e `loading="lazy"`.
  - A contagem total de artigos renderizados deve bater exatamente com o valor esperado em `scripts/verify.mjs` (`assert.equal(articleCount, ...)`).

---

## 4. Checklist Obrigatório ao Adicionar Novo Artigo ou Novo App

Siga esta sequência na ordem exata:

1. **`apps308/src/data/articles.ts`:**
   - Crie o artigo nos 3 idiomas (`en`, `es`, `pt`) com o mesmo `id`, `slug` único e localizado, `title` (≤ ~55 chars, sem `| apps308`; o sufixo renderizado soma +10), `description` (140–156 chars), `intro` com resposta na 1ª frase, `tables` (`afterSectionIndex: 0`), `topCallout` (quando aplicável), `faq`, `pros`, `cons`, `verdict` e `modifiedDate`.
   - Se for **novo app**, adicione a entrada correspondente em `apps` (nome, URL oficial verificada ou canônica do artigo se não houver página oficial pública confiável, `os`, `sources[]`).
   - Se for **comparativo** (`app: 'compare'`), adicione a regra do `article.id` em `defaultSourcesFor(article)`.
   - Se o app tiver `sources` próprias por artigo e não quiser mesclar as fontes genéricas de `apps[article.app]`, inclua `article.app` na condição de exceção de `defaultSourcesFor` (como `attapoll`, `tiktoklite`, `dramagood`, `cashfortunedrama`) ou ajuste `sourcesFor`.
2. **`apps308/src/assets/screenshots/`:**
   - Processe as novas capturas via `sharp` para `en-<key>.webp`, `es-<key>.webp` e `pt-<key>.webp` (sem barra de status/dados pessoais) **ou** liste as chaves `.webp` existentes que serão reutilizadas em `imageKey`, `secondImage` e `section.image`.
3. **`apps308/src/components/AppCover.astro` e `apps308/src/styles/global.css`:**
   - Adicione `variant === '<id>'` em `names`, `label` (se comparativo) e `tag.{en,es,pt}['<id>']` **sempre antes** do fallback `app === '...'`.
   - Se for **novo app**, adicione também o logotipo/marca em `AppCover.astro` e as classes `.cover-<app>` / `.mark-<app>` em `src/styles/global.css`.
4. **`apps308/src/data/articleDates.ts`:**
   - Registre `publishedDate` do novo `id` (ou novo `app`) **antes** de regras amplas por `article.app` (ex.: `article.id === 'dramabox-recharge'` precisa vir antes de `article.app === 'dramabox'` para não herdar data antiga).
5. **`apps308/src/pages/[locale]/[slug].astro`:**
   - Se for **novo app**:
     - Inclua na lógica de `applicationCategory` do schema `SoftwareApplication` (`UtilitiesApplication`, `EntertainmentApplication` ou `LifestyleApplication`) e verifique a `url` usada no schema (use a URL canônica do próprio artigo quando não houver listagem oficial confiável na loja, evitando inventar `packageId`).
     - Inclua `article.app` na lista de screenshot principal (linha 58) ou configure via `imageKey` / `section.image`.
     - Se o app tiver **2 ou mais artigos**, adicione-o em `isCluster` e `clusterHeading` (nos 3 idiomas) para ativar o `<nav class="cluster-box">` e o rodapé de série.
     - Se **não** deve exibir `AffiliateBox` ao final do artigo (ex.: app sem link oficial ou comparativo multi-app), inclua na lista de exclusão da linha 69 (`!['compare','freecash','pawns','primeopinion','cashfortunedrama'].includes(article.app)`).
6. **`apps308/src/data/affiliates.json` e `apps308/src/components/AffiliateBox.astro`:**
   - Se houver novo programa de afiliado/convite, cadastre em `affiliates.json` apenas com código/URL comprovados (mantenha `null` quando não verificado) e adicione copy localizada em `AffiliateBox.astro`.
7. **Interlinking bidirecional e anti-canibalização:**
   - Atualize os artigos pais/irmãos do cluster nos 3 idiomas adicionando links contextuais inline (`[âncora](/caminho/)`), `relatedIds` e `modifiedDate` com a data da edição.
   - Em clusters com múltiplos artigos em um mesmo idioma, padronize a **âncora do artigo pilar** apontando sempre para a URL principal para evitar canibalização no Google.
8. **`apps308/scripts/verify.mjs`:**
   - Atualize a contagem total em `assert.equal(articleCount, <NOVO_TOTAL>, ...)` (cada nova pauta trilíngue adiciona `+3` artigos). Se o novo app tiver link de afiliado obrigatório, adicione também a checagem correspondente.
9. **Validação técnica obrigatória:**
   - Rode `pnpm --dir apps308 build && pnpm --dir apps308 verify`.
   - Inspecione o HTML gerado em `apps308/dist/` e `apps308/dist/sitemap-0.xml` (títulos sem `| apps308` duplicado, `0` vazamentos `[texto](url)`, `rel="sponsored noopener"` em todos os links de afiliado/convite, `<figure>`, `<table>`, `<aside class="article-callout">`, `hreflang` recíproco e `<lastmod>`).
10. **Registro histórico:**
    - Documente a etapa executada em `analises/melhorias-aplicadas.md` (URLs, arquivos alterados, validações e contagens finais).

---

## 5. Rigor Factual e Anti-Alucinação

- **Nunca invente `packageId` ou URLs de loja:** só cite `com.pacote.app` e links da Google Play / App Store quando confirmados diretamente em captura ou fonte oficial. Se um app aparecer apenas em anúncio/iOS ou mudar de nome (clones), descreva exatamente o que foi observado nas telas.
- **Nunca invente garantias de reembolso ou prazos fixos:** não afirme *"30 dias de garantia"* (ex.: VPNs) ou *"14 a 30 dias"* (ex.: ofertas de jogos) se não houver comprovação nas fontes usadas pelo projeto.
- **Nunca invente mínimos ou preços fixos em USD quando forem regionalizados:** pacotes de moedas (`DramaBox Top Up`), assinaturas VIP e mínimos de saque (`AttaPoll`: `$3` vs. `€2,50`; `Microsoft Rewards`: Nível 1 vs. Nível 2 por país) variam por loja, moeda e conta — explicite a variação regional e cite exemplos apenas com o contexto da loja/captura onde foram observados.
- **Nunca crie avaliações ou notas fictícias:** não adicione `aggregateRating` nos schemas e não invente provas de pagamento; mantenha `null` em `affiliates.json` quando um programa estiver pendente ou não verificado.
- **Nunca cite recursos de plataforma não confirmados:** antes de recomendar execução em PC (ex.: *Google Play Games* ou instalador desktop), confirme na fonte oficial se o app realmente possui versão oficial para computador.
