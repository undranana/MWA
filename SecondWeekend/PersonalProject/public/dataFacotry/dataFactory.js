angular.module("provinces").factory("DataFactory", DataFactory);

function DataFactory($http) {
    
    getAll = function() {
        return $http.get("/api/provinces").then(success).catch(fail);
    }

    getOne = function(id) {
        return $http.get("/api/provinces/" + id).then(success).catch(fail);
    }

    deleteProvince = function(id) {
        return $http.delete("/api/provinces/" + id).then(success).catch(fail);
    }

    addProvince = function(data) {
        $http.post("/api/provinces/",data).then(success).catch(fail);
    }
    updateProvince = function(updateProvince) {
        $http.put("/api/provinces/"+updateProvince._id, updateProvince)
    }

    success = function(response) {
        return response;
    }

    fail = function(err) {
        return err;
    }
    return {
        getAll: getAll,
        getOne: getOne,
        deleteProvince: deleteProvince,
        addProvince: addProvince,
        updateProvince: updateProvince
    }
}