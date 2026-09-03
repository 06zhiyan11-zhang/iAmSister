const PERSONALITIES = {
  MAO: '毛阿敏',
  XU: '许晴',
  NING: '宁静',
  ZHENG: '郑爽',
  CHEN: '陈意涵',
  JING: '井柏然',
  YANG: '杨洋'
};

const PERSONALITY_COLORS = {
  MAO: '#8B4513',
  XU: '#FF69B4',
  NING: '#DC143C',
  ZHENG: '#4169E1',
  CHEN: '#FF8C00',
  JING: '#32CD32',
  YANG: '#87CEEB'
};

const PERSONALITY_DESC = {
  MAO: {
    title: '圆融通透的游戏玩家',
    desc: '你是一位资历深厚、洞悉世事的人情练达者。气场强大却从不第一个出头，在复杂的人际博弈中永远选"赢面最大的那边"。你习惯把年轻人推到台前当"试错者"，自己则在幕后稳稳掌舵。你的处世哲学是：见人说人话、见鬼说鬼话，看破不说破，体面最重要。恋家情结是你柔软的内核，夜深人静时你最想念的永远是家人热好的那碗饭。在你眼中，这世界本质上是一场大型"人情积分赛"，而你永远是那个默默清分、笑到最后的人。',
    tags: ['人情练达', '不担责任', '观望型站队', '恋家', '体面优先']
  },
  XU: {
    title: '纯粹极致的浪漫主义者',
    desc: '你活在自己构建的黑白二元世界里——要么"懂我"，要么"滚"，没有任何中间地带。你极度厌恶成年人的假客气和虚伪推诿，真性情是你一生的信仰。可惜这份"真"常常选错了时机和场合，让你一次次被推到集体的对立面。你本质上是个需要被百分之百"看见"和"捧着"才能正常运转的人——当你感受到被重视被偏爱时，能力之周全、思虑之细密能秒杀所有人；反之，你会用公主病和情绪崩溃来大声宣告"我需要被爱"。历经千帆仍不世故，是你的珍贵，也是你的宿命。',
    tags: ['极致真性情', '黑白二元思维', '需要被偏爱', '情绪过山车', '反虚伪急先锋']
  },
  NING: {
    title: '率性而为的飒爽真人',
    desc: '你是那个敢爱敢恨、"装着装着就融入了，老娘想不装就不装"的真实狠人。情绪全写在脸上，不开心当场就发作，骂完拉倒不记隔夜仇，这种"情绪即时代谢"能力让你比谁都活得轻松。外人看你觉得你作、你凶，但实际上你是7个人里最"不演"的那个——我抱怨归抱怨，该做的事一件都不会落下；我骂你归骂你，该帮你的时候二话不说。幽默感和自嘲能力是你的武器，压力越大你越爱开玩笑，你是团队里永远能让气氛活过来的那个人。',
    tags: ['率真飒爽', '先抱怨后做事', '情绪即时代谢', '自嘲幽默', '护短仗义']
  },
  ZHENG: {
    title: '敏感跳脱的自我矛盾体',
    desc: '你是那个最想做好、却总让所有人最累的人。脑回路和常人不在一个维度，思维跳脱到让人跟不上，沟通时经常"鸡同鸭讲"。你有极强的责任感和集体观念，愿意为团队付出一切，却陷入了一个五步死循环：拼命做事→没人看见→自我感动→情绪崩溃→推卸责任。你极度缺安全感、缺认可，别人帮你你觉得是看不起你，别人不帮你你又觉得是不在乎你。你的本意永远是好的，只是表达永远是错的——像极了每个想做好却搞砸的、笨拙的我们。',
    tags: ['沟通错位', '五部崩溃循环', '极度缺安全感', '思维跳脱', '吃力不讨好']
  },
  CHEN: {
    title: '元气清醒的有限融入者',
    desc: '你是表面元气小太阳、内心门儿清的顶级观察者。永远挂着治愈的笑脸，晨跑12公里只是日常，热爱生活的劲头能感染所有人。你擅长洞察人心，能三句话就让尴尬的气氛活过来，但你的打圆场永远只负责"让大家下台"，从不掺和站队。前半生你掏心掏肺受过伤，于是学会了"有限融入"——脸上笑嘻嘻，心里有账本，谁对我真、谁在演，我全知道，但我不说。你有一个完全独立于人际关系之外的内心世界，这是你永远不会崩塌的根据地。',
    tags: ['有限融入', '情绪独立', '高情商救场', '不站队', '元气自愈系']
  },
  JING: {
    title: '双商在线的完美照顾者',
    desc: '你是颜值、智商、情商三高的完美选手，所有人都会下意识觉得"你可以信赖"。细节控到骨子里——"女孩子不能用凉水洗脸"这种小事你记得比谁都清楚。你有一种神奇的能力：所有名场面你都在场，但所有人都觉得你是站自己这边的，俗称"片叶不沾身"。所有人吵架都需要你打圆场，所有人崩溃都需要你递纸巾，所有重活累活最后都会落到你肩上。你的情绪崩溃点从来不是"累"，而是"我的付出被所有人当成了理所当然"。偶尔，你也想问一句：谁来照顾照顾我呢？',
    tags: ['细节控暖心', '完美和稀泥', '情绪劳动承担者', '付出型', '片叶不沾身']
  },
  YANG: {
    title: '真诚纯粹的逆商王者',
    desc: '你是"心眼子排行榜"常年蝉联倒数第一的乖宝宝，真诚、纯粹、懂事到让人心疼。被落在异国街头等到天黑，你回来第一句是"对不起给大家添麻烦了"；搬完所有人的行李累到发抖，你也不会说一句抱怨的话。姐姐们吵架时，你会自动切换"放空模式"假装听不见——这不是软弱，是你的保护机制。你最怕的事就是麻烦别人，能自己解决的绝对不开口求助。消化委屈的能力堪称满级，是那种"知世故而不世故、受过伤仍然选择温柔"的稀有品种。',
    tags: ['零心眼真诚', '怕麻烦别人', '情绪放空保护', '消化委屈满级', '逆商王者']
  }
};

