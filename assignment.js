

// kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    if (kilometer < 0){
        return " sorry,leangth is not negetive"
    }
    return meter;
}

// budgetCalculator

function budgetCalculator(watch, mobile, laptop){
    var totalPrice = watch * 50 + mobile * 100 + laptop * 500;
    return totalPrice;
}

// hotelCost

function hotelCost(stayDays){
    if(stayDays <= 10){
        totalCost = stayDays * 100;
        return totalCost;
    }
    else if(stayDays <= 20){
        var firstPartStay = 10 * 100;
        var remainingDays = stayDays - 10;
        var secondPartStay = remainingDays * 80;
        totalCost = firstPartStay + secondPartStay;
        return totalCost;
    }
    else{
        var firstPartStay = 10 * 100;
        var secondPartStay = 10 * 80;
        var remainingDays = stayDays - 20;
        var thirdPartStay = remainingDays * 50;
        totalCost = firstPartStay + secondPartStay + thirdPartStay;
        return totalCost;
    }
}

// megaFriend

var maxWord = friends[0];
function megaFriend(friends){
    for(var i = 0; i < friends.length; i++ ){
        var element = friends[i];
        if(element.length > maxWord.length){
            maxWord = element
        }
    }
    return element;
}