<template>
<div class="flex flex-col h-screen">

    <header class="container flex justify-between items-center px-5 py-1 max-w-8xl mx-auto">
    <!-- Page Logo -->
    <div
        class="transition-all ease-in duration-700" 
        :class="{
            'opacity-0 w-0': searchFocused,
            'w-1/2': !searchFocused

        }">
        <img src="./assets/logo.png" alt="site_logo" />
    </div>
    <div class="flex transition-width ease-in duration-700 " 
        :class="{
            'justify-center w-full': searchFocused,
            'justify-end w-1/2': !searchFocused
        }">
                <!-- 'w-64': searchFocused,
                'w-40': !searchFocused, -->
        <TextInput
            :class="{
                'rounded-xl w-96 mx-3': searchFocused,
                'rounded-l-xl w-40': !searchFocused
            }"
            :label="'Location'"
            :placeholder="'Add Location'"
            :labelHide="labelHide"
            v-model:modelValue="inputLocation"
            @focused="testFocused"
            @update:modelValue="recieveLocation"
        />

        <TextInput
            class=""
            :class="{
                'w-96 rounded-xl mr-3': searchFocused,
                'w-40': !searchFocused
            }"
            :label="'Guests'"
            :placeholder="'Add Guests'"
            :labelHide="labelHide"
            :shrinkWhenInactive="true"
            v-model:modelValue="inputGuests"
            @focused="testFocused"
            @update:modelValue="recieveGuests"
        />

        <button
            class="focus:outline-none p-3 leading-3 shadow-sm text-red-500 hover:bg-red-500 hover:text-white font-mulish font-semibold"
            :class="{
                'rounded-xl': searchFocused,
                'rounded-r-xl': !searchFocused
            }">
            <div class="flex items-center">                
                <i class="material-icons">search</i>
                <span 
                    class="align-baseline transition-all ease-in duration-700"
                    :class="{
                        'ml-2 opacity-100 w-13': searchFocused,
                        'ml-0 opacity-0 w-0': !searchFocused
                    }"> 
                    Search </span>
            </div> 
        </button>
    </div>
    </header>

    <main class="mb-auto container mx-auto w-screen flex flex-wrap justify-center">
    
        <StayCard v-for="item in stays" :key="item.id" :stayData="item"/>
        <!-- <Counter :title="'Adults'" :description="'Ages 13 or above'" @onChange="testRecieveEmit" />
        <Counter :title="'Children'" :description="'Ages 2 to 12'" @onChange="testRecieveEmit" /> -->
        <!-- <TextInput 
            :label="'Location'" 
            :placeholder="'Add Location'" 
            v-model:modelValue="inputLocation" 
            @update:modelValue="testRecieveEmit"/> -->
    </main>

    <footer class="font-montserrat text-sm text-gray-500 text-center py-3">
        <span> Created by </span>
        <span class="font-semibold underline"> 
            <a href="#">drinesteban</a> 
        </span>
        <span> - devChallenges.io </span>
    </footer>
</div>

</template>

<script>
import data from "./assets/stays.json";
import StayCard from './components/StayCard.vue'
// import Counter from "./components/Counter.vue";
import TextInput from "./components/TextInput.vue";

export default {
    name: "App",
    components: {
        StayCard,
        // Counter,
        TextInput,
    },

    data() {
        return {
            stays: [],
            inputLocation: "Helsinki, Finland",
            inputGuests: "",
            labelHide: false,
            searchFocused: false
        };
    },

    mounted() {
        this.getStays();
    },

    methods: {
        /**
         * Retrieve stays data from json file
         */
        getStays() {
            this.stays = data;
            console.log(this.stays);
        },

        recieveLocation(value) {
            console.log("Recieved Location Value:", value);
        },

        recieveGuests(value) {
            console.log("Recieved Guest Value:", value);
        },

        hideLabel() {
            this.labelHide = !this.labelHide;
            console.log("labelHide", this.labelHide);
        },

        testFocused(e) {
            this.searchFocused = this.labelHide = e;
            console.log('Focused', e);
        }
    },
};
</script>

<style lang="scss">
// .transition-button {
//     transition: ;
// }
</style>
