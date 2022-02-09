new Vue({
    el: "#app",
    data() {
      return {
        Details: [ ],
      }
    },
  
    mounted() {
      axios.get("http://vps-a47222b1.vps.ovh.net/TShirt")
      .then((response) => {
        this.Details = response.data
      })
    },

  });