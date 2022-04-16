import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

def create_bingo(request):
    """
    Args:
        request (flask.Request): The request object
    Returns:
        The response text, or any set of values that can be turned into a
        Response object using `make_response`
    """
    print(request)

    cred = credentials.ApplicationDefault()
    firebase_admin.initialize_app(cred, {
        'projectId': 'djurbingo',
    })

    db = firestore.client()

    doc_ref = db.collection(u'users').document(u'alovelace')
    doc_ref.set({
        u'first': u'Ada',
        u'last': u'Lovelace',
        u'born': 1815
    })

    alovelace = db.collection(u'users').document(u'alovelace')

    return alovelace.get().to_dict()
