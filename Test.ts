console.log("TEst");
var aaa:string;
aaa='test';

export class Person{
    firstName:string;
    lastName:string;
    

    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }


    getFullName(){
        return this.firstName+" "+this.lastName;
    }
}