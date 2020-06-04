import { annotationGroup } from 'rough-notation';

// the default order annotation function
function defaultOrderFn (a, b) {
  return a - b; // asc order
}

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

    orderAnnotations: {
      type: Function,
      default: defaultOrderFn,
    },
  },

  data: () => ({
    rnVueInstances: [],
  }),

  watch: {
    isShow (value) {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    },

    rnVueInstances (instances) {
      const annotations = this.$_order(instances);
      this.group = annotationGroup(annotations);
    },
  },

  created () {
    this.$on('annotation:add', (rnVm) => {
      this.$_add(rnVm);
    });

    this.$on('annotation:remove', (rnVm) => {
      this.$_remove(rnVm);
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

    $_order (instances) {
      const orderFn = typeof this.orderAnnotations === 'function'
        ? this.orderAnnotations
        : defaultOrderFn;

      return instances
        .slice()
        .sort((vmA, vmB) => orderFn(vmA.order, vmB.order)) // order
        .map(vm => vm.annotation); // pluck annotation
    },

    $_add (rnVm) {
      this.rnVueInstances.push(rnVm);
    },

    $_remove (rnVm) {
      const index = this.rnVueInstances.indexOf(rnVm);
      if (index > -1) {
        this.rnVueInstances.splice(index, 1);
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
