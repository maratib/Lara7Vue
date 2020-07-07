<template>
  <div class="container">
    <h1>This is Home</h1>
    <h3 class="mt-5">Component Test</h3>
    <HelloWorld msg="This is HelloWorld component" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
