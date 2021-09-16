
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";
const ChatFeed  = (props) => {
    const{chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];
    console.log(props);
   
   
    const renderMessages = () =>{
        const keys = Object.keys(messages);
        
        return keys.map((key, index) => {
            const message = message[key];
            const lastMessageKey = index == 0 ? null : keys[index-1]
            const isMyMessage = userName == message.sender.userName;

            return(
                <div key={`msg_${index}`} style={{width:'100%'}}>

                </div>
            )
        })
    }
    return(
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;