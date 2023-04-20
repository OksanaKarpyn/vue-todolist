const {
  createApp
} = Vue

createApp({
  data() {
    return {
      control: false,
      currentActive: 0,
      class: 'bg-info',
      valueInput: '',
      todos: [{
          text: 'Fare i compiti',
          done: false
        },
        {
          text: 'Fare la spesa',
          done: true
        },
        {
          text: 'Fare il bucato',
          done: false
        }
      ]

    }
  },
  methods: {
    newtodo() {
      if(this.valueInput !== ''){
        let oggettoInput = {
          text:this.valueInput,
          done:false }
        this.todos.push(oggettoInput)
          // pulisce campo input
          this.valueInput = ''
      }
    },
    todoTrue() {
      if (this.todos == true) {
        this.todos = this.class
        // this.control = false
      } else {
        // this.control = true
      }
    },

    deleteItem(i) {
      console.log("delete",i);
      // i sta per posixione del elemento, 1 quantita di elementi da eliminare
      this.todos.splice(i, 1);
    },

  }

}).mount('#app')