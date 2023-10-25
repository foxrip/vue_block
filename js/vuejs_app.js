const app = Vue.createApp({
  data() {
    return {
      // All tags from some Drupal taxonomy Vocabulary.
      tags: JSON.parse(drupalSettings.filter.tags),
      // We bind this variable to save what user select.
      selectedCheckbox: [],
      // This variable will store the results.
      results: null,
      // Slide range variables.
      // // Price slide range min.
      // min: 0,
      // // Price slide range max.
      // max: 1000,
      // // Default price slide range min.
      // minPrice: 0,
      // // Default price slide range max.
      // maxPrice: 1000,
      // // Tags selected by range slider "id".
      // selectedTags: [],
      // End slide range variables.
      // Variable filter by name.
      // name: '',
    }
  },
  watch: {
    selectedCheckbox: {
      // Call the fetchData method when selectedCheckbox changes.
      handler: 'fetchData',
      deep: true,
    },
    // Name watch.
    // name: 'updateName',
    // Price range watchs.
    // minPrice: 'updateRange',
    // maxPrice: 'updateRange'
  },
  methods: {
    fetchData() {
      // Multivalues for REST in drupal need to be join with '+'.
      const selectedTags = this.selectedCheckbox.join('+');

      /**
       * @todo Right now I call the REST view directly. We can changes this
       * and make the calls to our controller for complex queries.
       */
      const url = `/jsonsearch/${selectedTags}`;
      // Debug the parameters.
      console.log(url);

      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Update the results variable with the retrieved data.
          this.results = data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    // Method Update Range Slide
    // updateRange() {
    //   if (this.minPrice > this.maxPrice - 20) {
    //     this.minPrice = this.maxPrice - 20;
    //   }

    //   // Filter tags by "id" range.
    //   this.selectedTags = this.tags.filter(tag => {
    //     const tagId = parseFloat(tag.id); // Convert tag.id a number
    //     return tagId >= this.minPrice && tagId <= this.maxPrice;
    //   });
    // },
    // End Method Update Range Slide.
    // Method Filter By Name.
    // updateName() {
    //   this.selectedTags = this.selectedTags.filter(tag => {
    //     return tag.name.toLowerCase().includes(this.name.toLowerCase());
    //   });
    // },
    // End Method Filter By Name.
    // Method for apply filters.
    // applyFilters() {
    //   this.updateRange();
    //   this.updateName();
    //   this.buildURL();
    // },
    // End method for apply filters.
    // Build URL.
    // buildURL() {
    //   const url = '/jsonsearch?filter_name='+this.name+'&filter_range='+this.minPrice+'-'+this.maxPrice;
    //   window.history.pushState(null, null, url);
    // },
    // End build URL.
  },
});

app.config.compilerOptions.delimiters = ['[[', ']]'];
app.mount('#app');
