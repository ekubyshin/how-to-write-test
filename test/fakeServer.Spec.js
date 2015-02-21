describe('Use SinonJS fakeServer', function() {

	var fakeServer, spy, response = JSON.stringify({ "status" : "success"});

	beforeEach(function(){
		fakeServer = sinon.fakeServer.create();//создаем fake server
	});

	afterEach(function(){
		fakeServer.restore();//сбрасываем fake server
	});

	it('should call AJAX request', function(done){

		var request = new XMLHttpRequest();
		spy = jasmine.createSpy('spy');//создаем Spies
		request.open('GET', 'https://some-fake-server.com/', true);
		request.onreadystatechange = function() {
			if(request.readyState == 4 && request.status == 200) {
			    spy(request.responseText);//запрос выполнен
				done();
		    }
		};
		request.send(null);
		//отвечаем на первый запрос
		fakeServer.requests[0].respond(
	        200,
	        { "Content-Type": "application/json" },
	        response
	    );
	});

	it('should respond with JSON', function(){
		expect(spy).toHaveBeenCalledWith(response);//проверяем ответ
	});
});