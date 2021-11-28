<template>
  <h1>This is the tournaments page</h1>
  <Modal
    @close="toggleModal"
    @confirm="addTournament"
    :modalActive="modalActive"
  >
    <div class="modal-content">
      <form>
        <label>Name:</label>
        <input v-model="tournamentName" required />
      </form>
    </div>
  </Modal>
  <button @click="toggleModal" type="button">Add Tournament</button>
  <div
    v-for="tournament in Tournaments"
    :key="tournament.key"
    class="tournament"
  >
    <router-link
      :to="{
        name: 'tournamentDetails',
        params: { name: tournament.name, id: tournament.key },
      }"
    >
      <h2>{{ tournament.name }}</h2>
    </router-link>
  </div>
</template>

<script>
import { db } from "../../firebase";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

export default {
  name: "Tournaments",
  data() {
    return {
      tournament: {
        name: "",
      },
    };
  },
  components: {
    Modal,
  },
  methods: {
    addTournament() {
      db.collection("tournaments").add({ name: this.tournamentName });
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
      Tournaments: [
        // { name: "Tournament 1", id: 1 }
      ],
    };
  },
  created() {
    db.collection("tournaments").onSnapshot((snapshotChange) => {
      this.Tournaments = [];
      snapshotChange.forEach((doc) => {
        this.Tournaments.push({
          key: doc.id,
          name: doc.data().name,
        });
      });
    });
  },
};
</script>

<style>
.tournament {
  justify-content: center;
  align-items: center;
}
.tournament h2 {
  background: #add8e6;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: 18191a;
}
.tournament h2:hover {
  background: #45b6fe;
}
.tournament a {
  text-decoration: none;
}
.input {
  text-align: left;
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