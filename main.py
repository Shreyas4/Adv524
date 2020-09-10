from linkedincompanies import company_list
from url_parser import parser_requester
import sys

if __name__ == '__main__':
    list_of_args = sys.argv
    company_list(int(list_of_args[1]), list_of_args[2], list_of_args[3])