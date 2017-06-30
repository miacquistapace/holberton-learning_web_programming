function reverseNum(num){
 var num1 = num.toString();
 if (num1 === "")
  return "";
 return reverseNum(num1.substr(1)) + num1.charAt(0);
  }
console.log(reverseNum(1234))
