import React from 'react';

export const A = () => <div>a</div>;
export const B = () => <div>b</div>;
export const C = () => <div>c</div>;

export const compsInArray = [
  <A />,
  <B />,
  <C />,
];

export const compsInObject = {
  a: <A />,
  b: <B />,
  c: <C />,
};
