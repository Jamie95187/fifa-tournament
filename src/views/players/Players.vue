<template>
  <h1>This is the players page</h1>
  <div v-for="player in Players" :key="player.key" class="player">
    <router-link
      :to="{
        name: 'PlayerDetails',
        params: { name: player.name, id: player.key },
      }"
    >
      <h2>{{ player.name }}</h2>
    </router-link>
  </div>
</template>

<script>
import { db } from "../../firebase";

export default {
  data() {
    return {
      Players: [
        // { name: "Player 1", id: 1 },
        // { name: "Player 2", id: 2 },
        // { name: "Player 3", id: 3 },
      ],
    };
  },
  created() {
    db.collection("players").onSnapshot((snapshotChange) => {
      this.Players = [];
      snapshotChange.forEach((doc) => {
        this.Players.push({
          key: doc.id,
          name: doc.data().name,
        });
      });
    });
  },
};
</script>

<style>
.player h2 {
  background: #add8e6;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: 18191a;
}
.player h2:hover {
  background: #45b6fe;
}
.player a {
  text-decoration: none;
}
</style>