#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Fri Mar 14 21:12:16 2017

@author: marlon
"""

# import dependencies
import pandas as pd
import json
import numpy as np
import datetime
import requests
from elasticsearch import Elasticsearch
import os
import base64
import hashlib

# define elasticsearch host
es = Elasticsearch([{'host': '192.168.0.196', 'port': 9200}])
es.info()

# Get files and convert to base64 for the Elastic attachment ingest pipeline
FilePath = '/home/marlon/Documents/'
#FileNames = os.listdir(FilePath)
FileTypes = (".pdf",".txt")
FileLocs = [os.path.join(root, name)
             for root, dirs, files in os.walk(FilePath)
             for name in files
             if name.endswith(FileTypes)]
FileLocs

# loop over Files
skipped = []
for filename in FileLocs:

    try:

        # get filename and convert to base64
        filecont = open(filename, "rb").read()
        fileb64 = base64.b64encode(filecont).decode('ascii')

        # calculate the MD5 to use as ID in es
        filehash = base64.urlsafe_b64encode(hashlib.md5(filecont).digest())

        # Compose json body for es PUT
        data = {"filename": filename, "data": str(fileb64)}

        # write data to elasticsearch
        res = es.index(index='literatuur', doc_type='documenten',
                        pipeline='document', body=data, id=filehash)

        # check if write succesful
        print('Processed {}'.format(filename))
        print(res['result'])
        print('\n')
        #print(res['_id'])
        #print(es.get(index='fipronil', doc_type='documenten',
        #                id=res['_id'], _source_exclude=['data']))

    except:
        skipped.append(filename)

skipped
