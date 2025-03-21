from fastapi import FastAPI, HTTPException
import psycopg2
from pydantic import BaseModel
from menu_item import MenuItem  
from menu_manager import MenuManager 

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '12345678'
DATABASE = 'Restaurant'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)

app = FastAPI()


class MenuItemRequest(BaseModel):  
    item_name: str
    item_price: int


@app.get("/menu/{name}")
def get_item(name: str):
    try:
        item = MenuManager.get_by_name(name, connection)
        if item:
            return {"item_name": item[1], "item_price": item[2]}  
        raise HTTPException(status_code=404, detail="Item not found")
    except Exception as e :
        print(e)


@app.post("/menu")
def add_item(item: MenuItemRequest):
    try:
        menu_item = MenuItem(item.item_name, item.item_price)
        menu_item.save(connection)  
        return {"message": "Item added successfully"}
    except Exception as e:
        print(e)


@app.delete("/menu/{name}")
def delete_item(name: str):
    try:
    
        menu_item = MenuItem(name)
        menu_item.delete(connection)
        return {"message": "Item deleted successfully"}
    except Exception as e:
        print(e)


@app.put("/menu/{name}")
def update_item(name: str, item: MenuItemRequest):
    try:
   
        menu_item = MenuItem(name)
        menu_item.update(item.item_name, item.item_price, connection)
        return {"message": "Item updated successfully"}
    except Exception as e:
        print(e)


@app.get("/menu")
def get_menu():
    try:

        
        items = MenuManager.all_items(connection)
        formatted_items = [{"item_name": item[1], "item_price": item[2]} for item in items]
        return formatted_items
    except Exception as e:
        print(e)
