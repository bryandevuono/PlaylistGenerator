import requests
import base64

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