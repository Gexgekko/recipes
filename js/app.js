var recipesApp = angular.module('recipesApp',[]);

recipesApp.controller('RecipesCtrl', ['$scope','$http', function($scope,$http){
	var vm = $scope;
	$http.get('data/recipes.json').success(function(data){
		vm.recipeList = data;
	})
}])
