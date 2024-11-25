from fastapi import FastAPI

app = FastAPI()

@app.get("/example-api")
async def read_example():
    return {"message": "This is an example message from the backend API!"}