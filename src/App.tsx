import React from 'react';
import './App.css';


function App() {
    type student = { id: string, name: string }

    const students: student[] = [
        {
            id: "1",
            name: 'Tomas'
        }, {
            id: "2",
            name: 'Moritz',

        }, {
            id: "3",
            name: 'Olaf',

        }, {
            id: "4",
            name: "Michi",

        }]
let newStudent = {id:"6",name:"Bruna"}
  // console.log(students)
  //  studentArray.findIndex((st1 => st1.id === 1));
  //  studentArray.push(newSt)
  //  console.log(st1);
  //  console.log(studentArray)

    function updateStudentsName(id: string, newName: string) {
        return students.map((student: student) => {
            if (student.id === id) {
                return {...student, name: newName}
            }
            return student
        })
    }

    console.log("before " )
    console.log(students)
    console.log("after " )
    console.log(updateStudentsName("1","Alexandar" ))
    console.log("new student come")
    students.push(newStudent)
    console.log(students)

    return (
        <div className="App">
            <header className="App-header">
            </header>
        </div>
    )
}

export default App;
