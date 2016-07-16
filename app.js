/**
 * Created by inam ullah khan on 11/07/2016.
 */
    //Modules
 var app=angular.module('weatherApp',['ngRoute','ngResource']);
    app.config(function($routeProvider){
    $routeProvider
        .when('/',{
        templateUrl:'pages/home.html',
        controller:'homeCtrl'
        })
        .when('/foreCast',{
            templateUrl:'pages/foreCast.html',
            controller:'foreCastCtrl'
        })
        .when('/foreCast/:days',{
            templateUrl:'pages/foreCast.html',
            controller:'foreCastCtrl'
        })
    });


