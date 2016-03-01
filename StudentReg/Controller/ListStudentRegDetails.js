
app.controller('listCtrl', function ($scope, studentregFactory, $rootScope) {

    $scope.fnDelete = function (id) {
        studentregFactory.deleteStudent(id).success(function (data) {

            if (data.d == true) {
                $scope.showMessage = true;
                $scope.message = "Student data Deleted Successfully";
                $scope.getStudentData();
            }
            else {
                $scope.showMessage = true;
                $scope.message = "Student data not deleted Successfully";
            }
        })
    };

    //Find All Student Details
    $scope.getStudentData = function () {
        studentregFactory.getAllStudnets().success(function (data) {

            $scope.studentinDb = JSON.parse(data.d);
            $scope.success = true;
        })
    };


    $scope.getStudentData();
});