import { annotate } from 'rough-notation';

const AVAILABLE_TYPES = [
  'underline',
  'box',
  'circle',
  'highlight',
  'strike-through',
  'crossed-off',
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
      default: 'div',
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

    animationDelay: {
      type: Number,
      default: () => options.animationDelay,
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
      type: Number,
      default: () => options.padding,
    },
  },

  mounted () {
    this.annotation = annotate(this.$el, {
      type: this.type,
      animate: this.animate,
      animationDuration: this.animationDuration,
      animationDelay: this.animationDelay,
      color: this.color,
      strokeWidth: this.strokeWidth,
      padding: this.padding,
    });

    this.$emit('init', this.annotation);

    this.$watch('isShow', (value) => {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    }, { immediate: true });
  },

  beforeDestroy () {
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
  },

  render (h) {
    const slot = this.$slots.default;

    if (this.tag) {
      return h(this.tag, null, slot);
    }

    return slot && slot[0];
  },
});
