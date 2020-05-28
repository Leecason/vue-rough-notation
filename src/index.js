import RoughNotation from './component';

const VueRoughNotationPlugin = {
  /**
   * install function
   * @param  {Vue} Vue
   */
  install (Vue) {
    Vue.component('rough-notation', RoughNotation);
    Vue.component('RoughNotation', RoughNotation);
  },
};

export default VueRoughNotationPlugin;

;(function autoInstall () {
  let globalScope;

  if (typeof window !== 'undefined') {
    globalScope = window;
  } else if (typeof global !== 'undefined') {
    globalScope = global;
  }

  if (globalScope && globalScope.Vue) {
    globalScope.Vue.use(VueRoughNotationPlugin);
  }
})();
