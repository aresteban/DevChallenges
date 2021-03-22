<template>
    <div class="relative inline-block font-mulish" >
        <label :for="componentId" 
            class="absolute text-xs font-extrabold uppercase text-2xs top-2 left-4"
            :class="{'hidden': labelHide}"> 
            {{ label }} 
        </label>
        <input 
            type="text" 
            class="block px-3.5  border border-transparent shadow-sm focus:outline-none transition-input-border linear duration-700 focus:border-gray-500 box-border"
            :class="{
                'pt-3.5 pb-3.5': labelHide, 
                'pt-5 pb-1.5': !labelHide
            }"
            v-bind="$attrs"
            :id="componentId" 
            :placeholder="placeholder" 
            :value="modelValue"
            @focus='$emit("focused", true)'
            @blur='$emit("focused", false)'
            @input='$emit("update:modelValue", $event.target.value)'
        />
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "TextInput",

    props: {
        label: {
            type: String,
            required: true,
            default: 'Label'
        },
        placeholder: String,
        labelHide: Boolean,
        modelValue: String,
    },

    emits: ['update:modelValue', 'focused'],

    inheritAttrs: false,

    created() {
        let uuid = '';
        uuid = uuidv4();
        this.componentId = uuid.split('-').join('');
    },

    data() {
        return {
            componentId: '',
            inputActive: false,
            defaultClasses: ''
        }
    },

    mounted() {
        console.log('Attrs', this.$attrs.class );
    },

    method: { },

    computed: { }
}
</script>

<style lang="sass" scoped>

    
</style>