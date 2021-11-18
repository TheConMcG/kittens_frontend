<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <hr>
    <div v-for="kitten in kittens">
      <img v-bind:src="kitten.image">
      <router-link v-bind:to="`/kittens/${kitten.id}`">
        <p><b>name:</b> {{ kitten.name }} </p>
      </router-link>
      <p><b>breed:</b> {{ kitten.breed }} </p>
      <p><b>age:</b> {{ kitten.age }} </p>
      <p><b>weight:</b> {{ kitten.weight }} lbs</p>
      <hr>
    </div>
  </div>
</template>

<style></style>

<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Kittens All Over",
        kittens: [],
      };
    },
    created: function () {
      this.kittensIndex();
    },
    methods: {
      kittensIndex: function () {
        console.log("in the index")
        axios.get("/kittens").then(response => {
          console.log(response.data);
          this.kittens = response.data;
        })
      } 
    },
  };
</script>