angular.module('store').controller('StoreController', function($scope,$http,$log){
	$scope.gems=[];
	$http.get("http://localhost:1337/gem/")
		 .success(function(data){
		 	$scope.gems=data;
		 	$log.info($scope.gems);
		 });
});



