// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Layout from "./components/Layout.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import { useEffect } from "react";
// import {NameChanger} from "./components/NameChanger.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import {NameChanger} from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import {CounterWithCustomHook} from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
import HomePage from "./pages/HomePage.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {

    // useEffect( () => {
    //     const id: number = setInterval( () => console.log( " tick "), 1000 );
    //     return () => clearInterval(id);
    // }, []);

    return (
        <>
            {/*<Layout>*/}
                {/*<ClassComponent/>*/}
                {/*<FunctionalComponent/>*/}
                {/*<ArrowFunctionalComponent/>*/}
                {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component with Props!"/>*/}
                {/*<ArrowFunctionalComponentWithPropsType*/}
                {/*  title="Is an Arrow Functional Component with Props!"*/}
                {/*  description="this is a description"*/}
                {/*/>*/}

                {/*<ClassComponentWithState/>*/}
                {/*<FunctionalComponentWithState/>*/}
                {/*<Counter/>*/}
                {/*<NameChanger/>*/}
                {/*<CounterWithMoreStates/>*/}
                {/*<CounterAdvanced/>*/}
                {/*<CounterWithCustomHook/>*/}
                {/*<CounterAdvancedWithCustomHook/>*/}
                {/*<CounterWithReducer/>*/}
                {/*<Todo/>*/}
                {/*<OnlineStatus/>*/}
            <BrowserRouter>
                    <Routes>

                        <Route element= { <RouterLayout/> }>
                            {/*<Route path="/" element={ <HomePage/> } ></Route>*/}
                            <Route index element={<HomePage/>}/>
                        </Route>

                        {/*<Route path="examples?">*/}
                        <Route path="examples" element= { <RouterExamplesLayout/> } >
                            <Route index element={ <ExamplesPage/> }/>

                            <Route path="name-changer" element={<NameChangerPage/>} ></Route>
                            <Route path="online-status" element={<OnlineStatusPage/>} ></Route>
                            <Route path="auto-redirect" element={<AutoRedirectPage/>} ></Route>
                        </Route>

                        <Route path="users/:userId" element= {<UserPage/>} > </Route>
                        <Route path="users" element={ <UserPage/> } > </Route>
                        {/*<Route path="files/*" element={ <FilePage/> } > </Route>*/}
                        <Route path="*" element={<NotFoundPage/> }></Route>

                    </Routes>
            </BrowserRouter>

            {/*</Layout>*/}



        </>


    )
}

export default App