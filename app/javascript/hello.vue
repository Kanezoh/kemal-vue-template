<template>
  <div>
    <h1>{{message}}</h1>
    <p><input v-model="message"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  created() {
    this.message = 'hello';
  }
}
</script>
