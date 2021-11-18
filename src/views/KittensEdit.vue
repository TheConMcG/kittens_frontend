<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="submit()">
      <h1>Edit Info:</h1>
        <div>
          <p><b>Name:</b></p>
          <textarea v-model="editKittenParams.name"></textarea>
        </div>
        <div>
          <p><b>Breed:</b></p>
          <textarea v-model="editKittenParams.breed"></textarea>
        </div>
        <div>
          <p><b>Age:</b></p>
          <textarea v-model="editKittenParams.age"></textarea>
        </div>
        <div>
          <p><b>Weight:</b></p>
          <textarea v-model="editKittenParams.weight"></textarea>
        </div>
        <div>
          <p><b>Image URL:</b></p>
          <textarea v-model="editKittenParams.image"></textarea>
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
        message: "Edit your kitten info!",
        editKittenParams: {},
        errors: []
      };
    },
    created: function () {
      this.getKitten();
    },
    methods: {
      submit: function () {
        axios.patch("/kittens/" + this.$route.params.id, this.editKittenParams).then((response) => {
        console.log(response.data);
        this.$router.push("/kittens");
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
      });
      },
      getKitten: function() {
        axios.get("kittens/" + this.$route.params.id).then(response => {
          console.log(response.data);
          this.editKittenParams = response.data;
        })
      }
    },
  };
</script>