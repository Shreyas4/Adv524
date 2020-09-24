import pandas as pd
from url_parser import parser_requester
import csv

companies = list(pd.read_csv('stock_data/us_companies.csv').ix[:, 1])
companies = [x.strip() for x in list]
csvfile = open('result_url_file.csv', 'w', newline='')
for c in companies:
    spamwriter = csv.writer(csvfile, quotechar='|', quoting=csv.QUOTE_MINIMAL)
    nr = [c, parser_requester(c)]
    print(nr)
    spamwriter.writerow(nr)
