<template>
  <nav>
    <div class="nav-wrapper indigo darken-2">
      <router-link :to="{name:'Index'}" class="brand-logo">Ninja Smoothies</router-link>

      <router-link
        :to="{name:'AddSmoothie'}"
        class="add-button btn-floating btn-large waves-effect waves-light red"
      >
        <i class="material-icons">add</i>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  padding: 0 20px;
}
.add-button {
  position: absolute;
  right: 40px;
  top: 34px;
}
</style>