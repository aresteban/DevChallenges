<template>
  <div class="">
    <!-- <StayCard v-for="item in stays" :key="item.id" :stayData="item"/> -->

        <Counter :title="'Adults'" :description="'Ages 13 or above'" @onChange="testRecieveEmit" />

        <Counter :title="'Children'" :description="'Ages 2 to 12'" @onChange="testRecieveEmit" />

  </div>
</template>

<script>
import data from "./assets/stays.json";
// import StayCard from './components/StayCard.vue'
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    // StayCard,
    Counter,
  },

  data() {
    return {
      stays: [],
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

    testRecieveEmit(value) {
        value;
        // console.log('Emit Value:', value);
    }
  },

};
</script>

<style lang="sass">
</style>
