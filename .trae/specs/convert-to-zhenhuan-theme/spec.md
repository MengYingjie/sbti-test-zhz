# 甄嬛传主题性格测试 Spec

## Why
用户希望将当前的“SBTI”搞笑人格测试改造为《甄嬛传》主题版本。测试中的题目需要替换为剧中的经典剧情与场景，测试结果的人格类型需要替换为《甄嬛传》中的人物。同时，必须保持原有的15个性格维度数量以及27个人格总数（25个常规人格+2个特殊人格）完全一致。

## What Changes
- **文案与UI主题**：将页面标题、欢迎语、结果页提示等文案替换为甄嬛传风格（如“后宫生存法则测试”），调整配色方案以贴合宫廷古风。
- **性格维度映射 (dimensionMeta & DIM_EXPLANATIONS)**：保留 S1~S3, E1~E3, A1~A3, Ac1~Ac3, So1~So3 共15个维度，但将其名称和解析包装为后宫生存相关的属性（如“S1 自尊自信”改为“S1 宠辱不惊”，“E1 依恋安全感”改为“E1 圣意揣测”等）。
- **测试题目 (questions & specialQuestions)**：将原有的30道常规题目和2道特殊题目，全部替换为《甄嬛传》中的经典剧情选择题（例如：滴血验亲、华妃赏一丈红、选秀等场景）。选项的得分逻辑 (1, 2, 3) 保持不变。
- **人格类型库 (TYPE_LIBRARY & NORMAL_TYPES)**：将原来的27个人格（包含 CTRL, ATM-er, DRUNK, HHHH 等）一一对应替换为27位《甄嬛传》人物（如甄嬛、皇后、华妃、安陵容等）。其中特殊触发人格（原DRUNK）可设定为“纯元皇后”，保底人格（原HHHH）可设定为“齐妃”或“夏冬春”。
- **保留核心数理逻辑**：计算得分、向量匹配、匹配度算法 (pattern匹配) 等核心JS逻辑**完全不变**，仅替换数据层的文本和展示。

## Impact
- Affected specs: 页面文案展示、题目数据源、结果数据源
- Affected code: `/workspace/index.html` 中的 JS 数据对象 (`dimensionMeta`, `questions`, `specialQuestions`, `TYPE_LIBRARY`, `NORMAL_TYPES`, `DIM_EXPLANATIONS`) 和 HTML 文本节点。

## MODIFIED Requirements
### Requirement: 页面文案与样式
系统 SHALL 提供具有古风和后宫特色的页面 UI，标题改为“甄嬛传后宫生存测试”。

### Requirement: 维度与解析数据
系统 SHALL 包含15个维度，并且每个维度对应 L/M/H 三个等级的后宫生存解析文案。

### Requirement: 题目数据
系统 SHALL 提供30道普通后宫情境题和2道特殊触发题（如触发纯元皇后），每个选项对应原有的 1/2/3 分值。

### Requirement: 人格结果数据
系统 SHALL 提供27个甄嬛传人物作为结果，包括25个常规人物，1个隐藏人物（特殊题触发），1个保底人物（匹配度低于60%触发）。人物的判别 pattern 必须与原代码保持一致。
