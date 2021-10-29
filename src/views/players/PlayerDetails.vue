<template>
  <h1>Player Details Page</h1>
  <p>This is {{ name }} with id {{ id }}</p>
  <button @click="deletePlayer">Delete</button>
</template>

<script>
import { db } from "../../firebase";
import router from "../../router/index";

export default {
  props: ["name", "id"],
  methods: {
    deletePlayer() {
      db.collection("players").doc(this.id).delete();
      router.push({ name: "Players" });
    },
  },
};
</script>

<style>
</style>