# Entrega — apps308

Data: 5 de novembro de 2026, America/Fortaleza.

## Implementação

Astro 7.4.5, SSG, três idiomas em subdiretórios, fontes do sistema e CSS responsivo. Cinco pautas originais com versões localizadas em inglês, espanhol e português, totalizando **15 artigos**. São **26 páginas HTML** no build completo. A raiz oferece escolha de idioma no HTML e Cloudflare `_redirects` encaminha `/` para `/en/`, sem geolocalização.

Canonical absoluto em todas as páginas, quatro alternates (en, es, pt e x-default), hreflang recíproco por ID editorial mesmo com slugs diferentes. `@astrojs/sitemap` gera alternates correspondentes e x-default no sitemap. Article e FAQPage correspondem ao conteúdo visível. SoftwareApplication aparece nos guias de ferramentas; preço zero somente para o Lens. Não inventamos avaliações editoriais, notas de usuários nem preços de ofertas variáveis.

Busca e categorias usam JavaScript pequeno apenas na home. Artigos são HTML estático; os três artigos Freecash têm um script adicional mínimo para copiar o identificador do link. Os campos não verificados não exibem botões de copiar.

## Pesquisa de demanda

Consulta real ao Google Trends por navegador em 5/11/2026. Filtros: pesquisa na Web, todas as categorias, últimos 12 meses; termos comparados: Freecash, Google Opinion Rewards, Microsoft Rewards, Google Lens. Mercados: Brasil, Estados Unidos e Espanha.

| Termo | Brasil | Estados Unidos | Espanha |
| --- | ---: | ---: | ---: |
| Freecash | 2 | 18 | 4 |
| Google Opinion Rewards | 3 | 3 | 1 |
| Microsoft Rewards | 28 | 17 | 15 |
| Google Lens | 39 | 76 | 86 |

Valores: médias de **interesse relativo normalizado** exibidas na comparação de cada país; não representam buscas mensais, concorrência SEO ou índices diretamente comparáveis entre países. A última semana é parcial. CSVs da série semanal foram salvos em `google-trends-br.csv`, `google-trends-us.csv` e `google-trends-es.csv`.

A lista de consultas relacionadas em ascensão do Lens no Brasil mostrava “como buscar usando o google lens”, “how to use google lens” e “how to search using google lens” com aumento repentino. Esse sinal favoreceu um tutorial prático. Microsoft Rewards apresentou interesse recorrente e consulta relacionada a suporte. Opinion Rewards e Freecash têm interesse menor na comparação brasileira; entram pela utilidade das dúvidas e pelo assunto de recompensas, não por comprovação de grande volume ou baixa concorrência. O comparativo responde à diferença entre créditos, pontos e ofertas, consolidando as mesmas pautas. Não foi feita uma medição de concorrência orgânica ou estimativa de tráfego.

Consultas reproduzíveis:

- https://trends.google.com/trends/explore?geo=BR&date=today%2012-m&q=Freecash,Google%20Opinion%20Rewards,Microsoft%20Rewards,Google%20Lens
- https://trends.google.com/trends/explore?geo=US&date=today%2012-m&q=Freecash,Google%20Opinion%20Rewards,Microsoft%20Rewards,Google%20Lens
- https://trends.google.com/trends/explore?geo=ES&date=today%2012-m&q=Freecash,Google%20Opinion%20Rewards,Microsoft%20Rewards,Google%20Lens

## Artigos e URLs canônicas de destino

Os links abaixo são os destinos configurados no projeto. **Não confirmam publicação no domínio.**

| Pauta e justificativa | Idioma | URL |
| --- | --- | --- |
| Google Lens — maior interesse relativo; consultas relacionadas de tutorial em ascensão | en | https://www.apps308.com/en/how-to-use-google-lens/ |
| Google Lens — versão em espanhol para a demanda observada na Espanha | es | https://www.apps308.com/es/como-usar-google-lens/ |
| Google Lens — intenção “como usar” observada nas consultas relacionadas do Brasil | pt | https://www.apps308.com/pt/como-usar-google-lens/ |
| Opinion Rewards — entender recompensas e elegibilidade; demanda menor observada | en | https://www.apps308.com/en/google-opinion-rewards-how-it-works/ |
| Opinion Rewards — versão localizada, sem presumir regras iguais entre países | es | https://www.apps308.com/es/google-opinion-rewards-como-funciona/ |
| Opinion Rewards — explicar crédito Play versus saque/Pix no Android | pt | https://www.apps308.com/pt/google-opinion-rewards-como-funciona/ |
| Microsoft Rewards — demanda recorrente; entender pontos e suporte | en | https://www.apps308.com/en/microsoft-rewards-points-guide/ |
| Microsoft Rewards — catálogo e regras regionais localizados | es | https://www.apps308.com/es/guia-puntos-microsoft-rewards/ |
| Microsoft Rewards — interesse recorrente no Brasil e dúvidas de resgate | pt | https://www.apps308.com/pt/guia-pontos-microsoft-rewards/ |
| Freecash — interesse observado e programa de indicação documentado | en | https://www.apps308.com/en/freecash-offers-referrals-guide/ |
| Freecash — condições de ofertas e indicações explicadas em espanhol | es | https://www.apps308.com/es/freecash-ofertas-invitaciones/ |
| Freecash — leitura de regras e captura do link pessoal no Android | pt | https://www.apps308.com/pt/freecash-ofertas-convites/ |
| Comparativo — intenção informativa derivada dos três programas pesquisados | en | https://www.apps308.com/en/reward-apps-cash-points-credit/ |
| Comparativo — diferenciar dinheiro, pontos e crédito em espanhol | es | https://www.apps308.com/es/apps-recompensas-dinero-puntos-credito/ |
| Comparativo — diferenciar dinheiro, pontos e crédito em português | pt | https://www.apps308.com/pt/apps-recompensas-dinheiro-pontos-credito/ |

