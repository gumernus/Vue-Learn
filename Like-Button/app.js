const app = Vue.createApp({
    template: `
    <button v-on:click="getUser()">{{counter}} Likes❤️</button>
    `,
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        async getUser() {
            this.counter = this.counter + 1
        }
    }
})

app.mount("#app")