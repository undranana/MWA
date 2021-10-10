angular.module("provinces").controller("RegistrationController", RegistrationController)

function RegistrationController() {
    console.log("Registration controller");
    const vm = this;

    vm.createUser = function() {
        console.log(vm.newUser);
    }
}