app.factory('studentregFactory', function ($http) {

    var service = {}

    service.getAllStudnets = function () {
        return $http({
            url: "StudentRegistrationDetails.aspx/getAllStudent",
            method: "GET",
            data: {},
            headers: { "Content-Type": "application/json" }

        })
    };

    service.saveStudent = function (student) {
    
        return $http({
            url: "StudentRegistrationDetails.aspx/saveStudent",
            method: "POST",
            data: { StudentObj: angular.toJson(student) }
        })
    };

    service.deleteStudent = function (id) {       
        return $http({
            url: "StudentRegistrationDetails.aspx/delete",
            method: "POST",
            data: { sid: id }
        })
    };


    service.editStudent = function (student) {
        return $http({
            url: "StudentRegistrationDetails.aspx/editStudent",
            method: "POST",
            data: { StudentObj: angular.toJson(student) }
        })
    };


    service.findStudentByID = function (sid) {  
        return $http({
            url: "StudentRegistrationDetails.aspx/findStudentByID",
            method: "POST",
            data: { sid: sid }
        })
    };
    return service;

});


