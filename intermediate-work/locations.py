import requests
from bs4 import BeautifulSoup
import urllib
from bs4.element import Comment
from mechanize import Browser
import json

mech = Browser()
url = "http://www.biggestuscities.com/top-1000"
page = mech.open(url)
html = page.read()
soup = BeautifulSoup(html, features="lxml")
all_locations = set()
for row in soup.find("table").findAll('a', {'class': 'link'}):
    if '/city/' in row['href']:
        all_locations.add(row.text.strip())

locations = ' office locations '
tag_locations = ' locations '
URL = 'https://www.google.com/search?q='


def tag_visible(element):
    if element.parent.name in ['style', 'script', 'head', 'title', 'meta', '[document]']:
        return False
    if isinstance(element, Comment):
        return False
    return True


def location_parser(company_name):
    url = ""
    final_list = []
    try:
        url = BeautifulSoup(requests.get(URL + company_name + locations).content, "html.parser").find('div', {
            'class': 'kCrYT'}).find_all('a')[0]['href']
        url = url[7: url.index('&')]
        page = BeautifulSoup(requests.get(url).content, "html.parser").find_all(text=True)
        visible_texts = filter(tag_visible, page)
        visible_texts = [t.strip() for t in visible_texts]
        for t in visible_texts:
            if t in all_locations:
                final_list.append(t)

    except:
        try:
            url = BeautifulSoup(requests.get(URL + company_name + tag_locations).content, "html.parser").find('div', {
                'class': 'kCrYT'}).find_all('a')[0]['href']
            url = url[7: url.index('&')]
            page = BeautifulSoup(requests.get(url).content, "html.parser").find_all(text=True)
            visible_texts = filter(tag_visible, page)
            visible_texts = [t.strip() for t in visible_texts]
            for t in visible_texts:
                if t in all_locations:
                    final_list.append(t)


        except:
            print("Location not found!")

    return final_list
