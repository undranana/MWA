let x : number = 5
let y : String  = '5'
x = 6
console.log("x is ", x)
console.log("y is ", y)

enum Gender {
    Male,Female
}
 console.log(Gender.Male);
 console.log(Gender[0]);
 let gender =  Gender.Male;
 console.log("Gender is",Gender[gender]);

 enum Days_Of_Week {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THIRSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY = 4
}
console.log(Days_Of_Week[4]);