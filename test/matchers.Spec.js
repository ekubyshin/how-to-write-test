describe('Matchers spec', function(){

	it("should return sum of 2 and 3", function() {
		expect(sum(2, 3)).toEqual(5);
	});

	it("should return area of circle with radius 5", function() {
		expect(circleArea(5)).toBeCloseTo(78.5, 1);
	});
})