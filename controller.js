/**
 * Created by inam ullah khan on 11/07/2016.
 */

app.controller('homeCtrl',['$scope','$location','cityService',
    function($scope,$location,cityService){
    $scope.city=cityService.city;
        $scope.$watch('city',function(){
            cityService.city=$scope.city;
        });
        $scope.submit=function(){
        $location.path("/foreCast");
    }
}]);


app.controller('foreCastCtrl',['$scope','$routeParams','cityService','weatherService',
    function($scope,$routeParams,cityService,weatherService){
        $scope.city=cityService.city;

       $scope.days=$routeParams.days || '2';
    $scope.weatherResult=weatherService.GetWeather($scope.city,$scope.days);

     $scope.convertToFahrenheit=function(degK){
         return Math.round(1.8 * (degK-273)+32);
     }
        $scope.convertToCentigrade=function(degK){
            return Math.round((degK-273));
        }

     $scope.convertToDate=function(dt){
         return new Date(dt*1000);
     }
    }]);

