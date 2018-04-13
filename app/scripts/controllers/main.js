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
    $scope.limit = 50
    $scope.offset = 0
    var aux, resultados, totalPaginas, paginaActiva

    function calculatePages(total) {      
      $scope.paginas = []
      for (var i = 1; i <= 4; i++) {
        $scope.paginas.push({id:i})
      }
    }

    function findResults() {
      mercadoservice.getProducts($scope.limit, $scope.offset)
      .then(function (succ) {
        $scope.results = succ.data.results
        aux = succ.data.results
        calculatePages(succ.data.paging.total)
      },function () {})
    }

    function init() {
      paginaActiva = 1
      findResults()
    }
    init()

    $scope.guardar = function (resultado)  {
      var params = {
        id: resultado.id
      }
      mercadoservice.saveProduct(params)
      .then(function (succ) {
        alert('Se guardó el elemento')
      },function (err) {
        alert('No fue posible guardar el elemento')
      })
    }

    $scope.buscar = function (cadena) {
      if (cadena === '' || !cadena) {
        $scope.results = angular.copy(aux)
        return
      }
      var re = new RegExp(''+cadena+'*')
      var matches = []
      for (var i = 0; i < $scope.results.length; i++) {
        if (re.test($scope.results[i].title)) {          
          matches.push($scope.results[i])
        }
      }
      $scope.results = angular.copy(matches)
    }

    $scope.irGuardados = function () {
      $location.path('/guardados')
    }

    $scope.actual = function(id) {
      if (id === paginaActiva) {
        return true
      }
      return false
    }

    $scope.irPagina = function (pagina) {
      paginaActiva = pagina
      var auxPag = pagina - 1
      $scope.offset = auxPag * $scope.limit
      findResults()
    }

  });
