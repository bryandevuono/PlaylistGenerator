import Requests
#testing
def Main():
    # authentication
    client_id = "efed657aff684560804086ec817c7fa9"
    client_secret = "d9ab7e3edd4e460cb27cac970fb79a39"
    access_token = Requests.get_spotify_access_token(client_id, client_secret)
    print(access_token)
    #generate the songs
    search_results = Requests.search_tracks_by_query("partying", 20, client_id, client_secret)
    print("Track URIs:")
    for uri in search_results:
        print(uri)
    #generate the playlist
    Requests.create_playlist(search_results, client_id, client_secret)

    

if __name__ == '__main__':
    Main()