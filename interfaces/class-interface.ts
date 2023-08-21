interface XmenI {
    name: string;
    realName: string;
    mutantPower(id:number):string;
}

interface HumanI {
    age: number;
}

class testingClassUsage implements XmenI, HumanI {
    public age: number;
    public name: string;
    public realName: string;

    constructor(age: number, name: string, realName:string){
        this.age = age;
        this.name = name;
        this.realName = realName; 
    }

    mutantPower(id:number){
        return this.name + ' ' + this.realName;
    } 

    

}