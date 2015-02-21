describe('Try async Specs', function() {

	var val = 0;

	it('should call async', function(done) {
		setTimeout(function(){
			val++;
			done();
		}, 1000);
	});

	it('val should equeal to 1', function(){
		expect(val).toEqual(1);//вызовется только после выполнения done, либо по окончанию DEFAULT_TIMEOUT_INTERVAL 
	});
})