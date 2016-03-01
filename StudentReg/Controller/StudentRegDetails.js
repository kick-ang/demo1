
app.controller('studCtrl', function ($scope, getallmastersFactory, studentregFactory, $routeParams, $rootScope) {

    //assign all hobbies
    $scope.hobbyList = [{ "name": "drawing" }, { "name": "singing" }, { "name": "painting"}];

    //Find all Countries for JSON Files
    $scope.countryList = countryList;
    $scope.stateList = stateList;
    $scope.districtList = districtList;


    $scope.saveStudent = function () {
        if ($routeParams.sid == null) {
            studentregFactory.saveStudent($scope.student).success(function (data) {
                if (data.d == true) {
                    $rootScope.showMessage = true;
                    $rootScope.message = "Student data saved successfully";
                }
                else {
                    $rootScope.showMessage = true;
                    $rootScope.message = "Student dta not saved,Please contact to admin";
                }
                $scope.success = true;
                localStorage.setItem('studentsinls', $scope.studentinDb);                
                window.location = "http://localhost:19391/Views/StudentRegistrationDetails.aspx#/List";
            });
        }
        else {
            studentregFactory.editStudent($scope.student).success(function (data) {
                if (data.d == true) {
                    $rootScope.showMessage = true;
                    $rootScope.message = "Student updated Successfully";
                }
                else {
                    $rootScope.showMessage = true;
                    $rootScope.message = "Student data not updated,Please contact to admin";
                }
                $scope.success = true;                
                window.location = "http://localhost:19391/Views/StudentRegistrationDetails.aspx#/List";
            });
        }      

    };

    $scope.newStudent = function () {
        $scope.student = {};
    };

    $scope.newData = function () {
        if ($routeParams.sid == null) {
            $scope.PageName = "Add Student";
            $scope.btnName = "Save";
            $scope.student = {};
        }
        else {
            $scope.PageName = "Update Student";
            $scope.btnName = "Update";
            studentregFactory.findStudentByID($routeParams.sid).success(function (data) {
                var std = JSON.parse(data.d);
                $scope.student = std[0];
                $scope.student.bday = new Date(std[0].bday);
            });
        }
        $rootScope.showMessage = false;
    };
    $scope.newData();


});

//Find all Countries
//    getallmastersFactory.getCountry().success(function (data) {
//        $scope.countryList = JSON.parse(data.d);
//        $scope.success = true;
//    });
//    //find all States
//    getallmastersFactory.getState().success(function (data) {
//        $scope.stateList = JSON.parse(data.d);
//        $scope.success = true;
//    });

//    //find all Districts
//    getallmastersFactory.getDistricts().success(function (data) {
//        $scope.districtList = JSON.parse(data.d);
//        $scope.success = true;
//    });

//    //Find all students Data
//    studentregFactory.getAllStudnets().success(function (data) {
//        $scope.studentinDb = JSON.parse(data.d);
//        $scope.success = true;
//    });
