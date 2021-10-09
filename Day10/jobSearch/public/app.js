angular.module("jobSearch",["ngRoute"]).config(config);

function config($routeProvider) {
    console.log("here");
    $routeProvider
    .when("/", {
        templateUrl:"/angularjs/main/main.html",
        controller: "MainController",
        controllerAs: "vm"
    })
    .when("/jobs", {
        templateUrl: "/angularjs/jobs/jobs.html",
        controller: "JobsController",
        controllerAs: "vm"
    })
    .when("/jobs/:jobId", {
        templateUrl: "/angularjs/job/job.html",
        controller: "JobController",
        controllerAs: "vm"
    })
}