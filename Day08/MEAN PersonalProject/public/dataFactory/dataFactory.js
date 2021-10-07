angular.module("provinces").factory("DataFactory", DataFactory);

function DataFactory($http) {
    return {
        getAll: getAll,
        getOne: getOne
    }

    function getAll() {
        return $http.get("/api/provinces/")
        .then(complete)
        .catch(fail);
    }

    function getOne(id) {
        return $http.get("/api/provinces/" + id)
        .then(complete)
        .catch(fail);
    }

    function complete(response) {
        return response.data;
    }

    function fail(err) {
        return err;
    }
}