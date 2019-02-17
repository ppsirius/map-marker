<template>
  <transition name="modal">
    <div class="modal-mask" v-if="modalState">
      <div class="modal-wrapper">
        <div class="modal-container shadow">
          <div class="modal-header">
            <slot name="header">
              <h3>Place in Warsaw</h3>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <form>
                <input
                  required
                  placeholder="Place name"
                  :value="placeName"
                  @input="updatePlaceName"
                >
              </form>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <div v-if="modalMode">
                <button class="modal-default-button" @click="savePlace">Save place</button>
              </div>
              <div v-else>
                <button class="modal-default-button" @click="closeModal">Ok</button>
              </div>
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
  computed: {
    ...mapGetters(["modalState", "modalMode", "placeName"])
  },
  methods: {
    ...mapMutations(["toggleModal", "addPlace", "setPlaceName"]),
    savePlace() {
      this.addPlace(this.placeName);
      this.toggleModal();
      this.setPlaceName("");
    },
    updatePlaceName(e) {
      this.setPlaceName(e.target.value);
    },
    closeModal() {
      this.toggleModal();
      this.setPlaceName("");
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
  z-index: 1;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
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
