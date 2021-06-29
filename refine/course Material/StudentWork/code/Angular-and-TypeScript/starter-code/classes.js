class Career {
	constructor(field) {
        this.field = field;
    }
	areaOfStudy(){
		console.log(`Are you interested in going into ${this.field}?`)
	}
}


class Course extends Career{
//can pass days in constructor
    constructor(field, topic, days) {
		super(field);	
		super.areaOfStudy();
		this.topic = topic;
		this.days = days;
    }
	
	set classLength(days){
	   this.days = days;
	}
	
	get classLength(){
	   return this.days;
	}
    
	static preReq() {
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

