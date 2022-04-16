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
                       0: {
                         word: elephant,
                         marked: false
                       },
                       1: {
                         word: bear,
                         marked: false
                       },
                       ...
                     }
                     "Hanna": {
                       ...
                     },
                     ...
                 }
             }
    """

    # TODO: generate bingo_games
    bingo_boards = {}

    game_id = write(bingo_boards)
    return {
        "id": game_id,
        "boards": bingo_boards
    }
