// code your solution here

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
  };
  
  let mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
  };
  
  /*
  ! INFO
  
  IIFE: Immediately-Invoked Function Expression
  
  */
  
  // TODO: Visual flair function.
  function wrapAdjective(flair = "*"){
    // It should return a function.
    // Properties of the inner function:-
      // TODO: Take a single parameter that should default to "special".
      return function (arg = "special"){
        // TODO: Return a String of the form "You are ...!".
        return `You are ${flair}${arg}${flair}!`;
      };
  };
  
  /*
  ? Example of the total call:-
  
  * wrapAdjective("%")("a dedicated programmer");
  
  */