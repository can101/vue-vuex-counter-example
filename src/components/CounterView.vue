<template>
  <span> {{ this.count }}</span>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CounterView",
  computed: {
    ...mapState(["count"]),
  },
};
</script>

<style scoped>
span {
  padding: 0 20px;
}
</style>