const PERSONALITY_IMAGES = {
  MAO: 'assets/guests/mao.jpg',
  XU: 'assets/guests/xu.jpg',
  NING: 'assets/guests/ning.jpg',
  ZHENG: 'assets/guests/zheng.jpg',
  CHEN: 'assets/guests/chen.jpg',
  JING: 'assets/guests/jing.jpg',
  YANG: 'assets/guests/yang.jpg'
};

const QUESTIONS = [
  {
    id: 1,
    category: '团队角色',
    question: '和朋友们一起策划一场旅行时，你通常是？',
    options: [
      {
        text: '先提几个我在意的核心底线（预算、住宿标准这些），具体细节让大家商量，真搞不定了我再拍板',
        weights: { MAO: 3, JING: 1, CHEN: 1 }
      },
      {
        text: '我的需求很明确：住得舒服、行程不要太赶，其他都听安排',
        weights: { XU: 3, MAO: 1 }
      },
      {
        text: '先在群里说好"我体力一般啊太累的项目我真的不去哦"，最后大家定了啥我还是跟着去了',
        weights: { NING: 3, XU: 1, YANG: 1 }
      },
      {
        text: '提前查好所有攻略订好酒店机票，但订完之后一直担心：大家会不会不喜欢我的安排？',
        weights: { ZHENG: 3, JING: 1, YANG: 1 }
      }
    ]
  },
  {
    id: 2,
    category: '团队角色',
    question: '团队聚餐时，你一般坐在？',
    options: [
      {
        text: '习惯坐比较中心的位置，说话大家都会认真听，慢慢也成了默认的主位',
        weights: { MAO: 3, NING: 2 }
      },
      {
        text: '只坐在聊得来的朋友旁边，跟我没关系的话题我就自己低头吃饭看手机',
        weights: { XU: 3, YANG: 1, ZHENG: 1 }
      },
      {
        text: '嘴上说"我坐哪都行"，但会悄悄观察一下在座的人再决定往哪坐',
        weights: { MAO: 2, NING: 2, CHEN: 3, JING: 2 }
      },
      {
        text: '主动坐在上菜的位置或最边上，默默帮大家倒茶递纸巾、收一下空盘子',
        weights: { JING: 3, YANG: 3, CHEN: 2, ZHENG: 1 }
      }
    ]
  },
  {
    id: 3,
    category: '团队角色',
    question: '朋友把你一个人落在陌生的地方忘接了，你的第一反应是？',
    options: [
      {
        text: '冷笑一声，这人算是记在我小本本上了，以后走着瞧',
        weights: { MAO: 3, NING: 1 }
      },
      {
        text: '情绪瞬间崩溃，怎么可以这样对我？！委屈到想哭',
        weights: { XU: 3, ZHENG: 2 }
      },
      {
        text: '立刻打电话联系组织者，语气压不住地往上扬：怎么回事？说好来接的人呢？',
        weights: { NING: 3, ZHENG: 2, MAO: 1 }
      },
      {
        text: '先自己想办法回去，到了之后还得道歉："对不起给大家添麻烦了"',
        weights: { YANG: 3, CHEN: 2, JING: 1 }
      }
    ]
  },
  {
    id: 4,
    category: '团队角色',
    question: '团队做决定时大家都很客气说"随便"，你会？',
    options: [
      {
        text: '看破不说破，我也说"随便"，反正谁先开口谁输',
        weights: { MAO: 3, NING: 1, CHEN: 1 }
      },
      {
        text: '烦死了！一个个装什么装！直接拍板我选这个！',
        weights: { NING: 3, XU: 2 }
      },
      {
        text: '打圆场说"我都行啊，那不然我们A和B都试试？"',
        weights: { JING: 3, CHEN: 2, YANG: 1 }
      },
      {
        text: '心里其实早就想好了，但不说，等别人提了再附和或反对',
        weights: { ZHENG: 2, XU: 1, MAO: 1, YANG: 1 }
      }
    ]
  },
  {
    id: 5,
    category: '团队角色',
    question: '搬重物时，你的表现是？',
    options: [
      {
        text: '环顾一圈挑了最轻的那一件，搬完就坐在箱子上跟大家聊天',
        weights: { MAO: 3, XU: 2 }
      },
      {
        text: '我搬不动啊~你们可以吗？不行就分两趟嘛~',
        weights: { XU: 3, ZHENG: 1, CHEN: 1 }
      },
      {
        text: '边喊"累死了老娘不干了"边咬牙搬完所有东西',
        weights: { NING: 3, CHEN: 1 }
      },
      {
        text: '一声不吭把最重的扛了，累到发抖也不吭声',
        weights: { YANG: 3, JING: 3, CHEN: 2, ZHENG: 1 }
      }
    ]
  },
  {
    id: 6,
    category: '情绪表达',
    question: '当你很生气的时候，你一般会？',
    options: [
      {
        text: '面不改色，但心里已经把这笔账记下了，来日方长',
        weights: { MAO: 3, JING: 1, YANG: 1 }
      },
      {
        text: '直接甩脸子，把不高兴全写在脸上，谁来劝都不听',
        weights: { XU: 3, NING: 1, ZHENG: 2 }
      },
      {
        text: '音量先上来，把心里想的直接一股脑说出来，半小时后自己又跟没事人一样',
        weights: { NING: 3, XU: 1, ZHENG: 1 }
      },
      {
        text: '表面笑嘻嘻说没事，转头跟信任的朋友吐槽到半夜',
        weights: { CHEN: 3, JING: 2, YANG: 1 }
      }
    ]
  },
  {
    id: 7,
    category: '情绪表达',
    question: '朋友聚会气氛很尴尬，你会？',
    options: [
      {
        text: '先不着急说话，静静观察几分钟，等大家聊到某个关键节点时再一句话定调',
        weights: { MAO: 3, XU: 1, JING: 1 }
      },
      {
        text: '关我什么事？尴尬就尴尬呗，我玩我的手机',
        weights: { XU: 3, ZHENG: 2, YANG: 2 }
      },
      {
        text: '讲个段子自嘲一下，先把场子热起来再说',
        weights: { NING: 3, JING: 2, CHEN: 2 }
      },
      {
        text: '悄悄打圆场，用最自然的方式把话题岔开，给大家台阶下',
        weights: { JING: 3, CHEN: 3, YANG: 1 }
      }
    ]
  },
  {
    id: 8,
    category: '情绪表达',
    question: '遇到很感动的事情时，你会？',
    options: [
      {
        text: '眼眶发热但不想让人看到，赶紧低头假装刷手机或喝口水掩饰过去',
        weights: { MAO: 3, JING: 2, NING: 1 }
      },
      {
        text: '直接哭出来，感动就是要表达出来啊',
        weights: { XU: 3, CHEN: 2, ZHENG: 1 }
      },
      {
        text: '嘴上说"切~有什么好哭的"，其实偷偷抹眼泪',
        weights: { NING: 3, MAO: 1, YANG: 1 }
      },
      {
        text: '被感动到但不说，默默用行动回报对我好的人',
        weights: { YANG: 3, ZHENG: 2, JING: 1 }
      }
    ]
  },
  {
    id: 9,
    category: '情绪表达',
    question: '压力很大的时候，你通常通过什么方式解压？',
    options: [
      {
        text: '找家人或最信任的老朋友聊聊天，说说心里话',
        weights: { MAO: 3, CHEN: 1, YANG: 1 }
      },
      {
        text: '不说话，就一个人待着，看谁第一个过来问我怎么了',
        weights: { XU: 3, ZHENG: 2 }
      },
      {
        text: '去运动！跑步、跳舞、出汗！累了就啥都忘了',
        weights: { CHEN: 3, NING: 2, YANG: 2 }
      },
      {
        text: '一个人待着，听歌、自言自语、慢慢消化',
        weights: { ZHENG: 3, YANG: 2, XU: 1, JING: 1 }
      }
    ]
  },
  {
    id: 10,
    category: '人际交往',
    question: '第一次见面的人，你一般怎么判断跟ta合不合得来？',
    options: [
      {
        text: '看对方说话做事有没有分寸感，会不会让人心里不舒服，相处起来舒服最重要',
        weights: { MAO: 3, NING: 1, CHEN: 1 }
      },
      {
        text: '靠感觉！气场合不合一瞬间就能感受到，不合就是不合',
        weights: { XU: 3, NING: 2 }
      },
      {
        text: '观察ta跟别人怎么相处，再决定怎么对待ta',
        weights: { JING: 3, MAO: 2, CHEN: 3 }
      },
      {
        text: '一开始都很客气，慢慢接触久了才知道合不合得来',
        weights: { YANG: 3, ZHENG: 1, CHEN: 1 }
      }
    ]
  },
  {
    id: 11,
    category: '人际交往',
    question: '朋友当面跟你说"你这个发型真难看"，你会？',
    options: [
      {
        text: '笑着说："哇你审美好有个性哦，你觉得什么样的好看？说来我学习学习"',
        weights: { NING: 3, XU: 1, CHEN: 1 }
      },
      {
        text: '当场黑脸，心里想：你算老几也配说我？',
        weights: { XU: 3, MAO: 1, NING: 1 }
      },
      {
        text: '表面不在乎笑笑，但回去纠结好久要不要换发型',
        weights: { ZHENG: 3, YANG: 2 }
      },
      {
        text: '打哈哈说"是吧我也觉得丑，哈哈"，其实心里毫不在意',
        weights: { JING: 3, YANG: 2, CHEN: 1 }
      }
    ]
  },
  {
    id: 12,
    category: '人际交往',
    question: '你更偏向哪种社交方式？',
    options: [
      {
        text: '在陌生人群里会礼貌微笑不说话，感觉自己融不进去，宁愿先低头玩手机',
        weights: { YANG: 3, MAO: 2, ZHENG: 1 }
      },
      {
        text: '社交牛逼症！走到哪都能跟人聊两句，朋友遍天下',
        weights: { NING: 3, CHEN: 3, JING: 2 }
      },
      {
        text: '慢热但自来熟，熟了之后是话痨，不熟时很文静',
        weights: { CHEN: 2, JING: 2, YANG: 2 }
      },
      {
        text: '圈子很小但很深，一两个真心朋友足矣',
        weights: { ZHENG: 3, YANG: 3, XU: 1 }
      }
    ]
  },
  {
    id: 13,
    category: '人际交往',
    question: '有人在背后说你坏话被你知道了，你会？',
    options: [
      {
        text: '见面照样笑着打招呼，但是下次有重要的事绝对不会再带ta',
        weights: { MAO: 3, NING: 1, JING: 1, YANG: 1 }
      },
      {
        text: '直接找ta当面对质！有本事当面说啊！',
        weights: { NING: 3, XU: 3 }
      },
      {
        text: '很受伤，但表面不说，以后默默疏远这个人',
        weights: { XU: 1, ZHENG: 3, YANG: 2 }
      },
      {
        text: '无所谓，嘴长在别人身上，我又不是人民币不可能人人爱',
        weights: { NING: 2, CHEN: 2, JING: 2, YANG: 1 }
      }
    ]
  },
  {
    id: 14,
    category: '人际交往',
    question: '对于"面子"这件事，你的看法是？',
    options: [
      {
        text: '我的面子很重要！谁不给我面子就是不给我活路',
        weights: { MAO: 2, NING: 3, XU: 2 }
      },
      {
        text: '面子哪有真心重要？假客套真的很烦',
        weights: { XU: 3, ZHENG: 2 }
      },
      {
        text: '互相给面子呗，你敬我一尺我敬你一丈',
        weights: { JING: 3, MAO: 2, CHEN: 2 }
      },
      {
        text: '面子是什么？能吃吗？我觉得里子比较重要',
        weights: { CHEN: 2, YANG: 3, ZHENG: 1 }
      }
    ]
  },
  {
    id: 15,
    category: '冲突处理',
    question: '两个朋友吵架了，你夹在中间会？',
    options: [
      {
        text: '先不插手，让她们吵，吵累了我再出来收场',
        weights: { MAO: 3, XU: 1, CHEN: 1 }
      },
      {
        text: '凭直觉站队，我觉得谁对就帮谁，没在怕的',
        weights: { NING: 3, XU: 2 }
      },
      {
        text: '两边劝和，这边说好话那边也说好话，心累',
        weights: { JING: 3, CHEN: 2, YANG: 1 }
      },
      {
        text: '假装没听见，去上厕所/玩手机/看风景',
        weights: { YANG: 3, ZHENG: 2 }
      }
    ]
  },
  {
    id: 16,
    category: '冲突处理',
    question: '被人冤枉了，你的第一反应是？',
    options: [
      {
        text: '冷笑，不急，证据在手，看你还能演多久',
        weights: { MAO: 3, NING: 1, YANG: 1 }
      },
      {
        text: '当场气哭！怎么可以这样对我？太委屈了！',
        weights: { XU: 3, ZHENG: 2 }
      },
      {
        text: '当场反驳！声音越大越有理！我怕过谁？',
        weights: { NING: 3, ZHENG: 1 }
      },
      {
        text: '先不解释，时间会证明一切，或者等对方消气了再说',
        weights: { JING: 2, YANG: 3, ZHENG: 1, CHEN: 2 }
      }
    ]
  },
  {
    id: 17,
    category: '旅行偏好',
    question: '你理想中的旅行方式是？',
    options: [
      {
        text: '住宿舒服、交通不折腾，节奏慢一点不累最重要',
        weights: { MAO: 2, XU: 3, NING: 1, CHEN: 1 }
      },
      {
        text: '不设闹钟不赶行程，看到好看的地方就多待一会儿',
        weights: { CHEN: 3, XU: 2, ZHENG: 2 }
      },
      {
        text: '提前列好清单，想去的地方尽量都去不留遗憾',
        weights: { ZHENG: 2, JING: 3, YANG: 1, NING: 1 }
      },
      {
        text: '和朋友在一起最重要，去哪玩、玩什么都无所谓',
        weights: { NING: 3, CHEN: 2, JING: 2, YANG: 1 }
      }
    ]
  },
  {
    id: 18,
    category: '旅行偏好',
    question: '旅行中遇到预算不够的情况，你会？',
    options: [
      {
        text: '预算不够？我有经验，听我的，砍价我最拿手了',
        weights: { MAO: 3, NING: 1 }
      },
      {
        text: '全程不说话了，兴致明显没了，问什么都淡淡的',
        weights: { XU: 3, NING: 2, ZHENG: 1 }
      },
      {
        text: '算算账！看看哪里能省出预算，想办法解决问题',
        weights: { JING: 3, ZHENG: 2, CHEN: 2, YANG: 1 }
      },
      {
        text: '大不了我多出点！出来玩开心最重要',
        weights: { YANG: 2, CHEN: 2, JING: 1 }
      }
    ]
  },
  {
    id: 19,
    category: '旅行偏好',
    question: '朋友提议去尝试跳伞/蹦极等极限项目，你会？',
    options: [
      {
        text: '这种心跳太快的项目我不太适合，帮大家拍拍照记录一下也挺好',
        weights: { MAO: 3, XU: 1, JING: 1 }
      },
      {
        text: '我不敢！我恐高！你们去吧，我在旁边喝个咖啡等你们',
        weights: { XU: 3, ZHENG: 1 }
      },
      {
        text: '嘴上说"我不我不我不去"，最后还是被拉着去了还嗨得不行',
        weights: { NING: 3, CHEN: 1, YANG: 1 }
      },
      {
        text: '我可以！第一个举手报名，人生就是要体验！',
        weights: { CHEN: 3, YANG: 2, JING: 1 }
      }
    ]
  },
  {
    id: 20,
    category: '旅行偏好',
    question: '旅行中大家都很累了还没找到吃饭的地方，你会？',
    options: [
      {
        text: '把地图拿过来！我来导航！相信我，跟着走就对了',
        weights: { YANG: 3, JING: 2, MAO: 1, ZHENG: 1 }
      },
      {
        text: '累死了，随便找个便利店吃点吧，要求那么多干嘛',
        weights: { NING: 3, ZHENG: 2 }
      },
      {
        text: '不行！来都来了，一定要找到那家网红店才算不虚此行',
        weights: { XU: 3, MAO: 1, ZHENG: 1 }
      },
      {
        text: '"我都行~"但会默默帮大家查好路线、看评价',
        weights: { ZHENG: 3, JING: 2, CHEN: 1, YANG: 1 }
      }
    ]
  },
  {
    id: 21,
    category: '旅行偏好',
    question: '到了一个新地方，你最想做的事是？',
    options: [
      {
        text: '找个环境好的咖啡馆/茶馆，慢悠悠地喝杯东西',
        weights: { MAO: 3, XU: 2, YANG: 1 }
      },
      {
        text: '去最有名的景点打卡，拍美美的照片发朋友圈',
        weights: { XU: 2, CHEN: 2, ZHENG: 1, YANG: 1 }
      },
      {
        text: '逛街买东西！不买点什么对不起这趟旅行',
        weights: { NING: 3, CHEN: 2 }
      },
      {
        text: '去钻大街小巷找地道小吃，体验当地人的生活',
        weights: { CHEN: 3, YANG: 2, JING: 2, ZHENG: 1 }
      }
    ]
  },
  {
    id: 22,
    category: '价值观',
    question: '你觉得人生中最重要的事情是？',
    options: [
      {
        text: '生活安稳、身边人都平安健康，日子平淡点没关系',
        weights: { MAO: 3, YANG: 2, ZHENG: 1 }
      },
      {
        text: '有个能深度聊得来的人，很多话不用多说ta就懂',
        weights: { XU: 3, ZHENG: 2, CHEN: 1 }
      },
      {
        text: '按自己喜欢的方式生活，不被别人的期待绑架',
        weights: { NING: 3, CHEN: 2, XU: 1 }
      },
      {
        text: '做点有成就感的事，让身边人因为我变得更好',
        weights: { JING: 3, YANG: 2, CHEN: 2 }
      }
    ]
  },
  {
    id: 23,
    category: '价值观',
    question: '对于"真诚"和"圆滑"，你更认同？',
    options: [
      {
        text: '成年人世界里哪有什么纯粹真诚？大家都是互相演个体面',
        weights: { MAO: 3, JING: 1, CHEN: 1 }
      },
      {
        text: '真诚是底线！我最讨厌虚伪客套的人，看见就烦',
        weights: { XU: 3, NING: 2, ZHENG: 2 }
      },
      {
        text: '分人分情况吧，看穿不说穿才是生存之道',
        weights: { NING: 3, JING: 3, CHEN: 3 }
      },
      {
        text: '我选择真诚待人，但我也不是傻，心里有数就行',
        weights: { YANG: 3, CHEN: 2, ZHENG: 1 }
      }
    ]
  },
  {
    id: 24,
    category: '价值观',
    question: '你如何看待"付出"和"回报"？',
    options: [
      {
        text: '我帮过的人，迟早要还我的，人情都是账',
        weights: { MAO: 3, NING: 1 }
      },
      {
        text: '我记得每个人我帮过的小事，也会偷偷计较对方有没有同样回馈',
        weights: { XU: 3, ZHENG: 2, JING: 1, MAO: 1 }
      },
      {
        text: '我对你好是我乐意，你对不对我好是你的事，但我会记在心里',
        weights: { NING: 3, CHEN: 2, JING: 2, YANG: 1 }
      },
      {
        text: '做事但行好事莫问前程，吃亏是福，心里踏实就好',
        weights: { YANG: 3, CHEN: 1, JING: 1 }
      }
    ]
  },
  {
    id: 25,
    category: '价值观',
    question: '如果一夜暴富，你第一件事会做什么？',
    options: [
      {
        text: '买房！给家人都安排好，把后路都铺好',
        weights: { MAO: 3, JING: 2, YANG: 1 }
      },
      {
        text: '环游世界去！爱去哪去哪，想待多久待多久',
        weights: { XU: 2, CHEN: 3, NING: 2 }
      },
      {
        text: '辞职！然后投资点什么，用钱生钱，越滚越多',
        weights: { NING: 2, MAO: 1, JING: 1, YANG: 1 }
      },
      {
        text: '先帮朋友家人都改善生活，独乐乐不如众乐乐',
        weights: { YANG: 2, JING: 2, CHEN: 2, ZHENG: 1 }
      }
    ]
  },
  {
    id: 26,
    category: '压力应对',
    question: '面对重大挑战（考试/项目/面试）前，你一般是？',
    options: [
      {
        text: '表面稳如老狗，其实心里慌得一批，但绝不让人看出来',
        weights: { MAO: 3, NING: 2, JING: 2, YANG: 1 }
      },
      {
        text: '焦虑到吃不下睡不着，反复跟人确认"我行吗？我可以吗？"',
        weights: { XU: 2, ZHENG: 3, MAO: 1 }
      },
      {
        text: '一边嚷嚷"我不行了我要放弃了"一边默默拼命努力',
        weights: { NING: 3, CHEN: 2, ZHENG: 1 }
      },
      {
        text: '该吃吃该喝喝，准备充分了就不慌，慌也没用',
        weights: { YANG: 3, CHEN: 2, JING: 1 }
      }
    ]
  },
  {
    id: 27,
    category: '压力应对',
    question: '做错事被批评了，你的第一反应是？',
    options: [
      {
        text: '先认错，面子上先过去，以后慢慢改',
        weights: { MAO: 3, JING: 2, YANG: 1 }
      },
      {
        text: '当场就不服！我有我的理由，凭什么只说我？',
        weights: { NING: 3, XU: 2, ZHENG: 2 }
      },
      {
        text: '很受打击，回去要emo很久，反复检讨自己',
        weights: { XU: 1, ZHENG: 3, YANG: 2 }
      },
      {
        text: '认真听、认真记、然后认真改，下次不再犯就好啦',
        weights: { YANG: 3, CHEN: 2, JING: 2 }
      }
    ]
  },
  {
    id: 28,
    category: '压力应对',
    question: '当所有人都指望你解决一个大难题时，你会？',
    options: [
      {
        text: '慌是慌的，但不能让人看出来，先把大家安抚好再说',
        weights: { MAO: 3, JING: 2, YANG: 1 }
      },
      {
        text: '为什么又是我？你们都没手吗？我真的搞不定啊！',
        weights: { XU: 3, ZHENG: 2 }
      },
      {
        text: '嘴上说"我不行我真不行"，然后默默把事都做了',
        weights: { NING: 2, JING: 2, ZHENG: 1, CHEN: 1 }
      },
      {
        text: '行吧，我来，然后把问题拆解成一步一步解决',
        weights: { YANG: 3, JING: 2, CHEN: 2 }
      }
    ]
  },
  {
    id: 29,
    category: '压力应对',
    question: '选一句你最认同的话作为人生座右铭吧：',
    options: [
      {
        text: '"凡事留一线，日后好相见"',
        weights: { MAO: 3, JING: 2, CHEN: 1, ZHENG: 1 }
      },
      {
        text: '"懂你的人自然会懂，不懂的人说再多也没用"',
        weights: { XU: 3, CHEN: 1, YANG: 1, ZHENG: 1 }
      },
      {
        text: '"我可以很好说话，但前提是别碰我的底线和原则"',
        weights: { NING: 3, XU: 2, ZHENG: 1, YANG: 1 }
      },
      {
        text: '"做人嘛，最重要的是问心无愧"',
        weights: { YANG: 3, CHEN: 3, JING: 1 }
      }
    ]
  },
  {
    id: 30,
    category: '名场面·分房大战',
    question: '一群人分房，好房间只有1个，大家嘴上都说"随便"，你真实会怎么做？',
    options: [
      {
        text: '嘴上说"我住哪都行"，但闲聊时会提一句最近睡不好、腰有点酸',
        weights: { MAO: 3, NING: 1, JING: 1 }
      },
      {
        text: '直接说"我睡眠质量挺挑的，住差的我整趟旅行都没精神"，先亮底线',
        weights: { XU: 3, NING: 1, ZHENG: 1 }
      },
      {
        text: '悄悄找个信得过的人单独说两句，让ta帮着提一下自己的实际情况',
        weights: { NING: 3, MAO: 2, JING: 1 }
      },
      {
        text: '等所有人挑完再说，反正剩下哪间我就住哪间',
        weights: { YANG: 3, JING: 3, CHEN: 2, ZHENG: 1 }
      }
    ]
  },
  {
    id: 31,
    category: '名场面·真心话崩盘',
    question: '真心话大冒险被问到"你觉得我们这群人里谁最难相处"，你会？',
    options: [
      {
        text: '"哎呀这问题太狠了，我自罚一杯/自请一个小惩罚，这题我就跳过啦"',
        weights: { MAO: 3, JING: 2, XU: 1 }
      },
      {
        text: '停顿两秒，然后认真说一个自己真实觉得不太好相处的人',
        weights: { XU: 3, NING: 1, ZHENG: 1 }
      },
      {
        text: '"啊~我觉得每个人都有可爱的地方呀~ 干嘛要挑最难相处的呢~"打哈哈混过去',
        weights: { CHEN: 3, JING: 2, NING: 1 }
      },
      {
        text: '脸一红说"我选大冒险！"换一个问题坚决不说',
        weights: { YANG: 3, ZHENG: 3 }
      }
    ]
  },
  {
    id: 32,
    category: '名场面·井柏然崩溃',
    question: '你为团队干了最累的活，结果庆功宴上没有一个人提到你的名字，你会？',
    options: [
      {
        text: '面不改色继续吃饭，但这笔账已经在心里记下来了，下次心里有数',
        weights: { MAO: 3, NING: 1 }
      },
      {
        text: '瞬间没胃口了，筷子慢慢放下，低头刷手机不怎么说话了',
        weights: { XU: 2, NING: 3, ZHENG: 1 }
      },
      {
        text: '表面没事撑着吃完，回家之后找个没人的地方把情绪全部发泄掉',
        weights: { JING: 3, ZHENG: 2 }
      },
      {
        text: '叹口气告诉自己下次别这么拼了，但真有下次还是会第一个冲上去',
        weights: { YANG: 3, CHEN: 2 }
      }
    ]
  },
  {
    id: 33,
    category: '生活细节',
    question: '早上起床到出门上班/上学，你一般是？',
    options: [
      {
        text: '按部就班洗漱、吃早餐、留足半小时余量，绝不卡点',
        weights: { JING: 3, YANG: 2, MAO: 2 }
      },
      {
        text: '醒了先躺床上刷会儿手机，不磨蹭到最后一刻不起床',
        weights: { XU: 3, CHEN: 1, ZHENG: 2 }
      },
      {
        text: '一边念叨"要迟到了要迟到了"一边磨磨蹭蹭，最后百米冲刺',
        weights: { NING: 3, ZHENG: 1, MAO: 1 }
      },
      {
        text: '看心情，心情好提前半小时，心情不好直接请假/翘课',
        weights: { XU: 3, CHEN: 1, NING: 1, ZHENG: 1 }
      }
    ]
  },
  {
    id: 34,
    category: '职场协作',
    question: '团队项目里，最让你崩溃的队友类型是？',
    options: [
      {
        text: '当面一套背后一套，说的话都要打个折听的人',
        weights: { MAO: 3, CHEN: 2, ZHENG: 1 }
      },
      {
        text: '玻璃心说不得，提一句意见就眼泪汪汪的人',
        weights: { NING: 3, XU: 1 }
      },
      {
        text: '只会说"我都行"，让他拿主意就缩，出了事又第一个怪你',
        weights: { XU: 2, ZHENG: 3, JING: 2 }
      },
      {
        text: '抢功劳第一名，干事情最后一名的人',
        weights: { NING: 2, JING: 3, YANG: 2 }
      }
    ]
  },
  {
    id: 35,
    category: '生活细节',
    question: '朋友圈/社交平台，你的更新频率和风格是？',
    options: [
      {
        text: '几乎不发，偶尔发也是分组可见，很克制',
        weights: { MAO: 3, JING: 2, CHEN: 1 }
      },
      {
        text: '想发就发，开心的不开心的都写出来，管别人怎么看',
        weights: { XU: 3, ZHENG: 2, NING: 1 }
      },
      {
        text: '只发开心的、正能量的，不好的情绪自己消化',
        weights: { CHEN: 3, YANG: 3, JING: 1 }
      },
      {
        text: '发之前反复改文案、挑照片，发完半小时会看30次点赞',
        weights: { ZHENG: 3, XU: 1, JING: 1 }
      }
    ]
  },
  {
    id: 36,
    category: '亲密关系',
    question: '和伴侣/最亲的朋友吵架，冷战了，你一般会？',
    options: [
      {
        text: '绝不主动低头，ta先理我我就理ta，ta不理我就算了',
        weights: { MAO: 3, NING: 2, XU: 2 }
      },
      {
        text: '很难受，憋不住想找ta，但又拉不下脸，靠发emo朋友圈暗示',
        weights: { XU: 3, ZHENG: 3 }
      },
      {
        text: '气不了多久，自己找个台阶就跟ta和好了，不记仇',
        weights: { NING: 3, CHEN: 2, YANG: 2 }
      },
      {
        text: '主动道歉！感情比面子重要，先把话说开了再说',
        weights: { YANG: 3, JING: 2, CHEN: 2 }
      }
    ]
  },
  {
    id: 37,
    category: '职场协作',
    question: '领导/老师当众表扬了你，其实这次功劳大半是另一个同事/同学的，你会？',
    options: [
      {
        text: '当场笑着说"其实这次主要是ta的功劳，我只是帮了点小忙"',
        weights: { YANG: 3, CHEN: 2, JING: 2 }
      },
      {
        text: '先笑着接下来，私下再跟ta说谢谢、请ta吃饭',
        weights: { MAO: 3, JING: 3, CHEN: 1 }
      },
      {
        text: '直接说"主要功劳不是我"，把事情说清楚，别占人便宜',
        weights: { XU: 3, NING: 2, ZHENG: 1 }
      },
      {
        text: '心里有点小得意，但是嘴上很客气，面子上先过了再说',
        weights: { MAO: 2, NING: 1, ZHENG: 2 }
      }
    ]
  },
  {
    id: 38,
    category: '生活细节',
    question: '点外卖/选餐厅，你一般是？',
    options: [
      {
        text: '有固定常吃的几家，很少尝试新的，怕踩雷',
        weights: { MAO: 3, YANG: 2, JING: 1 }
      },
      {
        text: '必须大家一起选，问一圈所有人意见，要每个人都满意',
        weights: { JING: 3, ZHENG: 2, CHEN: 2 }
      },
      {
        text: '"你们点吧我随便"，结果点完了我又说"啊？我不吃这个的啊"',
        weights: { XU: 3, ZHENG: 3, NING: 1 }
      },
      {
        text: '随便搜搜评分高的，看着不错就点，踩雷就踩雷，下次换',
        weights: { CHEN: 3, NING: 3, YANG: 1 }
      }
    ]
  },
  {
    id: 39,
    category: '亲密关系',
    question: '伴侣/好朋友跟你说一件ta的开心事，但那件事你觉得其实很一般，你会？',
    options: [
      {
        text: '陪着一起高兴！ta开心最重要，我感受不重要',
        weights: { JING: 3, YANG: 3, CHEN: 2 }
      },
      {
        text: '"啊哈哈还好吧，不过你开心就好~"意思意思笑一下',
        weights: { MAO: 3, CHEN: 1, NING: 2, YANG: 1 }
      },
      {
        text: '直接说"这有啥好开心的？"然后给ta分析为什么没意义',
        weights: { NING: 3, XU: 2, ZHENG: 1 }
      },
      {
        text: '有点羡慕嫉妒，但不会说出来，默默祝ta开心',
        weights: { XU: 1, ZHENG: 3, MAO: 1 }
      }
    ]
  },
  {
    id: 40,
    category: '生活细节',
    question: '去旅行前收拾行李，你是？',
    options: [
      {
        text: '提前一周列好清单，一样一样核对，宁可多带不可漏带',
        weights: { JING: 3, MAO: 2, ZHENG: 2 }
      },
      {
        text: '出发前一晚才开始收，10分钟搞定，能用的就当地买',
        weights: { NING: 3, CHEN: 1, XU: 1, YANG: 1 }
      },
      {
        text: '收一半就累了/不想收了，最后让家人/朋友帮我弄',
        weights: { XU: 3, ZHENG: 2 }
      },
      {
        text: '列了清单但经常忘记带某样重要的东西，每次都犯同样的错',
        weights: { YANG: 3, ZHENG: 2, NING: 1 }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PERSONALITIES, PERSONALITY_COLORS, PERSONALITY_DESC, QUESTIONS };
}
