<template>
    <div class="grid md:grid-cols-2 h-screen">
        <div id="control-center" class="p-4">
            <h2> Control Center </h2>

        </div>
        <div id="sandbox" class="bg-gray-200 p-4">
            <h2> Sandbox </h2>
            <Input />
        </div>
    </div>
</template>

<script>
import Input from '../../vue-devchallenges-input/src/components/Input.vue';

export default {
    name: "App",
    components: {
        Input
    },
};
</script>

<style>

</style>
