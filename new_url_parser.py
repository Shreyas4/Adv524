import pandas as pd
from url_parser import parser_requester
import csv

df = pd.read_csv('us_companies.csv')
csvfile = open('result_url_file.csv', 'w', newline='')
for i, r in df.iterrows():
    spamwriter = csv.writer(csvfile, quotechar='|', quoting=csv.QUOTE_MINIMAL)
    company_name = r[1].strip()
    nr = [company_name, parser_requester(company_name)]
    print(nr)
    spamwriter.writerow(nr)
