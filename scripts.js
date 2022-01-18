import {Card} from './components/card.js'
const App = Vue.createApp({
    template: `
        <div class="header">
            <button class="btn" @click="switchFunc54()">54</button>
            <button class="btn" @click="switchFunc36()">36</button>
            <button class="btn" @click="refresh()">Refresh</button>
        </div>

        <div :class="{ none: isActive }" class="card-block" v-for="el in values54">
            <card v-for="name in names54" :names="name" :values="el"></card>
        </div>
        <hr>
        <div :class="{ none: !isActive }" class="card-block" v-for="el in values36">
            <card v-for="name in names36" :names="name" :values="el"></card>
        </div>
        
    `,
    components: {
        "card": Card
    },
    data() {
        return {
            isActive: true,
            names54: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
            values54: ['♥','♦','♠','♣'],
            names36: ['A','6', '7', '8', '9', '10', 'J', 'Q', 'K'],
            values36: ['♥','♦','♠','♣'],
        }
    },
    methods: {
        shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        },
        refresh(){
            this.shuffle(this.names54)
            this.shuffle(this.values54)
            this.shuffle(this.names36)
            this.shuffle(this.values36)
        },
        switchFunc54() {
            if (this.isActive === true) {
                this.isActive = false 
            } 
        },
        switchFunc36() {
            if (this.isActive === false) {
                this.isActive = true 
            } 
        }
    },
}).mount("#app")