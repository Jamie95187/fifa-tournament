<template>
  <h1>This is the players page</h1>
  <Modal @close="toggleModal" @confirm="addPlayer" :modalActive="modalActive">
    <div class="modal-content">
      <PlayerForm />
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
import PlayerForm from "@/components/PlayerForm.vue";

export default {
  name: "Players",
  components: {
    Modal,
    PlayerForm,
  },
  methods: {
    addPlayer() {
      console.log("confirm player");
    },
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
        // { name: "Player 1", id: 1 }
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
.input {
  text-align: left;
}
.player-name-input {
  text-align: left;
  padding: 24px 150px;
  box-sizing: border-box;
  border: rgb(235, 195, 88);
  border-radius: 4px;
  font-size: 24px;
}
</style>