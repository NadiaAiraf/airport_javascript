describe('airport',function( ) {
  var airport;
  var plane

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane')
    plane2 = jasmine.createSpy('plane')
    plane3 = jasmine.createSpy('plane')
  })


  describe('landPlane', function() {
    it('should be able to land a plane',function() {
      airport.landPlane(plane);
      expect(airport.landedPlanes).toEqual([plane])
    })
    it('should be able to land multiple planes',function() {
      airport.landPlane(plane);
      airport.landPlane(plane2);
      airport.landPlane(plane3);
      expect(airport.landedPlanes).toEqual([plane,plane2,plane3])
    })
    it('shouldnt be able to land a plane more than once',function() {
      airport.landPlane(plane);
      expect(function() {
        airport.landPlane(plane);
      }).toThrowError('That plane is already in the airport')
    })
  })

  describe('takeOff', function() {
    it('allows a plane to take off', function() {
      airport.landPlane(plane);
      airport.takeOff(plane);
      expect(airport.landedPlanes).toEqual([])
    })

    it('throws an error if plane isnt in the airport',function() {
      airport.landPlane(plane);
      expect(function(){
        airport.takeOff(plane2);
      }).toThrowError('That plane is not in the airport')
    })
  })
})
