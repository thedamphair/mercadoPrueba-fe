'use strict';

/**
 * @ngdoc function
 * @name mercadoApp.controller:DetalleCtrl
 * @description
 * # DetalleCtrl
 * Controller of the mercadoApp
 */
angular.module('mercadoApp')
  .controller('DetalleCtrl', function ($scope, mercadoservice, $routeParams) {
    var params = $routeParams
    function init() {
      mercadoservice.getOne(params.id)
      .then(function(succ) {
        $scope.producto = angular.copy(succ.data)
        $scope.imagenActual = 0
        $scope.fotos = []      
        for (var i = 0; i < $scope.producto.pictures.length; i++) {
          $scope.fotos.push($scope.producto.pictures[i])
        }
      },function (err) {
        alert(err.data.message)
      })
    }
    init()

    $scope.anterior = function () {
      if ($scope.imagenActual === 0) {
        $scope.imagenActual = $scope.fotos.length - 1
      }
      else {
        $scope.imagenActual--
      }
    }

    $scope.siguiente = function () {
      if ($scope.imagenActual === ($scope.fotos.length - 1)) {
        $scope.imagenActual = 0
      }
      else {
        $scope.imagenActual++
      }
    }

    $scope.indexImagenActual = function (index) {
      return $scope.imagenActual === index
    }

    $scope.goTo = function (pemalink) {         
      window.open(pemalink)
    }
  });
