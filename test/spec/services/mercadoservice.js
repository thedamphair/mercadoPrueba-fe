'use strict';

describe('Service: mercadoservice', function () {

  // load the service's module
  beforeEach(module('mercadoApp'));

  // instantiate service
  var mercadoservice;
  beforeEach(inject(function (_mercadoservice_) {
    mercadoservice = _mercadoservice_;
  }));

  it('should do something', function () {
    expect(!!mercadoservice).toBe(true);
  });

});
