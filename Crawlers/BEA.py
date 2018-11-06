from urllib.request import urlopen
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import math
import re

#find the total number of reports currently available from the BEA website
html = urlopen("https://www.bea.aero/index.php?id=58&no_cache=1&L=1")
soupX = BeautifulSoup(html, 'html.parser')
num_box = soupX.find_all('span')
num_reports = num_box[14].strong.text
num_reports = int(re.sub("[^0-9]","",num_reports))
num_pages = math.ceil(num_reports / 10)  # this assumes that the website displays 10 reports per page

#####

#base_url = 'https://www.gov.uk'
links = []
base_link = 'https://www.bea.aero'
#html_part1 = 'https://www.gov.uk/aaib-reports?date_of_occurrence%5Bfrom%5D=&date_of_occurrence%5Bto%5D=&page='
#html_part2 = '&report_type%5B%5D=formal-report'
for g in range(0,num_pages):
    print(g)
    if g == 0:
        html = urlopen("https://www.bea.aero/index.php?id=58&no_cache=1&L=1")

    soup = BeautifulSoup(html, 'html.parser')
    name_box = soup.find_all('article')
    for ii in range(0,len(name_box)):
        link_ = name_box[ii].div.a.findNext('a').get('href') #multiple a's per soup item, this makes sure you find the second one.
        links.append(base_link + link_)
    
    next_html = soup.find_all('nav')[3].findChildren('a')[-2].get('href') #this "clicks" the "next" button on the BEA reports page.
    html = urlopen(base_link + next_html)                                 #And then retrieves the html for the soup
    