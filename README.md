# Obrativa

Controle financeiro para pequenas empresas de obras, reformas e manutenção
predial, pelo regime de caixa. **Um único lançamento, dois controles:** cada
pagamento ou recebimento atualiza o fluxo de caixa do banco e o controle da
obra a que pertence. Segue o briefing `OBRA ATIVA APP.pdf` e a referência
visual que veio com ele, com as cores, a fonte e o logo da marca. Versão de
teste: app web 100% offline, um usuário.

## Como usar

- **Testar sem instalar nada:** abra `dist/index.html` no Chrome ou Edge. É um
  único arquivo com tudo embutido.
- **Publicar (ex.: Netlify):** arraste a pasta `dist` em app.netlify.com/drop.
- **Desenvolver:** `npm install`, depois `npm run dev` (porta 5173 ou a indicada).
- **Gerar o arquivo:** `npm run build`.

Os dados ficam no navegador (IndexedDB), salvos automaticamente. Backup em
Configurações › Backup e dados (arquivo `.obra`). No primeiro uso, uma janela
só pede o nome da empresa e o primeiro fluxo de caixa; há também a empresa de
exemplo (fictícia). Backups da versão anterior são convertidos ao abrir: as
contas viram fluxos do ano e só os lançamentos já pagos são mantidos.

## Telas

| Tela | O que faz |
|---|---|
| Início (Painel Financeiro) | Saldo consolidado, entradas e saídas do mês, fluxos de caixa com saldo atual, entradas × saídas dos últimos 6 meses, ações rápidas e Resumo das Obras |
| Fluxo de Caixa | Extrato por fluxo (banco + exercício) em ordem de data, com saldo corrido; barra de lançamento no pé do extrato, como no Money (lança embaixo e o lançamento aparece logo acima, com um som curto que se desliga em Configurações); **Ratear entre obras** (despesa de CUSTO DIRETO OBRA dividida entre obras, proporcional aos contratos ou por valores/percentuais, com uma única saída no banco); divisão de um pagamento em categorias; arrastar a linha (ou Alt+↑/↓) muda a ordem dos lançamentos do mesmo dia; Alterar transação, Excluir, Alterar em lote, Transferência, Conferir saldo, Exportar |
| Obras | Resumo das Obras: contrato, recebido (% do contrato), despesas, saldo financeiro atual (verde/vermelho) e saldo a receber, acumulados em todos os exercícios |
| Obra | Os cinco números do contrato, **contrato e aditivos** (contrato original, cada aditivo e valor atualizado), despesas por categoria/subcategoria, indicadores, evolução recebido × gasto, quem mais recebeu, últimos lançamentos; concluir/reabrir |
| A pagar e receber | Contas a pagar e a receber em parcelas (briefing 17.11): contrato da obra, aditivo, fornecedor, empreitada por medição (com redistribuição do saldo) e cobrança por unidade de condomínio com tarifa de boleto; correção sem/prefixada/por índice (estimativa enquanto o termo inicial for previsto); baixa vinculando o lançamento que já está no fluxo, ou lançando agora, sem duplicar; mão de obra própria prevista (oficial, meio-oficial, ajudante × diária × dias) contra o pago; resumo a receber × a pagar por mês e por obra e saldo projetado (sempre marcado como projeção); lembretes de vencimento no Início; recibo numerado com logotipo em PDF e envio opcional pelo WhatsApp (não é documento fiscal) |
| Relatórios | Visão geral (com a frase que resume cada gráfico), Fluxo de caixa, Receitas e despesas (sintético/analítico, agrupado por categoria, subcategoria, favorecido, obra, mês ou dia, comparação mês a mês), **Por favorecido** (quanto foi pago a cada pessoa, empresa ou empreiteiro no período, total por obra e cada pagamento), Movimentação detalhada e **Resumo das obras** (briefing 10.7: contratos, recebido até a data e no exercício, despesas, saldo realizado, saldo a receber à parte, % recebido, resultado contratual parcial, aviso de contrato sem valor) e **Livro Caixa Anual** (briefing 10.8: empresa, CNPJ, termo de abertura, contas identificadas, saldo inicial, movimentações em ordem de data com saldo, transferências entre contas próprias uma vez só, saldo final, termo de encerramento, assinaturas e folhas numeradas, em PDF); filtros combináveis em vários fluxos e exercícios; clique no total para ver os lançamentos; Excel (.xlsx), PDF e filtros salvos |
| Importar extrato | OFX/CSV com reconhecimento de favorecido, sugestão de categoria pelo histórico e por regras, obra obrigatória quando o fornecedor atende várias (ou rateio entre obras na própria linha), duplicidades apontadas e conferência do saldo antes de confirmar |
| Cadastros | Fluxos de caixa (abrir novo exercício com saldo transportado, aviso de divergência), plano de categorias do briefing (cap. 6) com a descrição de cada subcategoria, categorias de entradas e saídas, movimentações fora do resultado operacional; renomear em todos os anos, reorganizar, mover, desativar e transferir antes de excluir e favorecidos (duplicados e unificação) |
| Configurações | Empresa e aviso de obra parada, logotipo para os recibos, rateio administrativo opcional com conferência mensal e encargos repartidos pela lotação de funcionários, histórico de alterações com desfazer e recuperar, backup |
| Passo a passo | 11 guias curtos (inclui "Contas a pagar e a receber", "Ratear uma compra entre obras" e "Livro Caixa Anual") e o **Teste funcional** com os 12 passos do teste básico do briefing (cap. 23), que se marcam sozinhos conforme o uso |

