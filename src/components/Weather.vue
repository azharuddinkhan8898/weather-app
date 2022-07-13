<template>
  <div class="container weather-wrapper">
    <city-selector @add-city="addCity" :cities="cities"></city-selector>
    <weather-table v-if="weathers.length" @delete-city="deleteCity" :weathers="weathers"></weather-table>
  </div>
</template>

<script>
import CitySelector from './CitySelector.vue'
import WeatherTable from './WeatherTable.vue'
export default {
  name: 'Weather-tag',
  components: {
    'city-selector': CitySelector,
    'weather-table': WeatherTable,
  },
  props: ["cities", "weathers"],
  emits: ["add-city", "delete-city"],
  methods: {
    addCity(city) {
      this.$emit('add-city', city)
    },
    deleteCity(city) {
      this.$emit('delete-city', city)
    }
  }
}
</script>

<style scoped>
  .weather-wrapper {
    margin: 30px auto;
    max-width: 700px;
  }
</style>