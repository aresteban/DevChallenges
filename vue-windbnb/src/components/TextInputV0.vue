<template>
    <!-- Input wrapper -->
    <div 
        class="p-1 pt-0.5 px-5 rounded-xl font-mulish shadow-sm border border-transparent box-border transition-border ease-in inline-block" 
        :class="{'border border-gray-500': inputActive}">

        <label :for="componentId" class="text-xs font-extrabold uppercase text-2xs"> modelValue </label>
        <input type="text" 
            :id="componentId" 
            class="block pt-2 -mt-3 w-72 focus:outline-none" 
            :placeholder="placeholder" 
            @focus="inputActive = true" 
            @blur="inputActive = false"
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