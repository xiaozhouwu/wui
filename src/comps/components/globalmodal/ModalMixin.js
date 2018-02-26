const ModalMixin = {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    active() {
      this.isActive = true;
    },
    close() {
      this.$emit('close');
      this.isActive = false;
    },
  },
  watch: {
    isVisible(val) {
      this.isActive = val;
    },
  },

  mounted() {
    this.$nextTick(() => {
      document.body.appendChild(this.$el);
      if (this.isVisible) {
        this.active();
      }
    });
  },

  beforeDestroy() {
    this.$el.remove();
  },
};

export default ModalMixin;
