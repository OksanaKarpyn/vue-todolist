const {
  createApp
} = Vue

createApp({
  data() {
    return {
      classi: 'bg-info',
      divi:' text-decoration-line-through',
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
      ],
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
    deleteItem(i) {
      console.log("delete",i);
      // i sta per posizione del elemento, 1 quantita di elementi da eliminare
      this.todos.splice(i, 1);
    },
    toggle(element){ 
    let nextValue =!element.done 
      element.done = nextValue

    }
  }

}).mount('#app')