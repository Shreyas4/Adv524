import csv
from relevancemodel import topic_model_train,predict

##this script adds the prediction values of relevance for each company
## > 0.7 seems to be a good relevance for software 
model = topic_model_train(5,5)
csvfile = open('samplespecialties.csv', 'r', newline='')
filetowrite = open('samplecompsspecial.csv','w',newline='')
csvwriter = csv.writer(filetowrite, quotechar='|', quoting=csv.QUOTE_MINIMAL)
lines = csvfile.readlines()
firstpass = False
Overviewstarted = False

for l in lines:
   print(l)
   if 'Overview' in l:
        if firstpass:
          if word == '':
           rel = 0.0
          else:
           rel = predict(word,model)
          new_arr.append(rel)
          csvwriter.writerow(new_arr)
        firstpass=True
        new_arr = []
        word=''
        new_arr.append(l)
        Overviewstarted = True
   elif Overviewstarted:
        word+=l
  
