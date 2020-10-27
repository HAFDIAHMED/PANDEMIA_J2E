from bs4 import BeautifulSoup
import numpy as np
import pandas as pd
import urllib.request
#
regions = []
total_cases = []
add_cases = []
#
url = 'https://covid.hespress.com/'
html = urllib.request.urlopen(url)
soup = BeautifulSoup(html, 'html.parser')
table = soup.find("table")
tbody = table.find("tbody")
trs = tbody.find_all("tr")
for tr in trs:
    th = tr.find("th")
    regions.append(th.text)
    tds = tr.find_all("td")
    i=0
    for td in tds :
        if i == 0 :
            total_cases.append(int(td.text))
            i +=1
        elif i == 1 :
            if len(td.text) != 0 :
                add_cases.append(int(td.text[1:],base=10))
            else :
                add_cases.append(0)

df = pd.DataFrame(total_cases,index=regions,columns=['Total cases'])
df['add_cases'] = add_cases
df.to_json('cases_hespress.json')
dict_hespress={}
for i in range(len(regions)) :
    dict_hespress[regions[i]] = {"total cases":total_cases[i],"add cases":add_cases[i]}
