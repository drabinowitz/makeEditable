describe('makeEditable', function(){

	var scope,
		element,
		compiled;

	beforeEach(module('makeEditable'));

	beforeEach(module('makeEditable/makeEditable.html'));

	beforeEach(inject(function($rootScope,$compile){

		var html = "";

		html += '<div make-editable>'

		html += '	<p>Content that will become editable when the directive is rendered.</p>'

		html +='</div>'

		scope = $rootScope.$new();

		compiled = $compile(html);

		element = compiled(scope);

		scope.$digest();

	}));

	it('should add an edit button the contained content', function(){

		expect( element.find('button').length ).toBeTruthy();

		expect( element.find('button').attr('ng-click') ).toBeTruthy();

	});

});