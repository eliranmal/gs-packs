'use strict';

describe('Service: DataSource', function () {

  // load the service's module
  beforeEach(module('PacksApp'));

  // instantiate service
  var DataSource;
  beforeEach(inject(function (_DataSource_) {
    DataSource = _DataSource_;
  }));

  it('should do something', function () {
    expect(!!DataSource).toBe(true);
  });

});
