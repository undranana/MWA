angular.module("meanGames").directive("gameRating", GameRating);

function GameRating() {
    return {
        restriction: "E",
        templateUrl: "angular-app/game-rating/rating.html",
        bindToController: true,
        controller: "GameController",
        controllerAs: "vm"
    }
}