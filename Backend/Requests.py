import requests
import base64
import json
import spotipy
from spotipy.oauth2 import SpotifyOAuth

def search_tracks_by_genre(genre, limit, token):
    sp = spotipy.Spotify(auth=token)
    results = sp.search(q=f'genre:"{genre}"', type='track', limit=limit)
    return [track['uri'] for track in results['tracks']['items']]

def search_tracks_by_query(query, limit, token):
    sp = spotipy.Spotify(auth=token)
    results = sp.search(q=query, type='track', limit=limit)
    return [track['uri'] for track in results['tracks']['items']]


def create_playlist(song_uris, name, token):
    sp = spotipy.Spotify(auth=token)
    user_id = sp.current_user()['id']
    playlist = sp.user_playlist_create(user_id, name, public=True)
    sp.playlist_add_items(playlist['id'], song_uris)
    print(f"Playlist '{playlist['name']}' created with {len(song_uris)} songs.")
    print(f"Shareable link: {playlist['external_urls']['spotify']}")
    return playlist['external_urls']['spotify']