from bingo_game_repository import write


def create_bingo_game(words, players):
    """
    Create Bingo Game

    :param boxes: a string containing a list of the 25 bingo boxes delimited with newlines
    :param players: a string containing a list of players that take part of the bingo game delimited with a newlines
    :return: a dictionary containing the bingo game for each player it looks like this:
             {
                 "id": abc-123
                 "boards": {
                     "Martin": {
                       "0": {
                         "word": "🐘",
                         "marked": False
                       },
                       "1": {
                         "word": "bear",
                         "marked": False
                       },
                       ...
                     },
                     "Hanna": {
                       ...
                     },
                     ...
                 }
             }
    """

    # TODO: generate bingo_games
    bingo_boards = {
        "Martin": {
            "0": {"word": "🐯", "marked": False},
            "1": {"word": "🐻", "marked": False},
            "2": {"word": "🙊", "marked": False},
            "3": {"word": "💨", "marked": False},
            "4": {"word": "🐵", "marked": False},
            "5": {"word": "🐒", "marked": False},
            "6": {"word": "🦍", "marked": False},
            "7": {"word": "🦧", "marked": False},
            "8": {"word": "🐶", "marked": False},
            "9": {"word": "🐕", "marked": False},
            "10": {"word": "🦮", "marked": False},
            "11": {"word": "🐕", "marked": False},
            "12": {"word": "🐩", "marked": False},
            "13": {"word": "🐺", "marked": False},
            "14": {"word": "🦊", "marked": False},
            "15": {"word": "🦝", "marked": False},
            "16": {"word": "🐱", "marked": False},
            "17": {"word": "🐈", "marked": False},
            "18": {"word": "🐈", "marked": False},
            "19": {"word": "🦁", "marked": False},
            "20": {"word": "🐯", "marked": False},
            "21": {"word": "🐅", "marked": False},
            "22": {"word": "🐆", "marked": False},
            "23": {"word": "🐴", "marked": False},
            "24": {"word": "🐎", "marked": False},
        },
        "Hanna": {
            "0": {"word": "🐯", "marked": False},
            "1": {"word": "🐻", "marked": False},
            "2": {"word": "🙊", "marked": False},
            "3": {"word": "💨", "marked": False},
            "4": {"word": "🐵", "marked": False},
            "5": {"word": "🐒", "marked": False},
            "6": {"word": "🦍", "marked": False},
            "7": {"word": "🦧", "marked": False},
            "8": {"word": "🐶", "marked": False},
            "9": {"word": "🐕", "marked": False},
            "10": {"word": "🦮", "marked": False},
            "11": {"word": "🐕", "marked": False},
            "12": {"word": "🐩", "marked": False},
            "13": {"word": "🐺", "marked": False},
            "14": {"word": "🦊", "marked": False},
            "15": {"word": "🦝", "marked": False},
            "16": {"word": "🐱", "marked": False},
            "17": {"word": "🐈", "marked": False},
            "18": {"word": "🐈", "marked": False},
            "19": {"word": "🦁", "marked": False},
            "20": {"word": "🐯", "marked": False},
            "21": {"word": "🐅", "marked": False},
            "22": {"word": "🐆", "marked": False},
            "23": {"word": "🐴", "marked": False},
            "24": {"word": "🐎", "marked": False},
        }
    }

    game_id = write(bingo_boards)

    return {
        "id": game_id,
        "boards": bingo_boards
    }
