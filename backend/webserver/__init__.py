from flask import Flask
from flask_cors import CORS

name = 'DestinyAPI'
version = '1.0'
app = Flask(__name__)
CORS(app)

from backend.webserver import routes
