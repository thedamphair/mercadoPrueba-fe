'use strict';

/**
 * @ngdoc function
 * @name mercadoApp.controller:GuardadosCtrl
 * @description
 * # GuardadosCtrl
 * Controller of the mercadoApp
 */
angular.module('mercadoApp')
  .controller('GuardadosCtrl', function ($scope, mercadoservice, $location) {
    function init() {
      mercadoservice.getSavedProducts()
      .then(function (succ) {        
        $scope.saved = succ.data;
      },function () {
        alert('Error al consultar los productos')
      })
    }
    init()

    $scope.eliminar = function (resultado) {
      mercadoservice.deleteProduct(resultado.id)
      .then(function (succ) {
        init()
        alert(succ.data.message)
      },function (err) {
        if (err.data) {
          alert(err.data.message)
        }
        else {
          alert('Error al borrar')
        }
      })      
    }

    $scope.ver = function (resultado) {
      $location.path('/detail/'+resultado.id)
    }
  });
