<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="submit()">
      <h1>Post Info:</h1>
        <div>
          <p><b>Name:</b></p>
          <textarea v-model="newKittenParams.name"></textarea>
        </div>
        <div>
          <p><b>Breed:</b></p>
          <textarea v-model="newKittenParams.breed"></textarea>
        </div>
        <div>
          <p><b>Age:</b></p>
          <textarea v-model="newKittenParams.age"></textarea>
        </div>
        <div>
          <p><b>Weight:</b></p>
          <textarea v-model="newKittenParams.weight"></textarea>
        </div>
        <div>
          <p><b>Image URL:</b></p>
          <textarea v-model="newKittenParams.image"></textarea>
        </div>
        </br>
        <input type="submit" value="Submit" />
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </form>
  </div>
</template>

<style></style>

<script>
  import axios from 'axios';
  export default {
    data: function () {
      return {
        message: "Add your favorite kitten!",
        newKittenParams: {},
        errors: []
      };
    },
    created: function () {},
    methods: {
      submit: function () {
        axios.post("/kittens", this.newKittenParams).then((response) => {
        console.log(response.data);
        this.$router.push("/kittens");
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
      });
      }
    },
  };
</script>