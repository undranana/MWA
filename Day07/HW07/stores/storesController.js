angular.module("Assignment_7").controller("StoresController",StoresController)
function StoresController(GameFactory) {
    
    const vm = this;
    GameFactory.getAllStores()
    .then(function(response){
        vm.stores=response;
    })
    .catch(failed);
} 
function failed(err){
    return err;
}