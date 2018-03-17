<template>
  <span id="app" style="width:1600px; height:100%">
    <router-view/>
  </span>
</template>
<style>
  #app{
    -ms-scroll-snap-x: none
  }
</style>


<script>
export default {
  name: 'App'
}
</script>


