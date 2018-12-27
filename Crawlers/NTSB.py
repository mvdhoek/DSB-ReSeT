############################
#### Crawl NTSB reports ####
############################

#import urllib.request -> use for python3
from urllib2 import urlopen
from bs4 import BeautifulSoup
import re
import pandas as pd

# define main function
def crawl_reportdata():

    #######################################################
    # NTSB Website with aviation reports
    html = urlopen('https://www.ntsb.gov/investigations/AccidentReports/Pages/aviation.aspx')
    soup = BeautifulSoup(html, 'html.parser')

    #######################################################
    #extract pdf links from NTSB
    pdfclass= []
    for a in soup.find_all('td',attrs={'class':'reportname'}):
        pdfclass.append(a)

    pdf_links=[]
    for i in range(0,len(pdfclass)):
        try:
            pdf_links.append('https://www.ntsb.gov' +str(pdfclass[i].a.attrs['href']))
        except AttributeError or KeyError:
            pdf_links.append('no link')

    #########################################################
    #find report title

    tdclass= []
    for a in soup.find_all('td',attrs={'class':'reporttitle'}):
        tdclass.append(a)

    tdclass2 = []
    for i in range(0,len(tdclass)):
        try:
            tdclass2.append(tdclass[i].text)
        except KeyError:
            pass
    report_title = []
    for i in range(0,len(tdclass2)):
        if i%2 == 1:
            report_title.append(tdclass2[i])


    ##########################################################
    #########################################################
    #find accident date

    tdclass= []
    for a in soup.find_all('td',attrs={'class':'reportdate'}):
        tdclass.append(a)

    tdclass2 = []
    for i in range(0,len(tdclass)):
        try:
            tdclass2.append(tdclass[i].text)
        except KeyError:
            pass
    accident_date = []
    for i in range(0,len(tdclass2)):
        if i%6 == 0:
            accident_date.append(tdclass2[i])


    ##########################################################
    #aircraft type not available for NTSB
    aircraft_type = []
    organization = []
    for i in range(0,len(pdf_links)):
        aircraft_type.append([])
        organization.append('NTSB')


    ##########################################################
    final_df =  pd.DataFrame(
            {'report_title':report_title,
             'accident_date':pd.to_datetime(accident_date),
             'link': pdf_links,
             'aircraft_type': aircraft_type,
             'organization': organization
             })

    return final_df

if __name__ == '__main__':
    webdata = crawl_reportdata()
