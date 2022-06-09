import { defineComponent, h } from 'vue-demi';
import { annotationGroup } from 'rough-notation';
import mitt from 'mitt';
import { ADD_ANNOTATION, REMOVE_ANNOTATION } from '../constants';

// the default order annotation function
function defaultOrderFn(a, b) {
  return a - b; // asc order
}

export default defineComponent({
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

  data() {
    return {
      rnVueInstances: [],
    };
  },

  watch: {
    isShow(value) {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    },

    rnVueInstances(instances) {
      const annotations = this.$_order(instances);
      this.group = annotationGroup(annotations);
    },
  },

  created() {
    this.emitter = mitt();

    this.emitter.on(ADD_ANNOTATION, (rnVm) => {
      this.$_add(rnVm);
    });

    this.emitter.on(REMOVE_ANNOTATION, (rnVm) => {
      this.$_remove(rnVm);
    });
  },

  mounted() {
    if (this.isShow) {
      this.show();
    }
  },

  beforeUnmount() {
    this.emitter.all.clear();
  },

  methods: {
    show() {
      this.group && this.group.show();
    },

    hide() {
      this.group && this.group.hide();
    },

    $_order(instances) {
      const orderFn =
        typeof this.orderAnnotations === 'function'
          ? this.orderAnnotations
          : defaultOrderFn;

      return instances
        .slice()
        .sort((vmA, vmB) => orderFn(vmA.order, vmB.order)) // order
        .map((vm) => vm.annotation); // pluck annotation
    },

    $_add(rnVm) {
      this.rnVueInstances = this.rnVueInstances.concat(rnVm);
    },

    $_remove(rnVm) {
      const index = this.rnVueInstances.indexOf(rnVm);
      if (index > -1) {
        this.rnVueInstances.splice(index, 1);
      }
    },
  },

  render(h2) {
    // vue2
    if (h2 && typeof h2 === 'function') {
      const slot = this.$slots.default;

      if (this.tag) {
        return h2(this.tag, null, slot);
      }

      return slot && slot[0];
    }

    // vue3
    const slot = this.$slots.default();

    if (this.tag) {
      return h(this.tag, {}, slot);
    }

    return slot && slot[0];
  },
});
