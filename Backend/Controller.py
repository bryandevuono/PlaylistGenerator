from flask import Flask, request, jsonify, redirect, session
from flask_cors import CORS
import Requests
import json
import spotipy
import spotipy.util as util
from spotipy.oauth2 import SpotifyOAuth
from spotipy.cache_handler import FlaskSessionCacheHandler
app = Flask(__name__)
CORS(app)
app.secret_key = 'sedkfjsbwekj'
# authentication
client_id = "efed657aff684560804086ec817c7fa9"
client_secret = "d9ab7e3edd4e460cb27cac970fb79a39"
cache_handler = FlaskSessionCacheHandler(session)
sp_oauth = SpotifyOAuth(
    client_id=client_id,
    client_secret=client_secret,
    redirect_uri='http://localhost:3000/result',
    scope = "playlist-modify-public playlist-modify-private",
    cache_handler=cache_handler,
    show_dialog = True
)
#functionality

def process_genre(genre, token):
    try:
        #generate the songs
        search_results = Requests.search_tracks_by_genre(genre, 20, token)
        print("Track URIs:")
        for uri in search_results:
            print(uri)
        #generate the playlist
        return Requests.create_playlist(search_results, genre, token)
    except Exception as e:
        print(e)

def process_query(query, token):
    try:
        #generate the songs
        search_results = Requests.search_tracks_by_query(query, 12, token)
        print("Track URIs:")
        for uri in search_results:
            print(uri)
        #generate the playlist
        return Requests.create_playlist(search_results, query, token)
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
        token = sp_oauth.get_access_token()['access_token']
        result = process_genre(text, token)
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
        token = sp_oauth.get_access_token()['access_token']
        result = process_query(text, token)
        return jsonify({'result': result})
    except Exception as e:
        print(e)

@app.route('/api/login')
def login():
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)


@app.route('/api/loggedin')
def Logged_in():
    return "Logged in already go back to the web app"

#test route
@app.route('/api/token')
def token():
    return sp_oauth.get_access_token()["access_token"]

if __name__ == '__main__':
    app.run(debug=True)
