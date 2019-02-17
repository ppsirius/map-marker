<template>
  <ul class="list">
    <li class="list-element" v-for="place in places" :key="place.title">
      <span class="title">{{place.title}}</span>
      <div class="delete">
        <svg class="delete-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
          ></path>
        </svg>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapGetters(["places"])
  },
  mounted() {
    console.log(this.plcaces);
  }
};
</script>

<style lang="scss">
.list {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  padding: 0;
  margin: 20px 0 0 20px;
  list-style: none;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

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
      text-transform: capitalize;
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
</style>
