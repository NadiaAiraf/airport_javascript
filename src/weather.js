function Weather() {
  this.currentWeather = 'sunny'

  if (Math.floor(Math.random()*11)==2) {
    this.currentWeather = 'stormy'
  }
}
