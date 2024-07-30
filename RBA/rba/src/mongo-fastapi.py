from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from pymongo import MongoClient
from pymongo.collection import Collection

MONGO_URI = "mongodb+srv://yogeshmuneese:yogeshmuneese@cluster1.bqp7ddk.mongodb.net/"
DATABASE_NAME = "IIP_TEST"
COLLECTION_NAME = "USERS"

client = MongoClient(MONGO_URI)
database = client[DATABASE_NAME]
collection = database[COLLECTION_NAME]

app = FastAPI()

@app.get("/items")
async def read_items():
    items = list(collection.find())
    print(items)
    item_object = []
    for item in items:
        item.pop('_id', None)
        item_object.append(item)
    return item_object