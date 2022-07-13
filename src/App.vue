<template>
  <div>
    <header-tag :loading="loading"></header-tag>
    <weather-tag @add-city="addCity" @delete-city="deleteCity" :cities="cities" :weathers="weathers"></weather-tag>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Weather from './components/Weather.vue'
import cities from './data/cities.json'
import {fetchWeather} from './utils/fetchWeather.js'
export default {
  name: 'App',
  components: {
    'header-tag': Header,
    "weather-tag": Weather,
  },
  data() {
    return {
      cities: [],
      citiesAdded: {},
      weathers: [],
      loading: 2,
    }
  },
  created() {
    this.cities = cities
  },
  methods: {
    async addCity(city) {
      if (this.citiesAdded[city.city]) {
        return
      }
      this.loading = 1
      this.citiesAdded[city.city] = true
      const data = await fetchWeather(city)
      const newData = {...data, city: city.city}
      this.weathers = [...this.weathers, newData]
      this.loading = 0
      setTimeout(() => {
        this.loading = 2
      }, 1000)
    },
    deleteCity(city) {
      if(confirm("Are you sure you want to delete " + city + "?")) {
        this.citiesAdded[city] = false;
        this.weathers = this.weathers.filter(weather => weather.city !== city)
      }
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
  #app {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
</style>
