'use strict';

/**
 * @ngdoc function
 * @name mercadoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mercadoApp
 */
angular.module('mercadoApp')
  .controller('MainCtrl', function ($scope, mercadoservice, $location) {
    $scope.limit = 50;
    $scope.offset=0;

    function init() {
      mercadoservice.getProducts($scope.limit, $scope.offset)
      .then(function (succ) {
        $scope.results = succ.data.results;
      },function () {})
    }
    init()

    $scope.guardar = function (resultado)  {
      let params = {
        id: resultado.id
      }
      mercadoservice.saveProduct(params)
      .then(function (succ) {
        alert('Se guardó el elemento')
      },function (err) {
        alert('No fue posible guardar el elemento')
      })
    }

    $scope.irGuardados = function () {
      $location.path('/guardados')
    }
  });
