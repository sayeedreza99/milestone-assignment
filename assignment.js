function feetToMile(numbFeet) {
    let numbMile = numbFeet * 0.000189394;
    numbMile = numbMile.toFixed(5);
    return numbMile;
}
console.log(feetToMile(2));

function woodCalculator(numberChair, numberTable, numberKhat) {
    let chairWood = numberChair * 1;
    let tableWood = numberTable * 3;
    let khatWood = numberKhat * 5;

    const totalWood = chairWood + tableWood + khatWood;

    return totalWood;
}

function brickCalculator(numberFloor) {
    let totalBrick = 10000;
    if (numberFloor <= 10) {
        totalBrick = numberFloor * totalBrick;
    }
    if (numberFloor > 10 && numberFloor <= 20) {
        totalBrick = (numberFloor - 10) * 12000 + 15000;
    }
    if (numberFloor > 20) {
        totalBrick = (numberFloor - 20) * 10000 + 15000 + 12000;
    }
    return totalBrick;
}

function tinyFriend(frndList) {
    let minLength = frndList[0];
    for (var i = 0; i < frndList.length; i++) {
        var element = frndList[i];
        if (element.length < minLength.length) {
            minLength = element;
        }
    }
    return minLength;
}
