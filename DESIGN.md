---
name: Obrativa
description: Cash flow and job pricing for small Brazilian renovation companies, read as a paint fan deck.
colors:
  amarelo-obrativa: "#ffc21a"
  amarelo-pressionado: "#f2b200"
  preto-obra: "#151515"
  branco-cal: "#f6f3ec"
  cinza-concreto: "#8a8780"
  grafite-hover: "#2a2926"
  grafite-borda: "#4a4843"
  trilho-texto: "#e2ded4"
  trilho-suave: "#a8a49b"
  papel: "#ffffff"
  papel-2: "#faf8f3"
  filete: "#e6e1d6"
  filete-forte: "#cfc9bc"
  tinta-2: "#4d4a44"
  tinta-3: "#67635c"
  terracota: "#b5452f"
  terracota-fundo: "#fbe9e4"
  musgo: "#3d7a3a"
  musgo-fundo: "#e7f1e3"
  ocre: "#8a5d0b"
  ocre-fundo: "#fdf3dc"
  serie-ouro-velho: "#b08a14"
  serie-tabaco: "#5c3d1e"
  serie-areia: "#d8cfb8"
  serie-cal-escura: "#ece7dc"
  obra-grafite: "#566170"
  obra-ocre: "#d0921f"
  obra-aco: "#3f7cac"
  obra-musgo: "#5f8f45"
  obra-ameixa: "#8e5572"
  obra-petroleo: "#2a7f80"
  obra-argila: "#9a6a4a"
  obra-lavanda: "#6c6aa8"
typography:
  display:
    fontFamily: "General Sans, Segoe UI Variable Display, Segoe UI, system-ui, -apple-system, Roboto, Arial, sans-serif"
    fontSize: "28px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.8px"
    fontFeature: "tnum"
  headline:
    fontFamily: "General Sans, Segoe UI Variable Display, Segoe UI, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.5px"
  title:
    fontFamily: "General Sans, Segoe UI Variable Display, Segoe UI, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 650
    lineHeight: 1.45
    letterSpacing: "-0.1px"
  body:
    fontFamily: "General Sans, Segoe UI Variable Text, Segoe UI, system-ui, -apple-system, Helvetica Neue, Roboto, Arial, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: "tnum"
  label:
    fontFamily: "General Sans, Segoe UI Variable Text, Segoe UI, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.45
  code:
    fontFamily: "General Sans, Segoe UI Variable Text, Segoe UI, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.8px"
rounded:
  fita: "3px"
  campo: "7px"
  painel: "10px"
  dialogo: "14px"
  pilula: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "18px"
  grade: "16px"
  pagina: "26px 32px 56px"
components:
  button-primary:
    backgroundColor: "{colors.amarelo-obrativa}"
    textColor: "{colors.preto-obra}"
    rounded: "{rounded.campo}"
    padding: "8px 14px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.amarelo-pressionado}"
    textColor: "{colors.preto-obra}"
  button-secondary:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.preto-obra}"
    rounded: "{rounded.campo}"
    padding: "8px 14px"
  button-secondary-hover:
    backgroundColor: "{colors.papel-2}"
  button-ghost:
    textColor: "{colors.preto-obra}"
    rounded: "{rounded.campo}"
    padding: "8px 14px"
  button-danger:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.terracota}"
    rounded: "{rounded.campo}"
    padding: "8px 14px"
  rail:
    backgroundColor: "{colors.preto-obra}"
    textColor: "{colors.trilho-texto}"
    width: "236px"
  rail-item-active:
    backgroundColor: "{colors.amarelo-obrativa}"
    textColor: "{colors.preto-obra}"
    rounded: "{rounded.campo}"
    padding: "8px 10px"
  panel:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.preto-obra}"
    rounded: "{rounded.painel}"
    padding: "14px 18px 18px"
  indicator-card:
    backgroundColor: "{colors.papel}"
    rounded: "{rounded.painel}"
    padding: "16px 18px"
  input:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.preto-obra}"
    rounded: "{rounded.campo}"
    padding: "8px 10px"
  tag:
    backgroundColor: "{colors.papel-2}"
    textColor: "{colors.tinta-2}"
    rounded: "{rounded.pilula}"
    padding: "2px 8px"
  tag-overrun:
    backgroundColor: "{colors.terracota-fundo}"
    textColor: "{colors.terracota}"
  tag-ok:
    backgroundColor: "{colors.musgo-fundo}"
    textColor: "{colors.musgo}"
  tag-warning:
    backgroundColor: "{colors.ocre-fundo}"
    textColor: "{colors.ocre}"
  dialog:
    backgroundColor: "{colors.papel}"
    rounded: "{rounded.dialogo}"
    width: "600px"
