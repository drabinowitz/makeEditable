app.directive('makeEditable', function() {

	return {

		restrict : 'A',

		templateUrl : './makeEditable/makeEditable.html',

		transclude : true,

		scope : true,

		link : function($scope, element, attrs) {

			$scope.button = {};

			$scope.button.text = 'Edit';

			$scope.button.toggleEdit = function(){

				console.log('derp')

			};

			debugger;

		}

	};

});