export class StudentInfo {
    FirstName:string = "";
    LastName:string = "";
    PhoneNumber:string = "";
    Age:string = "";
    Gender:string = "";
    GPA:string = "";
    University:string = "";
    Image:string = "";

    constructor(){}

    setData(name:string, surname:string, phone:string, age:string, 
    gender:string, gpa:string, university:string, image:string){
        this.FirstName = name
        this.LastName = surname
        this.PhoneNumber = phone
        this.Age = age
        this.Gender = gender
        this.GPA = gpa
        this.University = university
        this.Image = image
    }
}