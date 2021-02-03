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
# print(passions)

category_passions = {}
for cat, pas in zip(categories, passions):
    pas_dict_list = []
    for p in pas:
        pas_dict = {}
        pas_dict["activity"] = p
        ggl_imgs = get(f"https://www.google.com/search?hl=en&authuser=0&tbm=isch&source=hp&biw=1368&bih=773&ei=rOsaYMSqLuThxgGhhZWIAg&q={p}&oq={p}&gs_lcp=CgNpbWcQAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQM6AggAOggIABCxAxCDAVDGPFjJS2CzT2gBcAB4AIABR4gByQOSAQE3mAEAoAEBqgELZ3dzLXdpei1pbWewAQA&sclient=img&ved=0ahUKEwjEsPO0rM7uAhXksDEKHaFCBSEQ4dUDCAc&uact=5")
        ggl_soup = BS(ggl_imgs.content, 'html.parser')
        pas_dict["image"] = ggl_soup.findAll("img")[1].attrs["src"]
        pas_dict_list.append(pas_dict)
    category_passions[cat] = pas_dict_list

with open("../data/passions.json", 'w+') as output_file:
    output_file.write(json.dumps(category_passions, indent=4))