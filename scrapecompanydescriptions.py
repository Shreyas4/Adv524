from selenium import webdriver
import csv
import sys
import time
driver = webdriver.Chrome('/Users/sadhanakesavan/Downloads/chromedriver')
driver.get('https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fsearch%2Fresults%2Fcompanies%2F%3Forigin%3DSWITCH_SEARCH_VERTICAL&fromSignIn=true&trk=cold_join_sign_in')

username = driver.find_element_by_name("session_key")
username.send_keys('sadhnakesavan@gmail.com')
password = driver.find_element_by_name("session_password")
password.send_keys('abcd1234@')
##this script gets the description element for each linkedin page. 
##There is a load time gap to make sure element is found and no time out happens
##the temporary samplecomps2.csv is the output file which is used as a map to predict values for each company 
submit = driver.find_element_by_class_name("btn__primary--large")
submit.click()
file1 = open('samplecomps.csv', 'r') 
csvfile = open('samplecomps2.csv', 'w', newline='')
Lines = file1.readlines()
ar = ["" for x in range(2)] 
for c in Lines:
    try:
      driver.get(c.split(',')[1] + '/about')
      time.sleep(2.4) 
      username = driver.find_element_by_xpath("/html/body/div[8]/div[3]/div/div[3]/div[2]/div[2]/div[1]/div[1]/section")
      spamwriter = csv.writer(csvfile, quotechar='|', quoting=csv.QUOTE_MINIMAL)
      ar[0] = c.split(',')[0] 
      ar[1] = username.text
      spamwriter.writerow(ar)  
    except:
      print('the company fnction was not executed')

    
   
