Vue.createApp({
    data() {
        return {

            expenses: [
                {id: 1, label: "10"},
                {id: 2, label: "20"},
                {id: 3, label: "30"}
            ]

        }
    }
}).mount('#app');