
from models import db, Product
from app import app

mock_products = [
    {"name": "Wireless Headphones", "category": "Electronics", "price": 59.99},
    {"name": "Bluetooth Speaker", "category": "Electronics", "price": 39.99},
    {"name": "Smart Watch", "category": "Electronics", "price": 129.99},
    {"name": "Yoga Mat", "category": "Fitness", "price": 20.00},
    {"name": "Running Shoes", "category": "Fitness", "price": 99.99},
    # Add more products to make at least 100 entries!
]

with app.app_context():
    db.drop_all()
    db.create_all()
    
    for item in mock_products:
        db.session.add(Product(**item))
    
    db.session.commit()
    print("Mock data populated!")
