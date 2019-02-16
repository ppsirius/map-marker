<template>
  <transition name="modal">
    <div class="modal-mask" v-if="modalState">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>Saving new places in Warsaw</h3>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <form>
                <input v-model="placeName" required placeholder="Place name">
              </form>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="savePlace">Save place</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Modal",
  data: () => {
    return {
      placeName: ""
    };
  },
  computed: {
    ...mapGetters(["modalState"])
  },
  methods: {
    ...mapMutations(["toggleModal", "addPlace"]),
    clearPlaceName() {
      this.placeName = "";
    },
    savePlace() {
      this.addPlace(this.placeName);
      this.toggleModal();
      this.clearPlaceName();
    }
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/* Animaition */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>
