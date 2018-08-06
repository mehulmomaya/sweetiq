module.exports = {
  calculate: function(operator, num1, num2){
    if (num1== null ||num2== null || operator == '') {
      return 'One or more of the inputs to the function is Empty / Null, Input format --> calculate('+', 4 7)';
    }
    if ((typeof(num1) != 'number') || (typeof(num2) != 'number')) {
      console.log(typeof(num1), typeof(num2));
      return 'Invalid Input Number';
    }
    if(operator != '-' && operator != '*' && operator != '/' && operator != '+' ){
      return 'Invalid Input Operator'
    }
    var operation = num1 +' '+ operator +' '+ num2;
    var result = eval(operation);
    console.log(result);
    return result;
  }
}
