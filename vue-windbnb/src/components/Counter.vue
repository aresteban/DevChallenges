<template>
    <div class="font-mulish">
        <label class="block text-lg font-bold"> {{ title }} </label>
        <label class="block -mt-1 font-medium text-gray-400 break-words truncate text-md"> {{ description }} </label>

        <div class="flex items-center mt-2">
            <button 
                class="w-8 h-8 pt-1 p-0.5 border border-gray-500 rounded-md text-gray-500 focus:outline-none hover:shadow-md active:bg-gray-200" 
                @click="decrement()"> 
                <i class="material-icons"> remove </i>    
            </button>

            <div class="inline-block px-2 font-semibold text-center w-9">
                <span> {{ dataValue }} </span>
            </div>
            
            <button 
                class="w-8 h-8 pt-1 p-0.5 border border-gray-500 rounded-md text-gray-500 focus:outline-none hover:shadow-md active:bg-gray-200" 
                @click="increment()"> 
                <i class="material-icons"> add </i>    
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: String,
        initialValue: Number,
        minValue: Number,
        maxValue: Number,
    },

    emits: ['onChange'],
    
    created() {
        this.dataValue = (this.initialValue > 0) ? this.initialValue : 0;
        
        this.dataMaxValue = (this.maxValue !== undefined) ? this.maxValue: null;
        this.dataMinValue = (this.minValue !== undefined) ? this.minValue: null;
    },

    mounted() {
        // this.value = (this.initialValue > 0) ? this.initialValue : 0;
    },

    data() {
        return {
            dataValue: 0,
            dataMaxValue: null,
            dataMinValue: null
        };
    },

    methods: {
        increment() {
            if (this.dataMaxValue) {
                this.dataValue = (this.dataValue < this.dataMaxValue) ? this.dataValue+1 : this.dataValue;
            }  else {
                this.dataValue++;
            }

            this.onChangeValue(this.dataValue);
        },

        decrement() {
            if (this.dataMinValue) {
                this.dataValue = ( this.dataValue > this.dataMinValue) ? this.dataValue-1 : this.dataValue;
            } else {
                this.dataValue--;
            }

            this.onChangeValue(this.dataValue);
        },

        onChangeValue(value) {
            this.$emit('onChange', value);
        }
    }
}
</script>

<style>

</style>