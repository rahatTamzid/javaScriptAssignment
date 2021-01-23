// https://github.com/rahatTamzid/javaScriptAssignment.git
      
      
   function kilometerToMeter(km){   //Kilometer to meter conversion
    var convert = km * 1000;
    return convert;

}

function budgetCalculator(watch, mobile, laptop){           // Budgwet calculator
    var total = (50*watch) + (100*mobile) + (500*laptop);
    return total;
}


function hotelCost(days){               //Hotel Cost 
    var total = 0;
    var cost_10 = 100;
    var cost_20 = 80;
    var cost_50 = 50;
    for(i=1; i<=days; i++){
        if(i<=10){
            total = total + cost_10;
        }else if(i<=20){
            total = total + cost_20;
        }else{
            total = total + cost_50;
        }
    }
    return total;

}


function megaFriend(params){                //MegaFriend Function
    var long = 0;
    var position = 'none';
    for(i=0; i<params.length; i++){
        if(params[i].length > long){
            long = params[i].length;
            postion = params[i];
        }
    }
    return postion;
}
var x = ['rahat', 'ashik', 'maheeee']
console.log(megaFriend(x));
