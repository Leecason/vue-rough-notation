import RoughNotation from './component';

export default {
  /**
   * install function
   * @param  {Vue} Vue
   */
  install (Vue) {
    Vue.component('rough-notation', RoughNotation);
    Vue.component('RoughNotation', RoughNotation);
  },
};
