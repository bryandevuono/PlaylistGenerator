import requests
import base64
import json
import spotipy
from spotipy.oauth2 import SpotifyOAuth

def get_spotify_access_token(client_id, client_secret):
    auth_url = "https://accounts.spotify.com/api/token"
    auth_header = base64.b64encode(f"{client_id}:{client_secret}".encode()).decode()
    headers = {
        'Authorization': f'Basic {auth_header}'
    }
    data = {
        'grant_type': 'client_credentials'
    }
    auth_response = requests.post(auth_url, headers=headers, data=data)
    return auth_response.json().get('access_token')
    
def search_spotify_tracks(query, access_token, limit=10):
    url = "https://api.spotify.com/v1/search"
    headers = {
        'Authorization': f'Bearer {access_token}'
    }
    params = {
        'q': query,
        'type': 'track',
        'limit': limit
    }
    response = requests.get(url, headers=headers, params=params)
    return response.json()

def search_tracks_by_genre(genre, limit, SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET):
    SPOTIPY_REDIRECT_URI = 'http://localhost:8888/callback'

    scope = "playlist-modify-public playlist-modify-private"

    sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=SPOTIPY_CLIENT_ID,
                                                client_secret=SPOTIPY_CLIENT_SECRET,
                                                redirect_uri=SPOTIPY_REDIRECT_URI,
                                                scope=scope))
    results = sp.search(q=f'genre:"{genre}"', type='track', limit=limit)
    return [track['uri'] for track in results['tracks']['items']]

def search_tracks_by_query(query, limit, SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET):
    SPOTIPY_REDIRECT_URI = 'http://localhost:8888/callback'

    scope = "playlist-modify-public playlist-modify-private"

    sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=SPOTIPY_CLIENT_ID,
                                                client_secret=SPOTIPY_CLIENT_SECRET,
                                                redirect_uri=SPOTIPY_REDIRECT_URI,
                                                scope=scope))
    results = sp.search(q=query, type='track', limit=limit)
    return [track['uri'] for track in results['tracks']['items']]


def create_playlist(song_uris, SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, name):
    SPOTIPY_REDIRECT_URI = 'http://localhost:8888/callback'

    scope = "playlist-modify-public playlist-modify-private"

    sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=SPOTIPY_CLIENT_ID,
                                                client_secret=SPOTIPY_CLIENT_SECRET,
                                                redirect_uri=SPOTIPY_REDIRECT_URI,
                                                scope=scope))
    user_id = sp.current_user()['id']
    playlist = sp.user_playlist_create(user_id, name, public=True)
    sp.playlist_add_items(playlist['id'], song_uris)
    print(f"Playlist '{playlist['name']}' created with {len(song_uris)} songs.")
    print(f"Shareable link: {playlist['external_urls']['spotify']}")
    return playlist['external_urls']['spotify']