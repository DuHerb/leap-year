$(document).ready(function(){
  function isDiv4(year){
    if (year % 4 === 0){
      return true;
    };
    return false;
  };

  function isDiv400(year){
    if (year % 400 === 0){
      return true;
    };
    return false;
  };

  function isNotDiv100(year){
    if (year % 100 === 0){
      return false;
    };
    return true;
  };

  function notLeapYear(year){
    if(isDiv4(year) && (isNotDiv100(year) || isDiv400(year))){
      return true;
    } else {
      return false;
    };
  };

  $('#submitYearInput').click(function(){
    var userInput = $('.inputYear').val();
    if (notLeapYear(userInput)){
      $('output').append(userInput + " is a leap year.<br/>");
    } else {
      $('output').append(userInput + " is NOT leap year.<br/>");
    }
  })

  // console.log(isDiv4(2001));
  // console.log(isDiv400(4000));
  // console.log(isNotDiv100(2123));
});
