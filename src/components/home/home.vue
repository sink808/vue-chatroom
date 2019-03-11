<template>
  <div class="" style="height: 100%;">
    <navbar style="height: 10%"></navbar>
    <router-view style="height: 90%"/>
  </div>
</template>

<script>
import Navbar from './navbar/navbar'
export default {
  name: 'Home',
  components: {Navbar},
  data () {
    return {}
  },
  computed: {
  },
  methods: {
  }
}
</script>
