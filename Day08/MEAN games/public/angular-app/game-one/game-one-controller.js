angular.module("meanGames").controller("GameController", GameController);

function _getRating(number) {
    return new Array(number);
}
function GameController(GamesFactory, $routeParams){
    const vm = this;
    const id = $routeParams.gameId;
    GamesFactory.getOneGame(id).then(function(response) {
        vm.game = response.data;
        vm.rating = _getRating(response.data.rate)
    });
    
}