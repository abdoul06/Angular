//Run with: tsc --target es5 filename.ts
class Career {
	private field: string;
	constructor(field) {
        this.field = field;
    }
	areaOfStudy():void{
		console.log(`Are you interested in going into ${this.field}?`)
	}
}


class Course extends Career{
//can pass days in constructor
public topic: string;
private days: number;
    constructor(field, topic, days) {
		super(field);	
		super.areaOfStudy();
		this.topic = topic;
		this.days = days;
    }
	
	set classLength(days: number){
	   this.days = days;
	}
	
	get classLength():number{
	   return this.days;
	}
    
	static preReq():string {
        return `You must know HTML first.`;
    }
}

// Instantiate an object from a class

//let career = new Career("Web Development");
let course = new Course("Web Development", "Angular", 3);
//course.areaOfStudy();
course.classLength = 4;
var days = course.classLength;
let prereq = Course.preReq();
console.log(`You are in a ${days}-day ${course.topic} class. ${prereq}`);

