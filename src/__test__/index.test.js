import React from 'react';
import { shallow } from 'enzyme';

import Children from 'index';
import {
  A, B, C,
  compsInArray,
  compsInObject,
} from '__sample__/component.sample';

describe('Children', () => {
  let comp = null;

  it('should be rendered correctly.', () => {
    comp = shallow(<div><Children items={ compsInArray } /></div>);

    expect(comp.exists()).toBeTruthy();
  });

  it('should return all items if active is empty.', () => {
    const a = comp.find(A);
    const b = comp.find(B);
    const c = comp.find(C);

    expect(a.exists()).toBeTruthy();
    expect(b.exists()).toBeTruthy();
    expect(c.exists()).toBeTruthy();
  });



  it('should return active items following the active parameter.', () => {

  });
});
