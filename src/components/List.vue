<template>
  <transition name="list">
    <ul v-if="filterPlace.length" class="list shadow rounded-border">
      <li class="list-element" v-for="place in filterPlace" :key="place.title">
        <span class="title">{{place.title}}</span>
        <div
          class="delete"
          @click.stop="deleteSelectedPlace"
          :aria-label="place.title"
        >
          <svg
            class="delete-icon"
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
            ></path>
          </svg>
        </div>
      </li>
    </ul>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapGetters(["filterPlace"])
  },
  methods: {
    ...mapMutations(["setDeletePlace", "updateFilteredPlaces"]),
    deleteSelectedPlace(e) {
      this.setDeletePlace(e.currentTarget.getAttribute("aria-label"));
      this.updateFilteredPlaces();
    }
  }
};
</script>

<style lang="scss">
.list {
  position: absolute;
  display: block;
  top: 60px;
  left: 20px;
  padding: 0;
  list-style: none;
  overflow: hidden;
  transition: all .3s ease;

  .list-element {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #dadada;

    .title {
      display: block;
      margin-left: 10px;
    }

    .delete {
      display: flex;
      align-items: center;
      margin-right: 10px;
      opacity: 0.2;
      transition: opacity 0.3s ease-in;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}

.list-enter,
.list-leave-active {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
