import { PluginObject } from "vue";

export type RoughNotationTypes = 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off';

export interface VueRoughNotationOptions {
  animate?: boolean;
  animationDelay?: number;
  color?: string;
  strokeWidth?: number;
  padding?: number;
  iterations?: number;
};

export interface VueRoughNotationPluginObject extends PluginObject<VueRoughNotationOptions> {};
