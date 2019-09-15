<template>
  <div class="index">
    <div v-if="isLoading">
      <Loader />
    </div>
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete-icon" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{smoothie.title}}</h2>

        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients " :key="index">
            <span class="chip">{{ingredient}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init";
import Loader from "./UI/Loader";
export default {
  name: "Index",
  components: {
    Loader
  },
  data() {
    return {
      smoothies: [],
      isLoading: true
    };
  },
  methods: {
    deleteSmoothie(id) {
      db.collection("smoothies")
        .doc(id)
        .delete()
        .then(() => {
          this.smoothies = this.smoothies.filter(item => item.id !== id);
        });
    }
  },
  created() {
    setTimeout(() => {
      db.collection("smoothies")
        .get()
        .then(snapshot => {
          snapshot.forEach(item => {
            this.smoothies.push({ ...item.data(), id: item.id });
            this.isLoading = false;
          });
        });
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}

.index h2 {
  font-size: 1.8rem;
  margin-top: 0;
  text-align: center;
}
.ingredients li {
  display: inline-block;
}
.delete-icon {
  position: absolute;
  right: 0;
  top: 0;
  color: #aaa;
  cursor: pointer;
  &:hover {
    color: red;
    transition: all 0.2s ease-in;
  }
}
</style>