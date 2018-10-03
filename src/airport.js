function Airport(){
  this.landedPlanes = []
}
Airport.prototype.landPlane = function (plane) {
  if (this.landedPlanes.includes(plane)) {
    throw new Error('That plane is already in the airport')
  }
  this.landedPlanes.push(plane);
}
Airport.prototype.takeOff = function (plane) {
  if (this.landedPlanes.includes(plane)) {
    this.landedPlanes = this.landedPlanes.filter(item => item !== plane)
  } else {
    throw new Error('That plane is not in the airport')
  }
};
