angular.module("provinces").controller("MainController", MainController);

function MainController($location) {
    const vm = this;
    console.log("In the main controller")
    this.goToList = function() {
        $location.path( "/provinces" );
    }
    
    this.goToRegistration = function() {
        $location.path( "/registration" );
    }
}