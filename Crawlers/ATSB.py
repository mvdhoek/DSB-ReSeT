#### Import reports ATSB #### 
#import urllib.request
#from urllib.request import urlopen
from urllib.request import urlopen
from bs4 import BeautifulSoup
import re 


# NTSB Website with aviation reports
html = urlopen('https://www.atsb.gov.au/publications/safety-investigation-reports/?s=1&mode=Aviation&sort=OccurrenceReleaseDate&sortAscending=descending&printAll=true&occurrenceClass=&typeOfOperation=&initialTab=&investigationStatus=Completed,Discontinued')
soup = BeautifulSoup(html, 'html.parser')



#######################################################

page_link = soup.find_all('tr')
links = []
for i in range(1,len(page_link)):
    links.append(str(page_link[i].a)[9::].split("\"")[0]) #finds the class (a) containing the link to  the report, then makes sure only the link is kept

pdf_links=[]
main_html = 'https://www.atsb.gov.au'
for u in range(0,len(links)):
    print(u)
    html2 = urlopen(main_html + links[u])
    soup2 = BeautifulSoup(html2, 'html.parser')
    try:
        pdf_links.append(str(soup2.find_all('div',attrs={'class':'container_inner2'})[0].a)[9:].split("\"")[0])
    except IndexError:
        pass


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
