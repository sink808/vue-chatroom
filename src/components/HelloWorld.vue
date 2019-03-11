<template>
  <div class="hello">
    <p>{{count}}</p>
    <button @click="increase">Click Me</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      counting: 10
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increase () {
      this.$store.dispatch('count/incrementCount', this.counting)
    }
  }
}
</script>
