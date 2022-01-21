import { defaultOptions } from './options';
import RoughNotation from './components/RoughNotation';
import RoughNotationGroup from './components/RoughNotationGroup';

/**
 * install function
 * @param {App} app
 * @param {Object} options RoughNotation options
 */
const install = (app, options = {}) => {
  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const RoughNotationComponent = RoughNotation(finalOptions);

  app.component('rough-notation', RoughNotationComponent);
  app.component('RoughNotation', RoughNotationComponent);

  app.component('rough-notation-group', RoughNotationGroup);
  app.component('RoughNotationGroup', RoughNotationGroup);
};

const VueRoughNotationPlugin = {
  install,
};

export default VueRoughNotationPlugin;
