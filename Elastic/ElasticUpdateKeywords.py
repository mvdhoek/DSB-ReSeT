# A python script to update the elasticsearch index entries with
# a vector consisting of the first n terms of the elastic termvec.
# These keywords will be used for the wordcloud.

import elasticsearch as es
from elasticsearch import helpers
import logging
import base64
from os import listdir
from os.path import isfile, join
import hashlib
import pandas as pd

# DEFINITIONS ----------------------------------------------------------
es_ip = '172.16.1.96'
es_port = 9200
es_index = 'safety_reports2'
es_doctype = 'report'
es_chunk_size = 5
# ----------------------------------------------------------------------


# function definitions
def connect_elasticsearch():
    _es = None
    _es = es.Elasticsearch([{'host': es_ip, 'port': es_port}])
    if _es.ping():
        print('Yay connected!')
    else:
        print('No connection...')
    return _es

# main program
if __name__ == '__main__':

    # enable error logging and connect to elastic
    logging.basicConfig(level=logging.ERROR)
    es_conn = connect_elasticsearch()

    # request a list of all (max = "size") entries in the index
    print('Requesting {} entries'.format(es_index))
    res = es_conn.search(index=es_index, body={"query": {"match_all": {}}, "size": 500})
    s_ids = [d['_id'] for d in res['hits']['hits']]
    print('{} entries found'.format(len(s_ids)))
    #s_ids[0]

    # create empty pandas dataframe to store term vectors
    data_termvec = pd.DataFrame(columns=['document_id', 'keywords'])

    # loop over files
    for id in s_ids:

        body = {
            "_id": id,
            "fields" : ["content"],
            "offsets" : False,
            "positions" : False,
            "term_statistics" : True,
            "field_statistics" : True,
            "filter" : {
                "max_num_terms" : 30,
                "min_term_freq" : 5,
                "min_doc_freq" : 1,
                "min_word_length": 3,
                    }
                }

        print('Obtaining term vectors for document {}'.format(id))
        terms = es_conn.termvectors(index=es_index, doc_type=es_doctype, body=body, fields='content', offsets=False, positions=False)

        if 'content' in terms['term_vectors']:
            doc_terms = [term for term in terms['term_vectors']['content']['terms'].keys() if not term.isdigit()]
            # mtermvectors for list of ids
        else:
            doc_terms = ''

        print(doc_terms)

        # append to pandas dataframe
        data_termvec = data_termvec.append(pd.Series({'document_id': id, 'keywords': doc_terms}), ignore_index=True)
        
    # update the index entries with the extracted keywords
    print('Updating Elasticsearch index with tags')
    for index, row in data_termvec.iterrows():
        # format body
        doc_body = {
        "_index": es_index,
        "_type": es_doctype,
        "_id": row.document_id,
        "_source": {
            "content_tags": row.keywords,
            }
        }

        es_conn.update(index=doc_body['_index'], doc_type=doc_body['_type'], body={"doc": doc_body['_source']}, id=doc_body['_id'])
terms
