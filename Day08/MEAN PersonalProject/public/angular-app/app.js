angular.module("provinces",["ngRoute"]).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "/angular-app/main/main.html",
        controller: "MainController",
        controllerAs: "vm"
    }).when("/provinces", {
        templateUrl: "/angular-app/provincesList/provinces-list.html",
        controller: "ProvincesController",
        controllerAs: "vm"
    }).when("/provinces/:provinceId", {
        templateUrl: "/angular-app/province/province.html",
        controller: "ProvinceController",
        controllerAs: "vm"
    });
}