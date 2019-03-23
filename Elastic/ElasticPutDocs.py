# A python script to upload safety reports to Elasticsearch

import elasticsearch as es
from elasticsearch import helpers
import logging
import base64
from os import listdir
from os.path import isfile, join
import hashlib
import pandas as pd

# DEFINITIONS ----------------------------------------------------------
path = '../ReportData/'
es_ip = '172.16.1.96'
es_port = 9200
es_index = 'safety_reports'
es_doctype = 'report'
es_chunk_size = 5
es_ingest_pipeline = 'safety_reports'
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


def convert_doc_b64(docpath):
    with open(docpath) as f:
        b64repres = base64.b64encode(f.read())
    return b64repres


# main program
if __name__ == '__main__':

    # enable error logging and connect to elastic
    logging.basicConfig(level=logging.ERROR)
    es_conn = connect_elasticsearch()

    # load dataframe with reports
    webdata = pd.read_pickle("".join([path, 'reportdata.pkl']))
    print('{} report entries loaded'.format(len(webdata)))

    # loop over files, convert to b64 and put to elasticsearch
    es_batch = []
    for index, row in webdata.iterrows():

        # ensure only entries with link and downloaded file are uploaded
        if not pd.isnull(row.filepath) and row.link is not 'no link':

            filehash = hashlib.md5(row.filepath).hexdigest()
            doc_b64 = convert_doc_b64(row.filepath)

            # format body
            doc_body = {
            "_index": es_index,
            "_type": es_doctype,
            "_id": filehash,
            "pipeline": es_ingest_pipeline,
            "_source": {
                "data": doc_b64,
                "filename": row.filepath,
                "accident_date": row.accident_date,
                "link": row.link,
                "organization": row.organization,
                "web_title": row.report_title,
                "aircraft_type": row.aircraft_type
                }
            }

            es_batch.append(doc_body)

        elif row.link is 'no link':

            # Define action here

            print('Skipping entry')

    # put batch with documents to elastic
    # be careful not to make the chunk size
    # too big for large documents
    helpers.bulk(es_conn, es_batch, chunk_size=es_chunk_size)

    # for debugging, put first document
    #es_conn.index(index=es_batch[0]['_index'], doc_type=es_batch[0]['_type'], body=es_batch[0]['_source'], id=es_batch[0]['_id'], pipeline=es_batch[0]['pipeline'])

    # for debugging, get all document _ids
    #res = es_conn.search(index=es_index, body={"query": {"match_all": {}}, "size": 500})
    #s_ids = [d['_id'] for d in res['hits']['hits']]
    #s_ids[0]
    #term_vec = es_conn.search(index=es_index, body={})
    #es_conn.termvectors(index=es_index, doc_type=es_doctype, id=s_ids[0], fields='content', offsets=False, positions=False)
    # mtermvectors for list of ids
