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
        $scope.producto = succ.data
        $scope.fotos = []
        for (var i = 0; i < 3; i++) {
          $scope.fotos.push($scope.producto.pictures[i])
        }
      },function (err) {
        alert(err.data.message)
      })
    }
    init()
  });
