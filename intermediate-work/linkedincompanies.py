from selenium import webdriver
import csv
import sys
import string

from url_parser import parser_requester
from locations import location_parser
from relevancemodel import topic_model_train,predict

def company_list(n, uname, pas):
    driver = webdriver.Chrome('C:\chromedriver')
    driver.get('https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fsearch%2Fresults%2Fcompanies%2F%3Forigin%3DSWITCH_SEARCH_VERTICAL&fromSignIn=true&trk=cold_join_sign_in')

    username = driver.find_element_by_name("session_key")
    username.send_keys(uname)
    password = driver.find_element_by_name("session_password")
    password.send_keys(pas)
    submit = driver.find_element_by_class_name("btn__primary--large")
    submit.click()

    driver.get('https://www.linkedin.com/search/results/companies/?origin=SWITCH_SEARCH_VERTICAL')
    model = topic_model_train(5,5)
    username = driver.find_element_by_class_name("reusable-search__entity-results-list")
    options = username.find_elements_by_tag_name("li")
    csvfile = open('samplecomps.csv', 'w', newline='')
    pg = 1
    while pg < n:
        for option in options:
                 if len(option.text.split('\n')) > 2:
                    ar = option.text.split('\n')
                    y = driver.find_element_by_partial_link_text(ar[0])
                    x = y.get_attribute("href")
                    regex = '\u2022'
                    spamwriter = csv.writer(csvfile, quotechar='|', quoting=csv.QUOTE_MINIMAL)
                    new_arr = []
                    x = predict(ar[1].replace(regex,':').split(':')[0],model)
                    new_arr.append(ar[0])
                    print(ar[0].strip())
                    students_link = parser_requester(ar[0].strip())
                    new_arr.append(students_link)
                    print(x)
                    new_arr.append(x)
                    default_loc = ar[1].replace(regex,':').split(':')[1]
                    new_arr.append(ar[1].replace(regex,','))
                    spamwriter.writerow(new_arr)
        pg = pg + 1
        driver.get(
            'https://www.linkedin.com/search/results/companies/?origin=SWITCH_SEARCH_VERTICAL&page={}'.format(pg))
        options = driver.find_element_by_class_name("reusable-search__entity-results-list").find_elements_by_tag_name(
            "li")

