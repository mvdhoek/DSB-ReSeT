from urllib2 import urlopen
from urlparse import urljoin
#from urllib.parse import urljoin # python 3
#from urllib.request import urlopen # python 3
from bs4 import BeautifulSoup
import math
import pandas as pd

#find the total number of reports currently available from the AAIB website
html = urlopen("https://www.gov.uk/aaib-reports?keywords=&report_type%5B%5D=formal-report&date_of_occurrence%5Bfrom%5D=&date_of_occurrence%5Bto%5D=")
soupX = BeautifulSoup(html, 'html.parser')
num_box = soupX.find_all('span')
num_reports = int(num_box[1].text)
num_pages = int(math.ceil(num_reports / 50))  # this assumes that the website displays 50 reports per page

#####

# define function to crawl data
def crawl_reportdata():

    base_url = 'https://www.gov.uk'
    links2 = []
    html_part1 = 'https://www.gov.uk/aaib-reports?date_of_occurrence%5Bfrom%5D=&date_of_occurrence%5Bto%5D=&page='
    html_part2 = '&report_type%5B%5D=formal-report'
    accident_date = []
    aircraft_type = []
    report_title = []
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

        ##############aircraft type#############
            data_ = []

            for a in soup2.find_all('dd',attrs={'class':'app-c-important-metadata__definition'}):
                data_.append(str(a))
            accident_date.append(data_[0].split('>')[1].split('<')[0])
            aircraft_type.append(data_[3].split('>')[1].split('<')[0])
            if len(soup2.find_all('p',attrs={'class':'gem-c-lead-paragraph '})) < 1:
                print("Missing title element on page {}, entry {}".format(g, j)) # # TEMP: show missing title entries
                report_title.append("MISSING TITLE") # # TEMP: append "MISSING TITLE" to report title field
            for ab in soup2.find_all('p',attrs={'class':'gem-c-lead-paragraph '}):
                strp_title = str(ab).split('>')[1].split('<')[0].strip()
                report_title.append(strp_title)

    organization = []
    for ti in range(0,len(links2)):
        organization.append('AAIB UK')

    final_df =  pd.DataFrame(
            {'report_title':report_title,
             'accident_date':pd.to_datetime(accident_date),
             'link': links2,
             'aircraft_type': aircraft_type,
             'organization': organization
             })

    return final_df

if __name__ == '__main__':
    webdata = crawl_reportdata()
