const app = Vue.createApp({
  data() {
    return {
      message: "hello world!",
      picked: null,
    }
  }
});

app.config.compilerOptions.delimiters = ['[[', ']]'];

app.mount('#app');
