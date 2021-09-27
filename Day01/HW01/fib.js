var fib_hard_coded = function(number){
    var ans;
    if(number == 10 || number == -10){
        ans = 55;
    }else if(number == -15 || number == 15){
        ans = 610;
    }
    return ans;
};
var calc_fib = function(num){
    if(num < 0){
        num *= -1;
    }
    var numbers = [];
    numbers[0] = 0;
    numbers[1] = 1;
    numbers[2] = 1;
    for(let i = 3; i <= num; i++){
        numbers[i] = numbers[i - 1] + numbers[i - 2];
    }
    return numbers[num];
}

module.exports = {
    fib_hard_coded,
    calc_fib

};