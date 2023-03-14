const test = Vue.createApp({
    data() {
        return {

            // Objects
            expenses: [
                {id: 1, label: 10},
                {id: 2, label: 20},
                {id: 3, label: 30}
            ],

            newExpense: '',

            // newInputType: 'expense'

            newInputType: 'expense'

            // expenses: {
            //   'expense-1':  {id: 1, label: "10"},
            //   'expense-2': {id: 2, label: "20"},
            //   'expense-3': {id: 3, label: "30"}
            // }

        }
    }
}).mount('#app');