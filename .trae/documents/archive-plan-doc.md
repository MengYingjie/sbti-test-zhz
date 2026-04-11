# 归档 plan.md 计划

## 摘要
将项目根目录下的 `plan.md` 文件移动到专门的规范/归档目录中，以配合前一步生成的 spec 等规范文档进行集中管理，保持根目录的整洁。

## 当前状态分析
目前 `plan.md` 文件位于项目的根目录 `/workspace/plan.md`，记录了此前改版的实施步骤与设计。在前一步骤中，我们已经在 `/workspace/.trae/specs/zhbt-mbti-rework/` 下创建了包含 `spec.md`, `tasks.md`, `checklist.md` 等相关归档文档。为了统一管理，`plan.md` 也应当被移动到此处。

## 拟定变更
1. **移动文件**：
   - 将 `/workspace/plan.md` 移动到 `/workspace/.trae/specs/zhbt-mbti-rework/plan.md`。
   - 使用 `git mv` 命令进行移动操作，以确保 Git 能够正确追踪文件的重命名历史（Renamed）。

## 假设与决策
- **假设**：用户所说的“归档”是指将其与刚才生成的规范文档保存在同一目录，即 `.trae/specs/zhbt-mbti-rework/`。
- **决策**：采用 `git mv` 而非普通的 `mv`，以保留其在 Git 版本控制中的变更历史连贯性。

## 验证步骤
1. 检查 `/workspace/.trae/specs/zhbt-mbti-rework/plan.md` 文件是否存在且内容完整。
2. 确认根目录 `/workspace/plan.md` 已经不再存在。
3. 运行 `git status` 确认文件处于已被 Git 追踪的重命名状态。