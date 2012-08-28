describe("dom.id(id)", function() {
  it('should return an element by id', function() {
    assert('example' == dom.id('example').id);
  });
});

describe("dom.find(selector)", function() {
  it('should return an element by selector', function() {
    assert('example' == dom.find('#example').id);
    assert('example' == dom.find('body #example').id);
  });
});

describe("dom.findAll(selector)", function() {
  it('should return array of elements by selector', function() {
    var elements = dom.findAll('div[id]');
    assert(Array.isArray(elements), 'result should be an array');
    assert(elements.length == 2, 'expected length of 2');
  });
});
