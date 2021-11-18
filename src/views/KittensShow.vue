<template>
  <div class="home">
    <h1>{{ kitten.name }}</h1>
    <hr>
    <img v-bind:src="kitten.image">
    <p><b>Breed:</b> {{ kitten.breed }}</p>
    <p><b>Age:</b> {{ kitten.age }}</p>
    <p><b>Weight:</b> {{ kitten.weight }}</p>
    <p><router-link v-bind:to="`/kittens/${kitten.id}/edit`">Edit Kitten Page</router-link></p>
  </div>
</template>

<style></style>

<script>
  export default {
    data: function () {
      return {
        message: "Welcome to the Kitten Show!",
        kitten: {},
      };
    },
    created: function () {},
    methods: {
      kittenShow: function () {
        axios.get(`/kittens/${this.$route.params.id}`).then(response => {
          console.log(response.data);
          this.kitten = response.data;
        })
      }
    },
  };
</script>