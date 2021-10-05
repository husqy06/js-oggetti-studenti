//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
const firstStudent = {name: "Giovanni", lastName: "Di Battista", age: 23};

//Creare un array di oggetti di studenti.
const students = [
    {name: "Luca", lastName: "Venuta", age: 23},
    {name: "Marco", lastName: "Rossi", age: 23},
    {name: "Vittorio", lastName: "Lucano", age: 23},
    {name: "Matteo", lastName: "Ferrani", age: 23},
    {name: "Paolo", lastName: "Lopapa", age: 23},
];


//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
print(firstStudent);
print(students);

function print(element) {
    
    if(Array.isArray(element)) {
        for(let i in element) {
            let li = document.createElement("li");
            let text = document.createTextNode(element[i].name + " " + element[i].lastName);
            li.appendChild(text);
            list.appendChild(li)
        }
    } else {
        let li = document.createElement("li");
        for(let i in element) {
            let text = document.createTextNode(element[i] + " ");
            li.appendChild(text);
            list.appendChild(li);
        }
    }
    
};

//Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

function insertStudent(students) {
    let student = {name: "", lastName: "", age: null};
    
    student.name = prompt("inseire nome");
    student.lastName = prompt("inseire cognome");
    student.age = prompt("inserire età");
    students.push(student);

    let li = document.createElement("li");
    let text = document.createTextNode(student.name + " " + student.lastName);
    li.appendChild(text);
    list.appendChild(li)
}





