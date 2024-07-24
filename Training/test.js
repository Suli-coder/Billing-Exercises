var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["NotFound"] = 404] = "NotFound";
    ErrorCodes[ErrorCodes["LoadingError"] = 252] = "LoadingError";
})(ErrorCodes || (ErrorCodes = {}));
var UserInput = 200;
var Flag = false;
var num = 0;
var i;
var Valid = [];
for (i = num; i < 101; i++) {
    Valid[i] = i;
}
for (i = num; i < 101; i++) {
    if (Valid[i] == UserInput) {
        if (i > 50) {
            console.log(ErrorCodes.LoadingError);
        }
        else {
            console.log('Value is Valid');
        }
        Flag = true;
    }
}
if (Flag = false) {
    console.log(ErrorCodes.NotFound);
}
