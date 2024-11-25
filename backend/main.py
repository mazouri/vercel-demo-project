from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 添加以下代码来配置CORS
origins = ["*"]  # 这里设置允许所有来源的跨域请求，在实际应用中可根据需要指定具体来源
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/example-api")
async def read_example():
    print('接口被调用，正在处理...')
    return {"message": "This is an example message from the backend API!"}