const { createApp } = Vue

  createApp({
    data() {
      return {
        currentActive: 0,
        control:false,
        classCss:'input:checked + label',
        class:'bg-info',
        valueInput:'',
        todos: [
          {
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
        this.todos.push(this.valueInput),
        this.valueInput=''
      }
      
    }
    
  }).mount('#app')