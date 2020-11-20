import csv

##this adds the computer related keywords in a hardcoded manner in the absence of guided lda to align the topic distributions along computer topics 
rdfile = open('dataset.csv', 'r', newline='')
lines = rdfile.readlines()
csvfile = open('datasetnew.csv', 'w', newline='')
csvwriter = csv.writer(csvfile, quotechar='|', quoting=csv.QUOTE_MINIMAL)
cnt = 0
for l in lines:
   new_arr=''
   if cnt <  500:
      new_arr = ('Computer ' + l)
   elif cnt < 1000:
      new_arr = (' Information Technology ' + l)
   elif cnt < 1500:
      new_arr = ('Internet Software ' + l)
   else:
      new_arr = ('Analytics ' + l)
   csvfile.write(new_arr)
   cnt=cnt+1
