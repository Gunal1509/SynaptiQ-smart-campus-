from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import os


from pypdf import PdfReader


from sentence_transformers import SentenceTransformer


import faiss
import numpy as np

from transformers import pipeline

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


chunks = []
index = None


embed_model = SentenceTransformer("all-MiniLM-L6-v2")
qa_model = pipeline("text2text-generation", model="google/flan-t5-base")


@app.post("/upload")
async def upload(file: UploadFile = File(...)):
    global chunks, index

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as f:
        f.write(await file.read())


    reader = PdfReader(file_path)
    text = ""

    for page in reader.pages:
        text += page.extract_text()

    chunks = [text[i:i+500] for i in range(0, len(text), 500)]
    embeddings = embed_model.encode(chunks)

    dim = embeddings.shape[1]
    index = faiss.IndexFlatL2(dim)
    index.add(np.array(embeddings))

    return {"message": "File uploaded & processed"}

@app.post("/ask")
async def ask(question: str = Form(...)):
    global chunks, index

    if index is None:
        return {"answer": "Upload a file first"}

   
    q_embedding = embed_model.encode([question])


    distances, indices = index.search(np.array(q_embedding), k=3)

    context = "\n".join([chunks[i] for i in indices[0]])


    prompt = f"""
    Answer based only on this context:
    {context}

    Question: {question}
    """

    response = qa_model(prompt, max_length=200)

    return {"answer": response[0]['generated_text']}