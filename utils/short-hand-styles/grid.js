export const baseGrid = {
  // Display
  g: "display: grid;",
  ig: "display: inline-grid;",

  // Grid Template Columns
  gtc1: "grid-template-columns: repeat(1, 1fr);",
  gtc2: "grid-template-columns: repeat(2, 1fr);",
  gtc3: "grid-template-columns: repeat(3, 1fr);",
  gtc4: "grid-template-columns: repeat(4, 1fr);",
  gtc5: "grid-template-columns: repeat(5, 1fr);",
  gtc6: "grid-template-columns: repeat(6, 1fr);",
  gtc7: "grid-template-columns: repeat(7, 1fr);",
  gtc8: "grid-template-columns: repeat(8, 1fr);",
  gtc9: "grid-template-columns: repeat(9, 1fr);",
  gtc10: "grid-template-columns: repeat(10, 1fr);",
  gtc12: "grid-template-columns: repeat(12, 1fr);",

  // Grid Template Columns - Auto
  gtca: "grid-template-columns: auto;",
  gtcaa: "grid-template-columns: auto auto;",
  gtcaaa: "grid-template-columns: auto auto auto;",
  gtcaaaa: "grid-template-columns: auto auto auto auto;",

  // Grid Template Columns - Min Content
  gtcmc: "grid-template-columns: min-content;",
  gtcmcmc: "grid-template-columns: min-content min-content;",

  // Grid Template Columns - Max Content
  gtcmac: "grid-template-columns: max-content;",
  gtcmacmac: "grid-template-columns: max-content max-content;",

  // Grid Template Rows
  gtr1: "grid-template-rows: repeat(1, 1fr);",
  gtr2: "grid-template-rows: repeat(2, 1fr);",
  gtr3: "grid-template-rows: repeat(3, 1fr);",
  gtr4: "grid-template-rows: repeat(4, 1fr);",
  gtr5: "grid-template-rows: repeat(5, 1fr);",
  gtr6: "grid-template-rows: repeat(6, 1fr);",

  // Grid Template Rows - Auto
  gtra: "grid-template-rows: auto;",
  gtraa: "grid-template-rows: auto auto;",
  gtraaa: "grid-template-rows: auto auto auto;",
  gtraaaa: "grid-template-rows: auto auto auto auto;",

  // Grid Template Areas
  gta: "grid-template-areas: none;",

  // Grid Auto Columns
  gac1: "grid-auto-columns: 1fr;",
  gaca: "grid-auto-columns: auto;",
  gacmc: "grid-auto-columns: min-content;",
  gacmac: "grid-auto-columns: max-content;",
  gacmm: "grid-auto-columns: minmax(0, 1fr);",

  // Grid Auto Rows
  gar1: "grid-auto-rows: 1fr;",
  gara: "grid-auto-rows: auto;",
  garmc: "grid-auto-rows: min-content;",
  garmac: "grid-auto-rows: max-content;",
  garmm: "grid-auto-rows: minmax(0, 1fr);",

  // Grid Auto Flow
  gafr: "grid-auto-flow: row;",
  gafc: "grid-auto-flow: column;",
  gafrd: "grid-auto-flow: row dense;",
  gafcd: "grid-auto-flow: column dense;",

  // Grid Column Start
  gcs1: "grid-column-start: 1;",
  gcs2: "grid-column-start: 2;",
  gcs3: "grid-column-start: 3;",
  gcs4: "grid-column-start: 4;",
  gcs5: "grid-column-start: 5;",
  gcs6: "grid-column-start: 6;",
  gcs7: "grid-column-start: 7;",
  gcs8: "grid-column-start: 8;",
  gcs9: "grid-column-start: 9;",
  gcs10: "grid-column-start: 10;",
  gcs11: "grid-column-start: 11;",
  gcs12: "grid-column-start: 12;",
  gcs13: "grid-column-start: 13;",
  gcsa: "grid-column-start: auto;",

  // Grid Column End
  gce1: "grid-column-end: 1;",
  gce2: "grid-column-end: 2;",
  gce3: "grid-column-end: 3;",
  gce4: "grid-column-end: 4;",
  gce5: "grid-column-end: 5;",
  gce6: "grid-column-end: 6;",
  gce7: "grid-column-end: 7;",
  gce8: "grid-column-end: 8;",
  gce9: "grid-column-end: 9;",
  gce10: "grid-column-end: 10;",
  gce11: "grid-column-end: 11;",
  gce12: "grid-column-end: 12;",
  gce13: "grid-column-end: 13;",
  gcea: "grid-column-end: auto;",

  // Grid Column Span
  gc1: "grid-column: span 1;",
  gc2: "grid-column: span 2;",
  gc3: "grid-column: span 3;",
  gc4: "grid-column: span 4;",
  gc5: "grid-column: span 5;",
  gc6: "grid-column: span 6;",
  gc7: "grid-column: span 7;",
  gc8: "grid-column: span 8;",
  gc9: "grid-column: span 9;",
  gc10: "grid-column: span 10;",
  gc11: "grid-column: span 11;",
  gc12: "grid-column: span 12;",
  gcf: "grid-column: 1 / -1;", // full width
  gca: "grid-column: auto;",

  // Grid Row Start
  grs1: "grid-row-start: 1;",
  grs2: "grid-row-start: 2;",
  grs3: "grid-row-start: 3;",
  grs4: "grid-row-start: 4;",
  grs5: "grid-row-start: 5;",
  grs6: "grid-row-start: 6;",
  grs7: "grid-row-start: 7;",
  grsa: "grid-row-start: auto;",

  // Grid Row End
  gre1: "grid-row-end: 1;",
  gre2: "grid-row-end: 2;",
  gre3: "grid-row-end: 3;",
  gre4: "grid-row-end: 4;",
  gre5: "grid-row-end: 5;",
  gre6: "grid-row-end: 6;",
  gre7: "grid-row-end: 7;",
  grea: "grid-row-end: auto;",

  // Grid Row Span
  gr1: "grid-row: span 1;",
  gr2: "grid-row: span 2;",
  gr3: "grid-row: span 3;",
  gr4: "grid-row: span 4;",
  gr5: "grid-row: span 5;",
  gr6: "grid-row: span 6;",
  grf: "grid-row: 1 / -1;", // full height
  gra: "grid-row: auto;",

  // Grid Area
  ga: "grid-area: auto;",
  ga1: "grid-area: span 1 / span 1;",
  ga2: "grid-area: span 2 / span 2;",
  ga3: "grid-area: span 3 / span 3;",

  // Justify Items
  jis: "justify-items: stretch;",
  jist: "justify-items: start;",
  jie: "justify-items: end;",
  jic: "justify-items: center;",

  // Align Items
  ais: "align-items: stretch;",
  aist: "align-items: start;",
  aie: "align-items: end;",
  aic: "align-items: center;",

  // Place Items (shorthand for justify-items and align-items)
  pis: "place-items: stretch;",
  pist: "place-items: start;",
  pie: "place-items: end;",
  pic: "place-items: center;",
  pisc: "place-items: stretch center;",
  pics: "place-items: center stretch;",

  // Justify Content
  jcs: "justify-content: stretch;",
  jcst: "justify-content: start;",
  jce: "justify-content: end;",
  jcc: "justify-content: center;",
  jcsb: "justify-content: space-between;",
  jcsa: "justify-content: space-around;",
  jcse: "justify-content: space-evenly;",

  // Align Content
  acs: "align-content: stretch;",
  acst: "align-content: start;",
  ace: "align-content: end;",
  acc: "align-content: center;",
  acsb: "align-content: space-between;",
  acsa: "align-content: space-around;",
  acse: "align-content: space-evenly;",

  // Place Content (shorthand for justify-content and align-content)
  pcs: "place-content: stretch;",
  pcst: "place-content: start;",
  pce: "place-content: end;",
  pcc: "place-content: center;",
  pcsb: "place-content: space-between;",
  pcsa: "place-content: space-around;",
  pcse: "place-content: space-evenly;",

  // Justify Self
  jss: "justify-self: stretch;",
  jsst: "justify-self: start;",
  jse: "justify-self: end;",
  jsc: "justify-self: center;",
  jsa: "justify-self: auto;",

  // Align Self
  ass: "align-self: stretch;",
  asst: "align-self: start;",
  ase: "align-self: end;",
  asc: "align-self: center;",
  asa: "align-self: auto;",

  // Place Self (shorthand for justify-self and align-self)
  pss: "place-self: stretch;",
  psst: "place-self: start;",
  pse: "place-self: end;",
  psc: "place-self: center;",
  psa: "place-self: auto;",

  // Gap
  gg0: "gap: 0;",
  gg1: "gap: 0.25rem;",
  gg2: "gap: 0.5rem;",
  gg3: "gap: 0.75rem;",
  gg4: "gap: 1rem;",
  gg5: "gap: 1.25rem;",
  gg6: "gap: 1.5rem;",
  gg8: "gap: 2rem;",
  gg10: "gap: 2.5rem;",
  gg12: "gap: 3rem;",

  // Row Gap
  grg0: "row-gap: 0;",
  grg1: "row-gap: 0.25rem;",
  grg2: "row-gap: 0.5rem;",
  grg3: "row-gap: 0.75rem;",
  grg4: "row-gap: 1rem;",
  grg5: "row-gap: 1.25rem;",
  grg6: "row-gap: 1.5rem;",
  grg8: "row-gap: 2rem;",

  // Column Gap
  gcg0: "column-gap: 0;",
  gcg1: "column-gap: 0.25rem;",
  gcg2: "column-gap: 0.5rem;",
  gcg3: "column-gap: 0.75rem;",
  gcg4: "column-gap: 1rem;",
  gcg5: "column-gap: 1.25rem;",
  gcg6: "column-gap: 1.5rem;",
  gcg8: "column-gap: 2rem;",
};

export const gridCombos = [
  ["g", "gtc2"], // 2 column grid
  ["g", "gtc3"], // 3 column grid
  ["g", "gtc4"], // 4 column grid
  ["g", "gg4"], // grid with gap
  ["g", "pic"], // grid place-items-center
  ["g", "gtc2", "gg4"], // 2 col grid with gap
  ["g", "gtc3", "gg4"], // 3 col grid with gap
];
