
app.controller('listcars', function ($scope, $routeParams, $rootScope, carfactory) {

    $scope.fnDelete = function (id) {
        carfactory.deleteCar(id).success(function (data) {

            if (data.d == true) {
                $scope.showMessage = true;
                $scope.message = "Data Deleted Successfully";
                $scope.getCars();
            }
            else {
                $scope.showMessage = true;
                $scope.message = "Data not deleted Successfully";
            }
        })
    };

    //Find All car Details
    $scope.getCars = function () {
        carfactory.getAllCars().success(function (data) {
            alert(JSON.parse(data.d));
            $scope.carsinDb = JSON.parse(data.d);

            $scope.success = true;

            $scope.cars = (localStorage.getItem('cars') !== null) ? JSON.parse(localStorage.getItem('cars')) : [];
//            $scope.cars = JSON.parse($scope.cars);
            localStorage.setItem('cars', JSON.stringify($scope.cars));

            alert($scope.cars);

        })
    };


    $scope.getCars();
});