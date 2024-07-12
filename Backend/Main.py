import Requests

def Main():
    client_id = "efed657aff684560804086ec817c7fa9"
    client_secret = "d9ab7e3edd4e460cb27cac970fb79a39"
    access_token = Requests.get_spotify_access_token(client_id, client_secret)
    search_results = Requests.search_spotify_tracks("pop", access_token, limit=10)
    track_uris = [track['uri'] for track in search_results['tracks']['items']]
    # here make the array a parameter for your playlist create function
    print("Track URIs:")
    for uri in track_uris:
        print(uri)

if __name__ == '__main__':
    Main()