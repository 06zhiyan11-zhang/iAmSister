# 🌷 iAmSister · 花儿与少年2人格测试

> 基于B站UP主「小灰躺」8小时心理学级深度解说，设计的40道纯行为化人格测试。
> 判断你与 **毛阿敏 / 许晴 / 宁静 / 郑爽 / 陈意涵 / 井柏然 / 杨洋** 7位嘉宾的人格相似度。

![花儿与少年2](https://img.shields.io/badge/花儿与少年-第二季-ff69b4?style=flat-square)
![Question Count](https://img.shields.io/badge/题库-40题-important?style=flat-square)
![Tech Stack](https://img.shields.io/badge/技术栈-纯HTML%2FCSS%2FJS-critical?style=flat-square)
![Build Tool](https://img.shields.io/badge/零依赖-无需构建-lightgrey?style=flat-square)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/06zhiyan11-zhang/iAmSister)

---

## ✨ 特色亮点

### 🎯 精准反作弊设计
- **40道纯行为题**：没有「你是大姐大还是小公主」这种贴标签问题，全部来自真实生活场景（团队搬行李、饭局座位、朋友吵架、旅行订酒店、真心话大冒险…）
- **权重分散机制**：每个选项**最少同时影响 2-4 位嘉宾**得分，不存在「选这句话=就是某嘉宾」的简单映射
- **反秒猜机制**：名场面题（分房/真心话/井柏然崩溃）全部做了**去剧本化改写**，看过解说视频的人也猜不出对应哪一位

### 🧠 V3 匹配算法（解决「每次都是98%」Bug）
三重因子加权动态匹配度：
```
最终匹配度 = 完美率40% + Dominance30% + Spread30%
→ 线性映射到 [52%, 97%] 区间，不再固定98%
```
6种极端答题策略实测覆盖 **MAO/XU/NING/YANG/CHEN** 5位不同嘉宾Top1。

### 📱 适配全平台
- **微信浏览器**：viewport-fit=cover + 刘海屏安全区适配 + Open Graph分享卡片
- **移动端优先**：375px→428px 三档断点、触摸友好按钮、零横向滚动
- **Canvas 7维雷达图**：DPR高清适配，Retina屏无毛刺

---

## 🧩 7位嘉宾人格画像

| KEY | 嘉宾 | 人格标题 | 核心标签（5个） |
|-----|------|---------|----------------|
| MAO | 毛阿敏 | 圆融通透的**游戏玩家** | 人情练达 · 观望型站队 · 体面优先 · 不担责任 · 恋家 |
| XU | 许晴 | 纯粹极致的**浪漫主义者** | 极致真性情 · 黑白二元思维 · 需要被偏爱 · 情绪过山车 · 反虚伪 |
| NING | 宁静 | 率性而为的**飒爽真人** | 先抱怨后做事 · 情绪即时代谢 · 自嘲幽默 · 护短仗义 · 率真飒爽 |
| ZHENG | 郑爽 | 敏感跳脱的**自我矛盾体** | 沟通错位 · 五部崩溃循环 · 极度缺安全感 · 思维跳脱 · 吃力不讨好 |
| CHEN | 陈意涵 | 元气清醒的**有限融入者** | 有限融入 · 情绪独立 · 高情商救场 · 不站队 · 元气自愈系 |
| JING | 井柏然 | 双商在线的**完美照顾者** | 细节控暖心 · 完美和稀泥 · 情绪劳动承担者 · 付出型 · 片叶不沾身 |
| YANG | 杨洋 | 真诚纯粹的**逆商王者** | 零心眼真诚 · 怕麻烦别人 · 情绪放空保护 · 消化委屈满级 · 逆商王者 |

> 描述文案全部提炼自 @小灰躺 B站解说视频的心理学分析，绝非百度百科式官方介绍。

---

## 🚀 快速开始

### 方式一：直接本地预览（3秒）
纯静态项目，不需要安装任何依赖。

```bash
# 方式A：Python 3 一行起服务（推荐，Mac自带）
python3 -m http.server 5173

# 方式B：Node.js
npx serve .
```

然后浏览器打开 → http://localhost:5173

### 方式二：一键部署到 Vercel（10秒）
点击页面顶部的 **「Deploy with Vercel」** 按钮，或：

```bash
npm i -g vercel
vercel login
vercel --prod   # 在项目根目录执行
```

Vercel 会自动读取根目录的 [vercel.json](file:///Users/mac/Documents/trae_projects/iAmSister/vercel.json)：
- ✅ Clean URLs（自动去掉 `.html`）
- ✅ 嘉宾头像图片：1年不可变长缓存
- ✅ JS/CSS：1小时协商缓存

---

## 📁 项目结构（零构建工具）

```
iAmSister/
├── index.html          # 主页面（首页 / 答题 / 结果 三屏DOM切换）
├── style.css           # 全部样式（移动端优先 + 微信适配）
├── app.js              # 核心逻辑：答题流程 + V3算法 + Canvas雷达图 + 分享
├── questions.js        # ⭐ 题库 + 7嘉宾画像 + 权重数据（要改内容改这个）
│   ├── PERSONALITIES       → 嘉宾KEY→中文名映射
│   ├── PERSONALITY_COLORS  → 雷达图颜色
│   ├── PERSONALITY_DESC    → 7嘉宾标题/长文/标签（⭐想改文案改这里）
│   ├── PERSONALITY_IMAGES  → 结果页嘉宾照片路径
│   └── QUESTIONS           → 40道题（每题4选项+多位嘉宾权重）
├── vercel.json         # Vercel 部署配置
├── .vercelignore       # 不上传到 Vercel 的文件（tools/分析txt等）
├── .gitignore
└── assets/
    ├── logo-cartoon.png      # 首页卡通 Logo（64px）
    └── guests/               # 结果页嘉宾名场面照片（160px圆形）
        ├── mao.jpg xu.jpg ning.jpg zheng.jpg
        ├── chen.jpg jing.jpg yang.jpg
```

---

## 🎨 设计原则（题库 & 权重）

> 来自项目内部**四条硬性打磨规则**，保证测试的专业性和娱乐性平衡：

1. **行为化原则**：选项必须是「某人做了某事」的具体描述，**禁止出现性格标签或嘉宾名句**
2. **体面化原则**：禁止贬义词自述（如「嚷嚷」「看人下菜碟」「气场压全场」），因为用户碍于体面不会选
3. **去年龄化原则**：所有「长辈视角」「年轻人救场」表述全部移除，适配18-35岁测试人群
4. **权重分散原则**：每个选项最少 2 位嘉宾加分，最多 5 位，消除「单选项=单嘉宾」

累计经过 **3 轮大改**：35题 → 38题 → 40题；Q1/Q2/Q3/Q7/Q8/Q10/Q11/Q17/Q19/Q22/Q29/Q30/Q31/Q32 做了逐题用户反馈打磨。

---

## 📝 自定义 & 二次开发

### 怎么改某道题？
打开 [questions.js](file:///Users/mac/Documents/trae_projects/iAmSister/questions.js)，搜索题目序号（如 `Q1` `第1题`），修改对应对象的 `options[i].text` 或 `weights` 即可。

### 怎么改嘉宾描述文案？
直接改 [questions.js:L21-L57](file:///Users/mac/Documents/trae_projects/iAmSister/questions.js#L21-L57) 的 `PERSONALITY_DESC` 对象，每个嘉宾三个字段：
- `title`（结果页大标题，12字内效果最佳）
- `desc`（深度长文描述，150-220字）
- `tags`（5个标签词，2-6字每个）

### 怎么加/换嘉宾照片？
把图片按 `mao.jpg / xu.jpg / ning.jpg / zheng.jpg / chen.jpg / jing.jpg / yang.jpg` 文件名放进 `assets/guests/` 目录即可。
> ⚠️ Vercel 是 Linux 服务器，**文件名大小写严格敏感**（Mac 本地正常 Vercel 报 404 通常是这个原因）。

---

## 🙏 致谢 & 参考

- **题库内容来源**：[B站UP主「小灰躺」《花少2史诗级课件》8小时10分钟解说](https://b23.tv/9KICz1B)（BV1UvfEB7EX9）——被称为全网最深度心理学向花少2拉片分析
- **灵感来源**：《花儿与少年第二季》湖南卫视 2015，一代人的「社交修罗场集体记忆」
- **转写工具**：项目提供了基于 faster-whisper 的 B 站长视频自动转写脚本（见 `tools/transcribe/`，默认 .gitignore 不上传）

---

## 📜 License

仅供学习交流 & 非商业娱乐用途使用。花少2节目版权归湖南卫视所有，嘉宾照片版权归节目组及原作者所有。
