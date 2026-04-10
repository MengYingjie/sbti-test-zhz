import os
import requests
import re
import urllib.parse
from time import sleep

characters = {
    "ZHENHUAN": "甄嬛传 甄嬛 剧照 高清",
    "HUAFEI": "甄嬛传 华妃 剧照 高清",
    "EMPRESS": "甄嬛传 皇后 宜修 剧照",
    "MEIZHUANG": "甄嬛传 沈眉庄 剧照",
    "LINGRONG": "甄嬛传 安陵容 剧照",
    "JINGFEI": "甄嬛传 敬妃 剧照",
    "DUANFEI": "甄嬛传 端妃 剧照",
    "QIFEI": "甄嬛传 齐妃 剧照",
    "QIGUIREN": "甄嬛传 祺贵人 剧照",
    "YELANYI": "甄嬛传 叶澜依 剧照",
    "CAOGUIREN": "甄嬛传 曹贵人 剧照",
    "EMPEROR": "甄嬛传 皇上 雍正 剧照",
    "GUOJUNWANG": "甄嬛传 果郡王 剧照",
    "JINXI": "甄嬛传 崔槿汐 剧照",
    "SUPEISHENG": "甄嬛传 苏培盛 剧照",
    "XIADONGCHUN": "甄嬛传 夏冬春 剧照"
}

output_dir = "/workspace/image"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

for char_id, query in characters.items():
    print(f"Searching for {query}...")
    url = f"https://www.bing.com/images/search?q={urllib.parse.quote(query)}&form=HDRSC2"
    try:
        response = requests.get(url, headers=headers, timeout=10)
        # Find the first image url using regex from Bing's murl
        matches = re.findall(r'murl&quot;:&quot;(.*?)&quot;', response.text)
        
        success = False
        for img_url in matches:
            if img_url.startswith("http"):
                print(f"Found image for {char_id}: {img_url}")
                try:
                    img_res = requests.get(img_url, headers=headers, timeout=10)
                    if img_res.status_code == 200:
                        file_path = os.path.join(output_dir, f"{char_id}.jpg")
                        with open(file_path, "wb") as f:
                            f.write(img_res.content)
                        print(f"Successfully downloaded {char_id}.jpg")
                        success = True
                        break
                except Exception as e:
                    print(f"Failed to download {img_url}: {e}")
                    continue
        if not success:
            print(f"Failed to find or download image for {char_id}")
    except Exception as e:
        print(f"Error searching for {char_id}: {e}")
    sleep(1)
