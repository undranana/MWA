process = function(req, res){
    let firstNumber = parseFloat(req.params.firstNumber);
    let secondNumber = 0;

    if(req.query && req.query.secondNumber){
        secondNumber = parseFloat(req.query.secondNumber);
    }
    console.log("first number",firstNumber);
    res.status(200).send("" +firstNumber + " + " + secondNumber + " = " + (firstNumber*secondNumber));
}
emptyParam = function(req,res){
    res.status(200).send("Please enter first number as a parameter and second as a query string. For example: http://localhost:3000/5?secondNumber=5");
}
module.exports = {
    process:process,
    emptyParam:emptyParam
}