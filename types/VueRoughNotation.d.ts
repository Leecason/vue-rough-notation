import { PluginObject } from "vue";

export type RoughNotationTypes = 'underline' | 'box' | 'circle' | 'highlight' | 'strike-through' | 'crossed-off' | 'bracket';

export interface VueRoughNotationOptions {
  animate?: boolean;
  color?: string;
  strokeWidth?: number;
  padding?: number;
  multiline?: boolean;
  iterations?: number;
  brackets?: string;
}

export interface VueRoughNotationPluginObject extends PluginObject<VueRoughNotationOptions> {}
