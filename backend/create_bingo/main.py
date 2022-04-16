from bingo_game_service import create_bingo_game


def create_bingo(request):
    """
    Args:
        request (flask.Request): The request object
    Returns:
        The response text, or any set of values that can be turned into a
        Response object using `make_response`
    """
    print(request)

    payload = request.json

    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return '', 204, headers

    if request.method != 'POST':
        return 'Forbidden method', 405

    bingo_game = create_bingo_game(payload.boxes, payload.players)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*'
    }

    return bingo_game, 200, headers

