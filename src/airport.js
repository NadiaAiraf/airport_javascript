function Airport(weather = new Weather, capacity = 5){
  this.weather = weather
  this.landedPlanes = []
  this.CAPACITY = capacity
}
Airport.prototype.landPlane = function (plane) {
  if (this.weather.currentWeather == 'stormy') {
    throw new Error('its stormy and we cant land')
  } else if (this.landedPlanes.length >= this.CAPACITY) {
    throw new Error('The airport is full')
  } else if (this.landedPlanes.includes(plane)) {
    throw new Error('That plane is already in the airport')
  }
  this.landedPlanes.push(plane);
}
Airport.prototype.takeOff = function (plane) {
  if (this.weather.currentWeather == 'stormy') {
    throw new Error('its stormy and we cant take off')
  } else if (this.landedPlanes.includes(plane)) {
    this.landedPlanes = this.landedPlanes.filter(item => item !== plane)
  } else {
    throw new Error('That plane is not in the airport')
  }
};
