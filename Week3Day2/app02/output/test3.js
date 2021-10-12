var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Student = class Student {
    constructor(name, gpa) {
        this.name = name;
        this.gpa = gpa;
    }
};
Student = __decorate([
    Token({ id: 123, canTalk: true }),
    __metadata("design:paramtypes", [String, Number])
], Student);
function Token(token) {
    return function (constructor) {
        constructor.prototype.token = token.id;
        if (token.canTalk) {
            constructor.prototype.talk = function () {
                console.log("Talk function");
            };
        }
    };
}
const jack = new Student("Jack Smith", 3.3);
console.log(jack);
console.log("Token", jack["token"]);
jack["talk"]();
let DEStudent = class DEStudent {
    constructor(name, gpa) {
        this.name = name;
        this.gpa = gpa;
    }
};
DEStudent = __decorate([
    Token({ id: 124, canTalk: false }),
    __metadata("design:paramtypes", [String, Number])
], DEStudent);
let john = new DEStudent("John Simonds", 3.0);
console.log(john.name);
// john["talk"]();
