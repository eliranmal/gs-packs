'use strict';

describe('Service: GsLinks', function () {

  // load the service's module
  beforeEach(module('PacksApp'));

  // instantiate service
  var GsLinks;
  beforeEach(inject(function (_GsLinks_) {
    GsLinks = _GsLinks_;
  }));

  it('should do something', function () {
    expect(!!GsLinks).toBe(true);
  });

});
