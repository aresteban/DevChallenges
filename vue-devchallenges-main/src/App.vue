<template>
    <div class="grid md:grid-cols-2 h-screen">
        <div id="control-center" class="container flex flex-col p-4">
            <h2> Control Center </h2>

            <div class="mt-auto mx-auto">
                <div class="inline transition-color duration-100 ease-in hover:bg-gray-200 rounded-full px-3 py-1 text-center"
                    v-bind:class="{'bg-blue-300 hover:bg-blue-400': activated == 'input'}"
                    v-on:click="activate('input')">
                    
                    Input</div>
                <span class="text-gray-300 mx-1">|</span>
                <div class="inline transition-color duration-100 ease-in hover:bg-gray-200 rounded-full px-3 py-1 text-center"
                    v-bind:class="{'bg-blue-300 hover:bg-blue-400': activated == 'button'}"
                    v-on:click="activate('button')"> 
                    
                    Button </div>
            </div>
            <!-- <img class="object-bottom bg-yellow-300" src="./assets/logo.png" alt="Logo"> -->
        </div>
        <div id="sandbox" class="bg-gray-200 p-4">
            <h2> Sandbox </h2>
            <Input />
            <Button />
        </div>
    </div>
</template>

<script>
import Input from './components/Input.vue';
import Button from './components/Button.vue';

export default {
    name: "App",
    components: {
        Input,
        Button
    },

    data: function() {
        return {
            activated: ''
        }
    },

    methods: {
        activate(component) {
            this.activated = component;
            console.log("Active component is:", this.activated);
        }
    },

    computed: {
        isActivated: function() {
            return {
                'bg-blue-300' : this.activated === "input"
            }
        }
    }
    
};
</script>
