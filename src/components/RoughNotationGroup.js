import { annotationGroup } from 'rough-notation';

export default {
  name: 'RoughNotationGroup',

  props: {
    isShow: {
      type: Boolean,
      default: false,
    },

    tag: {
      type: String,
      default: 'div',
    },
  },

  data: () => ({
    annotations: [],
  }),

  watch: {
    isShow (value) {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    },

    annotations(annotations) {
      this.group = annotationGroup(annotations);
    },
  },

  created () {
    this.$on('annotation:add', (annotation) => {
      this.$_add(annotation);
    });

    this.$on('annotation:remove', (annotation) => {
      this.$_remove(annotation);
    });
  },

  mounted () {
    if (this.isShow) {
      this.show();
    }
  },

  methods: {
    show () {
      this.group && this.group.show();
    },

    hide () {
      this.group && this.group.hide();
    },

    $_add (annotation) {
      this.annotations.push(annotation);
    },

    $_remove (annotation) {
      const index = this.annotations.indexOf(annotation);
      if (index > -1) {
        this.annotations.splice(index, 1);
      }
    },
  },

  render(h) {
    const slot = this.$slots.default;

    if (this.tag) {
      return h(this.tag, null, slot);
    }

    return slot && slot[0];
  },
};
