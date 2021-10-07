angular.module("meanGames").controller("MainController", MainController);

function MainController($http){
    const vm = this;
    vm.title = "MEAN Games app";
    $http.get("/api/games").then(function(result) {
        vm.games=result.data;
    })
}