'use strict';

describe('Controller: GuardadosCtrl', function () {

  // load the controller's module
  beforeEach(module('mercadoApp'));

  var GuardadosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GuardadosCtrl = $controller('GuardadosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GuardadosCtrl.awesomeThings.length).toBe(3);
  });
});
