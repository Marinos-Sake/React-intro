// import ViteIntro from "./pages/ViteIntro.tsx";
//
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFuctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFuctionalComponentWithPropsType.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFuctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";
import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import {CodingFactoryLogo} from "./components/CodingFactoryLogo.tsx";

function App() {

  return (
    <>
        <Layout>
        {/*<ClassComponent></ClassComponent>*/}
        {/*<FunctionalComponent></FunctionalComponent>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps></ArrowFunctionalComponentWithProps>*/}
        {/*<ArrowFunctionalComponentWithPropsType title="Is an Arrow Functional Component with Props!"*/}
        {/*                                       description="this is a description"/>*/}
        {/*<CodingFactoryLogo></CodingFactoryLogo>*/}

            {/*<ClassComponentWithState></ClassComponentWithState>*/}

            <FunctionalComponentWithState></FunctionalComponentWithState>

        </Layout>
    </>
  )
}

export default App
