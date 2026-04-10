import urllib.request
import urllib.parse
import json
import re
import time

characters = {
    "CTRL": "甄嬛传 甄嬛 高清剧照",
    "ATM-er": "甄嬛传 温实初 温太医 剧照",
    "Dior-s": "甄嬛传 浣碧 剧照",
    "BOSS": "甄嬛传 皇上 陈建斌 剧照",
    "THAN-K": "甄嬛传 崔槿汐 剧照",
    "OH-NO": "甄嬛传 苏培盛 剧照",
    "GOGO": "甄嬛传 曹琴默 曹贵人 剧照",
    "SEXY": "甄嬛传 华妃 剧照",
    "LOVE-R": "甄嬛传 果郡王 剧照",
    "MUM": "甄嬛传 敬妃 剧照",
    "FAKE": "甄嬛传 皇后 宜修 剧照",
    "OJBK": "甄嬛传 齐妃 剧照",
    "MALO": "甄嬛传 颂芝 剧照",
    "JOKE-R": "甄嬛传 夏冬春 剧照",
    "WOC!": "甄嬛传 富察贵人 剧照",
    "THIN-K": "甄嬛传 端妃 剧照",
    "SHIT": "甄嬛传 欣贵人 剧照",
    "ZZZZ": "甄嬛传 沈眉庄 剧照",
    "POOR": "甄嬛传 安陵容 剧照",
    "MONK": "甄嬛传 莫言师太 剧照",
    "IMSB": "甄嬛传 祺嫔 剧照",
    "SOLO": "甄嬛传 四阿哥 剧照",
    "FUCK": "甄嬛传 叶澜依 剧照",
    "DEAD": "甄嬛传 纯元皇后 蒋勤勤 剧照", 
    "IMFW": "甄嬛传 三阿哥 剧照",
    "HHHH": "甄嬛传 淳常在 剧照",
    "DRUNK": "甄嬛传 果郡王 饮毒酒 剧照"
}

results = {}
for code, name in characters.items():
    try:
        url = f"https://cn.bing.com/images/async?q={urllib.parse.quote(name)}&first=0&count=10"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        matches = re.findall(r'murl&quot;:&quot;(http[^&]+)&quot;', html)
        if matches:
            pic = matches[0]
            # Try to find a standard extension to avoid weird dynamic formats
            for m in matches:
                if m.endswith('.jpg') or m.endswith('.jpeg') or m.endswith('.png'):
                    pic = m
                    break
            results[code] = pic
            print(f"Found {code}: {pic}")
        else:
            results[code] = ""
            print(f"Not found {code}")
    except Exception as e:
        print(f"Error {code}: {e}")
        results[code] = ""
    time.sleep(0.5)

with open('/workspace/images.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)
print("Done")
