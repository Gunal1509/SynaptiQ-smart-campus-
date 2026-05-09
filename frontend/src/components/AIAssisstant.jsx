import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function AIAssisstant(){
     const navigate=useNavigate();

const [question,setQuestion] = useState("");
const [messages,setMessages] = useState([]);
const [loading,setLoading] = useState(false);

const handleAsk = async () => {

if(!question){
return;
}

const userMessage = {
sender:"user",
text:question
};

setMessages((prev)=>[...prev,userMessage]);

setLoading(true);

const formData = new FormData();

formData.append("question", question);

setQuestion("");

try{

const res = await axios.post(
"http://localhost:8000/ask",
formData
);

const aiMessage = {
sender:"ai",
text:res.data.answer
};

setMessages((prev)=>[...prev,aiMessage]);

}
catch(error){

console.error(error);

}

setLoading(false);

};

return(

<div className="bg-success min-vh-100">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div className="d-flex gap-2">
        <button      
        className="btn btn-outline-light"
        onClick={()=>navigate('/dashboard')}
        >previous</button>
        </div>
        <div className="ms-auto d-flex gap-2">
<button className="btn btn-outline-light"onClick={()=>navigate('/dashboard')}>
home
</button>
</div>
        </nav>

<div className="container pt-4">

<h2 className="text-center text-white fw-bold mb-4">
AI Assistant
</h2>

<div
className="card shadow rounded-4 p-4 mx-auto d-flex flex-column"
style={{
width:"700px",
height:"80vh"
}}
>

{/* Chat Messages */}

<div
className="flex-grow-1 overflow-auto mb-3"
>

{messages.map((msg,index)=>(

<div
key={index}
className={`d-flex mb-3 ${
msg.sender === "user"
? "justify-content-end"
: "justify-content-start"
}`}
>

<div
className={`p-3 rounded-4 ${
msg.sender === "user"
? "bg-primary text-white"
: "bg-light"
}`}
style={{
maxWidth:"75%"
}}
>

{msg.text}

</div>

</div>

))}

{loading && (

<div className="text-start">

<div className="bg-light p-3 rounded-4 d-inline-block">
Thinking...
</div>

</div>

)}

</div>

{/* Input Area */}

<div className="d-flex gap-2">

<input
type="text"
className="form-control rounded-pill"
placeholder="Ask anything..."
value={question}
onChange={(e)=>setQuestion(e.target.value)}

onKeyDown={(e)=>{
if(e.key==="Enter"){
handleAsk();
}
}}
/>

<button
className="btn btn-dark rounded-pill px-4"
onClick={handleAsk}
>
Send
</button>

</div>

</div>

</div>

</div>

)

}

export default AIAssisstant;