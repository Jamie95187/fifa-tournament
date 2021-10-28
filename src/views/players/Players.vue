<template>
  <h1>This is the players page</h1>
  <Modal @close="toggleModal" @confirm="addPlayer" :modalActive="modalActive">
    <div class="modal-content">
      <form>
        <label>Name:</label>
        <input v-model="playerName" required />
      </form>
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
  data() {
    return {
      player: {
        name: "",
      },
    };
  },
  components: {
    Modal,
  },
  methods: {
    addPlayer() {
      db.collection("players").add({ name: this.playerName });
      modalActive.value = false;
      this.toggleModal;
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
form {
  max-width: 420px;
  display: inline-block;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  font-size: 1em;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  outline: none;
}
</style>