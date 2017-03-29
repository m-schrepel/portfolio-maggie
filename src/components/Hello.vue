<template>
    <nav>
      <div class="nav-item">
        <router-link to="/one">One</router-link>
      </div>
      <div class="nav-item">
        <router-link to="two">Two</router-link>
      </div>
      <div class="nav-item">
        <router-link to="three">Three</router-link>
      </div>
      <div class="nav-item">
        <router-link to="four">Four</router-link>
      </div>
      <div class="nav-item">
        <router-link to="five">Five</router-link>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  background-color: #000;
  align-items: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  transition: .3s;
  text-decoration: none;
  width: 100%;
  height: 100%;
  line-height: 40px;
}

.nav-item {
  width: 100%;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-link-active {
  color: red;
  background-color: #fff;
}
</style>