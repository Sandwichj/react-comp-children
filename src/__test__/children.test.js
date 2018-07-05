import React from 'react';
import { mount } from 'enzyme';

import Children from 'Children';
import {
  A, B, C,
  compsInArray,
  compsInObject,
  compsInObjectWithMixedTypeProperties,
} from '__sample__/component.sample';

describe('Children', () => {
  it('should be rendered correctly.', () => {
    const wrapper = mount(<Children items={ compsInArray } />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should return all of the items of the given array if active is empty.', () => {
    const wrapper = mount(<Children items={ compsInArray } />);
    const children = wrapper.children();
    const shouldHave = [A, B, C];

    children.forEach((child, index) => {
      expect(child.is(shouldHave[index])).toBeTruthy();
    });
  });

  it('should return all of the items of the given array if active is null.', () => {
    const wrapper = mount(<Children items={ compsInArray } active={ null } />);
    const children = wrapper.children();
    const shouldHave = [A, B, C];

    children.forEach((child, index) => {
      expect(child.is(shouldHave[index])).toBeTruthy();
    });
  });

  it('should return the active item in the given array if active is an index.', () => {
    const wrapper = mount(<Children items={ compsInArray } active={ 1 } />);
    const children = wrapper.children();
    const shouldHave = B;

    expect(children).toHaveLength(1);
    expect(children.first().is(shouldHave)).toBeTruthy();
  });

  it('should return the active items in the given array if active has multiple indices.', () => {
    const wrapper = mount(<Children items={ compsInArray } active={ [0, 2] } />);
    const children = wrapper.children();
    const shouldHave = [A, C];

    children.forEach((child, index) => {
      expect(child.is(shouldHave[index])).toBeTruthy();
    });
  });

  it('should return the active items as the order of the given items if they are in array.', () => {
    const wrapper = mount(<Children items={ compsInArray } active={ [2, 0] } />);
    const children = wrapper.children();
    const shouldHave = [A, C];

    children.forEach((child, index) => {
      expect(child.is(shouldHave[index])).toBeTruthy();
    });
  });

  it('should return all of the items of the given object if active is empty.', () => {
    const wrapper = mount(<Children items={ compsInObject } />);
    const children = wrapper.children();
    const shouldHave = [A, B, C];

    children.forEach((child, index) => {
      expect(child.is(shouldHave[index])).toBeTruthy();
    });
  });

  it('should return the active items in the given object if active has multiple properties.', () => {
    const wrapper = mount(<Children items={ compsInObject } active={ ['a', 'c'] } />);
    const children = wrapper.children();
    const shouldHave = [A, C];

    children.forEach((child, index) => {
      expect(child.is(shouldHave[index])).toBeTruthy();
    });
  });

  it('should return the active items in the given object if active has mixed type properties.', () => {
    const wrapper = mount(<Children items={ compsInObjectWithMixedTypeProperties } active={ [10, 'c'] } />);
    const children = wrapper.children();
    const shouldHave = [B, C];

    children.forEach((child, index) => {
      expect(child.is(shouldHave[index])).toBeTruthy();
    });
  });

  it('should return the active items between the tags if active is an index.', () => {
    const wrapper = mount(
      <Children active={ [1, 2] }>
        <A />
        <B />
        <C />
      </Children>
    );
    const children = wrapper.children();
    const shouldHave = [B, C];

    children.forEach((child, index) => {
      expect(child.is(shouldHave[index])).toBeTruthy();
    });
  });

  it('should return null if no items are in.', () => {
    const wrapper = mount(<Children active={ ['a', 'c'] } />);
    const children = wrapper.children();

    expect(children).toHaveLength(0);
  });
});
