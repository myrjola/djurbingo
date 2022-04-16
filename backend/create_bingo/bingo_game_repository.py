import uuid
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

BINGO_GAMES_KEY = u'bingo-games'

cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
    'projectId': 'djurbingo',
})


def write(bingo_boards):
    db = firestore.client()
    game_id = uuid.uuid4()
    doc_ref = db.collection(BINGO_GAMES_KEY).document(game_id)
    doc_ref.set(bingo_boards)
    return game_id


def read(game_id):
    db = firestore.client()
    doc_ref = db.collection(BINGO_GAMES_KEY).document(game_id)
    return doc_ref.get().to_dict()
