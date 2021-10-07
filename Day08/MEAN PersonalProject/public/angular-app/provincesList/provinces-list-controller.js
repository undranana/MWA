angular.module("provinces").controller("ProvincesController", ProvincesController);

function ProvincesController(DataFactory) {
    const vm = this;
    vm.title = "Provinces";
    DataFactory.getAll().then(function(response) {
        console.log(response);
        vm.provinces = response.province;
    });
}