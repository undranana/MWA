let x = 5;
let y = '5';
x = 6;
console.log("x is ", x);
console.log("y is ", y);
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender[0]);
let gender = Gender.Male;
console.log("Gender is", Gender[gender]);
var Days_Of_Week;
(function (Days_Of_Week) {
    Days_Of_Week[Days_Of_Week["MONDAY"] = 1] = "MONDAY";
    Days_Of_Week[Days_Of_Week["TUESDAY"] = 2] = "TUESDAY";
    Days_Of_Week[Days_Of_Week["WEDNESDAY"] = 3] = "WEDNESDAY";
    Days_Of_Week[Days_Of_Week["THIRSDAY"] = 4] = "THIRSDAY";
    Days_Of_Week[Days_Of_Week["FRIDAY"] = 5] = "FRIDAY";
    Days_Of_Week[Days_Of_Week["SATURDAY"] = 6] = "SATURDAY";
    Days_Of_Week[Days_Of_Week["SUNDAY"] = 4] = "SUNDAY";
})(Days_Of_Week || (Days_Of_Week = {}));
console.log(Days_Of_Week[4]);
