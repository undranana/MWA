angular.module("Assignment_7",["ngRoute"]).config(config);
function config($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "./main/main.html",
        controller: "MainController",
        controllerAs: "MainCntrl"
    }).when("/stores", {
        templateUrl: "./stores/stores.html",
        controller: "StoresController",
        controllerAs: "StoresCntrl"
    })
}