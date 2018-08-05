const assert = require('chai').assert;
const cal = require('../calculator.js').calculate;

describe('Cal', function(){

  it('Addition', function(){
    let result = cal('+',3,5);
    assert.equal(result, 8);
  });
  it('Substraction', function(){
    let result = cal('-',5,3);
    assert.equal(result, 2);
  });
  it('Multiplication', function(){
    let result = cal('*',5,3);
    assert.equal(result, 15);
  });
  it('Division', function(){
    let result = cal('/',6,5);
    assert.equal(result, 1.2);
  });
  it('Addition with two Negative Numbers', function(){
    let result = cal('+',-3,-5);
    assert.equal(result, -8);
  });
  it('Substraction with two Negative Numbers', function(){
    let result = cal('-',-5,-3);
    assert.equal(result, -2);
  });

  it('Multiplication with two Negative Numbers', function(){
    let result = cal('*',-5,-3);
    assert.equal(result, 15);
  });

  it('Division with two Negative Numbers', function(){
    let result = cal('/',-5,-3);
    assert.equal(result, 1.6666666666666667);
  });

  it('Addition with one Negative Numbers', function(){
    let result = cal('+',-3,5);
    assert.equal(result, 2);
  });
  it('Substraction with one Negative Numbers', function(){
    let result = cal('-',5,-3);
    assert.equal(result, 8);
  });

  it('Multiplication with one Negative Numbers', function(){
    let result = cal('*',5,-3);
    assert.equal(result, -15);
  });

  it('Division with one Negative Numbers', function(){
    let result = cal('/',5,-3);
    assert.equal(result, -1.6666666666666667);
  });

  it('Division with one Negative Numbers', function(){
    let result = cal('+',5,-3);
    assert.typeOf(result,'number');
  });

  it('Test invalid one input numbers', function(){
    let result = cal('+','a',-3);
    assert.equal(result,'Invalid Input Numbers');
  });

  it('Test Null input number', function(){
    let result = cal('+',5,'');
    assert.equal(result,'One or more of the inputs to the function is Empty / Null, Input format --> calculate('+', 4 7)');
  });
  it('Test Null input number', function(){
    let result = cal('',5,8);
    assert.equal(result,'One or more of the inputs to the function is Empty / Null, Input format --> calculate('+', 4 7)');
  });

  it('Test invalid input numbers', function(){
    let result = cal('+','a', 'b');
    assert.equal(result,'Invalid Input Numbers');
  });

  it('Test invalid input operator', function(){
    let result = cal('%',5, 4);
    assert.equal(result,'Invalid Input Operator');
  });

});
