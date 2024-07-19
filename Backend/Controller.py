from flask import Flask, request, jsonify
from flask_cors import CORS
import Requests
import json

app = Flask(__name__)
CORS(app)

#functionality
def process_genre(genre):
    try:
        # authentication
        client_id = "efed657aff684560804086ec817c7fa9"
        client_secret = "d9ab7e3edd4e460cb27cac970fb79a39"
        access_token = Requests.get_spotify_access_token(client_id, client_secret)
        print(access_token)
        #generate the songs
        search_results = Requests.search_tracks_by_genre(genre, 20, client_id, client_secret)
        print("Track URIs:")
        for uri in search_results:
            print(uri)
        #generate the playlist
        return Requests.create_playlist(search_results, client_id, client_secret, genre)
    except Exception as e:
        print(e)

def process_query(query):
    try:
        # authentication
        client_id = "efed657aff684560804086ec817c7fa9"
        client_secret = "d9ab7e3edd4e460cb27cac970fb79a39"
        access_token = Requests.get_spotify_access_token(client_id, client_secret)
        print(access_token)
        #generate the songs
        search_results = Requests.search_tracks_by_query(query, 20, client_id, client_secret)
        print("Track URIs:")
        for uri in search_results:
            print(uri)
        #generate the playlist
        return Requests.create_playlist(search_results, client_id, client_secret, query)
    except Exception as e:
        print(e)
        return jsonify({'result': "something went wrong"})

#endpoints
@app.route('/api/genre', methods=['POST'])
def post_genre():
    try:
        data = request.get_data()
        data = json.loads(data.decode("utf-8"))
        text = data.get('text')
        if text is None:
            return jsonify({'error': 'No text provided'}), 400
        result = process_genre(text)
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'result': "something went wrong"})

@app.route('/api/query', methods=['POST'])
def post_query():
    try:
        data = request.get_data()
        data = json.loads(data.decode("utf-8"))
        text = data.get('text')
        if text is None:
            return jsonify({'error': 'No text provided'}), 400
        result = process_query(text)
        return jsonify({'result': result})
    except Exception as e:
        print(e)

if __name__ == '__main__':
    app.run(debug=True)
