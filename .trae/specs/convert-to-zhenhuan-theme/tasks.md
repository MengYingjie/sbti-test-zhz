# Tasks
- [x] Task 1: 整理并替换性格维度数据 (dimensionMeta & DIM_EXPLANATIONS)
  - [x] SubTask 1.1: 将15个维度的名称映射为后宫主题（例如：S1 位分底气, S2 恩宠认知, S3 野心执念等）。
  - [x] SubTask 1.2: 重写15个维度在 L/M/H 三个等级下的解析文案，符合后宫语境。
- [x] Task 2: 整理并替换题目数据 (questions & specialQuestions)
  - [x] SubTask 2.1: 将30道常规题目替换为甄嬛传剧情选择题（如滴血验亲、华妃赏一丈红等），并确保对应选项的 value (1, 2, 3) 逻辑合理，不破坏原有维度的得分意义。
  - [x] SubTask 2.2: 将2道特殊题替换为特定剧情（收集纯元皇后旧物），保留原有的 `drink_gate` 特殊触发逻辑。
- [x] Task 3: 整理并替换人格数据库 (TYPE_LIBRARY & NORMAL_TYPES & TYPE_IMAGES)
  - [x] SubTask 3.1: 选出27位甄嬛传人物，分别对应原有的27个人格代号。
  - [x] SubTask 3.2: 撰写27位人物的结果页文案（intro 和 desc），描述其在后宫的生存特点。
  - [x] SubTask 3.3: 在 `TYPE_LIBRARY` 中保留原 `code` 作为键值，仅修改 `cn`, `intro`, `desc`。特殊人格 `DRUNK` 设定为纯元皇后，兜底人格 `HHHH` 设定为夏冬春。
  - [x] SubTask 3.4: 更新 `TYPE_IMAGES` 中的图片路径（全部置空以防报错）。
- [x] Task 4: 更新 HTML 页面文案与样式
  - [x] SubTask 4.1: 修改页面标题、欢迎语、按钮文案（如“入宫选秀”、“呈递绿头牌”）等。
  - [x] SubTask 4.2: 微调 CSS 颜色变量（使用宫墙红 `#c62828` 和古风米黄 `#fffbf0`）。

# Task Dependencies
- [Task 2] depends on [Task 1]
- [Task 3] depends on [Task 1]
- [Task 4] depends on [Task 3]