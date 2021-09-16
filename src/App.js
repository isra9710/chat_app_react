import {ChatEngine} from "react-chat-engine"
import './App.css';
import ChatFeed from "./components/ChatFeed.jsx";

function App() {
  return (
    <div className="App">
     <ChatEngine
       height="100vh"
       projectID="bbf2c177-e47d-48bb-bf01-249d5b477766"
       userName="isra0110"
       userSecret="123456"
       renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>} 
       onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play}
      />
    </div>
  );
}

export default App;
