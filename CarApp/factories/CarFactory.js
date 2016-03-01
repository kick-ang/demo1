app.factory('carfactory', function ($http) {

    var service = {}

    service.getAllCars = function () {
        return $http({
            url: "LandingPage.aspx/getAllCars",
            method: "GET",
            data: {},
            headers: { "Content-Type": "application/json" }

        })
    };

    service.saveCars = function (car) {

        return $http({
            url: "LandingPage.aspx/saveCars",
            method: "POST",
            data: { carObj: angular.toJson(car) }
        })
    };

    service.deleteCar = function (id) {
        return $http({
            url: "LandingPage.aspx/delete",
            method: "POST",
            data: { cid: id }
        })
    };


    service.editCar = function (car) {
        return $http({
            url: "LandingPage.aspx/editCar",
            method: "POST",
            data: { carObj: angular.toJson(car) }
        })
    };


    service.findCarByID = function (cid) {
        return $http({
            url: "LandingPage.aspx/findCarsById",
            method: "POST",
            data: { cid: cid }
        })
    };
    return service;

});


