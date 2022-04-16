from .bingo_game_repository import write


def create_bingo_game(words, players):
    """
    Create Bingo Game

    :param words: a string containing the words that are part of the bingo game delimited with newline
    :param players: a string containing the list of players that take part of the bingo game delimited with a newline
    :return: a dictionary containing the bingo game for each player it looks like this:
             {
                 "id": abc-123
                 "boards": {
                     "martin": {
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
                     "hanna": {
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
