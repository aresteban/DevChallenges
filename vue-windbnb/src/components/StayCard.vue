<template>
  <div class="inline-block max-w-md m-4 rounded-t-lg font-montserrat">
    <!-- Image wrapper -->
    <div>
      <img
        class="object-cover w-full rounded-3xl max-h-72"
        :src="stayData.photo"
        alt="banner_image"
      />
    </div>

    <!-- Information Section -->
    <div class="mt-2.5">
      <div class="flex justify-between text-sm text-gray-500">
        <div>
          <div 
            class="inline-block px-2 pt-2 pb-1.5 font-bold leading-4 text-gray-600 border border-gray-600 rounded-xl"
            v-if="stayData" >
            SUPER HOST
          </div>
          <div class="inline-block ml-3 py-1.5">
            {{ stayData.type }} . {{ stayData.beds }} beds
          </div>
        </div>

        <div class="py-1.5">
            <i class="text-base font-bold text-red-500 align-middle material-icons">
                star
            </i>
            <span class="ml-1 font-medium align-middle">
            {{ ratingInDecimal }}
            </span>
        </div>
      </div>

      <div class="pb-1 mt-2 font-semibold">
        <p>
          {{ stayData.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StayCard",

  props: {
    stayData: {
      beds: Number,
      country: String,
      maxGuest: Number,
      photo: String,
      rating: Number,
      superHost: Boolean,
      title: String,
      type: String,
    },
  },

  mounted() {
    console.log("StayData", this.stayData);
  },

  data() {
    return {};
  },

  methods: {},

  computed: {
    ratingInDecimal() {
      return String(this.stayData.rating).padEnd(4, "0");
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
