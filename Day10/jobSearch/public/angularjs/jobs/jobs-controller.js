angular.module("jobSearch").controller("JobsController", JobsController);

function JobsController(DataFactory, $location) {
    const vm = this;
    vm.formTitle = "Jobs";
    vm.newJob = {};
    DataFactory.getAll().then(function(response) {
        vm.jobs = response;
    });

    vm.joblistbtn = function () {
        console.log('here', $location);
        // $location.url = $location.url + "/61609dbb37399c978ce8bcdb";
        $location.path($location.$$url + "/61609dbb37399c978ce8bcdb");
    }

    vm.addJob = function(){
        console.log("addJob");
        console.log("newjob", vm.newJob);
        DataFactory.addJob(vm.newJob)
        .then(function(response) {
            console.log("Job added");
        }).catch(function(err){
            console.log(err);
        })
    }
    vm.deleteJob = function (id){
        console.log("Delete job");
        DataFactory.deleteJob(id).then(function(response) {
            console.log("Job deleted");
        })
        .catch(function(err) {
            console.log(err)
        })
    }
}