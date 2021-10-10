angular.module("provinces").controller("ProvinceController", ProvinceController);

function ProvinceController(DataFactory, $routeParams) {
    const vm = this;  
    const id = $routeParams.provinceId;  
    vm.title = "Information about";
        DataFactory.getOne(id).then( function(response) {
            vm.province = response.data.province;
        })
}