# 项目续写状态说明

更新时间：2026-03-14

本文件用于保存当前项目的实现结果，方便后续继续增加功能时直接接着开发。

## 0. 保存说明

- 当前实现结果已经正式保存到项目源码文件中，不是临时对话结果。
- 建议未来继续开发时，先阅读：
  - `PROJECT_STATE.md`
  - `PROJECT_STATE.json`
  - `README.md`
- 当前已经落盘的核心文件：
  - `index.html`
  - `app.js`
  - `styles.css`
  - `README.md`
  - `PROJECT_STATE.md`
  - `PROJECT_STATE.json`
- 说明：
  - 源码结构、界面结果、权限逻辑、确认流转、DeepSeek 接入说明都已保存到仓库文件。
  - 实际业务运行数据仍保存在浏览器 `localStorage`，尚未迁移到服务端数据库。
  - DeepSeek API Key 没有硬编码进源码，仍按浏览器本地输入/保存方式处理。

## 1. 当前已实现范围

- 已完成企业经营看板蓝色驾驶舱总览。
- 已完成客户报价模块、销售/收入分析模块、成本分析模块、经营情况分析模块、系统权限模块。
- 已完成报价公式强化展示。
- 已完成四类核心业务数据的统一状态流转：
  - 报价数据
  - 销售数据
  - 成本数据
  - 经营补充数据
- 已完成单条录入、批量导入、编辑、确认状态展示与确认操作。
- 已完成 DeepSeek 接入：
  - 销售/收入 AI 分析
  - 成本 AI 分析
  - 经营情况 AI 分析
  - 成本图片/发票识别
  - 成本文字/邮件识别

## 2. 报价公式

系统当前强调的公式为：

`出货价 = (RRP / (1 + VAT)) × (1 - Front Margin) × (1 - DB点位 - 客户Margin - Service Fee) - STKbuffer`

### 可录入字段

- customerName
- sku
- category
- rrp1 ~ rrp12
- dbRate
- customerMargin
- serviceFee
- stkBuffer
- frontMargin
- vatRate
- ura

### 自动化字段

- 月度出货价
- 销售录入时的自动单价回填
- revenue
- grossProfit
- grossMargin
- 经营看板汇总指标

## 3. 数据状态流转

四类数据统一使用以下状态：

- `pending`：待确认
- `confirmed`：已确认

每条数据都带以下确认字段：

- `approvalStatus`
- `confirmedAt`
- `confirmedBy`

修改后会自动回到 `pending`。

## 4. 角色权限

### 超级管理员

- 全部权限
- 可确认全部业务数据

### 财务负责人

- 全部权限
- 可确认全部业务数据

### 业务负责人

- 可维护报价
- 可录入/上传销售数据
- 不可确认
- 不可查看经营利润与成本模块敏感汇总

### 业务人员

- 可查询报价
- 可录入销售数据
- 不可维护报价
- 不可确认
- 不可查看敏感财务指标

## 5. 本地存储键

当前浏览器侧使用以下 localStorage 键：

- `customer_quote_records_v1`
- `customer_revenue_records_v1`
- `business_cost_records_v1`
- `business_operation_entries_v1`
- `customer_quote_users_v1`
- `customer_quote_session_v1`
- `deepseek_api_key_v1`
- `business_active_module_v1`

说明：

- 当前业务数据是保存在浏览器 localStorage 中，不是在仓库文件里。
- 代码实现已经保存到项目文件。
- 若未来需要“多人共享数据”或“正式上线”，建议新增后端数据库和 API。

## 6. 本次保存后的可续接范围

未来新增功能时，可以直接在当前基础上继续扩展，不需要重做以下内容：

- 蓝色经营驾驶舱总览风格
- 报价公式说明区
- 报价、销售、成本、经营补充四类数据的录入/编辑/确认流程
- 角色权限控制
- DeepSeek 分析与识别入口
- 模块导航和各 L2/L3 区块布局

## 7. 关键文件

- `index.html`
  - 页面结构
  - 模块分区
  - 看板总览
  - 各模块录入/表格/AI 区域

- `app.js`
  - 权限配置
  - 数据读写
  - 报价/销售/成本/经营逻辑
  - 确认状态流转
  - DeepSeek 调用

- `styles.css`
  - 蓝色驾驶舱风格
  - 总览卡片
  - 状态标签
  - 表单与表格视觉

## 8. 后续建议优先级

如果未来继续加功能，建议按下面顺序推进：

1. 后端化
   - 把 localStorage 数据迁移到服务端
   - 把 DeepSeek Key 放到服务端代理，避免前端暴露

2. 确认流程升级
   - 增加确认人日志
   - 增加驳回原因
   - 增加操作审计记录

3. 看板升级
   - 增加图表
   - 增加趋势线
   - 增加客户/SKU 钻取分析

4. 权限升级
   - 增加更细粒度菜单权限
   - 增加字段级可见权限

5. 数据导出
   - 导出报价
   - 导出销售结果
   - 导出成本分析
   - 导出经营分析

## 9. 继续开发时的建议入口

下次继续开发时，优先从以下位置接着改：

- 新增界面结构：`index.html`
- 新增状态/权限/逻辑：`app.js`
- 新增视觉风格：`styles.css`
- 先阅读本文件，再继续编码

## 10. 给后续继续开发的提示词建议

如果后续还要继续增加功能，可以直接这样描述需求：

`请先阅读 PROJECT_STATE.md、PROJECT_STATE.json、README.md，再基于当前项目继续开发，不要重做现有客户报价、销售/收入、成本、经营分析和权限模块。`
