angular.module("provinces").controller("ProvinceController", ProvinceController);

function ProvinceController(DataFactory, $routeParams) {
    const vm = this;
    vm.title = "Information about province";
    const id = $routeParams.provinceId;
    DataFactory.getOne(id).then(function(response) {
        console.log(response);
        vm.province = response.province;
    });


}