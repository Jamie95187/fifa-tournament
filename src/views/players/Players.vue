<template>
  <h1>This is the players page</h1>
  <Modal @close="toggleModal" :modalActive="modalActive">
    <div class="modal-content">
      <h1>This is a Modal Header</h1>
    </div>
  </Modal>
  <button @click="toggleModal" type="button">Open Modal</button>
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
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

export default {
  name: "Players",
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    return { modalActive, toggleModal };
  },
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
.player {
  justify-content: center;
  align-items: center;
}
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