<template>
  <div class="content" style="display:flex">
    <Hello></Hello>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>


