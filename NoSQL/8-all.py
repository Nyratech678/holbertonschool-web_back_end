#!/usr/bin/env python3
"""function that lists all documents in a collection"""


def list_all(mongo_collection):
    """list all documents in a collection

    Args:
        mongo_collection: pymongo collection object

    Returns:
        list of documents in the collection
    """
    return list(mongo_collection.find())