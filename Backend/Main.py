import Requests

def Main():
    client_id = "efed657aff684560804086ec817c7fa9"
    client_secret = "d9ab7e3edd4e460cb27cac970fb79a39"
    access_token = Requests.get_spotify_access_token(client_id, client_secret)
    print(access_token)

if __name__ == '__main__':
    Main()