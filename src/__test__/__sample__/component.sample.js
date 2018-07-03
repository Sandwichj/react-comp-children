import React from 'react';

export const A = () => <div>a</div>;
export const B = () => <div>b</div>;
export const C = () => <div>c</div>;

export const compsInArray = [
  <A key="a" />,
  <B key="b" />,
  <C key="c" />,
];

export const compsInObject = {
  a: <A key="a" />,
  b: <B key="b" />,
  c: <C key="c" />,
};