---

# Design System: Obrativa

## Overview

**Creative North Star: "The Paint Fan Deck"**

Every obra is a colour card from a paint fan deck. Its seven-tone strip fills from the palest tint to the deepest shade as the client pays the contract, so how much of each contract is already in the bank reads at a glance. Whether the obra's own cash is positive is carried by the moss/terracotta balance beside it. The strip is the only place where saturated colour lives; everything around it is the Obrativa brand kit, quiet and structural.

The shell is a Preto Obra rail carrying the reverse horizontal logo, a Branco Cal ground, and white panels with hairline rules and a low soft shadow. Amarelo Obrativa marks where you are (the active nav item and the current import step), what to do next (the primary button and the primary quick action), and the cash figure's icon tile, always with black on it. The layout follows the client's reference (a light top bar with search and date, indicator cards with coloured icon tiles, tables with a title and one-line explanation), recoloured with the brand tokens. Density is that of a working ledger: 14.5 px body, tabular numerals everywhere, hairline tables, a strict 12-column grid. Every chart carries a plain sentence beside it.

The world explicitly refuses the white-cards-plus-blue-accent finance dashboard: no blue chrome, no gradient hero numbers, no decorative colour outside the obra strips and the semantic states.

**Key Characteristics:**
- Brand-kit shell: Preto Obra rail, Branco Cal ground, white hairline panels, yellow only for "here" and "do this".
- Obra hues are data, never chrome: eight hues, seven graduated tints each.
- Terracotta means loss or overrun, moss means profit or done, ocre means attention.
- Tabular numerals and Intl BRL formatting on every figure.
- General Sans for everything, system sans as fallback.
- Own 20-grid line icon set, 1.6 stroke, round caps.

## Colors

A warm neutral brand palette (yellow, near-black, lime-wash white, concrete grey) carrying a separate, muted data palette of eight obra hues and three semantic states.

### Primary
- **Amarelo Obrativa** (amarelo-obrativa): the active rail item, the primary button, the toast action on black, the input focus glow (45% alpha). Always paired with Preto Obra text or a Preto Obra ground. Pressed/hover deepens to Amarelo Pressionado (amarelo-pressionado).

### Neutral
- **Preto Obra** (preto-obra): the rail ground, all primary ink, focus outline, active tab underline, the selected-choice outline, the obras icon tile (with a yellow icon), progress bars, the first category in charts.
- **Branco Cal** (branco-cal): the page ground behind panels.
- **Cinza Concreto** (cinza-concreto): a category-series tone; not used for text.
- **Grafite Hover / Grafite Borda** (grafite-hover, grafite-borda): rail hover fill and divider; hover border on secondary buttons and choices.
- **Trilho Texto / Trilho Suave** (trilho-texto, trilho-suave): nav text and nav group labels / footer on the black rail.
- **Papel / Papel 2** (papel, papel-2): panel surface; recessed surface for hovered rows, segmented controls, empty strip tones, group rows.
- **Filete / Filete Forte** (filete, filete-forte): hairline rules between rows and around panels; stronger rule for table heads, inputs, secondary button borders.
- **Tinta 2 / Tinta 3** (tinta-2, tinta-3): secondary text (labels, sentences under figures); tertiary text (help text, chip codes, completed steps).

