// import ViteIntro from "./pages/ViteIntro.tsx";
//
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFuctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFuctionalComponentWithPropsType.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFuctionalComponentWithProps.tsx";

function App() {

  return (
    <>
        {/*<ClassComponent></ClassComponent>*/}
        {/*<FunctionalComponent></FunctionalComponent>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps></ArrowFunctionalComponentWithProps>*/}
        <ArrowFunctionalComponentWithPropsType title="Is an Arrow Functional Component with Props!"
                                               description="this is a description"/>
    </>
  )
}

export default App
