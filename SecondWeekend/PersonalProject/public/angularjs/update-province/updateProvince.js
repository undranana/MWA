angular.module("provinces").controller("UpdateProvinceController", UpdateProvinceController);

function UpdateProvinceController(DataFactory, $routeParams) {
    const vm = this;  
    const id = $routeParams.provinceId;  
    vm.title = "Update information";
    DataFactory.getOne(id).then( function(response) {
        vm.province = response.data.province;
    })

    vm.updateProvince = function() {
        DataFactory.updateProvince(vm.province)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err)
        });
    }
}