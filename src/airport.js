function Airport(){
  this.landedPlanes = []
}
Airport.prototype.landPlane = function (plane) {
  if (this.landedPlanes.includes(plane)) {
    throw new Error('That plane is already in the airport')
  }
  this.landedPlanes.push(plane);
}
