#### Import reports NTSB #### 
import urllib.request
from urllib.request import urlopen
from bs4 import BeautifulSoup
import re 



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
        pdf_links.append(pdfclass[i].a.attrs['href'])
    except AttributeError or KeyError:
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
