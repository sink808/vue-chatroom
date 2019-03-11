
<template>
  <div id="log">
    <div class="layout scrollbar">
      <template v-for="friend in friends">
        <router-link class="userRow"
                     :to="{
          name: 'chatroom',
          params: {
              name: friend.name
          }
      }"
                     :key="friend.id">

          <img :src="require(`../../../assets/proPic/default.jpg`)"
                class="proPic">
          <span style="margin-left: 5px; max-width: 80%;">
            <div>{{friend.name}}</div>
            <div class="message text-overflow">{{friend.lastMes}}</div>
          </span>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Log',
  data () {
    return {
      friends: [{ id: 1, name: 'test1', lastMes: 'Hi, fjidsjfidsjfidsjfoidsjfoidsjfoidsjfoidsjfoidsjfoidsjfoisdfdoijofisdioj' },
        { id: 2, name: 'test2', lastMes: 'Hi' },
        { id: 3, name: 'test3', lastMes: 'Hi' }
      ]
    }
  },

  computed: {
    account () {
      return this.$store.state.account.user.account // 帳戶名稱
    }
  },

  methods: {}
}
</script>

<style lang="scss">
#log {
  .layout {
    padding: 5px;
    overflow-y: auto;
    height: 100%;
  }
  .message {
    color: rgba(0, 0, 0, 0.4)
  }
}
</style>