Cada tela tem endereço próprio (`#/obras`, `#/obra/…`, `#/relatorios?f=…`): o botão Voltar do navegador e do mouse funciona e dá para salvar o link.

Atalhos: **N** novo lançamento, **/** busca, **Ctrl+Z** desfazer. Na lista do
extrato: **Enter** altera, **Del** exclui, **Espaço** marca.

## Regras do briefing que o app garante

- Saldo transportado entre exercícios e transferências entre bancos nunca
  entram como receita ou despesa.
- Lançamentos retroativos entram na data certa; os do mesmo dia mantêm a ordem
  de inclusão (sequência interna) e os saldos seguintes são recalculados.
- Renomear categoria muda só o nome, em todos os lançamentos de todos os anos;
  reclassificar (lote) muda só os lançamentos selecionados. As duas ficam no
  histórico.
- “Rodrigo Antunes”, “rodrigo antunes” e “RODRIGO ANTUNES” são o mesmo
  favorecido; grafias parecidas são sugeridas e podem ser unificadas.
- Obra nova pode ser cadastrada no próprio lançamento, só com nome e valor do
  contrato. O app pergunta, mas nunca encerra uma obra sozinho.
- Rateio administrativo desligado por padrão; quando ligado, só aparece na
  obra depois de conferido e confirmado mês a mês, e não cria saída no banco.

## Fora desta versão

Orçamentos, composições de custo e propostas saíram (briefing 19.2). A
projeção de caixa existe só como consulta em A pagar e receber, sempre
marcada como projeção (briefing consolidado, 17.11). Planos comerciais,
versão em nuvem e assinatura (plano comercial) não fazem parte deste app
offline. Login, permissões, Open Finance e sugestões por IA dependem
da versão online: o código fica em `src/online/` e só funciona com
`RECURSOS_ONLINE = true` em `src/config.ts`. Com `false`, o app não faz
nenhuma requisição de rede.

## Identidade visual

Segue `Identidade Visual/marcas/obrativa/kit/guia-de-uso.md`: Amarelo
Obrativa #FFC21A, Preto Obra #151515, Branco Cal #F6F3EC, Cinza Concreto
#8A8780; logo em `src/assets/marca/`. Fonte General Sans (Indian Type Foundry,
licença ITF Free Font License via Fontshare) embutida sem alteração em
`src/assets/fonts/`. A licença permite usar no próprio app; se o Obrativa virar
um serviço vendido para outras empresas, confira a seção 02 da licença.
