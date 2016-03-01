app.factory('getallmastersFactory', function ($http) {

    var service = {};
    service.getCountry = function () {
        return $http({
            url: "StudentRegistrationDetails.aspx/getAllCountry",
            method: "POST",
            data: {}
        })
    };

    //find all States
    service.getState = function () {
        return $http({
            url: "StudentRegistrationDetails.aspx/getAllStates",
            method: "POST",
            data: {}
        })
    };

    //find all Districts
    service.getDistricts = function () {
        return $http({
            url: "StudentRegistrationDetails.aspx/getAllDistricts",
            method: "POST",
            data: {}
        })
    };

    return service;

});