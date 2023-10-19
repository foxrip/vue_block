
const app = Vue.createApp({
  data() {
    return {
      tags: JSON.parse(drupalSettings.filter.tags),
    }
  }
});
app.config.compilerOptions.delimiters = ['[[', ']]'];
app.mount('#app');
