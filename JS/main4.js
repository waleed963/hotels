// function f(){
//     document.write('Hello <br>')
// }

// f();
// f();
// f();
// f();
// f();
// f();
// f();





function d(){
    document.getElementById("test").innerHTML = "hello <br>"
}




function f1(x = 2, y =1){
    let d = new Date(2023,6);
    document.getElementById("test").innerHTML = "<h1>" + (x ** y) + "</h1><br>";
    document.getElementById("test").innerHTML = d;
}




class studant{
    constructor(name ,last_name ,birthday){
    this.name = name;
    this.last_name = last_name;
    this.birthday = birthday;
    }
    getfullname() {
        return this.name +' '+ this.last_name + "<br>";       
    }
    Age(){
        let now_day =new Date;
        let now_year = now_day.getFullYear();
        let birth_date = new Date.getFullYear();
        let birth_year = birth_date.getFullYear();
        return now_year - birth_year;

    }
}

const s1 = new studant("Ahmad","Yaser" ,"10-01-2001");
document.getElementById("stu").innerHTML = s1.getfullname();
document.getElementById("stu").innerHTML += s1.Age();
// document.getElementById("stu").innerHTML = s1.name;
// document.getElementById("stu").innerHTML += s1.last_name;
// document.getElementById("stu").innerHTML += s1.birthday;

