'use strict';

/**
 * @ngdoc overview
 * @name mercadoApp
 * @description
 * # mercadoApp
 *
 * Main module of the application.
 */
angular
  .module('mercadoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/search', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/guardados', {
        templateUrl: 'views/guardados.html',
        controller: 'GuardadosCtrl',
        controllerAs: 'guardados'
      })
      .when('/detail/:id', {
        templateUrl: 'views/detalle.html',
        controller: 'DetalleCtrl',
        controllerAs: 'detalle'
      })
      .otherwise({
        redirectTo: '/search'
      });
  });
