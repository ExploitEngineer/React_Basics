import { useState } from 'react';
import ClassBasedComponent from './components/Class_based_component';
import FunctionalComponent from './components/Function_based_component';
import ProductList from './components/products';
import Users from './components/users/index';
import Props from './components/props/Props';
import FunctionState from './components/stateManagement/FunctionState';
import FunctionStateForm from './components/stateManagement/FunctionStateForm';
import UserGreeting from './components/conditionalRendering/UserGreeting';
import List from './components/Lists_Keys/List';
import Button from './components/EventHandling/Button';
import { ControlledForm } from './components/reactForm/ControlledForm';
import Types from './components/props/Tyes';
import DefaultProps from './components/props/DefaultProps';
import ChildrenProp from './components/props/ChildrenProp';
import State from './components/Hooks/useState/State';
import AdvanceState from './components/Hooks/useState/AdvanceState';
import UseEffect from './components/Hooks/useEffect/UseEffect';
import { ApiFetchuseEffect } from './components/Hooks/useEffect/UseEffect';
import UseRef from './components/Hooks/useRef/UseRef';
import Navbar from './components/Navbar';
import { CounterContext } from './components/context/context';
import CustomHook from './components/Hooks/customHook/CustomHook';
import { Routes, Route } from 'react-router-dom';
import Home from './components/reactRouter/Home';
import About from './components/reactRouter/About';
import Contact from './components/reactRouter/Contact';
import UseNavigation from './components/reactRouter/useNavigation/UseNavigation';

const App = () => {

    const dummyProducts = ['Product 1', 'Product 2', 'Product 3'];

    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "pineapple", calories: 37 }
    ];

    const [count, setCount] = useState(29);

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-zinc-800">
            <div className='space-y-4'>
                <h1 className='text-purple-700'>React JS Concepts 2024</h1>
                {/* <ClassBasedComponent /> */}
                {/* <FunctionalComponent /> */}
                {/* <ProductList data={dummyProducts} name='rafay' city='Islamabad' /> */}
                {/* <Users /> */}
                {/* <Props /> */}
                {/* <FunctionState /> */}
                {/* <FunctionStateForm /> */}
                {/* <UserGreeting isLoggedIn={true} username='Rafay' /> */}
                {/* <List items={fruits} Category="Fruits" /> */}
                {/* <Button /> */}
                {/* <ControlledForm /> */}
                {/* <Types name='rafay' age={17} /> */}
                {/* <DefaultProps /> */}
                {/* <ChildrenProp name='rafay'>
                    <p>This code still works.</p>
                </ChildrenProp> */}
                {/* <State /> */}
                {/* <AdvanceState /> */}
                {/* <UseEffect /> */}
                {/* <ApiFetchuseEffect /> */}
                {/* <UseRef /> */}
                {/* <CounterContext.Provider value={{ count, setCount }}>
                    <Navbar />
                </CounterContext.Provider> */}
                {/* <CustomHook /> */}
                {/* Routes, Route */}
                {/*  useNavigation Hook */}
                <Routes>
                    <Route element={<Home />} path='/' />
                    <Route element={<About />} path='/about' />
                    <Route element={<Contact />} path='/contact' />
                    <Route element={<UseNavigation />} path='/navigate' />
                </Routes>
            </div>
        </div>
    )
}

export default App;
