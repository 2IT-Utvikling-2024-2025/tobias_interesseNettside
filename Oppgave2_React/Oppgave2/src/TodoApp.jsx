import { useState, useEffect } from "react"

export default function TodoApp() {
    const [tasks, setTasks] = useState([
        { text: 'Learn React', completed: false },
        { text: 'Build a Todo App', completed: false },
      ]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    
    // useEffect to show alert when a task is completed
    useEffect(() => {

        const completedTask = tasks.find(task => task.completed && !task.alertShown);
        if (completedTask) {
            setAlertMessage(`Task "${completedTask.text}" completed!`);
            setShowAlert(true);
        
        
            // Update tasks to mark the alert as shown for the completed task
            setTasks(tasks.map(task =>
                task.text === completedTask.text ? { ...task, alertShown: true } : task
            ));
        
            // Hide alert after 3 seconds
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        
            return () => clearTimeout(timer); // Cleanup timeout
        }

    }, [tasks]); // Runs whenever tasks are updated


    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed, alertShown: false } : task
        );
        setTasks(updatedTasks);
      };
    
    
    return(
        <>
            <h1>Todo List</h1>
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>
                    <label>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(index)}
                    />
                    {task.text}
                    </label>
                </li>
                ))}
            </ul>


            {/* Conditionally render the alert */}
            {showAlert && (
                <div style={alertStyle}>
                {alertMessage}
                </div>
            )}

        </>
    )
}


// Simple inline CSS for the alert box
const alertStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    position: 'fixed',
    top: '20px',
    right: '20px',
    borderRadius: '5px',
    zIndex: '1000',
    transition: 'opacity 0.5s ease-in-out',
  };