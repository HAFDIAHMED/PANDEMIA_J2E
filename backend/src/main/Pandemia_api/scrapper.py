from bs4 import BeautifulSoup
import numpy as np
import pandas as pd
import urllib.request 
import re
def process_num(num):
    return float(re.sub(r'[^\w\s.]','',num))
url = 'https://en.wikipedia.org/wiki/COVID-19_pandemic_in_Morocco'
html = urllib.request.urlopen(url)
soup = BeautifulSoup(html, 'html.parser')
tables = soup.find_all("table")
regions = []
total_cases = []
per_million = []
deaths = []

for table in tables:
    if "COVID-19 pandemic in Morocco by region" in table.text :
        bodys = table.find('tbody')
        trs = bodys.find_all('tr')
        for tr in trs:
            if "Latest update:" in tr.text :
                continue
            ths = tr.find_all('th')
            for th in ths :
                a = th.find('a')
                if a != None :
                    if a.text != "v" :
                        regions.append(a.text.encode("utf8"))
            tds = tr.find_all('td')
            i = 0
            for td in tds :
                if i == 0 :
                    total_cases.append(process_num(td.text))
                    i +=1
                elif i == 1 :
                    per_million.append(process_num(td.text))
                    i +=1
                elif i == 2 :
                    deaths.append(process_num(td.text))
                    i +=1
    else :
        continue

df = pd.DataFrame(total_cases,index=regions,columns=['Total cases'])
df['deaths'] = deaths
df.to_json('cases.json')
dict={}
for i in range(len(regions)) :
    dict[regions[i]] =  {"total cases":total_cases[i],"deaths":deaths[i]}
