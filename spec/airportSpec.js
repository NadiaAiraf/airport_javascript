describe('airport',function( ) {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  })

  describe('landPlane', function() {
    it('should be able to land a plane',function() {
      airport.landPlane('BH337');
      expect(airport.landedPlanes).toEqual(['BH337'])
    })
    it('should be able to land multiple planes',function() {
      airport.landPlane('BH337');
      airport.landPlane('EZY343');
      airport.landPlane('BA065');
      expect(airport.landedPlanes).toEqual(['BH337','EZY343','BA065'])
    })
    it('shouldnt be able to land a plane more than once',function() {
      airport.landPlane('BH337');
      airport.landPlane('BH337');
      expect(airport.landedPlanes).toThrow(new Error('That plane is already in the airport'))
    })
  })
})
