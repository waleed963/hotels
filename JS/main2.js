// document.write("asdasdsads");

const Studants = [
    {
        name: "Waleed",
        last : "Alabdallah",
        birth :"10-01-2001",
        id : 1,
        marks :{
            math: 100,
            phys : 100,
            prog : 70
        }
        
    },
    {
        name: "hareth",
        last : "alawy",
        birth :"10-04-2011",
        id : 1,
        marks :{
            math: 100,
            phys : 100,
            prog : 70
        }
    },
    {
        name: "maha",
        last : "mohamad",
        birth :"10-01-2009",
        id : 1,
        marks :{
            math: 100,
            phys : 100,
            prog : 70
        }
    }
];
// document.write(Studants[0].marks.math);
// document.write(Studants[0].length);

let text = "<table class=\"table\">";

for(let i = 0 ; i< Studants.length ; i++){
text += "<tr>";
text += "<td>" + Studants[i].id + "</td>";
text += "<td>" + Studants[i].name + "</td>";
text += "<td>" + Studants[i].last + "</td>";
text += "<td>" + Studants[i].birth + "</td>";
text += "<td>" + Studants[i].marks.math + "</td>";
text += "<td>" + Studants[i].marks.phys + "</td>";
text += "<td>" + Studants[i].marks.prog + "</td>";
text += "</tr>";
}

document.write(text);