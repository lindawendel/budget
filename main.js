const test = Vue.createApp({
    data() {
        return {

            newInput: '',

            // newInputType: 'inputObject'

            //newInputType: 'inputObject',

            // Objects
            inputs: [
                { id: 1, label: 10, expense: true, income: false },
                { id: 2, label: 20, expense: false, income: false },
                { id: 3, label: 30, expense: true, income:false }
            ],

            // expenses: {
            //   'expense-1':  {id: 1, label: "10"},
            //   'expense-2': {id: 2, label: "20"},
            //   'expense-3': {id: 3, label: "30"}
            // }

        }

    },

    methods: {
        saveInput() {

            this.inputs.push({ id: this.inputs.length + 1, label: this.newInput })
            this.newInput = ""
        }
    }
    
}).mount('#app');