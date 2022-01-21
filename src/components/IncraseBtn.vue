<template>
  <button @click="increase" v-if="count <20">+1</button>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "IncreaseBtn",
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapActions(["increaseCount"]),
    increase() {
      //   alert('increase');
      this.increaseCount();
    },
  },
};
</script>

<style scoped></style>
