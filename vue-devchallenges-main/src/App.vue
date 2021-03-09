<template>
    <div class="grid md:grid-cols-2 h-screen">
        <div id="control-center" class="container flex flex-col p-4">
            <h2> Control Center </h2>

            <div id="input-contols" class="mx-auto my-auto" v-if="activated === 'input'">
                <!-- Variants -->
                <div>
                    <h2 class="text-xl"> Input Variant </h2>
                    <div class="mt-2">
                        <button 
                            class="bg-gray-300 rounded-tl-md rounded-bl-md p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': selectedVariant == 'default'}"
                            v-on:click="selectVariant('default')"> 
                            Default 
                        </button>
                        <button 
                            class="bg-gray-300  p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': selectedVariant == 'error'}"
                            v-on:click="selectVariant('error')"> 
                            Error 
                        </button>
                        <button 
                            class="bg-gray-300 rounded-tr-md rounded-br-md p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': selectedVariant == 'disabled'}"
                            v-on:click="selectVariant('disabled')">
                            Disabled 
                        </button>
                    </div>
                </div>

                <!-- Label -->
                <div class="mt-5">
                    <h2 class="text-xl"> Input Label </h2>
                    <input 
                        v-model="inputLabelText"
                        type="text" 
                        class="outlin-none p-2 mt-2 border border-rounded rounded-md focus:outline-none">
                </div>

                <!-- helperText -->
                <div class="mt-5">
                    <h2 class="text-xl"> Helper Text </h2>
                    <input 
                        v-model="inputHelperText"
                        type="text" 
                        class="outlin-none p-2 mt-2 border border-rounded rounded-md focus:outline-none">
                </div>

                 <!-- Sizes -->
                <div class="mt-5">
                    <h2 class="text-xl"> Input Size </h2>
                    <div class="mt-2">    
                        <button 
                            class="bg-gray-300 rounded-tl-md rounded-bl-md p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': selectedSize == 'sm'}"
                            v-on:click="selectSize('sm')"> 
                            Small
                        </button>
                        <button 
                            class="bg-gray-300  p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': selectedSize == 'md'}"
                            v-on:click="selectSize('md')"> 
                            Medium 
                        </button>
                        <button 
                            class="bg-gray-300 rounded-tr-md rounded-br-md p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': selectedSize == 'fullWidth'}"
                            v-on:click="selectSize('fullWidth')">
                            Full Width 
                        </button>
                    </div>
                </div>

                <!-- Icons -->
                <div class="mt-5">
                    <h2 class="text-xl"> Icon Type </h2>
                    <div class="flex flex-row mt-2">
                        <div class="flex align-center items-center pl-2">
                            <input type="radio" name="icon-type" id="no-icon"  value="no-icon" v-model="iconType" checked="checked">
                            <label  class="pl-1" for="no-icon"> No Icon </label>
                        </div>
                        <div class="flex align-center items-center pl-2">
                            <input type="radio" name="icon-type" id="start-icon" value="start-icon" v-model="iconType" >
                            <label  class="pl-1" for="start-icon"> Start Icon </label>
                        </div>
                        <div class="flex align-center items-center pl-2">
                            <input type="radio" name="icon-type" id="end-icon" value="end-icon" v-model="iconType" >
                            <label  class="pl-1" for="end-icon"> End Icon </label>
                        </div>
                    </div>
                    <div class="mt-5">
                        <h2 class="text-xl"> Icon Text </h2>

                        <input 
                            v-model="materialIcon"
                            placeholder="add_shopping_cart"
                            type="text" 
                            class="outlin-none p-2 border border-rounded rounded-md focus:outline-none">
                    </div>
                </div>

                <!-- helperText -->
                <div class="mt-5">
                    <h2 class="text-xl"> Rows </h2>
                    <input 
                        v-model="inputRows"
                        type="text" 
                        class="outlin-none p-2 mt-2 border border-rounded rounded-md focus:outline-none">
                </div>
            </div>

            <div id="button-controls" 
                class="mx-auto my-auto"
                v-if="activated === 'button'">
                
                <!-- Button Value -->
                <div class="mt-5">
                    <h2 class="text-xl">Button Text</h2>
                    <input 
                        v-model="buttonValue"
                        type="text" 
                        class="outlin-none p-2 mt-2 border border-rounded rounded-md focus:outline-none">
                </div>

                <!-- Button Variants -->
                <div class="mt-5">
                    <h2 class="text-xl"> Button Variant </h2>
                    <div class="mt-2">
                        <button 
                            class="bg-gray-300 rounded-tl-md rounded-bl-md p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': buttonVariant == 'default'}"
                            v-on:click="selectButtonVariant('default')"> 
                            Default 
                        </button>
                        <button 
                            class="bg-gray-300  p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': buttonVariant == 'outline'}"
                            v-on:click="selectButtonVariant('outline')"> 
                            Outline 
                        </button>
                        <button 
                            class="bg-gray-300 rounded-tr-md rounded-br-md p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': buttonVariant == 'text'}"
                            v-on:click="selectButtonVariant('text')">
                            Text 
                        </button>
                    </div>
                </div>

                <!-- Button Disabled -->
                <div class="mt-5">
                    <h2 class="text-xl">Button Disabled</h2>
                    <input 
                        v-model="buttonDisabled"
                        type="checkbox" 
                        class="outlin-none p-2 mt-2 border border-rounded rounded-md focus:outline-none">
                </div>

                <!-- Button Shadow -->
                <div class="mt-5">
                    <h2 class="text-xl">Button Shadow</h2>
                    <input 
                        v-model="buttonShadow"
                        type="checkbox" 
                        class="outlin-none p-2 mt-2 border border-rounded rounded-md focus:outline-none">
                </div>

                <!-- Icons -->
                <div class="mt-5">
                    <h2 class="text-xl"> Icon Type </h2>
                    <div class="flex flex-row mt-2">
                        <div class="flex align-center items-center pl-2">
                            <input type="radio" name="icon-type" id="button-no-icon"  value="no-icon" v-model="buttonIconType" checked="checked">
                            <label  class="pl-1" for="no-icon"> No Icon </label>
                        </div>
                        <div class="flex align-center items-center pl-2">
                            <input type="radio" name="icon-type" id="button-start-icon" value="start-icon" v-model="buttonIconType" >
                            <label  class="pl-1" for="start-icon"> Start Icon </label>
                        </div>
                        <div class="flex align-center items-center pl-2">
                            <input type="radio" name="icon-type" id="button-end-icon" value="end-icon" v-model="buttonIconType" >
                            <label  class="pl-1" for="end-icon"> End Icon </label>
                        </div>
                    </div>
                    <div class="mt-5">
                        <h2 class="text-xl"> Icon Text </h2>

                        <input 
                            v-model="buttonIcon"
                            placeholder="add_shopping_cart"
                            type="text" 
                            class="outlin-none p-2 border border-rounded rounded-md focus:outline-none">
                    </div>
                </div>

                <!-- Button Sizes -->
                <div class="mt-5">
                    <h2 class="text-xl"> Button Size </h2>
                    <div class="mt-2">    
                        <button 
                            class="bg-gray-300 rounded-tl-md rounded-bl-md p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': buttonSize == 'sm'}"
                            v-on:click="selectButtonSize('sm')"> 
                            Small
                        </button>
                        <button 
                            class="bg-gray-300  p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': buttonSize == 'md'}"
                            v-on:click="selectButtonSize('md')"> 
                            Medium 
                        </button>
                        <button 
                            class="bg-gray-300 rounded-tr-md rounded-br-md p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': buttonSize == 'lg'}"
                            v-on:click="selectButtonSize('lg')">
                            Large
                        </button>
                    </div>
                </div>


                 <!-- Button Color -->
                <div class="mt-5">
                    <h2 class="text-xl"> Button Color </h2>
                    <div class="mt-2">
                        <button 
                            class="bg-gray-300 rounded-tl-md rounded-bl-md p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': buttonColor == ''}"
                            v-on:click="selectButtonColor('')"> 
                            No Color
                        </button>
                        <button 
                            class="bg-gray-300 p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': buttonColor == 'primary'}"
                            v-on:click="selectButtonColor('primary')"> 
                            Primary
                        </button>
                        <button 
                            class="bg-gray-300  p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': buttonColor == 'secondary'}"
                            v-on:click="selectButtonColor('secondary')"> 
                            Secondary 
                        </button>
                        <button 
                            class="bg-gray-300 rounded-tr-md rounded-br-md p-2 cursor-pointer hover:bg-blue-200 hover:border-blue-500 focus:outline-none"
                            v-bind:class="{'bg-blue-300 hover:bg-blue-400': buttonColor == 'danger'}"
                            v-on:click="selectButtonColor('danger')">
                            Danger
                        </button>
                    </div>
                </div>


            </div>

            <div class="mt-auto mx-auto pt-5">
                <div class="inline transition-color duration-100 ease-in hover:bg-gray-200 cursor-pointer rounded-full px-3 py-1 text-center"
                    v-bind:class="{'bg-blue-300 hover:bg-blue-400': activated == 'input'}"
                    v-on:click="activate('input')">
                    Input</div>
                <span class="text-gray-300 mx-1">|</span>
                <div class="inline transition-color duration-100 ease-in hover:bg-gray-200 cursor-pointer rounded-full px-3 py-1 text-center"
                    v-bind:class="{'bg-blue-300 hover:bg-blue-400': activated == 'button'}"
                    v-on:click="activate('button')"> 
                    Button </div>
            </div>
            <!-- <img class="object-bottom bg-yellow-300" src="./assets/logo.png" alt="Logo"> -->
        </div>
        <div id="sandbox" class="bg-gray-200 p-4 h-full">
            <h2> Sandbox </h2>
            <div class="h-5/6 flex flex-column justify-center align-cente items-center box-border">
                <Input v-show="activated == 'input'"
                    class="transition-all duration-100 ease-in"
                    :label="inputLabelText"
                    :helperText="inputHelperText"
                    :disabled="selectedVariant == 'disabled'"
                    :error="selectedVariant == 'error'"
                    :size="(selectedSize == 'fullWidth') ? 'md': selectedSize"
                    :fullWidth="selectedSize == 'fullWidth'"
                    :startIcon="(iconType == 'start-icon') ? materialIcon : null"
                    :endIcon="(iconType == 'end-icon') ? materialIcon : null"
                    :rows="inputRows"
                />
                <Button v-show="activated == 'button'"
                    class="transition-all duration-100 ease-in"
                    :value="buttonValue"
                    :variant="buttonVariant"
                    :disabled="buttonDisabled"
                    :disableShadow="!buttonShadow"
                    :startIcon="(buttonIconType == 'start-icon') ? buttonIcon : null"
                    :endIcon="(buttonIconType == 'end-icon') ? buttonIcon : null"
                    :size="buttonSize"
                    :color="buttonColor"
                />
            </div>
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
            activated: 'button',
            inputLabelText: '',
            inputHelperText: '',
            selectedVariant: 'default',
            selectedSize: 'md',
            iconType: '',
            materialIcon: '',
            inputRows: 0,

            buttonValue: '',
            buttonVariant: '',
            buttonDisabled: false,
            buttonShadow: false,
            buttonIconType: null,
            buttonIcon: '',
            buttonSize:'md',
            buttonColor: ''
        }
    },

    methods: {
        activate(component) { this.activated = component },

        selectVariant(variant) { this.selectedVariant = variant },

        selectSize(size) { this.selectedSize = size },

        selectButtonVariant(variant) { this.buttonVariant = variant },

        selectButtonSize(size) { this.buttonSize = size },

        selectButtonColor(color) { this.buttonColor = color }
    },

    computed: {

    }
};
</script>
