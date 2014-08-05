app.directive('makeEditable', function() {

	return {

		restrict : 'A',

		templateUrl : './makeEditable.html',

		scope : true,

		link : function($scope, element, attrs) {

			$scope.button.text = 'Edit';

			$scope.button.toggleEdit = function(){

				console.log('derp')

			};

			debugger;

		}

	};

});