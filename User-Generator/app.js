const app = Vue.createApp({
    template: `
    <img :class="gender" v-bind:src="picture" v-bind:alt="firstName"/>
    <h1>Welcome {{firstName}} {{lastName}}</h1>
    <h3>{{email}}</h3>
    <h3>{{counter}} Users Generated</h3>
    <button v-on:click="getUser()" :class="gender" >Generate User</button>
    `,
    data() {
        return {
            firstName: "Gumernus",
            lastName: "Pepega",
            email: "gumernusbussines@gmail.com",
            gender: "male",
            picture: "https://avatars.githubusercontent.com/u/70224036?v=4.jpg",
            counter: 0
        }
    },
    methods: {
        async getUser() {
            const res = await fetch("https://randomuser.me/api")
            const { results } = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.counter = this.counter + 1
        }
    }
})

app.mount("#app")