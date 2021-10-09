angular.module("jobSearch").factory("DataFactory", DataFactory);

function DataFactory($http) {
    return {
        getAll: getAll,
        getJob: getJob,
        addJob: addJob,
        updateJob: updateJob,
        deleteJob: deleteJob
    }

    function getAll() {
        return $http.get("/api/jobs")
        .then(complete)
        .catch(fail);
    }
    
    function getJob(id) {
        return $http.get("/api/jobs/" + id)
        .then(complete)
        .catch(fail)
    }
    
    function addJob(job){
        return $http.post("api/jobs/",job)
        .then(complete)
        .catch(fail)
    }
    function updateJob(job) {
        return $http.put("api/jobs/"+job._id,job)
        .then(complete)
        .catch(fail)
    }
    function deleteJob(id) {
        return $http.delete("api/jobs/"+id)
        .then(complete)
        .catch(fail)
    }

    function complete(data){
        return data.data
    }

    function fail(err) {
        return err
    }
}