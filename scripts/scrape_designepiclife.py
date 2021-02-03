from requests import get
from bs4 import BeautifulSoup as BS
import json

webpage = get("https://designepiclife.com/things-to-be-passionate-about/")
soup = BS(webpage.content, 'html.parser')

categories = [title.text[3:] for title in soup.findAll("h3")[:-2]]
ordered_lists = [ol for ol in soup.findAll("ol")]

passions = []
for ord_lst in ordered_lists:
    passions.append([item.text for item in ord_lst.findAll("li")])
print(passions)

category_passions = {}
for cat, pas in zip(categories, passions):
    category_passions[cat] = pas

with open("../data/passions.json", 'w+') as output_file:
    output_file.write(json.dumps(category_passions, indent=4))