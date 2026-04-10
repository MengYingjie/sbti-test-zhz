const fs = require('fs');

let content = fs.readFileSync('/workspace/index.html', 'utf-8');

// Update TYPE_LIBRARY.DRUNK
const oldDrunk = `"DRUNK": {
    "code": "DRUNK",
    "cn": "酒鬼",
    "intro": "烈酒烧喉，不得不醉。",
    "desc": "您为什么走路摇摇晃晃？您为什么总是情绪高涨？您为什么看东西是重影的？因为您体内流淌的不是血液，是美味的五粮液！是国窖1573！是江小白！是陕西五粮液！哦，美味的白酒，每一滴都在燃烧，都在沸腾。您是否已经习惯了将白酒灌入保温杯，当作白开水一饮而下？多么伟大的白酒！它让您在饭桌上谈笑风生，在厕所里抱着马桶忏悔人生；它让您觉得自己是夜场诗人，是宇宙中心那团不灭的火，直到第二天上午十点，您的头像裂开的核桃，嘴角挂着食物残渣，灵魂缩在角落里。您终于明白，昨晚那个高谈阔论、拍桌怒吼的人，已经成为了一个酒鬼。"
  }`;

const newDrunk = `"DRUNK": {
    "code": "CHUNYUAN",
    "cn": "宛类卿",
    "intro": "菀宛类卿，暂排苦思，亦除烦恼。",
    "desc": "您为什么总穿着那件旧衣？您为什么总是自称宛宛？您为什么逢人便说自己像先皇后？因为您已经完全沉浸在纯元皇后的光环之中！您深知，在这深宫里，只有长得像她、做得像她，才能保住皇上那一点点可怜的恩宠。您是否已经习惯了对着铜镜，练习她那温婉的笑容？多么伟大的替身文学！它让您在后宫里横着走，在皇上面前博得怜惜；它让您觉得自己就是纯元转世，是这紫禁城里唯一的白月光，直到某天您因为穿错了衣服被禁足，您的梦才轰然碎裂。您终于明白，这几年的恩宠，终究是错付了！"
  }`;

content = content.replace(oldDrunk, newDrunk);

// Also need to update the finalType reference if it says TYPE_LIBRARY.DRUNK
content = content.replace('finalType = TYPE_LIBRARY.DRUNK;', 'finalType = TYPE_LIBRARY.CHUNYUAN;');

// Update the badge and sub text for drunkTriggered
content = content.replace("badge = '匹配度 100% · 酒精异常因子已接管';", "badge = '匹配度 100% · 纯元旧物已接管';");
content = content.replace("sub = '乙醇亲和性过强，内务府已直接跳过常规审判。';", "sub = '纯元执念过深，内务府已直接跳过常规审判。';");

// Update TYPE_IMAGES
content = content.replace('"DRUNK": "./image/DRUNK.png",', '"CHUNYUAN": "./image/DRUNK.png",');

fs.writeFileSync('/workspace/index.html', content);
console.log('Drunk replaced successfully');
