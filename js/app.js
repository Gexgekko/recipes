var recipesApp = angular.module('recipesApp',[]);

recipesApp.controller('RecipesCtrl', ['$scope','$http', function($scope,$http){
	var vm = $scope;
	vm.searchItem = Array();
	$http.get('data/recipes.json').success(function(data){
		vm.recipeList = data;
	})

	vm.search = function(ingredient){
		console.log(vm.searchItem);
		if(ingredient.recipe == '1'){
			vm.searchItem.item = ingredient.name;
		}
	}
}])
