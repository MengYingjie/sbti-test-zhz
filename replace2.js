const fs = require('fs');

const newQuestions = `    const questions = [
      {
        id: 'q1', dim: 'S1',
        text: '华妃娘娘赏了你一丈红，你的第一反应是？',
        options: [
          { label: '直接吓晕过去，求饶命', value: 1 },
          { label: '默默忍受，暗中记仇', value: 2 },
          { label: '冷笑一声，本宫倒要看看谁敢动我', value: 3 }
        ]
      },
      {
        id: 'q2', dim: 'S1',
        text: '面对比你位分高但不得宠的嫔妃，你的态度是？',
        options: [
          { label: '依然毕恭毕敬，不敢有丝毫僭越', value: 1 },
          { label: '表面客气，私下里保持距离', value: 2 },
          { label: '不放在眼里，在这宫里得宠才是硬道理', value: 3 }
        ]
      },
      {
        id: 'q3', dim: 'S2',
        text: '皇上夸你“宛类卿”，你意识到自己可能是替身，此时你会：',
        options: [
          { label: '心如刀绞，原来我只是一件贡品', value: 1 },
          { label: '心里有些不是滋味，但也无可奈何', value: 2 },
          { label: '替身又如何？能借此拿到恩宠就是我的本事', value: 3 }
        ]
      },
      {
        id: 'q4', dim: 'S2',
        text: '最近皇上连着半个月没来你宫里了，你觉得：',
        options: [
          { label: '一定是哪里做错了惹皇上厌弃了', value: 1 },
          { label: '可能前朝政务繁忙吧，再等等', value: 2 },
          { label: '正好乐得清闲，本宫自己一个人也过得好', value: 3 }
        ]
      },
      {
        id: 'q5', dim: 'S3',
        text: '你在这后宫里的终极目标是？',
        options: [
          { label: '平平安安活到老，不求有功但求无过', value: 1 },
          { label: '能混个妃位，有个依靠就行', value: 2 },
          { label: '一人之下万人之上，哪怕双手沾满鲜血', value: 3 }
        ]
      },
      {
        id: 'q6', dim: 'S3',
        text: '看到别人受宠晋封，你的真实想法是？',
        options: [
          { label: '跟我没关系，回宫睡觉', value: 1 },
          { label: '有些羡慕，希望哪天也能轮到我', value: 2 },
          { label: '早晚有一天，我会把她踩在脚下', value: 3 }
        ]
      },
      {
        id: 'q7', dim: 'E1',
        text: '皇上突然赐给你一斛极其珍贵的螺子黛，你会怎么想？',
        options: [
          { label: '难道是断头饭？心里慌得很', value: 1 },
          { label: '猜不透皇上的心思，也许只是顺手赏的', value: 2 },
          { label: '自然是本宫近日的温顺讨了皇上欢心', value: 3 }
        ]
      },
      {
        id: 'q8', dim: 'E1',
        text: '皇上面对前朝的烦心事对你发了脾气，你觉得：',
        options: [
          { label: '皇上一定是不爱我了，我要失宠了', value: 1 },
          { label: '不知所措，只能小心翼翼地陪着', value: 2 },
          { label: '皇上也是人，这时候正是展现解语花的大好时机', value: 3 }
        ]
      },
      {
        id: 'q9', dim: 'E2',
        text: '你对皇上的感情究竟是怎样的？',
        options: [
          { label: '不过是各取所需，搞事业罢了', value: 1 },
          { label: '三分真心，七分算计', value: 2 },
          { label: '四郎是我的夫君，我对他是一片真心！', value: 3 }
        ]
      },
      {
        id: 'q10', dim: 'E2',
        text: '如果皇上在病榻上紧紧握着你的手，你会：',
        options: [
          { label: '趁机为自己和家族谋取最大的利益', value: 1 },
          { label: '有些感动，但也清醒地知道这只是暂时的', value: 2 },
          { label: '泪流满面，恨不能以身代之', value: 3 }
        ]
      },
      {
        id: 'q11', dim: 'E3',
        text: '你希望皇上多久来一次你的寝宫？',
        options: [
          { label: '恨不得天天黏在一起，一日不见如隔三秋', value: 1 },
          { label: '顺其自然，按规矩来就好', value: 2 },
          { label: '偶尔来一次就行，多了影响本宫休息', value: 3 }
        ]
      },
      {
        id: 'q12', dim: 'E3',
        text: '皇上想要你搬去离养心殿更近的宫殿，你的想法是：',
        options: [
          { label: '太好了！这样就能时常见到皇上了', value: 1 },
          { label: '听凭皇上安排', value: 2 },
          { label: '离得太近容易伴君如伴虎，还是有点距离好', value: 3 }
        ]
      },
      {
        id: 'q13', dim: 'A1',
        text: '你觉得这后宫之中有真正的姐妹情吗？',
        options: [
          { label: '全都是逢场作戏，谁信谁死得快', value: 1 },
          { label: '也许有吧，但利益面前难说', value: 2 },
          { label: '人心都是肉长的，只要真心待人总能换来真心', value: 3 }
        ]
      },
      {
        id: 'q14', dim: 'A1',
        text: '一个素不相识的低位答应突然送你一盒亲手做的糕点，你会：',
        options: [
          { label: '绝对有毒！立刻让人倒掉或赏给下人', value: 1 },
          { label: '先让太医查验一番，确认无毒再说', value: 2 },
          { label: '真是个有心的妹妹，开心地吃掉', value: 3 }
        ]
      },
      {
        id: 'q15', dim: 'A2',
        text: '宫规规定嫔妃不得私自接触外臣，但你遇到了麻烦需要娘家哥哥帮忙，你会：',
        options: [
          { label: '管他什么规矩，先传信出去再说', value: 1 },
          { label: '找个稳妥的中间人，悄悄传递消息', value: 2 },
          { label: '绝对不能违背宫规，另想其他办法', value: 3 }
        ]
      },
      {
        id: 'q16', dim: 'A2',
        text: '每早去景仁宫给皇后请安，你通常：',
        options: [
          { label: '经常装病不去，反正去了也是听阴阳怪气', value: 1 },
          { label: '偶尔去晚一点，或者随大流', value: 2 },
          { label: '风雨无阻，规规矩矩，绝不落人话柄', value: 3 }
        ]
      },
      {
        id: 'q17', dim: 'A3',
        text: '你在这宫里汲营算计，最终是为了什么？',
        options: [
          { label: '只求能苟全性命，安安稳稳活到大结局', value: 1 },
          { label: '为了家族的荣耀和自己的体面', value: 2 },
          { label: '为了有朝一日能坐上太后之位，将所有仇人踩在脚下', value: 3 }
        ]
      },
      {
        id: 'q18', dim: 'A3',
        text: '如果你发现自己怀孕了，你的第一反应是：',
        options: [
          { label: '太可怕了，肯定会有无数人想害我的孩子', value: 1 },
          { label: '希望能母凭子贵，给孩子一个好前程', value: 2 },
          { label: '这是本宫登顶权力的绝佳筹码！', value: 3 }
        ]
      },
      {
        id: 'q19', dim: 'Ac1',
        text: '御花园的梅花开了，听说皇上今天会去赏梅，你会：',
        options: [
          { label: '赶紧避开，免得惹出什么是非', value: 1 },
          { label: '如果正好顺路就去碰碰运气', value: 2 },
          { label: '立刻换上最美的冬装，安排一出偶遇的好戏', value: 3 }
        ]
      },
      {
        id: 'q20', dim: 'Ac1',
        text: '宴会上，各宫娘娘都在献艺争宠，你会：',
        options: [
          { label: '躲在角落默默吃橘子', value: 1 },
          { label: '随大流，别人表演我也随便演一个', value: 2 },
          { label: '必须拿出惊鸿舞一鸣惊人，艳压群芳！', value: 3 }
        ]
      },
      {
        id: 'q21', dim: 'Ac2',
        text: '今晚是你第一次侍寝，你被卷在被子里抬进养心殿，此时你：',
        options: [
          { label: '紧张得发抖，完全不知道该怎么办', value: 1 },
          { label: '按照教引嬷嬷教的规矩，按部就班', value: 2 },
          { label: '早有准备，一开口就直击皇上软肋，让他彻底沦陷', value: 3 }
        ]
      },
      {
        id: 'q22', dim: 'Ac2',
        text: '发现有人在你宫里安插了眼线，你会怎么处理？',
        options: [
          { label: '很慌乱，不知道该怎么拔除', value: 1 },
          { label: '先暗中观察，弄清楚是谁派来的', value: 2 },
          { label: '直接将计就计，传递假情报反杀对方', value: 3 }
        ]
      },
      {
        id: 'q23', dim: 'Ac3',
        text: '面对一直欺压你的死对头，你终于抓到了她的把柄，你会：',
        options: [
          { label: '心里害怕报复，犹豫要不要交出去', value: 1 },
          { label: '等一个合适的时机，再给她一击', value: 2 },
          { label: '趁他病要他命，立刻斩草除根，绝不留后患！', value: 3 }
        ]
      },
      {
        id: 'q24', dim: 'Ac3',
        text: '如果你要给竞争对手使绊子，你的行事风格是：',
        options: [
          { label: '想了半天也不敢动手，最后放弃', value: 1 },
          { label: '借刀杀人，但有时会留下破绽', value: 2 },
          { label: '滴水不漏，一击必杀，且绝不会查到自己头上', value: 3 }
        ]
      },
      {
        id: 'q25', dim: 'So1',
        text: '新人入宫，有几个看着挺机灵的常在，你会：',
        options: [
          { label: '关起门来过自己的日子，不与她们结交', value: 1 },
          { label: '碰到面就客气几句，不深交', value: 2 },
          { label: '主动示好，拉拢过来成为自己的羽翼', value: 3 }
        ]
      },
      {
        id: 'q26', dim: 'So1',
        text: '你的好姐妹被皇上训斥了，其他妃嫔都在看笑话，你会：',
        options: [
          { label: '怕被牵连，赶紧撇清关系', value: 1 },
          { label: '私下里去安慰一下，明面上不作声', value: 2 },
          { label: '坚决站在她这边，一起共渡难关，抱团取暖', value: 3 }
        ]
      },
      {
        id: 'q27', dim: 'So2',
        text: '你情同手足的好姐妹突然送了你一个极品香囊，你会：',
        options: [
          { label: '太开心了，马上戴在身上天天闻', value: 1 },
          { label: '心里感激，但还是会收在妥当的地方', value: 2 },
          { label: '立刻找最信任的太医查验里面有没有麝香', value: 3 }
        ]
      },
      {
        id: 'q28', dim: 'So2',
        text: '在后宫中，你觉得应该对身边的姐妹抱有怎样的态度？',
        options: [
          { label: '疑人不用用人不疑，既然是好姐妹就绝对信任', value: 1 },
          { label: '保持一定的真诚，但也要留个心眼', value: 2 },
          { label: '在这深宫里，亲姐妹都能反目，绝不能相信任何人', value: 3 }
        ]
      },
      {
        id: 'q29', dim: 'So3',
        text: '皇后当众斥责了你，你心里恨极了，但表面上你会：',
        options: [
          { label: '当场甩脸子，冷哼一声', value: 1 },
          { label: '虽然低头认错，但脸色明显很难看', value: 2 },
          { label: '诚惶诚恐地跪下谢恩，眼底却闪过一丝杀机', value: 3 }
        ]
      },
      {
        id: 'q30', dim: 'So3',
        text: '面对一个你极度厌恶的妃嫔，你平时的表现是：',
        options: [
          { label: '连装都不想装，见面就翻白眼', value: 1 },
          { label: '尽量避开，眼不见为净', value: 2 },
          { label: '一口一个姐姐叫得比谁都甜，亲热得像亲姐妹', value: 3 }
        ]
      }
    ];
    const specialQuestions = [
      {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: '皇上今日设宴，问你平时有什么雅好？',
        options: [
          { label: '刺绣烹饪', value: 1 },
          { label: '抚琴画画', value: 2 },
          { label: '收集纯元皇后的旧物', value: 3 },
          { label: '骑马射箭', value: 4 }
        ]
      },
      {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: '你对纯元皇后的旧物执念有多深？',
        options: [
          { label: '只是偶尔缅怀一下先皇后，借此博取皇上好感。', value: 1 },
          { label: '我把纯元皇后的故衣穿在身上，并逢人便说“宛类卿”，连小名都改成了宛宛！', value: 2 }
        ]
      }
    ];`;

let content = fs.readFileSync('/workspace/index.html', 'utf-8');

const startIdx = content.indexOf('    const questions = [');
const endIdx = content.indexOf('    const TYPE_LIBRARY = {');

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + newQuestions + '\n\n' + content.substring(endIdx);
  fs.writeFileSync('/workspace/index.html', content);
  console.log('Replaced successfully');
} else {
  console.log('Failed to find indices', startIdx, endIdx);
}
