import { annotate } from 'rough-notation';

const AVAILABLE_TYPES = [
  'underline',
  'box',
  'circle',
  'highlight',
  'strike-through',
  'crossed-off',
  'bracket',
];

export default (options) => ({
  name: 'RoughNotation',

  props: {
    type: {
      type: String,
      required: true,
      validator (type) {
        return AVAILABLE_TYPES.indexOf(type) > -1;
      },
    },

    tag: {
      type: String,
      default: 'span',
    },

    isShow: {
      type: Boolean,
      default: false,
    },

    animate: {
      type: Boolean,
      default: () => options.animate,
    },

    animationDuration: {
      type: Number,
      default: () => options.animationDuration,
    },

    color: {
      type: String,
      default: () => options.color,
    },

    strokeWidth: {
      type: Number,
      default: () => options.strokeWidth,
    },

    padding: {
      type: [Number, Array],
      default: () => options.padding,
    },

    multiline: {
      type: Boolean,
      default: () => options.multiline,
    },

    iterations: {
      type: Number,
      default: () => options.iterations,
    },

    brackets: {
      type: [String, Array],
      default: () => options.brackets,
    },

    order: {
      type: [Number, String],
      default: 0,
    },
  },

  mounted () {
    this.annotation = annotate(this.$el, {
      type: this.type,
      animate: this.animate,
      animationDuration: this.animationDuration,
      color: this.color,
      strokeWidth: this.strokeWidth,
      padding: this.padding,
      multiline: this.multiline,
      iterations: this.iterations,
    });

    this.$emit('init', this.annotation);
    this.$_dispatchGroup('annotation:add');

    this.$watch('isShow', (value) => {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    }, { immediate: true });

    this.$watch('color', (value) => {
      this.annotation.color = value
    });
    this.$watch('strokeWidth', (value) => {
      this.annotation.strokeWidth = value
    });
    this.$watch('padding', (value) => {
      this.annotation.padding = value
    });
  },

  beforeDestroy () {
    this.$_dispatchGroup('annotation:remove');
    this.annotation && this.annotation.remove();
  },

  methods: {
    show () {
      this.annotation && this.annotation.show();
    },

    hide () {
      this.annotation && this.annotation.hide();
    },

    isShowing () {
      return !!(this.annotation && this.annotation.isShowing());
    },

    $_dispatchGroup (event) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while (parent && (!name || name !== 'RoughNotationGroup')) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }

      if (parent) {
        parent.$emit.call(parent, event, this);
      }
    },
  },

  render (h) {
    const slot = this.$slots.default;

    if (this.tag) {
      return h(this.tag, null, slot);
    }

    return slot && slot[0];
  },
});
