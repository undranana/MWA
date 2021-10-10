angular.module("provinces").controller("ProvincesController", ProvincesController);

function ProvincesController(DataFactory) {
    const vm = this;    
    vm.newprovince = {};

    vm.title = "Provinces";
    DataFactory.getAll().then( function(response) {
        vm.provinces = response.data.province;
    })
    vm.delete = function(id) {
        DataFactory.deleteProvince(id).then(function(response) {
            console.log("Province deleted");
        }).catch(function(err){
            console.log(err);
        })
    }
    vm.addProvince = function() {
        DataFactory.addProvince(vm.newprovince).then(function(response) {
            console.log("Province added");
        }).catch(function(err){
            console.log(err);
        })
    }

}