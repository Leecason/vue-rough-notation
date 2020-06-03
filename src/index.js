import { defaultOptions } from './options';
import RoughNotation from './components/RoughNotation';
import RoughNotationGroup from './components/RoughNotationGroup';

const VueRoughNotationPlugin = {
  /**
   * install function
   * @param {Vue} Vue
   * @param {Object} options RoughNotation options
   */
  install (Vue, options = {}) {
    const finalOptions = {
      ...defaultOptions,
      ...options,
    };

    const RoughNotationComponent = RoughNotation(finalOptions);

    Vue.component('rough-notation', RoughNotationComponent);
    Vue.component('RoughNotation', RoughNotationComponent);

    Vue.component('rough-notation-group', RoughNotationGroup);
    Vue.component('RoughNotationGroup', RoughNotationGroup);
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
