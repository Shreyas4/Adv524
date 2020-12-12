# Adv524
![]website.png

This project aims at providing a job board for students at SUNY,Stony Brook(typically for the software department) projecting top 500 companies with their attributes .
The data is integrated after scraping from wikipedia, Ytickr, google search apis.
The users can choose to filter and sort these companies based on the following attributes. 

1. Rank - ranked according to parameters Page_rank,revenue, employee count and profit. Formula is detailed in the upcoming sections.
2. Name - Name of the company
3. Industry - Classified as technology/ business domains.
4. Type(public/private)- type of the company if it is registered in the stock market
5. Founded year - The year when company was founded
6. Number of Employees - obtained from wikipedia
7. Revenue - in millions
8. Profit - in millions
9. Student career Link
10. Website - the website of the company

# Folder structure
1. master_companies list
   - contains the list of companies with their stock symbols 
   - final_df.csv is the content that is displayed in the website as a table.
2. bot-framework-srccode - contains the bot adaptor and luis AI engine to build a bot and integrate with the iframe in the front end
3. stock_data - contains stock computation (stock_symbol_parser.ipynb) script and stock (stock_prices.txt) output files. 
   symbols.csv contains the company-to-stock symbol map for querying in ytixkr
3. Scripts - contains scripts to access data from wikipedia, stock .
          Comments are included in the Jupyter notebooks to understand the functions of the scripts better
4. website-content - contains individual css,html,js files and the index.txt contains the link to codepen


# Page rank Computation

