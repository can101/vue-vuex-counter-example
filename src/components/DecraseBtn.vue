<template>
  <button @click="decrease" v-if="count>0">-1</button>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "IncreaseBtn",
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["updateDecreaseCount"]),
    ...mapActions(["decreaseCount"]),
    decrease() {
      //   alert("decrease");
      this.updateDecreaseCount();
    },
  },
};
</script>

<style scoped></style>
