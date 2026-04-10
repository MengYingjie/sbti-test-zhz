import os
import requests
import re
import urllib.parse
from time import sleep

characters = {
    "WENSHICHU": "甄嬛传 温实初 剧照",
    "XIAOYUNZI": "甄嬛传 小允子 剧照",
    "CAOQINMO": "甄嬛传 曹琴默 曹贵人 剧照",
    "LIUZHU": "甄嬛传 流朱 剧照",
    "XINGUIREN": "甄嬛传 欣贵人 剧照",
    "CHUN": "甄嬛传 淳常在 淳儿 剧照",
    "SONGZHI": "甄嬛传 颂芝 剧照",
    "HUANBI": "甄嬛传 浣碧 剧照",
    "CHUNYUAN": "甄嬛传 纯元皇后 剧照",
    "SANAGE": "甄嬛传 三阿哥 弘时 剧照",
    "LIPIN": "甄嬛传 丽嫔 剧照",
    "NIANGENGYAO": "甄嬛传 年羹尧 剧照"
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
