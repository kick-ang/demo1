app.controller('cardetails', function ($scope, $routeParams, $rootScope, carfactory) {


    $scope.cartypeDetail = [{ "cartype_ID": 1, "detail": "simple", "cartype": "Mountain car" },
                        { "cartype_ID": 2, "detail": "hard", "cartype": "Mountain car" },
                        { "cartype_ID": 3, "detail": "steeep", "cartype": "Urban car" },
                        { "cartype_ID": 4, "detail": "slopy", "cartype": "Urban car" },
                        { "cartype_ID": 5, "detail": "concrete", "cartype": "Road car" },
                        { "cartype_ID": 16, "detail": "dambry", "cartype": "Road car"}];


    $scope.terrains = [{ "name": "rocky" }, { "name": "mountain" }, { "name": "road"}];

    //var carlist = [];

    $scope.cars = [];

    $scope.saveCar = function () {
        
        if ($routeParams.cid == null) {
            carfactory.saveCars($scope.car).success(function (data) {
                if (data.d == true) {
                    $rootScope.showMessage = true;
                    $rootScope.message = "Data saved successfully";

                    $scope.cars = (localStorage.getItem('cars') !== null) ? JSON.parse(localStorage.getItem('cars')) : [];
                    localStorage.setItem('cars', JSON.stringify($scope.cars));

                    $scope.cars.push($scope.car);
                }
                else {
                    $rootScope.showMessage = true;
                    $rootScope.message = "Data could not saved,Please contact to admin";
                }
                $scope.success = true;
                localStorage.setItem('cars', JSON.stringify($scope.cars));
                window.location = "http://localhost:19391/Views/LandingPage.aspx#/List";
            });
        }
        else {
            carfactory.editCar($scope.car).success(function (data) {
                if (data.d == true) {
                    $rootScope.showMessage = true;
                    $rootScope.message = "Data updated Successfully";
                }
                else {
                    $rootScope.showMessage = true;
                    $rootScope.message = "Data not updated,Please contact to admin";
                }
                $scope.success = true;
                window.location = "http://localhost:19391/Views/LandingPage.aspx#/List";
            });
        }
    };



    $scope.newCar = function () {
        $scope.car = {};
    };

    $scope.newData = function () {
        if ($routeParams.cid == null) {
            $scope.PageName = "Add Cars";
            $scope.btnName = "Save";
            $scope.car = {};
        }
        else {
            $scope.PageName = "Update Cars";
            $scope.btnName = "Update";

            carfactory.findCarByID($routeParams.cid).success(function (data) {
                var std = JSON.parse(data.d);
                $scope.car = std[0];

                //$scope.cars = (localStorage.getItem('cars') !== null) ? JSON.parse(localStorage.getItem('cars')) : [];
//                $scope.cars.splice($scope.itemIndex, 1);

//                $scope.cars.push($scope.car);
//                localStorage.setItem('cars', JSON.stringify($scope.cars));

            });
        }
        $rootScope.showMessage = false;
    };
    $scope.newData();



});