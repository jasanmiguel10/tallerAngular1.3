(function () {
	var app = angular.module('tvShowModule');

	app.controller('tvShowCtrl', ['$scope', 'CRUDUtils', 'tvShow.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
			this.fetchRecords();
		}]);
})();
