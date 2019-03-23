###########################
#### Crawl all reports ####
###########################

# This scripts runs all the crawlers defined
# in the reportcrawlers class and downloads
# the report pdf files to the following folder:
# ../reports/<agency name>/

from reportcrawlers import crawlers
import pandas as pd
import requests
import os

def crawl_all(path):

    # initialize pandas dataframe
    webdata = pd.DataFrame()

    # get report data
    print('Parsing NTSB report data')
    webdata = webdata.append(crawlers.NTSB.crawl_reportdata(), ignore_index=True)
    #webdata = webdata.append(crawlers.AAIB.crawl_reportdata(), ignore_index=True)
    # --> add other SIA crawlers here


    # To test or debug: manually load pkl files with webdata and
    #webdata = pd.read_pickle('../ReportData/NTSB_reports_selection.pkl')
    #webdata = pd.read_pickle('../ReportData/AAIB_reports_selection.pkl')

    # now that we have a pandas dataframe with all the webdata, we can download
    # the actual reports to the given path. For every SIA, a separate folder will
    # be created. Use a try except construction to make sure a pkl file is saved,
    # even after connection errors
    try:
        for index, row in webdata.iterrows():
            if not row.link == 'no link':
                reportdata = requests.get(row.link, stream=True)
                filepath = "".join([path, row.organization, '/'])
                filename = row.link.split('/')[-1]

                if not os.path.exists(path):
                    os.mkdir(path)
                if not os.path.exists(filepath):
                    os.mkdir(filepath)

                if not os.path.exists("".join([filepath, filename])):
                    with open("".join([filepath, filename]), mode='wb') as file:
                        file.write(reportdata.content)

                # append file location to dataframe
                webdata.at[index, 'filepath'] = os.path.abspath("".join([filepath, filename]))
                print('     Downloaded {}/{} reports'.format(index+1, webdata.index.max()+1))

        # save the dataframe to the path itself for later use
        webdata.to_pickle("".join([path, 'reportdata.pkl']))

    except Exception as e:
        # print Exception and make sure reportdata is saved
        print(e)
        webdata.to_pickle("".join([path, 'reportdata.pkl']))

def crawl_selection(path):
    # placeholder function
    print(path)

if __name__ == '__main__':

    # define a location for the reports to be downloaded to
    path = '../ReportData/'
    crawl_all(path)
