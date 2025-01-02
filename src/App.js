import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Count from './components/Count';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/inline';
import Form from './components/Form';
import FragmentDemo from './components/FragementDemo';
import Table from './components/Table';
import RefsDemo from './components/RefsDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';


function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman" />
      <Greet name="Haward" heroName="superman" />
      <Greet name="Diana" heroName="wonder woman"/>
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Haward" heroName="superman" />
      <Welcome name="Diana" heroName="wonder woman"/>
      <Hello /> */}
 
      {/* <Count />
      <FunctionClick/>
      <ClassClick /> */}
      {/* <Message /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={false}/> */}
      {/* <Inline /> */}
      {/* <Form /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <RefsDemo /> */}
      {/* <ClickCounter /> */}
      <HoverCounter />
    </div>
  );
}

export default App;
