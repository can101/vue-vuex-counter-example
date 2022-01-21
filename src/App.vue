<template>
  <div id="app">
    <DecreaseBtn />
    <CounterView />
    <IncreaseBtn />
  </div>
</template>

<script>
import CounterView from "./components/CounterView.vue";
import DecreaseBtn from "./components/DecraseBtn.vue";
import IncreaseBtn from "./components/IncraseBtn.vue";

export default {
  name: "App",
  components: {
    CounterView,
    DecreaseBtn,
    IncreaseBtn,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: cornflowerblue;
  border: 2px solid transparent;
  color: white;
  font-size: 15px;
  cursor: pointer;
}
button:hover {
  transition: all 0.5s ease-in-out;
  background: none;
  border: 2px solid cornflowerblue;
  color: cornflowerblue;
}
</style>
