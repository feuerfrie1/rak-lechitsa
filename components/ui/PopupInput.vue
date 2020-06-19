<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    v-model="content"
    @input="handleInput"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
  },
  data() {
    return {
      content: this.value,
    };
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== this.content) {
        this.content = newVal;
      }
    },
  },
  methods: {
    handleInput(content) {
      this.$emit('input', this.content);
    },
  },
};
</script>

<style scoped>
.input {
  margin: 134px 40px 0;
  padding: 0;
  min-width: 840px;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}
</style>