### Semantic
- **Terracota** (terracota, on terracota-fundo): expenses and outflows, negative balances (obra balance, saldo), duplicates in an import, danger buttons, the rail count badge, the Saídas icon tile.
- **Musgo** (musgo, on musgo-fundo): receipts and inflows, positive obra balance, "em execução" and "conciliado" tags, done markers, the Entradas icon tile.
- **Ocre** (ocre, on ocre-fundo): attention: an obra with no expense for 30 days, pending import lines, an opening balance that no longer matches the previous year.
- **Alert hairlines** (#f0c2b6 terracotta, #f1d79a ocre, #c8dfc1 moss, #f2d77a yellow): the 1px borders of tinted alerts, tags and the selected row; never text.
- **Amarelo fundo** (#fff4d1): the selected statement row and the saldo card wash; never text.

### Obra hues (data palette)
Eight bases in fixed order, index 0 first: Grafite, Ocre, Aço, Musgo, Ameixa, Petróleo, Argila, Lavanda (obra-grafite through obra-lavanda). Each base generates seven tints by mixing with white at 82, 66, 48, 26% and 0 (the base, tone 4), then with black at 18 and 34%. A new obra takes the first free index.

### Category series (charts)
`['#151515', '#b08a14', '#8a8780', '#5c3d1e', '#d8cfb8', '#ece7dc']`: Preto Obra, Ouro Velho, Cinza Concreto, Tabaco, Areia, Cal Escura. Brand neutrals plus a dark gold, so categories never compete with obra hues or with the semantic green and terracotta.

### Named Rules
**The Two Yellows Rule.** Amarelo Obrativa marks only the current place (active nav) and the primary action, always with black text. Never yellow text or yellow strokes on white or Branco Cal.

**The Terracotta Is Loss Rule.** Terracotta is a meaning, not a hue: outflow, negative balance, duplicate. It is never an obra hue and never a category colour.

**The Data Only Rule.** Obra hues appear only in the strip, the obra dot, and per-obra chart marks. Chrome never borrows them.

## Typography

**Display Font:** General Sans (embedded variable woff2, 200-700) with Segoe UI Variable Display, system-ui fallback
**Body Font:** General Sans with Segoe UI Variable Text, system-ui fallback

**Character:** One grotesque throughout, worked by weight (400 body, 600 labels, 650 titles) and tight negative tracking on the large figures. Tabular numerals are set on body so every column of money aligns.

### Hierarchy
- Names written in capitals in the chart of accounts ("CUSTO DIRETO OBRA") stay in capitals in tables and pickers, and are written as a sentence ("Custo direto obra") inside sentences and chart legends.
- **Small label** (600, 12px): table heads, tags, sub-figures and helper lines; 11px only for keyboard hints, tooltip "?" and in-cell category caps.
- **Display** (650, clamp 19-25px, 1.2, -0.6px): indicator card figures; 21px in the five-figure obra row; 16px at phone width.
- **Headline** (650, 26px, 1.15, -0.5px): page titles in the top row. Dialog titles step down to 18px.
- **Title** (650, 15px, -0.1px): panel headings, with a 13px Tinta 2 sentence beneath.
- **Body** (400, 14.5px, 1.45): running text and tables. Explanatory sentences run at 13.5px in Tinta 2, capped at 72ch.
- **Label** (600, 13px): field labels, buttons (14px), table heads (12px, Tinta 2).
- **Code** (600, 11-12px, 0.4-0.6px tracking, uppercase): the category name set beneath the subcategory, and group headers in pickers and search results.

### Named Rules
**The Tabular Rule.** Every number is tabular and formatted by Intl pt-BR BRL; negatives use the one Intl form ("-R$ 1.234,56"), and zero never shows as "-R$ 0,00".

**The Name First Rule.** Headings stand alone at the top of their block. Codes, hue names and metadata sit beneath the name, never above it as an eyebrow.

## Layout

A fixed 236px black rail and a scrolling stage. Pages pad 26px 32px 56px and cap at 1360px. A sticky top bar (Branco Cal at 92% with blur) carries the global search, the obra-without-expense notice and today's date. Content sits on a strict 12-column grid with 16px gutters; Início sets four 3-column indicator cards, then Fluxos de Caixa (with the six-month inflow/outflow chart) at 8 columns beside quick actions and first steps at 4, then the Resumo das Obras table full width. The Fluxo de Caixa screen stacks filters, four cards, the inline entry row and the statement. Panels pad 14px 18px 18px with headers at 14px 18px 0.

At 1280px the inline entry row wraps to four columns and the obra figures go three-up. At 1100px everything wider than 3 columns goes full width. At 760px the rail becomes a horizontal scrolling top bar, pages pad 18px 16px 40px, indicator cards go 2x2 with sentences hidden, grid gaps tighten to 10px, and wide tables scroll inside their panel so the page never scrolls sideways.

## Elevation & Depth

Mostly flat and tonal: Branco Cal ground, white panels, hairline rules do the structural work. A single low ambient shadow sits under panels and indicator cards so white separates from Branco Cal; clickable indicator cards lift 1px with a deeper shadow on hover; pickers, search results and the quick obra form float on a soft popover shadow; dialogs float on a heavy shadow over a dark veil. Shadow ink should read as Preto Obra.

### Shadow Vocabulary
- **Panel rest** (`box-shadow: 0 1px 2px rgb(21 21 21 / 0.06), 0 6px 18px -8px rgb(21 21 21 / 0.12)`): panels, indicator cards, toasts, tooltips.
- **Card lift** (`box-shadow: 0 2px 4px rgb(21 21 21 / 0.08), 0 12px 24px -12px rgb(21 21 21 / 0.25)`): clickable indicator card hover, with translateY(-1px).
- **Popover** (`box-shadow: 0 18px 40px -16px rgb(21 21 21 / 0.4)`): combo lists, global search results, quick obra form, fluxo picker.
- **Dialog** (`box-shadow: 0 24px 64px -12px rgb(0 0 0 / 0.35)`): modal dialogs only.
- **Segment on** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.08)`): the selected segment in a segmented control.

### Named Rules
**The Hairline First Rule.** Structure comes from 1px Filete rules and white-on-Cal contrast; shadow is a soft assist, never a hard offset and never a frame.

## Shapes

Gently rounded, practical corners: 10px for panels and cards, 7px for buttons, inputs, nav items, alerts, 14px for dialogs, a small tier of 4-6px for chips, list options, kbd hints and the hero strip tones, 3px for cell strip tones, full pills for tags and badges. Borders are always 1px hairlines; the only 2px strokes are focus outlines, the active tab underline and the selected-choice inset ring. Icons are the app's own: 20-unit grid, 1.6 stroke, round caps and joins, drawn at 16-18px.

## Components

### Buttons
Compact and plain, weight carries them.
- **Shape:** 7px radius, 8px 14px, 600 weight, 14px; small variant 5px 10px at 13px.
- **Primary:** Amarelo Obrativa fill and border with Preto Obra text; hover deepens to Amarelo Pressionado.
- **Secondary:** white with Filete Forte border; hover darkens the border to Grafite Borda over Papel 2.
- **Ghost:** no border or fill until hover. **Danger:** terracotta text, terracotta border on hover.
- **Active:** translateY(1px). Disabled: Papel 2 fill, Filete border, Tinta 3 text, for every variant (a faded yellow would be yellow on white). Focus: 2px Preto Obra outline, 2px offset.

### Tags
- **Style:** pill, 12px 600, 2px 8px, tinted ground with matching hairline: neutral (Papel 2), overrun (terracotta), ok (moss), warning (ocre).

### Cards / Containers
- **Panel:** white, 1px Filete border, 10px radius, panel-rest shadow, optional header with title and right-side controls.
- **Month-on-month variation:** "↑ 12% a mais que o mês anterior" in bold ink, never moss or terracotta (those mean money in and out, not better or worse).
- **Indicator card:** a 42px icon tile (10px radius) beside a 13px 600 label, the display figure and one sentence (comparison with last month, or what the number means). Tones: saldo (yellow tile, black icon, faint yellow wash), entrada (moss tile, white icon, moss wash), saída (terracotta tile, white icon, terracotta wash), obras (black tile, yellow icon), neutro (Papel 2 tile with hairline).
- **Quick action:** full-width row with icon, bold title and a one-line explanation, chevron at right; the primary one is filled yellow.

### Inputs / Fields
- **Style:** white, 1px Filete Forte, 7px radius, 8px 10px; label above in 13px 600 Tinta 2, help text 12.5px Tinta 3.
- **Focus:** border goes Preto Obra with a 3px Amarelo Obrativa glow at 45%.
- **Selects:** native appearance removed; the icon set's chevron (1.6 stroke, Preto Obra) sits 8px from the right.
- **Dates:** always typed and shown as dd/mm/aaaa (accepts "15/10" or "15/10/26"), with a calendar button that opens the browser picker, so the browser language never changes the format.
- **Error:** the field and its label turn terracotta; the field gets `aria-invalid`, a terracotta border with a 3px terracotta glow, and the focus; the message names the problem in the dialog footer. Money fields right-align and accept sums ("120+35,50"). Dates use the native date input.
- **Combo (searchable list):** a text field that opens a list grouped under uppercase headers (category name; Obras / Centro de custos); arrows and Enter pick; the active option gets the yellow wash; a final hairline-separated option creates what is missing ("Novo favorecido: X", "Cadastrar obra X"). A payee typed with another spelling shows "Já cadastrado como …" or "Você quis dizer …?" beneath. The quick obra form floats under the obra field.

### Navigation
Screen titles match their rail labels (Obras, Importar extrato, Passo a passo). A sub-screen puts a 34px square back button beside its h1, never a label above it. Relatórios tabs are part of the address too. Obras appear in one order everywhere: em execução first, then concluídas, each by name.
- **Rail:** Preto Obra, 236px, reverse horizontal logo at 40px height, uppercase group labels in Trilho Suave, items 14.5px with 18px icons.
- **States:** hover Grafite Hover with white text; active Amarelo Obrativa with Preto Obra text and icon at 650. Pending import lines as a terracotta pill badge.
- **Tabs:** 600 Tinta 2 text over a Filete Forte baseline; active gets Preto Obra text and a 2px Preto Obra underline.

### Fita do Leque (signature)
The paint-fan strip: seven tones of the obra hue, each worth one seventh of the contract value. Receipts fill whole tones from the palest toward the deepest; the tone in progress fills left to right in proportion (a solid hairline instead of the dash), so the strip is only full at 100%. Unfilled tones are dashed Papel 2 slots. Three sizes. Hero: on the obra page, full panel width and 28px tall (3px gaps, 4px tone radius), labelled "Contrato já recebido" with the percentage, the R$ 0 / contract scale and "cada tom vale R$ …", beside the obra's "Saldo financeiro atual" in moss or terracotta. Cell: 76px by 10px beside the percentage in the "% do contrato" column of Resumo das Obras and of the consolidated summary. Preview: 140px by 12px under the colour swatches in the obra dialog. An obra without a contract value shows an empty strip and a dash. The obra hue also marks the 9px round dot before every obra name; no coloured side bars.

### Statement (Fluxo de Caixa)
One selection model: with no rows ticked, a click highlights one row; once rows are ticked, clicks tick (Shift ticks a range) and the highlight disappears. The register opens scrolled to the newest entries. Buttons carry their shortcut (title "Enter na linha", "Del na linha"; a "N" key cap on Novo lançamento).
Money-style register: checkbox, date, payee in 600 with the memo beneath, subcategory with its category in 11px small caps beneath (name first), obra with its dot, Entrada in moss, Saída in terracotta, running balance in 650, and a moss check for entries reconciled with the bank. Click selects (yellow wash with hairline rules above and below), double click or Enter opens Alterar transação, Del deletes, Space ticks; with rows ticked the panel subtitle shows the count and their signed total. Above it, the inline entry row in the same order as the dialog: date, type, value, payee, category, obra, memo and a yellow Lançar button; Enter submits.

### Resumo das Obras
One row per obra: dot and name, situation tag, contract, received, the strip with %, expenses, obra balance in moss or terracotta (650), still to receive; a totals footer. With apportionment on, an administrative column appears and the balance becomes the managerial balance.

### Resumo consolidado (Relatórios › Resumo das obras)
Briefing 10.7. Obra picker (all, or some, concluded included by default) and a cut-off date with "Hoje" and "Fechamento <ano anterior>". One panel: title "Resumo consolidado · Exercício <ano>", four flat figures divided by hairlines (total dos contratos, recebido até a data with the part received in the year, despesas diretas, saldo a receber; plus rateio when on), the moss "Percentual recebido dos contratos" bar, then "Saldo financeiro realizado" large in moss or terracotta, and a dashed box for "Resultado contratual parcial" that always says it is not profit. Missing contract values raise an ocre "consolidado contratual incompleto" alert. A per-obra table follows (contract, received in the year, accumulated, fita cell, expenses, realised balance, to receive).

### Dialogs
Focus starts on the field the dialog asks for (autofocus), Tab cycles inside, Esc and the close button close, and focus returns to the row or button that opened it. Dialogs sit near the top of the window (7vh) so they never jump as fields appear. A click on the veil closes only a pristine dialog; once something was typed the footer turns terracotta-tinted with "Descartar o que você digitou?" and two buttons. The batch edit requires an explicit choice for each ticked field and, before applying, lists each change as "before (count) → after".

### Navigation
Every screen has an address (#/obras, #/obra/<id>, #/relatorios?f=<filtro>), so browser and mouse Back/Forward work and links can be saved. The tab title names the screen ("Condomínio do Edifício Cláudio · Empresa · Obrativa"); on a screen change focus moves to the page h1 (no visible ring) and, on phones, the active rail item scrolls into view.

### Charts
Own SVG, offline and print-safe. Hairline grid, 11px axis labels. Monthly columns pair moss (inflow) and terracotta (outflow). The obra evolution draws accumulated received (moss) and spent (terracotta) as 2.4px lines with dots. Donuts group to the top five plus "Outros", use the category series, separate slices with white 1.5px gaps, and outline legend swatches with a 1px inset Preto Obra ring at 25%; legend names truncate with an ellipsis. Horizontal share bars are Preto Obra on #f1eee7.

## Do's and Don'ts

### Do:
- **Do** give every obra its own hue from the eight-hue set, starting at Grafite, and draw it as the seven-tone strip.
- **Do** fill the strip by the share of the contract already received.
- **Do** put yellow only on the active nav item and primary buttons, always with black text.
- **Do** use the six-tone category series for categorical charts and group donuts to five plus "Outros".
- **Do** set every figure in tabular numerals with Intl pt-BR BRL formatting and one minus form.
- **Do** pair every chart and headline figure with a plain sentence.
- **Do** show the obra balance in moss when positive and terracotta when negative, labelled as cash, not profit.
- **Do** strip native select chrome and use the icon set's chevron.

### Don't:
- **Don't** put Amarelo Obrativa text, icons or strokes on white or Branco Cal.
- **Don't** use terracotta as an obra hue or a category colour; it means loss or overrun only.
- **Don't** let obra hues leak into chrome (buttons, nav, headings, borders).
- **Don't** set a kicker or eyebrow above a heading; codes and metadata go beneath the name.
- **Don't** bring the reference's blue into the app; follow its layout, replace its colours with the brand tokens.
- **Don't** use hard offset shadows or framed cards with heavy borders.
- **Don't** retype, recolor, stretch or add effects to the logo; use the supplied reverse file on the rail.
