var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  //route for home page
  .when('/', {
    templateUrl: 'home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })
  //route for Sanders
  .when('/sanders', {
    templateUrl: 'sanders.html',
    controller: 'sandersController',
    controllerAs: 'sanders'
  })
  .when('/warren', {
    templateUrl: 'warren.html',
    controller: 'warrenController',
    controllerAs: 'warren'
  })
  .when('flores', {
    templateUrl: 'flores.html',
    controller: 'floresController',
    controllerAs: 'flores'
  })

}])

app.controller(homeController, ['$scope', function (){
  this.message = //put info here
}])

app.controller(sandersController, ['$scope', function (){
  this.message = //put info here
}])

app.controller(warrenController, ['$scope', function (){
  this.message = //put info here
}])

app.controller(floresController, ['$scope', function (){
  this.message = //put info here
}])
