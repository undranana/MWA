@Token({id: 123, canTalk : true})
class Student {
    constructor(public name: String, public gpa: number) {

    }
}
function Token(token: any) {
    return function(constructor: Function) {
        constructor.prototype.token = token.id;
        if (token.canTalk) {
            constructor.prototype.talk = function() {
                console.log("Talk function");
            }
        }
    }
}

const jack = new Student("Jack Smith", 3.3)
console.log(jack);
console.log("Token",jack["token"]);
jack["talk"]()

@Token({id: 124, canTalk : false})
class DEStudent {
    constructor(public name: String, public gpa: number) {

    }
}
let john = new DEStudent("John Simonds", 3.0);
console.log(john.name);
// john["talk"]();