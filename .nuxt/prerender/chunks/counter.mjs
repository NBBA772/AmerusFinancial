import { defineEventHandler } from 'file:///Users/amerusfinancial/Desktop/projects/Amerus/app/node_modules/h3/dist/index.mjs';

let count = 0;
const counter = defineEventHandler(() => {
  count++;
  return count;
});

export { counter as default };
//# sourceMappingURL=counter.mjs.map
