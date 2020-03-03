
<template>
  <p>{{ greeting}} world!</p>

  <!-- <span>{{ message }}</span> -->
</template>
<script>
module.exports = {
  data: function() {
    return {
      greeting: "Hello"
    };
  }
};
// export default {
//   data() {
//     return {
//       message: "hello!"
//     };
//   },
//   created() {
//     this.message = "type!";
//   }
// };
</script>
<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: aqua;
  background-color: blanchedalmond;
}
</style>