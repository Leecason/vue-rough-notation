import { defaultOptions } from './options';
import RoughNotation from './component';

const VueRoughNotationPlugin = {
  /**
   * install function
   * @param  {Vue} Vue
   */
  install (Vue, options = {}) {
    const finalOptions = {
      ...defaultOptions,
      ...options,
    };

    const RoughNotationComponent = RoughNotation(finalOptions);

    Vue.component('rough-notation', RoughNotationComponent);
    Vue.component('RoughNotation', RoughNotationComponent);
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
