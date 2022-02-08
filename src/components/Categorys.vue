<template>
  <li v-for="category in storeCategorys" :key="category.id">
    {{ category }}
  </li>
</template>


<script>
export default {
  name: 'Categorys',
  props: {

  }, 
  data(){
    return {
      storeCategorys: [],
    }
  },
    mounted() {
    fetch("http://localhost:1337/api/categories/")
      .then((res) => res.json())
      .then((data) => {
        this.storeCategorys = data;
      });
}
}
</script>
