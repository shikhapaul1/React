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
      <NameList />
    </div>
  );
}

export default App;
