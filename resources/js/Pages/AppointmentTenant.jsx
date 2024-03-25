import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Form from './Form';
import Todo from './Todo';
import CalendarComponent from './CalendarComponent';
import YourComponent from './YourComponent';
import { BiCalendar, BiCheckSquare } from 'react-icons/bi';
import { BsFillGearFill } from 'react-icons/bs';

const LSKEY = 'MyTodoApp';

function App() {
    const initialTodos = JSON.parse(window.localStorage.getItem(LSKEY + '.todos')) || [
        { text: 'My first todo', done: false },
        { text: 'My second todo', done: false },
    ];
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (newTodo, fromDate, toDate) => {
        setTodos([...todos, { id: Date.now(), ...newTodo, fromDate, toDate }]);
    };

    const handleCheckboxChange = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    };

    const handleEditTodo = (index, newText) => {
        const newTodos = [...todos];
        newTodos[index].text = newText;
        setTodos(newTodos);
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    };

    useEffect(() => {
        window.localStorage.setItem(LSKEY + '.todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <>
            <div
                style={{
                    background:
                        'linear-gradient(151deg, rgba(2,0,36,1) 0%, rgba(27,10,49,1) 68%, rgba(147,0,255,0.758140756302521) 100%)',
                    borderRadius: '20px',
                    height: '100vh',
                    alignItems: 'center',
                    padding: '2rem',
                    width: '99%',
                }}
            >
                <AppointmentTenantHeader />
                <Routes>
                    <Route
                        path="/appointment-tenant"
                        element={
                            <>
                                {/* Home page */}
                                <br />
                                <Form onAddTodo={addTodo} />
                                <Todo
                                    todos={todos}
                                    handleCheckboxChange={(index) => handleCheckboxChange(index)}
                                    handleEditTodo={handleEditTodo}
                                    handleDeleteTodo={handleDeleteTodo}
                                />
                                {console.log('Testing')}
                            </>
                        }
                    />
                    <Route path="/calendar" element={<Calendar todos={todos} />} />

                </Routes>
            </div>
            <nav style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    <li style={{ marginBottom: '10px' }}>
                        <Link to="/">
                            <BiCheckSquare size={30} style={{ marginRight: '10px' }} />
                            Todos
                        </Link>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <Link to="/calendar">
                            <BiCalendar size={30} style={{ marginRight: '10px' }} />
                            Calendar
                        </Link>
                    </li>
                    <li>
                        <Link to="/gsap">
                            <BsFillGearFill size={30} style={{ marginRight: '10px' }} />
                            GSAP
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default App;
