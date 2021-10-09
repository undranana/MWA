angular.module("jobSearch").controller("JobController", JobController);

function JobController(DataFactory, $routeParams) {
    const vm = this;
    const id = $routeParams.jobId
    vm.title = "Job position: ";
    DataFactory.getJob(id).then(function(response) {
        vm.job = response;
    });
    vm.updateJob= function() {
        console.log(vm.job)
        DataFactory.updateJob(vm.job)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err)
        });
    }
}