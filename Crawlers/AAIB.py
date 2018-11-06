from urllib.request import urlopen
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import math


#find the total number of reports currently available from the AAIB website
html = urlopen("https://www.gov.uk/aaib-reports?keywords=&report_type%5B%5D=formal-report&date_of_occurrence%5Bfrom%5D=&date_of_occurrence%5Bto%5D=")
soupX = BeautifulSoup(html, 'html.parser')
num_box = soupX.find_all('span')
num_reports = int(num_box[1].text) 
num_pages = math.ceil(num_reports / 50)  # this assumes that the website displays 50 reports per page

#####

base_url = 'https://www.gov.uk'
links2 = []
html_part1 = 'https://www.gov.uk/aaib-reports?date_of_occurrence%5Bfrom%5D=&date_of_occurrence%5Bto%5D=&page='
html_part2 = '&report_type%5B%5D=formal-report'
for g in range(0,num_pages):
    print(g)
    links = []
    full_url = html_part1 + str(g+1) + html_part2
    html = urlopen(full_url)
    soup = BeautifulSoup(html, 'html.parser')
    name_box = soup.find_all('h3')    
    for i in range(0,len(name_box)-2):
            links.append(urljoin(base_url,name_box[i].a.get('href')))
            
    check_str = '.pdf'
    for j in range(0,len(links)):
        html2 = urlopen(links[j])
        soup2 = BeautifulSoup(html2, 'html.parser')
        try:
            name_box2 = soup2.find_all('span')
            links2.append(name_box2[1].a.get('href'))
        except AttributeError:
            name_box2 = soup2.find_all('p')
            for k in range(0,len(name_box2)):
                try:
                    pdf_url = name_box2[k].a.get('href')
                    if check_str in pdf_url:
                        links2.append(pdf_url)
                        break
                except AttributeError:
                    pass
                    
                    
                
                
            
    