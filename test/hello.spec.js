describe('greeter', function () {

  it('should say Hello to the World', function () {
    expect(greet('World')).toEqual('Hello, World!');
  });
  xit('should fail with pretty message', function(){
    expect(greet('World')).not.toEqual('Hello, World!');
  });
});
