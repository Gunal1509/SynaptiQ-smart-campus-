from fastapi import FastAPI

app = FastAPI()

@app.get("/gunal")
def home():
    return {"status":"running"}