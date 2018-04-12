'use strict';

/**
 * @ngdoc service
 * @name mercadoApp.mercadoservice
 * @description
 * # mercadoservice
 * Service in the mercadoApp.
 */
angular.module('mercadoApp')
  .service('mercadoservice', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    let server = 'http://localhost:8085/api/productos';
    var configNoCache = {cache: false}
    return {
      getProducts: function (limit, offset) {
        return $http.get('https://api.mercadolibre.com/sites/MLM/search?q=casa&limit='+limit+'&offset='+offset,configNoCache)
      },
      saveProduct: function (params) {
        return $http.post(server, params)
      },
      getSavedProducts: function () {
        return $http.get(server, configNoCache)
      },
      deleteProduct: function (id) {
        return $http.delete(server+'/'+id, configNoCache)
      },
      getOne: function (id) {
        return $http.get(server+'/'+id, configNoCache)
      }
    }
  });
