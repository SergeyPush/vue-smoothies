<template>
  <div class="add-smoothie">
    <h2 class="center-align indigo-text">Add new smoothie</h2>
    <form action @submit.prevent="addSmoothie">
      <div class="input-field field title">
        <label for="title" class="active">Smoothie title</label>
        <input
          type="text"
          id="title"
          name="title"
          v-model="title"
          class="indigo-text"
        />
      </div>

      <div v-for="(ingredient, index) in ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" id="ingredient" v-model="ingredients[index]" />
      </div>
      <div class="input-field field add-ingredient">
        <label for="add-ingredient" class="active">Add ingredient</label>
        <input
          type="text"
          id="add-ingredient"
          name="add-ingredient"
          @keydown.tab.prevent="addIngredient"
          v-model="another"
        />
        <span v-if="feedback" class="red-text darken-2"> {{ feedback }} </span>
      </div>
      <div class="field center-align">
        <button type="submit" class="btn pink">Add smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "../firebase/init";
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: "",
      slug: null
    };
  },
  methods: {
    addSmoothie() {
      if (this.title) {
        this.feedback = null;
        db.collection("smoothies").add({
          title: this.title,
          ingredients: this.ingredients
        });
      } else {
        this.feedback = "You must enter some title";
      }
    },
    addIngredient() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
        console.log(this.ingredients);
      } else {
        this.feedback = "You must enter value to add an ingredient";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.add-smoothie {
  margin: 60px auto 0;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2 {
  font-size: 3rem;
  margin: 40px auto;
}
.add-smoothie .field {
  margin: 20px auto;
}
.add-smoothie label {
  font-size: 1.5rem;
}
.add-smoothie input {
  border-bottom-color: indigo;
}
</style>