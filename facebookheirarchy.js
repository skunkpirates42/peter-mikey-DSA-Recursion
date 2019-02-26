'use strict';
const company = [
  { id: 'Zuckerberg', parent: null },
  { id: 'Schroepfer', parent: 'Zuckerberg' },
  { id: 'Bosworth', parent: 'Schroepfer' },
  { id: 'Steve', parent: 'Bosworth' },
  { id: 'Kyle', parent: 'Bosworth' },
  { id: 'Andra', parent: 'Bosworth' },
  { id: 'Zhao', parent: 'Schroepfer' },
  { id: 'Richie', parent: 'Zhao' },
  { id: 'Sofia', parent: 'Zhao' },
  { id: 'Jen', parent: 'Zhao' },
  { id: 'Schrage', parent: 'Zuckerberg' },
  { id: 'VanDyck', parent: 'Schrage' },
  { id: 'Sabrina', parent: 'VanDyck' },
  { id: 'Michelle', parent: 'VanDyck' },
  { id: 'Josh', parent: 'VanDyck' },
  { id: 'Swain', parent: 'Schrage' },
  { id: 'Blanch', parent: 'Swain' },
  { id: 'Tom', parent: 'Swain' },
  { id: 'Joe', parent: 'Swain' },
  { id: 'Sandberg', parent: 'Zuckerberg' },
  { id: 'Goler', parent: 'Sandberg' },
  { id: 'Eddie', parent: 'Goler' },
  { id: 'Julie', parent: 'Goler' },
  { id: 'Annie', parent: 'Goler' },
  { id: 'Hernandez', parent: 'Sandberg' },
  { id: 'Rowi', parent: 'Hernandez' },
  { id: 'Inga', parent: 'Hernandez' },
  { id: 'Morgan', parent: 'Hernandez' },
  { id: 'Moissinac', parent: 'Sandberg' },
  { id: 'Amy', parent: 'Moissinac' },
  { id: 'Chuck', parent: 'Moissinac' },
  { id: 'Vinni', parent: 'Moissinac' },
  { id: 'Kelley', parent: 'Sandberg' },
  { id: 'Eric', parent: 'Kelley' },
  { id: 'Ana', parent: 'Kelley' },
  { id: 'Wes', parent: 'Kelley' }
];

function sortHeirarchy(executives, parent) {
  let node = {};
  executives.filter(person => person.parent === parent)
    .forEach(item => node[item.id] = sortHeirarchy(executives, item.id));
  return node;
}


const fbTree = sortHeirarchy(company, null);

console.log(fbTree );
