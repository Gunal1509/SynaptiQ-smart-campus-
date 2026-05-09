from fastapi import FastAPI,File,UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from fastapi import Form
from groq import Groq
from dotenv import load_dotenv
import os
load_dotenv()

app=FastAPI()
app.add_middleware(CORSMiddleware,allow_origins=["*"],allow_methods=["*"],allow_headers=["*"])
client=MongoClient('mongodb://localhost:27017/')
db=client['ai_campus']
collection=db['uploads']
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)
@app.post("/ask")
async def ask(question:str = Form(...)):
    response = client.chat.completions.create(
       model="llama-3.3-70b-versatile",
        messages=[
            {
                "role":"user",
                "content":question
            } ]
   )
    return {
        "answer": response.choices[0].message.content
    }
@app.post('/upload')
async def upload(
fileName:str=Form(...),
email:str=Form(...),
userId:str=Form(...),
fileType:str=Form(...),
file:UploadFile=File(...)
):
    file_path=f"uploads/{file.filename}"
    with open(file_path,"wb") as f:
        f.write(
           await file.read()
        )

    collection.insert_one({

       "fileName":fileName,
       "email":email,
       "userId":userId,
       "fileType":fileType,
       "filePath":file_path

    })

    return{
      "message":"File uploaded successfully"
    }
