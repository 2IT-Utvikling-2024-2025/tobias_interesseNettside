
//Create a const with class name - https://www.w3schools.com/js/js_const.asp
const className = "2ITA"

//Create a object of school with school name, number of students, and address - https://www.w3schools.com/js/js_objects.asp
const school = {
    name: "Drømtorp",
    numberOfStudent: 600,
    address: "Dynamitveien 25B"
    
}


//Create a array of student objects - https://www.w3schools.com/js/js_arrays.asp AND https://www.w3schools.com/js/js_objects.asp
const classTable = [
    { name: "Tobias", id: 1 },
    { name: "Bjerke", id: 2 },
    { name: "Tor", id: 3 },
    { name: "Fiona", id: 4 },
    { name: "Sol", id: 5 },
    { name: "måne", id: 6 },
    { name: "Erik", id: 7 },
    { name: "Torbjørn", id: 8 },
    { name: "Siri", id: 9 },
    { name: "Borg", id: 10 },
]






//Creating a React Component - https://www.w3schools.com/react/react_components.asp
export default function ClassTable() {

    //Execute a function for each item in array using a .map function - https://www.w3schools.com/js/js_array_iteration.asp#mark_map AND https://www.w3schools.com/react/react_lists.asp
    const classList = classTable.map( 

        //Create a Arrow Function - https://www.w3schools.com/js/js_arrow_function.asp AND https://www.w3schools.com/react/react_lists.asp
        student =>
            <li key={student.id}> 

                <ClassItem student={classTable[student.id - 1]} ></ClassItem>

            </li>

    )

    //JSX Kode - https://www.w3schools.com/react/react_jsx.asp
    return(
        <>
            
            <h1>{school.name}</h1> 

            <h1>Klasse {className}</h1>

            <ul>{classList}</ul>

        </>
    )
}







// Bruk av props - https://www.w3schools.com/react/react_props.asp
function ClassItem(props) {
    return(
        <>
            <p>{props.student.name}</p>
        </>
    )
}
