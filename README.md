# Adv524

This project aims at providing a job board for students at SUNY,Stony Brook(typically for the software department) projecting top 500 companies with their attributes .
The data is integrated after scraping from wikipedia, Ytickr, google search apis.
The users can choose to filter and sort these companies based on the following attributes. 

1. Rank - ranked according to parameters Page_rank,revenue, employee count and profit. Formula is detailed in the upcoming sections.
2. Name - Name of the company from
3. Industry - Classified as technology/ business domains.
4. Type(public/private)- type of the company if it is registered in the stock market
5. Founded year - The year when company was founded
6. Number of Employees - obtained from wikipedia
7. Revenue - in millions
8. Profit - in millions
9. Student career Link
10. Website - the website of the company

#Folder structure
1. Master company list
   - contains the list of companies with their stock symbols 
   - final_companies_data.csv is the content that is displayed in the website as a table.
2. Bot_framework_docs - contains the bot adaptor and luis AI engine to build a bot and integrate with the iframe in the front end
3. Scripts - contains scripts to access data from wikipedia, stock .
4. Website_front_end - contains individual css,html,js files and the index.txt contains the link to codepen


#Page rank Computation

