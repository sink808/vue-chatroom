const state = {
  user: {
    account: ''
  }
}

const mutations = {
  // setUserData (state, { userData }) {
  //   state.user.account = userData.account
  // }
}

export default {
  namespaced: true, // 避免命名衝突
  state,
  mutations
}
