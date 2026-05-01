import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Rag() {
 const navigate = useNavigate();
const [file, setFile] = useState(null);
const [question, setQuestion] = useState("");
const [answer, setAnswer] = useState("");
const [loading, setLoading] = useState(false);

const handleUpload = async () => {

if (!file) {
alert("Select a file first");
return;
}

const formData = new FormData();
formData.append("file", file);

await axios.post(
"http://localhost:8000/upload",
formData
);

alert("File uploaded successfully");
};

const handleAsk = async () => {

if (!question) return;

setLoading(true);

const formData = new FormData();
formData.append("question", question);

const res = await axios.post(
"http://localhost:8000/ask",
formData
);

setAnswer(res.data.answer);
setLoading(false);
};

return (

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

<div className="container pt-5">

<h2 className="text-center text-white mb-4">
RAG Assistant
</h2>

<div className="card p-4 rounded-4 mx-auto" style={{ width: "500px" }}>

<input
type="file"
className="form-control mb-3"
onChange={(e) => setFile(e.target.files[0])}
/>

<button
className="btn btn-dark w-100 mb-3"
onClick={handleUpload}
>
Upload File
</button>
<input
type="text"
className="form-control mb-3"
placeholder="Ask question..."
onChange={(e) => setQuestion(e.target.value)}
/>

<button
className="btn btn-success w-100 mb-3"
onClick={handleAsk}
>
Ask
</button>

{loading && <p>Thinking...</p>}

{answer && (
<div className="alert alert-light">
{answer}
</div>
)}

</div>

</div>

</div>

);
}

export default Rag;