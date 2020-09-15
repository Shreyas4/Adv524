import requests
from bs4 import BeautifulSoup

tag_student_progs = ' university graduate / student careers website'
tag_careers = ' software engineering / engineer careers website'
url = 'https://www.google.com/search?q='


def parser_requester(company_name):
    url_string = getUrl(company_name)
    url_string = url_string[7: url_string.index('&')]
    try:
        url_string = url_string[:url_string.index('%')]
    except:
        url_string = url_string
    return url_string


def getUrl(company_name):
    try:
        return BeautifulSoup(requests.get(url + company_name + tag_student_progs).content, "html.parser").find('div', {'class': 'kCrYT'}).find_all('a')[0]['href']
    except:
        return BeautifulSoup(requests.get(url + company_name + tag_careers).content, "html.parser").find('div', {'class': 'kCrYT'}).find_all('a')[0]['href']
