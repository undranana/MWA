angular.module("provinces",["ngRoute"]).config(config);

function config($routeProvider) {
    console.log("angular app.js");
    $routeProvider
    .when("/", {
        templateUrl:"/angularjs/main/main.html",
        controller: "MainController",
        controllerAs: "vm"
    })
    .when("/provinces", {
        templateUrl:"/angularjs/province-list/province-list.html",
        controller: "ProvincesController",
        controllerAs: "vm"
    })
    .when("/provinces/:provinceId", {
        templateUrl:"/angularjs/province/province.html",
        controller: "ProvinceController",
        controllerAs: "vm"
    })
    .when("/provinces/:provinceId/update", {
        templateUrl:"/angularjs/update-province/updateProvince.html",
        controller: "UpdateProvinceController",
        controllerAs: "vm"
    })
    .when("/registration", {
        templateUrl:"/angularjs/registration/registration.html",
        controller: "RegistrationController",
        controllerAs: "vm"
    })
}
