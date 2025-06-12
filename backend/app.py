from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Product

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
CORS(app)  # Enable CORS for all routes

@app.before_request
def create_tables():
    db.create_all()

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    query = data.get('message', '').lower()
    products = Product.query.filter(Product.name.ilike(f'%{query}%')).all()
    
    if products:
        response = "Found these products:\n" + "\n".join([f"- {p.name} (${p.price})" for p in products])
    else:
        response = "Sorry, no matching products found."
    
    return jsonify({'response': response})

if __name__ == '_main_':
    app.run(debug=True, port=5000)