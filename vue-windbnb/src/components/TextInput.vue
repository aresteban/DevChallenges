<template>
    <div class="relative inline-block font-mulish" >
        <label :for="componentId" 
            class="absolute text-xs font-extrabold uppercase text-2xs top-2 left-4"
            :class="{'hidden': labelHide}"> 
            {{ label }} 
        </label>
        <input 
            type="text" 
            class="block px-3.5  border border-transparent shadow-sm w-72 focus:outline-none rounded-xl transition-input-border ease-in focus:border-gray-500 box-border" 
            :class="{'pt-3.5 pb-3.5': labelHide, 'pt-5 pb-1.5': !labelHide}"
            v-bind="$attrs"
            :id="componentId" 
            :placeholder="placeholder" 
            :value="modelValue"
            @input='$emit("update:modelValue", $event.target.value)'
        />
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
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

    emits: ['update:modelValue'],

    created() {
        let uuid = '';
        uuid = uuidv4();
        this.componentId = uuid.split('-').join('');
    },

    data() {
        return {
            componentId: '',
            inputActive: false,
        }
    },

    mounted() {
    },

    method: { }


}
</script>