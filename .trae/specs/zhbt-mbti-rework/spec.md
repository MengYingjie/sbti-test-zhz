# ZHBT MBTI Rework Spec

## Why
原版MBTI测试缺乏特定的IP主题代入感。用户希望将其改造为《后宫甄嬛传》主题（ZHBT），保留原有的15个性格维度和27种人格数理逻辑，但将其完全融入《甄嬛传》的后宫剧情和角色中，增强测试的趣味性和代入感。

## What Changes
- 重写所有UI文案、题目、选项和测试维度的描述，使其符合《甄嬛传》的后宫语境。
- 将27种人格映射为《甄嬛传》中的特定角色（例如甄嬛、温太医、华妃等），并赋予现代热梗称号（如“硬核掀桌党 - 叶澜依”）。
- 将前端展示的AI生成图片替换为真实的剧照/海报，并存放到本地 `real_images/` 目录下，更新图片映射配置 `TYPE_IMAGES`。
- 新增独立的后宫图鉴页面 `gallery.html`，展示所有27个人格角色和对应图片。
- 引入 `html2canvas` 和 `qrcodejs` 库，在结果页实现带二维码的专属分享截图功能。
- 分享截图功能包含移动端长按保存和PC端点击下载的预览层弹窗交互。
- 隐藏主页的“查看后宫图鉴”按钮。

## Impact
- Affected specs: UI展示，分享逻辑，测试题目数据结构。
- Affected code:
  - `/workspace/index.html` (主页面，包含测试逻辑和UI)
  - `/workspace/gallery.html` (新增的图鉴页面)
  - `/workspace/real_images/` (新增的本地图片目录)

## MODIFIED Requirements
### Requirement: 核心测试流程
保留原30道常规题和2道特殊触发题的逻辑，但是所有的题目内容必须是《甄嬛传》的剧情选项。
#### Scenario: Success case
- **WHEN** 用户完成所有31/32道题的测试
- **THEN** 系统根据原有的评分逻辑计算出性格维度，并展示对应的后宫角色、评价文案以及对应的真实剧照。

### Requirement: 结果分享
增加一键分享功能，生成包含结果的图片和当前链接二维码。
#### Scenario: Success case
- **WHEN** 用户在结果页点击“生成并下载分享图”
- **THEN** 系统隐藏操作按钮，显示底部二维码区域，通过 `html2canvas` 截取结果页并弹出预览浮层，提示“长按保存分享图”并提供下载按钮。

## ADDED Requirements
### Requirement: 后宫图鉴展示
系统需要提供一个展示所有27种人格和角色的图鉴页面。
#### Scenario: Success case
- **WHEN** 用户访问 `gallery.html`
- **THEN** 页面以网格形式展示所有的角色名、称号、简介以及对应的高清本地剧照。
