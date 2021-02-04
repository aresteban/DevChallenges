<template>
    <div class="grid md:grid-cols-2 h-screen">
        <div id="control-center" class="p-4">
            <h2> Control Center </h2>

        </div>
        <div id="sandbox" class="bg-gray-200 p-4">
            <h2> Sandbox </h2>
            <Input />
            <Button/>
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
};
</script>

<style>

</style>