## Aparelho, convites e capturas

A conexão USB foi confirmada por `adb devices`. Opinion Rewards e Freecash foram instalados pela Play Store após autorização explícita. O login foi realizado selecionando a conta Google solicitada. Os termos exibidos por cada serviço foram aceitos após confirmação específica do usuário. Não realizamos compra, saque, resgate, envio de convite a contatos ou mudança de localização.

| Serviço | Acesso realizado | Código/identificador | Link e estado |
| --- | --- | --- | --- |
| Google Opinion Rewards | App Android autenticado, tela principal e compartilhamento | Nenhum código pessoal exibido | https://googleopinionrewards.page.link/share — link genérico real extraído; não comprova bônus. Respondeu HTTP 200 após redirecionamento na verificação. |
| Freecash | App Android autenticado, Recompensas > Convide Amigos | `3C7GKG`, identificador presente no link | https://freecash.com/r/3C7GKG — link pessoal real extraído da tela e inserido nos três guias Freecash com `rel=sponsored` e aviso de comissão. Não foi testado como cupom manual. |
| Microsoft Rewards | Página pública no navegador Android | Pendente | Página capturada; conta não autenticada, código pessoal não extraído. |
| Google Lens | Página oficial no navegador Android | Não verificado/não aplicável ao guia | Não anunciamos programa de indicação ou pagamento. |

O app Freecash mostrou uma interface de afiliados por níveis. A documentação pública pode descrever outro modelo/região; não prometemos a aplicação de um bônus ou percentual universal. A tela principal mostrava nenhuma oferta Android disponível naquele momento.

Capturas originais geradas por `adb exec-out screencap -p`. As imagens publicáveis excluem barra de status, avatar e saldo quando presentes. Há cinco enquadramentos: tarefas do Opinion Rewards, página pública Microsoft, página oficial Lens, link de indicação Freecash e tela Freecash sem ofertas. As versões de arquivos por idioma reutilizam a mesma evidência original, sem simular tradução da interface. O comparativo usa a captura do Opinion Rewards, identificada como exemplo de um modelo e não teste comparativo de pagamentos. Os **15 artigos** têm pelo menos uma imagem original; os três guias Freecash têm duas. São **18 inserções** no HTML, com width, height e lazy loading. O manifesto registra recortes e origem em `capture-manifest.json`.

Nenhuma captura comprova pagamento ou renda produzida neste trabalho. Não foram feitas pesquisas remuneradas nem concluídas ofertas. Capturas brutas e telas de aceite com contas pessoais ficam fora do repositório.

## Validação

- `pnpm build`: concluído, 26 páginas.
- `pnpm verify`: concluído, 15 artigos, 781 referências locais e 18 imagens; canonical, alternates recíprocos, schema, sitemap e arquivos locais verificados.
- Browser QA: home desktop e 390×844; filtros de categoria, busca, FAQ e troca para o artigo equivalente em espanhol verificados.
- Lighthouse: ver `lighthouse-summary.json`, `lighthouse-home.json` e `lighthouse-article.json`. Medidas de laboratório local, não PageSpeed de produção nem dados de campo.
- Repositório local inicializado, branch `main`, origem configurada para https://github.com/josivaldo88f-crypto/apps308.git.
- Repositório remoto criado e sua existência confirmada no navegador.
- Publicação autorizada pelo usuário e concluída pela integração autenticada do GitHub. Um commit final substitui a árvore parcial do envio pelo navegador pela árvore completa deste projeto. A comparação entre árvores Git verifica a correspondência integral dos arquivos. A versão está na branch main de https://github.com/josivaldo88f-crypto/apps308. Deploy no Cloudflare e configuração do domínio permanecem pendentes. Nenhuma alteração de DNS foi feita.

## Pendências explícitas

1. Acompanhar o workflow de validação no GitHub após o commit de publicação.
2. Conectar o repositório ao Cloudflare Pages seguindo `DEPLOY-CLOUDFLARE.md`; depois validar o domínio.
3. Verificar códigos pessoais Microsoft Rewards se houver interesse em completar essa integração.
4. Fazer testes de uso/pagamento adicionais antes de publicar avaliações com notas ou alegações de saque.
5. Medir PageSpeed no domínio depois do deploy e acompanhar Core Web Vitals com dados de campo.
