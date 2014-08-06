app.directive('makeEditable', function() {

	return {

		restrict : 'A',

		templateUrl : './makeEditable/makeEditable.html',

		transclude : true,

		scope : true,

		link : function($scope, element, attrs) {

			$scope.editable = false;

			$scope.button = {

				text : function(){

					if ($scope.editable){

						return 'Save';

					} else {

						return 'Edit';

					}

				},

				toggleEdit : function(){

					$scope.editable = !$scope.editable;

				}

			};

		}

	};

});