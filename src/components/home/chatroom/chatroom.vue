<template>
  <div id="chatroom">
    <!-- single root element here -->
    <div style='height: 10%; padding: 8px'>
      <img :src="require(`../../../assets/proPic/default.jpg`)" class="proPic">
      {{contact}}
    </div>
    <div style='height: 65%'
         class="message scrollbar">
      <template v-for='chat in chats'>
        <div :key='chat.id'
             v-if="chat.name === account"
             class='messageBox-self'>
          <div class='messageTime mx-2'
               style="text-align: end;">{{chat.createTiime | formatDate('MM-dd mm:ss')}}</div>
          <div class='messageBubble'>
            <div class='messageContent'>{{chat.content}}</div>
            <div class='tail-lbottom'></div>
          </div>
        </div>

        <div :key='chat.id'
             v-else
             class='messageBox-other'>
          <div class='messageBubble'>
            <div class='messageContent'>{{chat.content}}</div>
            <div class='tail-rbottom'></div>
          </div>
          <div class='messageTime mx-2'>{{chat.createTiime | formatDate('MM-dd mm:ss')}}</div>
        </div>
      </template>
    </div>
    <div style='height: 5%'
         class='bar'></div>
    <textarea style='height: 20%'
              class='textArea'
              @keydown.enter='clickEnter($event)'
              v-model='textArea'></textarea>
  </div>
</template>

<script>
export default {
  name: 'Chatroom',
  data () {
    return {
      chats: [{
        id: 0,
        name: this.contact,
        content: 'Hi',
        createTiime: 1549879590894
      }
      ], // 儲存所有訊息的陣列
      textArea: ''
    }
  },

  computed: {
    account () {
      return this.$store.state.account.user.account // 帳戶名稱
    },
    contact () {
      return this.$route.params.name // 聯繫人
    }
  },

  created: function () {
    this.sockets.subscribe(`getMesFrom${this.contact}`, (mes) => {
      this.chats.push(mes)
      console.log('mes', mes)
    })
  },
  destroyed: function () {
    // this.getMes().unsubscribe()
  },
  methods: {
    clickEnter: function (e) {
      let message = this.textArea // 要送出的訊息
      let messageItem = {
        id: this.chats.length, // 訊息的id依再陣列的位置,
        name: this.account, // 自身帳號名
        content: message,
        createTiime: new Date().getTime()
      }
      // shift + enter 不傳送訊息
      if (e.shiftKey) {
        return false
      }
      // 輸入是空則不傳送訊息
      if (message.trim() === '') {
        this.textArea = ''
        e.preventDefault() // 避免enter產生的空白換行
        return false
      }

      this.chats.push(messageItem)
      this.textArea = ''
      e.preventDefault() // 避免enter產生的空白換行
      this.$socket.emit('message', messageItem)
    }
  },
  sockets: {
    connect () {
      console.log('socket connected')
    },
    message (data) {
      console.log(data)
    }
  }
}
</script>

<style lang='scss'>
#chatroom {
  .bar {
    background-color: lightgray;
  }

  .message {
    overflow-y: auto;
    .messageBox-self {
      margin: 5px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      .messageContent {
        background-color: lightgreen;
      }
      .tail-lbottom {
        border-left: 5px solid lightgreen;
      }
    }

    .messageBox-other {
      margin: 5px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      .messageContent {
        background-color: lightblue;
      }
      .tail-rbottom {
        border-right: 5px solid lightblue;
      }
    }

    .messageTime {
      color: lightgray;
      font-size: x-small;
      width: 25%;
    }

    .messageBubble {
      max-width: 75%;
      .messageContent {
        padding: 4px;
        border-radius: 5px;
        word-break: break-all;
        white-space: pre-wrap;
        max-width: 100%;
      }

      .tail-lbottom {
        width: 10px;
        height: 8px;
        margin-left: calc(100% - 10px);
        -moz-border-radius: 0 0 0 10px;
        -webkit-border-radius: 0 0 0 10px;
        border-radius: 0 0 0 10px;
      }

      .tail-rbottom {
        width: 10px;
        height: 8px;
        -moz-border-radius: 0 0 10px 0;
        -webkit-border-radius: 0 0 10px 0;
        border-radius: 0 0 10px 0;
      }
    }
  }

  .textArea {
    border-radius: 0 0px 3px 3px;
    border: none;
    width: 100%;
    resize: none;
  }
}
</style>
