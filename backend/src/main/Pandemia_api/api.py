from flask import Flask , jsonify
from flask_restful import Resource, Api
from scrapper import dict
from scrapper_hespress import dict_hespress

app = Flask(__name__)
api = Api(app)

class Cases(Resource):
    def get(self):
        return jsonify(dict)

class Cases_hespress(Resource):
    def get(self):
        return jsonify(dict_hespress)

api.add_resource(Cases_hespress, '/hespress')
api.add_resource(Cases, '/')
if __name__ == '__main__':
    app.run(debug=False)
