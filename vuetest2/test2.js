new Vue({
    el: '#app',
    data: {
      message: 'Runoob!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })