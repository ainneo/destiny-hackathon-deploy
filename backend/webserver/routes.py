from flask import jsonify, request
from random import randint, sample
from json import load
from webserver import app, name, version

data_folder = '../data'
pets = load(open(f'{data_folder}/master.json'))['count']

@app.route('/')
def index():
    return jsonify(name=name, version=version)

@app.route('/pet')
def get_random_pet():
    selection = randint(0, pets - 1)
    data = load(open(f'{data_folder}/data_{str(selection)}.json'))
    return jsonify(sample(data, 1)[0])


@app.route('/pets')
def get_random_pets():
    count = 5
    try:
        count = int(request.args['count'])
    except:
        pass
    selection = randint(0, pets - 1)
    data = load(open(f'{data_folder}/data_{str(selection)}.json'))
    return jsonify(sample(data, count))