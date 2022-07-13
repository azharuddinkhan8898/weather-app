<template>
  <div class="weather-table">
    <div class="form-group select-day">
      <label for="day-select">Select Day:</label>
      <select class="form-control" id="day-select" v-model="selectedTime">
        <option :key="time" v-for="(time, index) in weathers[0].daily.time" :value="index">{{ time }}</option>
      </select>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="city-col">City</th>
          <th>Minimum Temperature</th>
          <th>Maximum Temperature</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="weather.city" v-for="weather in weathers">
          <td>{{ weather.city }}</td>
          <td>{{ weather.daily.temperature_2m_min[selectedTime] }}</td>
          <td>{{ weather.daily.temperature_2m_max[selectedTime] }}</td>
          <td @click="deleteCity(weather.city)" class="delete-city">&times;</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "weather-table",
  props: ["weathers"],
  data() {
    return {
      selectedTime: 0,
    }
  },
  methods: {
    deleteCity(city) {
      this.$emit('delete-city', city)
    }
  }
}
</script>

<style scoped>
.weather-table {
  margin-top: 30px;
}

.table {
  margin-top: 30px;
}

.city-col {
  width: 150px;
}

.delete-city {
  cursor: pointer;
  font-size: 18px;
  color: #ff0000;
}

.select-day {
  width: 200px;
}
</style>