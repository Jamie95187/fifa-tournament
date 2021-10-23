<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i @click="close" class="fas fa-times-circle"></i>
          <slot />
          <button>Add Player</button>
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

    return { close };
  },
};
</script>

<style>
</style>