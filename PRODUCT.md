# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + TypeScript, plain CSS, SVG charts, built into one offline
`index.html` (vite-plugin-singlefile). Engine reused from `apps/meu-dinheiro`.
No runtime network requests and no external fonts.

## Users

Owners of small Brazilian companies doing building maintenance, renovation
(reforma), façade recovery, painting and waterproofing, mostly in the Simples
Nacional tax regime, roughly 1 to 15 people. The owner runs several contracts
(obras) at once, receives from clients in installments over many months and
pays labor, materials and suppliers continuously. No accounting training.
Mostly at a desktop computer; employees may enter transactions too.

## Product Purpose

Obrativa ("obra ativa") is a cash-basis financial controller: one entry feeds
both the company's annual cash flow per bank and the financial control of the
obra it belongs to. Success: the owner answers at once how much money there
is, how much each contract still owes, how much each obra received and spent,
and how much was paid to any supplier, worker or category in any period,
without parallel spreadsheets. Source: the client's briefing
`OBRA ATIVA APP.pdf` (25 chapters) and its 5-screen visual reference.

## Positioning

The simplicity of Microsoft Money (register-style statement, payee,
category : subcategory, memo) plus what Money lacked: obra on every entry,
duplicate-free payees, retroactive entries with stable same-day order, mass
reclassification, change history, multi-year reports and smart statement
import. Not a budgeting, costing or project-management system.

## Operating Context

- Cash flows are per bank and fiscal year ("Fluxo de Caixa Inter 2026"); the
  final balance carries into the next year as an opening balance, never as
  revenue. Obras keep their identity across years.
- Entries: date, payee/payer, value, category : subcategory, obra (or the
  "Escritório" cost center, or none), memo. Transfers between the company's
  own banks never count as revenue or expense.
- Bank statements arrive as OFX or CSV.
- Reports are printed or exported to PDF and Excel.

## Capabilities and Constraints

- Single user, offline, data stored in the browser (IndexedDB) with manual
  backup files. Online features (Open Finance, AI classification) are coded
  but disabled by a flag until approval.
- Cash basis: balances and results come only from real entries. Payables and
  receivables (consolidated briefing 17.11) are a separate planning layer:
  installments, reminders, own-crew forecast and a projected balance that is
  always labelled as a projection; a payment is settled by linking the real
  entry (never duplicated). Receipts are numbered and not fiscal documents.
- Out of scope for v1 (briefing 19.2): budgets, cost compositions, proposals,
  physical-financial schedules, stock, productivity, profit projections.
- Optional and off by default: administrative cost apportionment (rateio)
  between obras.
- Optional, on demand (briefing ch. 14): "Ratear entre obras" splits one
  CUSTO DIRETO OBRA expense across obras (proportional to contracts as a
  suggestion, or manual by values or percentages), keeping its category and a
  single bank exit; independent of the administrative rateio. Card purchases
  enter when the invoice is paid; no card or invoice module.
- Bank flows require institution, branch and account number with check digit
  (reused when the next year is opened); a "Caixa" flow for cash needs none.
- Annual cash book (Livro Caixa Anual, briefing 10.8): built from the entries
  already recorded, printable to PDF with opening/closing terms, numbered pages
  and signature fields; formal legal fitness is the accountant's call.
- Obra data is optional: contract value, start date and operational
  conclusion date, plus contract addenda (aditivos) that update the contract
  value. Installments live in the payables/receivables module.
- Desktop-first; must remain usable at phone width.
- Language pt-BR only; currency BRL; Brazilian date and number formats.
- Undecided: subscription pricing (SaaS is the stated intent), multi-user and
  permissions (briefing ch. 16, needs the online version).

## Brand Commitments

Name: Obrativa (from "obra ativa"). Brand kit at
`Área de Trabalho/Identidade Visual/marcas/obrativa/kit` (guia-de-uso.md is binding):
- Symbol: two builder's squares closing a square; the center square is the cash
  ("fechar o esquadro é fechar o caixa"). Logo files are final curves; never
  retype, stretch, recolor, or add effects.
- Colors: Amarelo Obrativa #FFC21A, Preto Obra #151515, Branco Cal #F6F3EC,
  Cinza Concreto #8A8780. Approved pairs: black on yellow (primary), yellow on
  black (reverse), black on white/Branco Cal. Never yellow on white.
- Type: General Sans (Fontshare, free commercial use) for titles and UI; system
  sans acceptable for body text on the web.
- Minimum sizes: horizontal 96 px wide, symbol 24 px, small symbol 16 px.
- The client's visual reference uses a blue palette; its layout is followed,
  its colors are replaced by the brand tokens.

## Evidence on Hand

The client's briefing (decades running an engineering and building
maintenance company) and the visual reference it came with. No customers or
real company data yet; sample data in the app must be clearly fictitious.

## Product Principles

1. One entry, two controls: nothing is typed twice.
2. Straight to the point: the five questions per obra (contract, received,
   spent, balance, still to receive) in two clicks.
3. Correcting is easy and safe: change, delete, reclassify in batch, always
   with history and undo.
4. Explain, don't just show: numbers and charts come with a plain sentence.
5. Suggest, never decide: imports, duplicates and finished obras are pointed
   out; the owner confirms.
6. The owner's data stays with the owner.
