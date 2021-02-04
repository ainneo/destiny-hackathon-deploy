from flask import Flask

name = 'DestinyAPI'
version = '1.0'
app = Flask(__name__)

from backend.webserver import routes
