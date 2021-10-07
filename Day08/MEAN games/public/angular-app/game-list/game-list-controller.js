
angular.module("meanGames").controller("GamesController", GamesController);

function GamesController(GamesFactory){
    const vm = this;
    vm.title = "MEAN Games app";
    GamesFactory.getAllGames().then(function(response) {
        vm.games = response;
    })
}
