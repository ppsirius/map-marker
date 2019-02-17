<template>
  <transition name="modal">
    <div class="modal-mask" v-if="modalState">
      <div class="modal-wrapper">
        <div class="modal-container shadow">
          <div class="modal-header">
            <header>
              <h2>Place in Warsaw</h2>
            </header>
          </div>
          <div class="modal-body">
            <form @submit.prevent="checkForm">
              <div v-if="errors.length">
                <ul class="error-list">
                  <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
              </div>
              <input
                placeholder="Place name"
                :value="placeName"
                @input="updatePlaceName"
                class="input-name rounded-border"
              >
              <div class="buttons-wrapper" v-if="modalMode">
                <button class="btn btn-outline" @click="closeModal">Cancel</button>
                <input type="submit" class="btn btn-primary" value="Save">
              </div>
              <div class="buttons-wrapper" v-else>
                <button class="btn btn-primary" @click="closeModal">Ok</button>
              </div>
            </form>
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
      errors: []
    };
  },
  computed: {
    ...mapGetters(["modalState", "modalMode", "placeName", "places"])
  },
  methods: {
    ...mapMutations(["toggleModal", "addPlace", "setPlaceName", "clearSearch"]),
    checkForm() {
      if (!this.placeName) {
        this.clearErrors();
        this.errors.push("Name required.");
      } else if (this.isNameUnique()) {
        this.clearErrors();
        this.errors.push("Name is already taken");
      } else {
        this.savePlace();
      }
    },
    savePlace() {
      this.addPlace(this.placeName);
      this.toggleModal();
      this.setPlaceName("");
      this.clearSearch();
      this.clearErrors();
    },
    updatePlaceName(e) {
      this.setPlaceName(e.target.value);
    },
    closeModal(e) {
      this.toggleModal();
      this.setPlaceName("");
      this.clearErrors();
      e.preventDefault();
    },
    clearErrors() {
      this.errors = [];
    },
    isNameUnique() {
      return this.places.filter(place => place.title === this.placeName).length;
    }
  }
};
</script>

<style lang="scss">
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
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: transform 0.3s ease;
}

.modal-header h2 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #18b1f6;
}

.input-name {
  width: 100%;
  padding: 8px 10px;
  border: none;
  outline: none;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid #c5cbd3;
  color: #2c3e50;

  &::placeholder {
    color: #c5cbd3;
  }
}

.modal-body {
  margin: 10px 0;
}

.error-list {
  list-style: none;
  margin: 0;
  padding: 0;
  color: rgb(202, 5, 5);
  font-size: 12px;
  margin-bottom: 10px;
}

.buttons-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  .btn {
    &:first-child {
      margin-right: 20px;
    }
  }
}

/* Animaition */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter,
.modal-leave-active {
  transform: scale(1.1);
}
</style>
