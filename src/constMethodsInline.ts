import { v4 as uuidv4 } from 'uuid';
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


/**
 * 'export default ()' should work because this is the only export statement from this file (module). When client imports this, any alias (name) can be given
 * which client will call to invoke this method. In our case its 'import ExecuteMessageProcessing from "./constMethodsInline";' and then 'ExecuteMessageProcessing();'
 */
export default () : void =>  {
    const messages: string[] = ["message one", "message two"];    
    const transformedMessages : Array<DisplayMessageModel> = convertMessages(messages, "This is the sender", "this is the receiver");
    const tm = transformedMessages[0];
    console.log(tm);

    console.log("-------------------------------------------");
    const p : Person = new Person();
    p.dob = new Date("1988-03-01");
    p.name = "Super Spiderman";
    const emp : Manager = convertToEmployee(p);
    console.log(emp);

    console.log("-------------------------------------------");
}

// export default executeMessageProcessing;




class Person {
    name: string = "";
    dob: Date = new Date();    
}

class  Employee extends Person{ 
    Id: string = "";
    departmentName : string = "";
    salary : number = 0.0;
}

class Manager {
    name: string = "";
    dob: Date = new Date();   
    Id: string = "";
    departmentName : string = "";
    salary : number = 0.0;
}

/**
 * A mapper method that converts a type from one to the other.
 * @param person 
 * @returns 
 */
const convertToEmployee = (person : Person) : Manager => ({ 
    Id : getEmployeeId(person.name), departmentName: "IT", salary: 50000.25, dob: person.dob, name: person.name
 }  as Manager);

 const getEmployeeId = (name: string): string  => {
    const id = uuidv4()
    return `${name}-${id}`;
 }