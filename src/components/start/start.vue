<template>
  <div id="start" class="row">
    <div class="col-12 display-center">
      <img :src="require('../../assets/ico/images.png')">
    </div>
    <div class="col-12 display-center">
      <input type="text" class="ele-width"
             @keydown.enter='start()'
             v-model="$store.state.account.user.account"
             placeholder="請輸入名稱" />
    </div>
    <div class="col-12 display-center">
      <router-link :to="{name: 'friends'}">
        <button class="btn btn-success ele-width">Start</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Start',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    start () {
      this.$router.push('/home/friends')
    }
  }
}
</script>

<style lang="scss">
#start {
  height: 100%;

  .ele-width {
    width: 200px;
  }
}
</style>
