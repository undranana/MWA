angular.module("Assignment_7").factory("GameFactory",GameFactory)

function GameFactory($http){
    return {
        getAllStores: getAll
    };

function getAll(){
    console.log("getAll")
    return $http.get("https://www.cheapshark.com/api/1.0/stores")
    .then(complete).catch(failed);
}
function complete(response){
    return response.data;
}
function failed(err){
    return err;
}
}