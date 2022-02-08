<template>
  <li v-for="event in storeEvents" :key="event.id">
    {{ event }}
  </li>
</template>


<script>
export default {
  name: 'Events',
  props: {

  }, 
  data(){
    return {
      storeEvents: [],
    }
  },
    mounted() {
    fetch("http://localhost:1337/api/events/")
      .then((res) => res.json())
      .then((data) => {
        this.storeEvents = data.data;
      });
}
}
</script>
