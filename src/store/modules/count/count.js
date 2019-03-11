const state = {
  count: 1
}
const actions = {
  incrementCount (context, counting) {
    context.commit('INCREMENT_COUNT', counting)
  },
  formatDate (context, time) {
    context.commit('formatDate', time)
  }
}
const mutations = {
  INCREMENT_COUNT (state, counting) {
    state.count += counting
  },
  formatDate (time) {
    var data = new Date(time)
    return formatDate(data, 'MM-dd mm:ss')

    function formatDate (date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : padLeftZero(str)
          )
        }
      }
      return fmt
    }

    function padLeftZero (str) {
      return ('00' + str).substr(str.length)
    }
  }
}

export default {
  namespaced: true, // 避免命名衝突
  state,
  actions,
  mutations
}
