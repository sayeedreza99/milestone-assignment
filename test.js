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
var result = tinyFriend(['hello', 'jama', 'tahoklo', 'ol']);

console.log(result);