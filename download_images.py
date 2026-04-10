import os
import requests
from duckduckgo_search import DDGS
from time import sleep

characters = {
    "ZHENHUAN": "甄嬛 甄嬛传 剧照",
    "HUAFEI": "华妃 蒋欣 甄嬛传 剧照",
    "EMPRESS": "皇后 宜修 蔡少芬 甄嬛传 剧照",
    "MEIZHUANG": "沈眉庄 甄嬛传 剧照",
    "LINGRONG": "安陵容 甄嬛传 剧照",
    "JINGFEI": "敬妃 甄嬛传 剧照",
    "DUANFEI": "端妃 甄嬛传 剧照",
    "QIFEI": "齐妃 甄嬛传 剧照",
    "QIGUIREN": "祺贵人 甄嬛传 剧照",
    "YELANYI": "叶澜依 甄嬛传 剧照",
    "CAOGUIREN": "曹贵人 甄嬛传 剧照",
    "EMPEROR": "皇上 雍正 陈建斌 甄嬛传 剧照",
    "GUOJUNWANG": "果郡王 甄嬛传 剧照",
    "JINXI": "崔槿汐 甄嬛传 剧照",
    "SUPEISHENG": "苏培盛 甄嬛传 剧照",
    "XIADONGCHUN": "夏冬春 甄嬛传 剧照"
}

output_dir = "/workspace/image"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

ddgs = DDGS()

for char_id, query in characters.items():
    print(f"Searching for {query}...")
    try:
        results = list(ddgs.images(query, max_results=5))
        if results:
            for res in results:
                image_url = res['image']
                print(f"Found image for {char_id}: {image_url}")
                try:
                    response = requests.get(image_url, timeout=10, headers={'User-Agent': 'Mozilla/5.0'})
                    if response.status_code == 200:
                        file_path = os.path.join(output_dir, f"{char_id}.jpg")
                        with open(file_path, "wb") as f:
                            f.write(response.content)
                        print(f"Successfully downloaded {char_id}.jpg")
                        break
                except Exception as e:
                    print(f"Failed to download from {image_url}: {e}")
                    continue
        else:
            print(f"No results for {char_id}")
    except Exception as e:
        print(f"Search failed for {char_id}: {e}")
    sleep(1)
