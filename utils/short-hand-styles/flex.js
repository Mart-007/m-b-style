export const baseFlex = {
  // Display
  f: "display: flex;",
  if: "display: inline-flex;",

  // Flex Direction
  fdr: "flex-direction: row;",
  fdrr: "flex-direction: row-reverse;",
  fdc: "flex-direction: column;",
  fdcr: "flex-direction: column-reverse;",

  // Flex Wrap
  fw: "flex-wrap: wrap;",
  fwn: "flex-wrap: nowrap;",
  fwr: "flex-wrap: wrap-reverse;",

  // Flex Flow (shorthand for direction and wrap)
  ffr: "flex-flow: row;",
  ffrw: "flex-flow: row wrap;",
  ffc: "flex-flow: column;",
  ffcw: "flex-flow: column wrap;",

  // Justify Content (main axis)
  jfs: "justify-content: flex-start;",
  jfe: "justify-content: flex-end;",
  jc: "justify-content: center;",
  jsb: "justify-content: space-between;",
  jsa: "justify-content: space-around;",
  jse: "justify-content: space-evenly;",

  // Align Items (cross axis)
  ais: "align-items: stretch;",
  aifs: "align-items: flex-start;",
  aife: "align-items: flex-end;",
  aic: "align-items: center;",
  aib: "align-items: baseline;",

  // Align Content (for wrapped lines)
  acs: "align-content: stretch;",
  acfs: "align-content: flex-start;",
  acfe: "align-content: flex-end;",
  acc: "align-content: center;",
  acsb: "align-content: space-between;",
  acsa: "align-content: space-around;",
  acse: "align-content: space-evenly;",

  // Align Self (for individual items)
  asa: "align-self: auto;",
  asfs: "align-self: flex-start;",
  asfe: "align-self: flex-end;",
  asc: "align-self: center;",
  asb: "align-self: baseline;",
  ass: "align-self: stretch;",

  // Flex Grow
  fg0: "flex-grow: 0;",
  fg1: "flex-grow: 1;",
  fg2: "flex-grow: 2;",
  fg3: "flex-grow: 3;",

  // Flex Shrink
  fs0: "flex-shrink: 0;",
  fs1: "flex-shrink: 1;",
  fs2: "flex-shrink: 2;",
  fs3: "flex-shrink: 3;",

  // Flex Basis
  fba: "flex-basis: auto;",
  fb0: "flex-basis: 0;",
  fb100: "flex-basis: 100%;",
  fb50: "flex-basis: 50%;",
  fb33: "flex-basis: 33.333%;",
  fb25: "flex-basis: 25%;",

  // Flex (shorthand)
  f1: "flex: 1;",
  f2: "flex: 2;",
  f3: "flex: 3;",
  fa: "flex: auto;",
  fi: "flex: initial;",
  fn: "flex: none;",
  f11a: "flex: 1 1 auto;",
  f10a: "flex: 1 0 auto;",
  f01a: "flex: 0 1 auto;",
  f00a: "flex: 0 0 auto;",

  // Gap
  g0: "gap: 0;",
  g1: "gap: 0.25rem;",
  g2: "gap: 0.5rem;",
  g3: "gap: 0.75rem;",
  g4: "gap: 1rem;",
  g5: "gap: 1.25rem;",
  g6: "gap: 1.5rem;",
  g8: "gap: 2rem;",
  g10: "gap: 2.5rem;",
  g12: "gap: 3rem;",

  // Row Gap
  rg0: "row-gap: 0;",
  rg1: "row-gap: 0.25rem;",
  rg2: "row-gap: 0.5rem;",
  rg3: "row-gap: 0.75rem;",
  rg4: "row-gap: 1rem;",
  rg5: "row-gap: 1.25rem;",
  rg6: "row-gap: 1.5rem;",
  rg8: "row-gap: 2rem;",

  // Column Gap
  cg0: "column-gap: 0;",
  cg1: "column-gap: 0.25rem;",
  cg2: "column-gap: 0.5rem;",
  cg3: "column-gap: 0.75rem;",
  cg4: "column-gap: 1rem;",
  cg5: "column-gap: 1.25rem;",
  cg6: "column-gap: 1.5rem;",
  cg8: "column-gap: 2rem;",

  // Order
  o0: "order: 0;",
  o1: "order: 1;",
  o2: "order: 2;",
  o3: "order: 3;",
  o4: "order: 4;",
  o5: "order: 5;",
  om1: "order: -1;",
  om2: "order: -2;",
  of: "order: 9999;", // order first
  ol: "order: -9999;", // order last
};

export const flexCombos = [
  ["f", "jc", "aic"], // flex center
  ["f", "jsb", "aic"], // flex space-between center
  ["f", "fdc"], // flex column
  ["f", "fdc", "jc", "aic"], // flex column center
  ["f", "fw"], // flex wrap
  ["f", "g4"], // flex with gap
  ["f", "jc"], // flex justify-center
  ["f", "aic"], // flex align-center
  ["f", "jfe"], // flex justify-end
  ["f", "aife"], // flex align-end
];
