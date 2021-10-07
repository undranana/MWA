angular.module("meanGames").factory("GamesFactory", GamesFactory);

function GamesFactory($http) {
    return {
        getAllGames: getAllGames,
        getOneGame: getOneGame
    };


function getAllGames() {
    return $http.get("/api/games")
    .then(complete)
    .catch(failed)
}

function getOneGame(id) {
    return $http.get("/api/games/" + id)
    .then(complete)
    .catch(failed)
}

function complete(response){
    return response.data;
}

function failed(err) {
    return err;
}
}
