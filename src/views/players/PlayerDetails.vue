<template>
  <h1>Player Details Page</h1>
  <p>This is {{ name }} with id {{ id }}</p>
</template>

<script>
export default {
  props: ["name", "id"],
};
</script>

<style>
</style>