<template>
  <div class="add-smoothie">
    <h2 class="center-align indigo-text">Add new smoothie</h2>
    <form action @submit.prevent="addSmoothie">
      <div class="input-field field title">
        <label for="title" class="active">Smoothie title</label>
        <input type="text" id="title" name="title" v-model="title" class="indigo-text" />
      </div>
      <div class="input-field field add-ingredient">
        <label for="add-ingredient" class="active">Add ingredient</label>
        <input type="text" id="add-ingredient" name="add-ingredient" />
      </div>
      <div class="field center-aligne">
        <button type="submit" class="btn pink">Add smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null
    };
  },
  methods: {
    addSmoothie() {
      console.log(this.title);
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