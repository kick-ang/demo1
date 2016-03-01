app.config(function ($routeProvider) {

    $routeProvider.
    when('/Add',
    {
        templateUrl: '/Views/AddCars.htm',
        controller: 'cardetails'
    })
    .when('/Add/:cid',
    {
        templateUrl: '/Views/AddCars.htm',
        controller: 'cardetails'
    })
    .when('/List',
    {
        templateUrl: '/Views/ListCars.htm',
        controller: 'listcars'
    })
    .otherwise
    ({
         redirectTo: '/Add' 
    });
});