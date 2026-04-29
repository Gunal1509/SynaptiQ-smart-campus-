from fastapi import FastAPI,File,UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from fastapi import Form

app=FastAPI()
app.add_middleware(CORSMiddleware,allow_origins=["*"],allow_methods=["*"],allow_headers=["*"])
client=MongoClient('mongodb://localhost:27017/')
db=client['ai_campus']
collection=db['uploads']
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
