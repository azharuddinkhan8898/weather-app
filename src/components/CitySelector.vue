<template>
  <div class="form-group">
    <label for="sel1">Select city:</label>
    <select class="form-control" id="sel1" v-model="city">
      <option :key="city.city" v-for="city in cities" :value="city">{{ city.city }}</option>
    </select>
    <br />
    <button type="button" class="btn" @click="addCity()">Add city to weather table</button>
  </div>
</template>

<script>
export default {
  name: "city-selector",
  props: ["cities"],
  data() {
    return {
      city: "",
    }
  },
  methods: {
    addCity() {
      this.$emit('add-city', this.city)
    }
  }
}
</script>

<style scoped>
.btn {
  background: #f69e0b;
}
</style>