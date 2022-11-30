class Message{
    content: string = "";
    from: string = "";
    to: string = "";
    messageType : string = "__message__";
    receivedOn: Date = new Date();
}

class DisplayMessageModel {

}

class MyNewType {}

const methodName = (param1: string) : MyNewType => ({
    name: "param1", 
    country: "Canada" } as MyNewType); 
    



const convertMessages = (messages: Array<string>, sender: string, receiver: string) : Array<DisplayMessageModel> => {
    
    const convertMessageImpl = (messageItem : Message) : DisplayMessageModel => ({
        ...messageItem,
        id: 123,
        country: "Canada",
        sentOn: new Date()

    } as DisplayMessageModel);
    


    const msg : Message = new Message();
    msg.content = messages[0];
    msg.from = sender;
    msg.to = receiver; 

    const newItem: DisplayMessageModel = convertMessageImpl(msg);

    const items: DisplayMessageModel[] = [];
    items.push(newItem);
    return items;
}


export default function ExecuteMessageProcessing(){
    const messages: string[] = ["message one", "message two"];    
    const transformedMessages : Array<DisplayMessageModel> = convertMessages(messages, "This is the sender", "this is the receiver");
    const tm = transformedMessages[0];
    console.log(tm);
}