import { defaultOptions } from './options';
import RoughNotation from './components/RoughNotation';
import RoughNotationGroup from './components/RoughNotationGroup';

export const RoughNotationComponent = RoughNotation(defaultOptions);
export const RoughNotationGroupComponent = RoughNotationGroup;

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

  const RoughNotationGlobalComponent = RoughNotation(finalOptions);

  app.component('rough-notation', RoughNotationGlobalComponent);
  app.component('RoughNotation', RoughNotationGlobalComponent);

  app.component('rough-notation-group', RoughNotationGroup);
  app.component('RoughNotationGroup', RoughNotationGroup);
};

const VueRoughNotationPlugin = {
  install,
};

export default VueRoughNotationPlugin;
