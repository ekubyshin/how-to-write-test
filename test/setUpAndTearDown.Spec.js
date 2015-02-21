describe('Learn Spies, setUp and tearDown', function() {

	beforeEach(function(){
		this.testObj = {//используем this для шаринга ресурсов
			myfunc: function(x) {
				someValue = x;
			}
		}

		spyOn(this.testObj, 'myfunc');//создаем Spies
	});

	it('should call myfunc', function(){
		this.testObj.myfunc('test');//вызываем функцию
		expect(this.testObj.myfunc).toHaveBeenCalled();//проверяем, что myfunc вызывался
	});

	it('should call myfunc with value \'Hello\'', function(){
		this.testObj.myfunc('Hello');
		expect(this.testObj.myfunc).toHaveBeenCalledWith('Hello');//проверяем, что myfunc вызывался с Hello
	});
});