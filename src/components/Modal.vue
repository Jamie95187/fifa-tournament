<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i @click="close" class="fas fa-times-circle"></i>
          <slot />
          <button @click="confirm" type="button" class="confirmButton">
            Confirm
          </button>
          <button @click="close" type="button">Cancel</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    const confirm = () => {
      emit("confirm");
    };
    return { close, confirm };
  },
};
</script>

<style>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7);
}
.modal-inner {
  position: relative;
  max-width: 640px;
  width: 80%;
  background: whitesmoke;
  padding: 64px 16px;
}
i {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}
.confirmButton {
  margin-top: 20px;
  margin-right: 15px;
  margin-bottom: 20px;
}
</style>