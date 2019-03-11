<template>
  <div class="nav-layout">
    <span><router-link :to="{name: 'friends'}"><span class="action"><font-awesome-icon icon="user" size="2x"/></span></router-link></span>
    <span><router-link :to="{name: 'log'}"><span class="action"><font-awesome-icon icon="comments" size="2x"/></span></router-link></span>
    <span><router-link :to="{name: 'start'}"><span class="action"><font-awesome-icon icon="sign-out-alt" size="2x"/></span></router-link></span>
  </div>
</template>

<script>
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faComments, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUser, faComments, faUserPlus, faSignOutAlt) // ICON
export default {
  name: 'Navbar',
  data () {
    return {}
  },

  computed: {},

  methods: {}
}
</script>

<style>
.action {
  padding: 20px;
  cursor: pointer;
}
.nav-layout {
  display:flex;
  align-items:center;
  justify-content:center;
  background-color: lightgray;
}
</style>
