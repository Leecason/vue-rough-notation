import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRoughNotation from '../src';

describe('Vue Rough Notation Test Suite', () => {
  test('install', () => {
    const localVue = createLocalVue();

    expect(localVue.options.components.RoughNotation).toBeUndefined();
    expect(localVue.options.components['rough-notation']).toBeUndefined();
    expect(localVue.options.components.RoughNotationGroup).toBeUndefined();
    expect(localVue.options.components['rough-notation-group']).toBeUndefined();

    localVue.use(VueRoughNotation);

    expect(localVue.options.components.RoughNotation).toBeDefined();
    expect(localVue.options.components['rough-notation']).toBeDefined();
    expect(localVue.options.components.RoughNotationGroup).toBeDefined();
    expect(localVue.options.components['rough-notation-group']).toBeDefined();
  });

  describe('RoughNotation component', () => {
    const localVue = createLocalVue();
    localVue.use(VueRoughNotation);
    const RoughNotationComp = localVue.options.components.RoughNotation;

    const domStr = `<span>Vue Rough Notation</span>`;

    const wrapper = shallowMount(RoughNotationComp, {
      propsData: {
        type: 'underline',
      },
      slots: {
        default: domStr,
      },
    });

    const annotation = wrapper.vm.annotation;

    test('has a annotation instance in vm after mounted', () => {
      expect(annotation).toBeDefined();
    });

    test('will emit `init` event with annotation as param in mounted', () => {
      expect(wrapper.emitted().init).toBeTruthy();
      expect(wrapper.emitted().init[0]).toEqual([annotation]);
    });

    test('not show the annotation by default', () => {
      expect(annotation.isShowing()).toBe(false);
    });

    test('wrapped by `span` by default', () => {
      expect(wrapper.html()).toEqual(`<span>${domStr}</span>`);
    });
  });
});
