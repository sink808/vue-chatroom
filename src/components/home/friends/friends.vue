
<template>
  <div id="friends">
    <div class="add-user" :class="{ 'display-none': !isAddUser }">
      <input type="text" placeholder="請輸入名稱" v-model="addUserName"/>
      <span class="clickable"><font-awesome-icon icon="plus-circle" size="1x" @click="addUser()"/></span>
    </div>
    <div class="layout scrollbar" :class="{ 'add-user-height': isAddUser }">
      <template v-for="friend in friends">
        <router-link class="userRow" @click="goChatRoom(friend.imgUrl)"
                     :to="{
          name: 'chatroom',
          params: {
              name: friend.name,
          }
      }"
                     :key="friend.id">
          <div>
            <img :src="require(`../../../assets/proPic/default.jpg`)"
                 class="proPic">
            {{friend.name}}
          </div>
        </router-link>
      </template>
      <div class="user-plus display-center clickable" @click="isAddUser = !isAddUser">
        <font-awesome-icon icon="user-plus" size="2x"/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUserPlus, faPlusCircle) // ICON
export default {
  name: 'Friends',
  data () {
    return {
      friends: [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
        { id: 4, name: 'test4' },
        { id: 5, name: 'test5' },
        { id: 6, name: 'test6' },
        { id: 7, name: 'test7' },
        { id: 8, name: 'test8' },
        { id: 9, name: 'test9' },
        { id: 10, name: 'test10' }
      ],
      isAddUser: false,
      addUserName: ''
    }
  },

  computed: {
    account () {
      return this.$store.state.account.user.account // 帳戶名稱
    }
  },
  methods: {
    goChatRoom: (imgUrl) => {
      this.router.push({
        name: 'chatroom',
        params: {
          imgUrl: imgUrl
        }
      })
    },
    addUser: function () {
      this.isAddUser = false
      this.friends.push({ id: this.friends.length + 1, name: this.addUserName })
    }
  }
}
</script>

<style lang="scss">
#friends {
  .layout {
    padding: 5px;
    overflow-y: auto;
    height: 100%;
  }
  .user-plus {
    height: 58px;
    width: 58px;
    position: absolute;
    z-index: 99;
    bottom: 30px;
    right: calc(50vw - 210px);
    border-radius: 50%;
    background-color: #dddddd;
    box-shadow: 4px 4px 3px #888888;
    &:hover {
      color: #0056b3;
    }
  }
  .add-user {
    background: #eeeeee;
    padding: 5px;
    input {
      width: calc(100% - 50px);
    }
  }

  .add-user-height {
    height: calc(100% - 30px);
  }
  @media screen and (max-width: 480px) {
    .user-plus {
      bottom: 20px;
      right: 30px;
    }
}
}
</style>
