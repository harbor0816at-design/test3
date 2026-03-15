const STORAGE_KEY = "customer_quote_records_v1";
const SALES_STORAGE_KEY = "customer_revenue_records_v1";
const COST_STORAGE_KEY = "business_cost_records_v1";
const BUSINESS_ENTRY_STORAGE_KEY = "business_operation_entries_v1";
const USERS_KEY = "customer_quote_users_v1";
const SESSION_KEY = "customer_quote_session_v1";
const DEEPSEEK_KEY_STORAGE = "deepseek_api_key_v1";
const GEMINI_KEY_STORAGE = "gemini_api_key_v1";
const ACTIVE_MODULE_KEY = "business_active_module_v1";

const ROLE_CONFIG = {
  super_admin: {
    label: "超级管理员",
    canManageQuoteData: true,
    canAdjustPricing: true,
    canConfirmData: true,
    canViewFormula: true,
    canViewAllMonthPrices: true,
    canManageUsers: true,
    canViewGrossProfit: true,
    canEnterSalesData: true,
    canUploadSalesData: true,
    canManageSalesData: true,
    canViewCostModule: true,
    canManageCostData: true,
    canViewBusinessModule: true,
    canManageBusinessData: true,
  },
  finance_head: {
    label: "财务负责人",
    canManageQuoteData: true,
    canAdjustPricing: true,
    canConfirmData: true,
    canViewFormula: true,
    canViewAllMonthPrices: true,
    canManageUsers: true,
    canViewGrossProfit: true,
    canEnterSalesData: true,
    canUploadSalesData: true,
    canManageSalesData: true,
    canViewCostModule: true,
    canManageCostData: true,
    canViewBusinessModule: true,
    canManageBusinessData: true,
  },
  sales_head: {
    label: "业务负责人",
    canManageQuoteData: true,
    canAdjustPricing: true,
    canConfirmData: false,
    canViewFormula: false,
    canViewAllMonthPrices: true,
    canManageUsers: false,
    canViewGrossProfit: false,
    canEnterSalesData: true,
    canUploadSalesData: true,
    canManageSalesData: false,
    canViewCostModule: false,
    canManageCostData: false,
    canViewBusinessModule: false,
    canManageBusinessData: false,
  },
  sales_rep: {
    label: "业务人员",
    canManageQuoteData: false,
    canAdjustPricing: false,
    canConfirmData: false,
    canViewFormula: false,
    canViewAllMonthPrices: false,
    canManageUsers: false,
    canViewGrossProfit: false,
    canEnterSalesData: true,
    canUploadSalesData: false,
    canManageSalesData: false,
    canViewCostModule: false,
    canManageCostData: false,
    canViewBusinessModule: false,
    canManageBusinessData: false,
  },
};

const COST_CLASSIFICATIONS = [
  { l1: "营业费用", l2: "人力成本", l3: "工资", aliases: ["工资", "薪资", "薪酬"] },
  { l1: "营业费用", l2: "人力成本", l3: "社保费", aliases: ["社保费", "社保", "公积金"] },
  { l1: "营业费用", l2: "人力成本", l3: "员工福利", aliases: ["员工福利", "福利", "补贴"] },
  { l1: "营业费用", l2: "人力成本", l3: "员工宿舍费用", aliases: ["员工宿舍费用", "宿舍费用", "宿舍"] },
  { l1: "营业费用", l2: "人力成本", l3: "服务费（社保服务）", aliases: ["服务费（社保服务）", "社保服务", "社保代缴服务费"] },
  { l1: "营业费用", l2: "行政办公", l3: "办公费", aliases: ["办公费", "办公用品", "文具"] },
  { l1: "营业费用", l2: "行政办公", l3: "电话费", aliases: ["电话费", "通讯费", "手机费"] },
  { l1: "营业费用", l2: "行政办公", l3: "活动费用", aliases: ["活动费用", "活动费", "团建费用", "团建"] },
  { l1: "营业费用", l2: "行政办公", l3: "税金", aliases: ["税金", "税费"] },
  { l1: "营业费用", l2: "差旅招待", l3: "交通费", aliases: ["交通费", "打车费", "机票", "高铁票", "车费"] },
  { l1: "营业费用", l2: "差旅招待", l3: "住宿费", aliases: ["住宿费", "酒店", "宾馆"] },
  { l1: "营业费用", l2: "差旅招待", l3: "餐费", aliases: ["餐费", "用餐", "餐饮"] },
  { l1: "营业费用", l2: "差旅招待", l3: "业务招待费", aliases: ["业务招待费", "招待费", "客户招待"] },
  { l1: "营业费用", l2: "物流费用", l3: "物流费", aliases: ["物流费", "快递费", "运费", "配送费"] },
  { l1: "营业费用", l2: "销售费用", l3: "销售支持费用（建议）", aliases: ["销售支持费用", "销售支持", "陈列费", "促销支持"] },
  { l1: "营业费用", l2: "销售费用", l3: "市场费用（建议）", aliases: ["市场费用", "市场推广", "推广费", "广告费"] },
  { l1: "营业费用", l2: "财务费用", l3: "汇兑损益（建议）", aliases: ["汇兑损益", "汇损", "汇率损益"] },
  { l1: "营业费用", l2: "财务费用", l3: "银行手续费（建议）", aliases: ["银行手续费", "手续费", "银行费用"] },
  { l1: "营业费用", l2: "其他费用", l3: "咨询服务费（建议）", aliases: ["咨询服务费", "咨询费", "服务咨询费"] },
  { l1: "营业费用", l2: "其他费用", l3: "其他费用", aliases: ["其他费用", "杂费"] },
];

const COST_L3_MULTILINGUAL_ALIASES = {
  工资: ["salary", "salaries", "wage", "wages", "payroll", "gehalt", "lohn", "löhne", "personalaufwand"],
  社保费: ["social security", "insurance contribution", "employee insurance", "sozialversicherung", "versicherung"],
  员工福利: ["benefits", "employee benefits", "allowance", "zusatzleistung", "mitarbeiterbenefits"],
  员工宿舍费用: ["dormitory", "staff accommodation", "staff housing", "unterkunft", "wohnheim", "accommodation"],
  "服务费（社保服务）": ["service fee", "outsourcing fee", "social service", "dienstleistungsgebühr", "servicegebuehr"],
  办公费: ["office expense", "office supply", "stationery", "bürokosten", "buero", "office supplies"],
  电话费: ["telephone", "phone bill", "communication fee", "telefonkosten", "kommunikation", "mobile bill"],
  活动费用: ["event expense", "activity fee", "team building", "veranstaltungskosten", "eventkosten", "teambuilding"],
  税金: ["tax", "vat", "steuer", "steuern", "taxation"],
  交通费: ["transportation", "travel transport", "taxi", "air ticket", "train ticket", "fahrtkosten", "transportkosten", "reisekosten"],
  住宿费: ["hotel", "accommodation", "lodging", "unterkunft", "hotelkosten", "übernachtung", "uebernachtung"],
  餐费: ["meal", "meals", "food", "catering", "verpflegung", "essen", "mahlzeit"],
  业务招待费: ["entertainment", "client entertainment", "hospitality", "bewirtung", "kundeneinladung"],
  物流费: ["logistics", "shipping", "freight", "delivery", "courier", "logistik", "fracht", "versand"],
  "销售支持费用（建议）": ["sales support", "retail support", "display fee", "promotion support", "verkaufsunterstützung", "verkaufsfoerderung"],
  "市场费用（建议）": ["marketing", "advertising", "promotion", "campaign", "marketingkosten", "werbung", "marktkosten"],
  "汇兑损益（建议）": ["fx gain loss", "foreign exchange", "exchange difference", "wechselkurs", "kursdifferenz", "währungsdifferenz"],
  "银行手续费（建议）": ["bank fee", "bank charge", "transaction fee", "bankgebühr", "bankgebuehr", "überweisungsgebühr"],
  "咨询服务费（建议）": ["consulting fee", "advisory fee", "professional service", "beratung", "beratungsgebühr", "consultancy"],
  其他费用: ["other expense", "misc", "miscellaneous", "sonstige", "sonstigekosten", "diverse"],
};

const DEFAULT_USERS = [
  { username: "superadmin", password: "Admin@123", role: "super_admin", displayName: "平台管理员", disabled: false },
  { username: "finance", password: "Finance@123", role: "finance_head", displayName: "财务负责人", disabled: false },
  { username: "saleslead", password: "SalesLead@123", role: "sales_head", displayName: "业务负责人", disabled: false },
  { username: "sales", password: "Sales@123", role: "sales_rep", displayName: "业务人员", disabled: false },
];

const BUILT_IN_LOGIN_COMPAT = [
  { role: "super_admin", aliases: ["superadmin", "admin"], passwords: ["Admin@123", "admin123"] },
  { role: "finance_head", aliases: ["finance"], passwords: ["Finance@123", "finance123"] },
  { role: "sales_head", aliases: ["saleslead", "saleshead"], passwords: ["SalesLead@123", "sales123"] },
  { role: "sales_rep", aliases: ["sales"], passwords: ["Sales@123", "sales123"] },
];

const state = {
  records: [],
  salesRecords: [],
  costRecords: [],
  businessEntries: [],
  users: [],
  currentUser: null,
  ui: {
    editingQuoteKey: "",
    editingRevenueId: "",
    editingCostId: "",
    editingBusinessId: "",
  },
};

const loginView = document.getElementById("loginView");
const appView = document.getElementById("appView");
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginStatus = document.getElementById("loginStatus");
const resetLoginUsersBtn = document.getElementById("resetLoginUsersBtn");
const quickAdminLoginBtn = document.getElementById("quickAdminLoginBtn");
const currentUserLabel = document.getElementById("currentUserLabel");
const currentRoleLabel = document.getElementById("currentRoleLabel");
const logoutBtn = document.getElementById("logoutBtn");
const overviewQuoteCount = document.getElementById("overviewQuoteCount");
const overviewQuoteHint = document.getElementById("overviewQuoteHint");
const overviewQuoteCoverage = document.getElementById("overviewQuoteCoverage");
const overviewQuoteCoverageHint = document.getElementById("overviewQuoteCoverageHint");
const overviewRevenueTotal = document.getElementById("overviewRevenueTotal");
const overviewRevenueHint = document.getElementById("overviewRevenueHint");
const overviewCostTotal = document.getElementById("overviewCostTotal");
const overviewCostHint = document.getElementById("overviewCostHint");
const overviewNetProfit = document.getElementById("overviewNetProfit");
const overviewNetProfitHint = document.getElementById("overviewNetProfitHint");
const overviewPendingCount = document.getElementById("overviewPendingCount");
const overviewPendingHint = document.getElementById("overviewPendingHint");
const quoteFormulaBreakdown = document.getElementById("quoteFormulaBreakdown");
const salesNotice = document.getElementById("salesNotice");
const adminPanelWrap = document.getElementById("adminPanelWrap");
const adjustPanel = document.getElementById("adjustPanel");
const superAdminUserSection = document.getElementById("superAdminUserSection");
const systemModuleView = document.getElementById("systemModuleView");
const costModuleView = document.getElementById("costModuleView");
const businessModuleView = document.getElementById("businessModuleView");
const systemNoPermission = document.getElementById("systemNoPermission");
const systemModuleNavBtn = document.getElementById("systemModuleNavBtn");
const costModuleNavBtn = document.getElementById("costModuleNavBtn");
const businessModuleNavBtn = document.getElementById("businessModuleNavBtn");
const moduleNavButtons = Array.from(document.querySelectorAll(".side-btn[data-module-target]"));
const moduleViews = Array.from(document.querySelectorAll(".module-view"));
const l3Cards = Array.from(document.querySelectorAll(".l3-card"));

const adjustCustomer = document.getElementById("adjustCustomer");
const adjustSku = document.getElementById("adjustSku");
const adjustKeyword = document.getElementById("adjustKeyword");
const loadAdjustBtn = document.getElementById("loadAdjustBtn");
const saveAdjustBtn = document.getElementById("saveAdjustBtn");
const adjustStatus = document.getElementById("adjustStatus");
const adjustRrpGrid = document.getElementById("adjustRrpGrid");
const adjustDbRate = document.getElementById("adjustDbRate");
const adjustCustomerMargin = document.getElementById("adjustCustomerMargin");
const adjustServiceFee = document.getElementById("adjustServiceFee");
const adjustStkBuffer = document.getElementById("adjustStkBuffer");
const adjustFrontMargin = document.getElementById("adjustFrontMargin");

const newUserUsername = document.getElementById("newUserUsername");
const newUserDisplayName = document.getElementById("newUserDisplayName");
const newUserRole = document.getElementById("newUserRole");
const newUserPassword = document.getElementById("newUserPassword");
const newUserPassword2 = document.getElementById("newUserPassword2");
const createUserBtn = document.getElementById("createUserBtn");
const passwordUserSelect = document.getElementById("passwordUserSelect");
const changePasswordInput = document.getElementById("changePasswordInput");
const changePasswordBtn = document.getElementById("changePasswordBtn");
const userManageStatus = document.getElementById("userManageStatus");
const usersTableBody = document.querySelector("#usersTable tbody");

const form = document.getElementById("recordForm");
const queryCustomer = document.getElementById("queryCustomer");
const querySku = document.getElementById("querySku");
const queryMonth = document.getElementById("queryMonth");
const queryKeyword = document.getElementById("queryKeyword");
const queryBtn = document.getElementById("queryBtn");
const queryResult = document.getElementById("queryResult");
const revenueInputCustomer = document.getElementById("revenueInputCustomer");
const revenueInputSku = document.getElementById("revenueInputSku");
const revenueInputMonth = document.getElementById("revenueInputMonth");
const revenueInputQty = document.getElementById("revenueInputQty");
const revenueInputUnitPrice = document.getElementById("revenueInputUnitPrice");
const revenueInputUnitCost = document.getElementById("revenueInputUnitCost");
const saveRevenueBtn = document.getElementById("saveRevenueBtn");
const revenueStatus = document.getElementById("revenueStatus");
const revenueEntrySection = document.getElementById("revenueEntrySection");
const revenueUploadSection = document.getElementById("revenueUploadSection");
const revenueUploadInput = document.getElementById("revenueUploadInput");
const downloadRevenueTemplateBtn = document.getElementById("downloadRevenueTemplateBtn");
const revenueUploadStatus = document.getElementById("revenueUploadStatus");
const revenueFilterCustomer = document.getElementById("revenueFilterCustomer");
const revenueFilterSku = document.getElementById("revenueFilterSku");
const revenueFilterMonth = document.getElementById("revenueFilterMonth");
const revenueTotalAmount = document.getElementById("revenueTotalAmount");
const revenueTotalQty = document.getElementById("revenueTotalQty");
const revenueRecordCount = document.getElementById("revenueRecordCount");
const revenueAvgPrice = document.getElementById("revenueAvgPrice");
const grossSection = document.getElementById("grossSection");
const grossNoPermission = document.getElementById("grossNoPermission");
const grossTotalAmount = document.getElementById("grossTotalAmount");
const grossMarginRate = document.getElementById("grossMarginRate");
const grossAvgUnitProfit = document.getElementById("grossAvgUnitProfit");
const grossAvgUnitMargin = document.getElementById("grossAvgUnitMargin");
const grossResultSummary = document.getElementById("grossResultSummary");
const grossMarginResultSummary = document.getElementById("grossMarginResultSummary");
const salesResultSummary = document.getElementById("salesResultSummary");
const incomeResultSummary = document.getElementById("incomeResultSummary");
const deepseekApiKey = document.getElementById("deepseekApiKey");
const aiFocusInput = document.getElementById("aiFocusInput");
const runAiAnalysisBtn = document.getElementById("runAiAnalysisBtn");
const aiStatus = document.getElementById("aiStatus");
const aiResult = document.getElementById("aiResult");
const revenueRecordsTableBody = document.querySelector("#revenueRecordsTable tbody");
const revenueRecordsHeaderRow = document.querySelector("#revenueRecordsTable thead tr");
const revenueByCustomerTableBody = document.querySelector("#revenueByCustomerTable tbody");
const revenueBySkuTableBody = document.querySelector("#revenueBySkuTable tbody");
const revenueByMonthTableBody = document.querySelector("#revenueByMonthTable tbody");
const grossByCustomerTableBody = document.querySelector("#grossByCustomerTable tbody");
const grossByCategoryTableBody = document.querySelector("#grossByCategoryTable tbody");
const grossBySkuTableBody = document.querySelector("#grossBySkuTable tbody");
const costEntrySection = document.getElementById("costEntrySection");
const costUploadSection = document.getElementById("costUploadSection");
const costInputName = document.getElementById("costInputName");
const costInputAmount = document.getElementById("costInputAmount");
const costInputOrderCreatedAt = document.getElementById("costInputOrderCreatedAt");
const costInputOccurredAt = document.getElementById("costInputOccurredAt");
const costInputAccrualStatus = document.getElementById("costInputAccrualStatus");
const costInputDescription = document.getElementById("costInputDescription");
const costInputSourceText = document.getElementById("costInputSourceText");
const costMatchedL1 = document.getElementById("costMatchedL1");
const costMatchedL2 = document.getElementById("costMatchedL2");
const costMatchedL3 = document.getElementById("costMatchedL3");
const costImageRecognizeInput = document.getElementById("costImageRecognizeInput");
const recognizeCostImageBtn = document.getElementById("recognizeCostImageBtn");
const recognizeCostAiBtn = document.getElementById("recognizeCostAiBtn");
const saveCostBtn = document.getElementById("saveCostBtn");
const costStatus = document.getElementById("costStatus");
const costUploadInput = document.getElementById("costUploadInput");
const downloadCostTemplateBtn = document.getElementById("downloadCostTemplateBtn");
const costUploadStatus = document.getElementById("costUploadStatus");
const costGeminiApiKey = document.getElementById("costGeminiApiKey");
const costDeepseekApiKey = document.getElementById("costDeepseekApiKey");
const costManualReviewSection = document.getElementById("costManualReviewSection");
const costPendingRecordSelect = document.getElementById("costPendingRecordSelect");
const costReviewName = document.getElementById("costReviewName");
const costReviewAmount = document.getElementById("costReviewAmount");
const costReviewL1 = document.getElementById("costReviewL1");
const costReviewL2 = document.getElementById("costReviewL2");
const costReviewL3 = document.getElementById("costReviewL3");
const costReviewDescription = document.getElementById("costReviewDescription");
const costReviewOrderCreatedAt = document.getElementById("costReviewOrderCreatedAt");
const costReviewOccurredAt = document.getElementById("costReviewOccurredAt");
const costReviewAccrualStatus = document.getElementById("costReviewAccrualStatus");
const loadPendingCostBtn = document.getElementById("loadPendingCostBtn");
const savePendingCostReviewBtn = document.getElementById("savePendingCostReviewBtn");
const costReviewStatus = document.getElementById("costReviewStatus");
const costFilterL1 = document.getElementById("costFilterL1");
const costFilterL2 = document.getElementById("costFilterL2");
const costFilterL3 = document.getElementById("costFilterL3");
const costFilterMonth = document.getElementById("costFilterMonth");
const costFilterAccrualStatus = document.getElementById("costFilterAccrualStatus");
const costFilterOrderMonth = document.getElementById("costFilterOrderMonth");
const costFilterKeyword = document.getElementById("costFilterKeyword");
const costTotalAmount = document.getElementById("costTotalAmount");
const costRecordCount = document.getElementById("costRecordCount");
const costMatchedCount = document.getElementById("costMatchedCount");
const costAvgAmount = document.getElementById("costAvgAmount");
const costResultSummary = document.getElementById("costResultSummary");
const costAiFocusInput = document.getElementById("costAiFocusInput");
const runCostAiAnalysisBtn = document.getElementById("runCostAiAnalysisBtn");
const costAiStatus = document.getElementById("costAiStatus");
const costAiResult = document.getElementById("costAiResult");
const costRecordsTableBody = document.querySelector("#costRecordsTable tbody");
const costByL1TableBody = document.querySelector("#costByL1Table tbody");
const costByL2TableBody = document.querySelector("#costByL2Table tbody");
const costByL3TableBody = document.querySelector("#costByL3Table tbody");
const businessYearSelect = document.getElementById("businessYearSelect");
const businessPeriodTypeSelect = document.getElementById("businessPeriodTypeSelect");
const businessPeriodValueSelect = document.getElementById("businessPeriodValueSelect");
const refreshBusinessBtn = document.getElementById("refreshBusinessBtn");
const businessRevenueTotal = document.getElementById("businessRevenueTotal");
const businessOperatingProfitTotal = document.getElementById("businessOperatingProfitTotal");
const businessNetProfitTotal = document.getElementById("businessNetProfitTotal");
const businessNetMarginTotal = document.getElementById("businessNetMarginTotal");
const businessAnalysisTableHead = document.getElementById("businessAnalysisTableHead");
const businessAnalysisTableBody = document.getElementById("businessAnalysisTableBody");
const businessSourceSummary = document.getElementById("businessSourceSummary");
const businessAnalysisSummary = document.getElementById("businessAnalysisSummary");
const businessEntrySection = document.getElementById("businessEntrySection");
const businessUploadSection = document.getElementById("businessUploadSection");
const businessInputMonth = document.getElementById("businessInputMonth");
const businessInputFactoryRebate = document.getElementById("businessInputFactoryRebate");
const businessInputIncomeTaxRate = document.getElementById("businessInputIncomeTaxRate");
const businessInputRemark = document.getElementById("businessInputRemark");
const saveBusinessEntryBtn = document.getElementById("saveBusinessEntryBtn");
const businessEntryStatus = document.getElementById("businessEntryStatus");
const businessUploadInput = document.getElementById("businessUploadInput");
const downloadBusinessTemplateBtn = document.getElementById("downloadBusinessTemplateBtn");
const businessUploadStatus = document.getElementById("businessUploadStatus");
const businessAiFocusInput = document.getElementById("businessAiFocusInput");
const runBusinessAiAnalysisBtn = document.getElementById("runBusinessAiAnalysisBtn");
const businessAiStatus = document.getElementById("businessAiStatus");
const businessAiResult = document.getElementById("businessAiResult");
const businessEntryTableBody = document.querySelector("#businessEntryTable tbody");
const csvInput = document.getElementById("csvInput");
const uploadStatus = document.getElementById("uploadStatus");
const downloadTemplateBtn = document.getElementById("downloadTemplateBtn");
const recordsTableBody = document.querySelector("#recordsTable tbody");
const rrpGrid = document.getElementById("rrpGrid");

init();

function init() {
  createMonthInputs();
  createAdjustMonthInputs();
  createMonthSelector();
  initModuleNavigation();
  initL3Cards();
  bindEvents();
  loadUsers();
  loadRecords();
  loadSalesRecords();
  loadCostRecords();
  loadBusinessEntries();
  restoreSession();
  initAiKey();
  renderAuthState();
  renderAll();
}

function bindEvents() {
  loginForm.addEventListener("submit", onLogin);
  resetLoginUsersBtn?.addEventListener("click", onResetDefaultUsers);
  quickAdminLoginBtn?.addEventListener("click", onQuickAdminLogin);
  logoutBtn.addEventListener("click", onLogout);

  queryCustomer.addEventListener("change", refreshSkuOptions);
  queryKeyword.addEventListener("input", refreshSkuOptions);
  queryBtn.addEventListener("click", onQueryPrice);
  adjustCustomer.addEventListener("change", refreshAdjustSkuOptions);
  adjustKeyword.addEventListener("input", refreshAdjustSkuOptions);
  loadAdjustBtn.addEventListener("click", onLoadAdjustRecord);
  saveAdjustBtn.addEventListener("click", onSaveAdjustRecord);
  revenueInputCustomer.addEventListener("change", refreshRevenueInputSkuOptions);
  saveRevenueBtn.addEventListener("click", onSaveRevenueRecord);
  revenueUploadInput.addEventListener("change", onUploadRevenueFile);
  downloadRevenueTemplateBtn.addEventListener("click", onDownloadRevenueTemplate);
  revenueFilterCustomer.addEventListener("change", () => {
    refreshRevenueFilterSkuOptions();
    renderRevenueModule();
  });
  revenueFilterSku.addEventListener("change", renderRevenueModule);
  revenueFilterMonth.addEventListener("input", renderRevenueModule);
  revenueRecordsTableBody.addEventListener("click", onRevenueTableAction);
  runAiAnalysisBtn.addEventListener("click", onRunAiAnalysis);
  deepseekApiKey.addEventListener("input", onDeepseekKeyInput);
  costInputName.addEventListener("input", syncCostClassificationPreview);
  costInputDescription.addEventListener("input", syncCostClassificationPreview);
  costInputSourceText.addEventListener("input", syncCostClassificationPreview);
  recognizeCostImageBtn.addEventListener("click", () => costImageRecognizeInput.click());
  costImageRecognizeInput.addEventListener("change", onRecognizeCostImageFile);
  recognizeCostAiBtn.addEventListener("click", onRecognizeCostWithAi);
  saveCostBtn.addEventListener("click", onSaveCostRecord);
  costUploadInput.addEventListener("change", onUploadCostFile);
  downloadCostTemplateBtn.addEventListener("click", onDownloadCostTemplate);
  costGeminiApiKey?.addEventListener("input", onGeminiKeyInput);
  costDeepseekApiKey.addEventListener("input", onDeepseekKeyInput);
  costPendingRecordSelect.addEventListener("change", onPendingCostSelectionChange);
  costReviewL1.addEventListener("change", () => {
    refreshCostReviewL2Options();
    refreshCostReviewL3Options();
  });
  costReviewL2.addEventListener("change", refreshCostReviewL3Options);
  loadPendingCostBtn.addEventListener("click", onLoadPendingCostRecord);
  savePendingCostReviewBtn.addEventListener("click", onSavePendingCostReview);
  costFilterL1.addEventListener("change", () => {
    refreshCostFilterL2Options();
    refreshCostFilterL3Options();
    renderCostModule();
  });
  costFilterL2.addEventListener("change", () => {
    refreshCostFilterL3Options();
    renderCostModule();
  });
  costFilterL3.addEventListener("change", renderCostModule);
  costFilterMonth.addEventListener("input", renderCostModule);
  costFilterAccrualStatus.addEventListener("change", renderCostModule);
  costFilterOrderMonth.addEventListener("input", renderCostModule);
  costFilterKeyword.addEventListener("input", renderCostModule);
  costRecordsTableBody.addEventListener("click", onCostTableAction);
  runCostAiAnalysisBtn.addEventListener("click", onRunCostAiCostAnalysis);
  businessYearSelect.addEventListener("change", renderBusinessModule);
  businessPeriodTypeSelect.addEventListener("change", () => {
    refreshBusinessPeriodValueOptions();
    renderBusinessModule();
  });
  businessPeriodValueSelect.addEventListener("change", renderBusinessModule);
  refreshBusinessBtn.addEventListener("click", renderBusinessModule);
  saveBusinessEntryBtn.addEventListener("click", onSaveBusinessEntry);
  businessUploadInput.addEventListener("change", onUploadBusinessFile);
  downloadBusinessTemplateBtn.addEventListener("click", onDownloadBusinessTemplate);
  runBusinessAiAnalysisBtn.addEventListener("click", onRunBusinessAiAnalysis);
  businessEntryTableBody.addEventListener("click", onBusinessEntryTableAction);

  form.addEventListener("submit", onSaveRecord);
  csvInput.addEventListener("change", onUploadCsv);
  downloadTemplateBtn.addEventListener("click", onDownloadTemplate);
  recordsTableBody.addEventListener("click", onRecordTableAction);

  createUserBtn.addEventListener("click", onCreateUser);
  changePasswordBtn.addEventListener("click", onChangePassword);
  usersTableBody.addEventListener("click", onUserTableAction);
}

function initModuleNavigation() {
  moduleNavButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = String(button.dataset.moduleTarget || "").trim();
      if (!targetId) {
        return;
      }
      setActiveModule(targetId);
    });
  });

  const saved = localStorage.getItem(ACTIVE_MODULE_KEY);
  const fallback = moduleNavButtons[0]?.dataset.moduleTarget || "";
  const hasSaved = moduleViews.some((view) => view.id === saved);
  setActiveModule(hasSaved ? String(saved) : String(fallback));
}

function setActiveModule(targetId) {
  moduleViews.forEach((view) => {
    view.classList.toggle("hidden", view.id !== targetId);
  });
  moduleNavButtons.forEach((button) => {
    const matched = button.dataset.moduleTarget === targetId;
    button.classList.toggle("active", matched);
    button.setAttribute("aria-pressed", String(matched));
  });
  if (targetId) {
    localStorage.setItem(ACTIVE_MODULE_KEY, targetId);
  }
}

function initL3Cards() {
  l3Cards.forEach((card) => {
    const toggle = card.querySelector(".l3-toggle");
    if (!toggle) {
      return;
    }
    syncL3Card(card);
    toggle.addEventListener("click", () => {
      card.classList.toggle("collapsed");
      syncL3Card(card);
    });
  });
}

function syncL3Card(card) {
  const toggle = card.querySelector(".l3-toggle");
  if (!toggle) {
    return;
  }
  const collapsed = card.classList.contains("collapsed");
  toggle.textContent = collapsed ? "展开" : "收起";
  toggle.setAttribute("aria-expanded", String(!collapsed));
}

function loadUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) {
    state.users = DEFAULT_USERS.map((item) => ({ ...item }));
    persistUsers();
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error("invalid users");
    }
    state.users = parsed
      .filter((item) => item && item.username && item.password && ROLE_CONFIG[item.role])
      .map((item) => ({
        username: String(item.username),
        password: String(item.password),
        role: String(item.role),
        displayName: String(item.displayName || item.username),
        disabled: Boolean(item.disabled),
      }));
    if (state.users.length === 0) {
      throw new Error("no valid users");
    }
  } catch (error) {
    state.users = DEFAULT_USERS.map((item) => ({ ...item }));
    persistUsers();
  }
}

function persistUsers() {
  localStorage.setItem(USERS_KEY, JSON.stringify(state.users));
}

function normalizeMonthlyRrp(source) {
  const monthlyRrp = {};
  for (let month = 1; month <= 12; month += 1) {
    const value = source?.[month] ?? source?.[String(month)];
    const parsed = parseNumber(value ?? "");
    monthlyRrp[month] = isFinite(parsed) ? parsed : null;
  }
  return monthlyRrp;
}

function loadRecords() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    state.records = createSeedData();
    persistRecords();
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    state.records = Array.isArray(parsed)
      ? parsed
          .filter((item) => item && item.customerName && item.sku)
          .map((item) => ({
            ...item,
            monthlyRrp: normalizeMonthlyRrp(item.monthlyRrp),
            dbRate: parseRate(item.dbRate),
            customerMargin: parseRate(item.customerMargin),
            serviceFee: parseRate(item.serviceFee),
            stkBuffer: parseNumber(item.stkBuffer ?? 0),
            frontMargin: parseRate(item.frontMargin),
            vatRate: parseRate(item.vatRate, 0.2),
            ura: parseNumber(item.ura ?? 0),
            createdAt: String(item.createdAt || item.updatedAt || new Date().toISOString()),
            updatedAt: String(item.updatedAt || item.createdAt || new Date().toISOString()),
            ...normalizeApprovalMeta(item),
          }))
      : [];
  } catch (error) {
    state.records = createSeedData();
    persistRecords();
  }
}

function loadSalesRecords() {
  const raw = localStorage.getItem(SALES_STORAGE_KEY);
  if (!raw) {
    state.salesRecords = [];
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      state.salesRecords = [];
      return;
    }
    state.salesRecords = parsed
      .filter((item) => item && item.customerName && item.sku && item.saleMonth)
      .map((item) => {
        const quantity = Number(item.quantity);
        const unitPrice = Number(item.unitPrice);
        const unitCost = Number(item.unitCost ?? item.fobCost ?? item.purchaseCost);
        const normalizedQuantity = isFinite(quantity) ? quantity : 0;
        const normalizedUnitPrice = isFinite(unitPrice) ? unitPrice : 0;
        const normalizedUnitCost = isFinite(unitCost) && unitCost > 0 ? unitCost : NaN;
        const revenue =
          Number.isFinite(Number(item.revenue)) && Number(item.revenue) > 0
            ? Number(item.revenue)
            : normalizedQuantity * normalizedUnitPrice;
        const category = String(item.category || resolveSalesCategory(String(item.customerName), String(item.sku)));
        const perUnitGrossProfit = isFinite(normalizedUnitCost) ? normalizedUnitPrice - normalizedUnitCost : NaN;
        const grossProfit =
          Number.isFinite(Number(item.grossProfit))
            ? Number(item.grossProfit)
            : isFinite(perUnitGrossProfit)
              ? perUnitGrossProfit * normalizedQuantity
              : NaN;
        const grossMargin =
          Number.isFinite(Number(item.grossMargin))
            ? Number(item.grossMargin)
            : isFinite(normalizedUnitCost) && normalizedUnitCost > 0
              ? perUnitGrossProfit / normalizedUnitCost
              : NaN;
        return {
          id: String(item.id || createRevenueId()),
          customerName: String(item.customerName),
          sku: String(item.sku),
          saleMonth: String(item.saleMonth),
          category,
          quantity: normalizedQuantity,
          unitPrice: normalizedUnitPrice,
          unitCost: isFinite(normalizedUnitCost) ? normalizedUnitCost : null,
          revenue: isFinite(revenue) ? revenue : 0,
          grossProfit: isFinite(grossProfit) ? grossProfit : null,
          grossMargin: isFinite(grossMargin) ? grossMargin : null,
          priceSource: item.priceSource === "quote" ? "quote" : "manual",
          costSource: "FOB",
          createdAt: String(item.createdAt || new Date().toISOString()),
          updatedAt: String(item.updatedAt || item.createdAt || new Date().toISOString()),
          ...normalizeApprovalMeta(item),
        };
      })
      .filter((item) => item.quantity > 0 && item.unitPrice > 0 && item.revenue >= 0);
  } catch (error) {
    state.salesRecords = [];
  }
}

function loadCostRecords() {
  const raw = localStorage.getItem(COST_STORAGE_KEY);
  if (!raw) {
    state.costRecords = [];
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      state.costRecords = [];
      return;
    }
    state.costRecords = parsed
      .filter((item) => item && item.costName && item.orderCreatedAt && item.costOccurredAt)
      .map((item) => {
        const amount = Number(item.amount);
        const exact = COST_CLASSIFICATIONS.find(
          (classification) => classification.l1 === item.l1 && classification.l2 === item.l2 && classification.l3 === item.l3
        );
        const matched = exact
          ? {
              l1: exact.l1,
              l2: exact.l2,
              l3: exact.l3,
              matched: true,
              matchedBy: String(item.matchedBy || "人工指定"),
            }
          : matchCostClassification({
              l1: item.l1,
              l2: item.l2,
              l3: item.l3,
              costName: item.costName,
              description: item.description,
            });
        return {
          id: String(item.id || createCostId()),
          costName: String(item.costName),
          amount: isFinite(amount) ? amount : 0,
          orderCreatedAt: String(item.orderCreatedAt),
          costOccurredAt: String(item.costOccurredAt),
          accrualStatus: normalizeAccrualStatus(item.accrualStatus, item.invoiceStatus, item.sourceType),
          description: String(item.description || ""),
          sourceText: String(item.sourceText || item.evidenceText || ""),
          sourceLanguage: String(item.sourceLanguage || ""),
          l1: matched.l1,
          l2: matched.l2,
          l3: matched.l3,
          matched: matched.matched,
          matchedBy: matched.matchedBy,
          sourceType: String(item.sourceType || "manual"),
          sourceFileName: String(item.sourceFileName || ""),
          createdAt: String(item.createdAt || new Date().toISOString()),
          updatedAt: String(item.updatedAt || item.createdAt || new Date().toISOString()),
          ...normalizeApprovalMeta(item),
        };
      })
      .filter((item) => item.amount >= 0);
  } catch (error) {
    state.costRecords = [];
  }
}

function loadBusinessEntries() {
  const raw = localStorage.getItem(BUSINESS_ENTRY_STORAGE_KEY);
  if (!raw) {
    state.businessEntries = [];
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      state.businessEntries = [];
      return;
    }
    state.businessEntries = parsed
      .filter((item) => item && item.month)
      .map((item) => ({
        id: String(item.id || `biz_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`),
        month: normalizeSaleMonth(item.month),
        factoryRebate: isFinite(Number(item.factoryRebate)) ? Number(item.factoryRebate) : 0,
        incomeTaxRate: isFinite(Number(item.incomeTaxRate)) ? Number(item.incomeTaxRate) : 0.25,
        remark: String(item.remark || ""),
        createdAt: String(item.createdAt || new Date().toISOString()),
        updatedAt: String(item.updatedAt || item.createdAt || new Date().toISOString()),
        ...normalizeApprovalMeta(item),
      }))
      .filter((item) => item.month);
  } catch (error) {
    state.businessEntries = [];
  }
}

function persistRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
}

function persistSalesRecords() {
  localStorage.setItem(SALES_STORAGE_KEY, JSON.stringify(state.salesRecords));
}

function persistCostRecords() {
  localStorage.setItem(COST_STORAGE_KEY, JSON.stringify(state.costRecords));
}

function persistBusinessEntries() {
  localStorage.setItem(BUSINESS_ENTRY_STORAGE_KEY, JSON.stringify(state.businessEntries));
}

function restoreSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) {
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    const user = findUserByUsername(parsed.username);
    if (!user || user.disabled) {
      localStorage.removeItem(SESSION_KEY);
      return;
    }
    state.currentUser = {
      username: user.username,
      displayName: user.displayName,
      role: user.role,
    };
  } catch (error) {
    localStorage.removeItem(SESSION_KEY);
  }
}

function initAiKey() {
  const savedKey = localStorage.getItem(DEEPSEEK_KEY_STORAGE);
  if (savedKey) {
    deepseekApiKey.value = savedKey;
    if (costDeepseekApiKey) {
      costDeepseekApiKey.value = savedKey;
    }
  }
  const geminiSavedKey = localStorage.getItem(GEMINI_KEY_STORAGE);
  if (geminiSavedKey && costGeminiApiKey) {
    costGeminiApiKey.value = geminiSavedKey;
  }
}

function onDeepseekKeyInput(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  const value = String(target.value || "").trim();
  localStorage.setItem(DEEPSEEK_KEY_STORAGE, value);
  if (target !== deepseekApiKey) {
    deepseekApiKey.value = value;
  }
  if (costDeepseekApiKey && target !== costDeepseekApiKey) {
    costDeepseekApiKey.value = value;
  }
}

function onGeminiKeyInput(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  const value = String(target.value || "").trim();
  localStorage.setItem(GEMINI_KEY_STORAGE, value);
  if (costGeminiApiKey && target !== costGeminiApiKey) {
    costGeminiApiKey.value = value;
  }
}

function createSeedData() {
  return [
    {
      id: `quote_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      customerName: "示例客户A",
      sku: "Reno14",
      category: "手机",
      monthlyRrp: {
        1: 529,
        2: 529,
        3: 449,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
      },
      dbRate: 0.0334,
      customerMargin: 0.124,
      serviceFee: 0.0012,
      stkBuffer: 5,
      frontMargin: 0.005,
      vatRate: 0.2,
      ura: 5.5,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      approvalStatus: "confirmed",
      confirmedAt: new Date().toISOString(),
      confirmedBy: "系统示例数据",
    },
  ];
}

function onLogin(event) {
  event.preventDefault();
  const username = String(usernameInput.value || "").trim().toLowerCase();
  const password = String(passwordInput.value || "").trim();
  const user = findUserForLogin(username, password);

  if (!user) {
    setLoginStatus("用户名或密码错误。", "error");
    return;
  }
  if (user.disabled) {
    setLoginStatus("账号已被禁用，请联系超级管理员。", "error");
    return;
  }

  state.currentUser = {
    username: user.username,
    displayName: user.displayName,
    role: user.role,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(state.currentUser));
  setLoginStatus("", "ok");
  loginForm.reset();
  renderAuthState();
  renderAll();
}

function onResetDefaultUsers() {
  const confirmed = window.confirm("确认重置默认账号？这会清空当前浏览器保存的登录账号列表，但不会删除报价、销量、成本和经营数据。");
  if (!confirmed) {
    return;
  }

  resetUsersToDefaults();
  setLoginStatus("默认账号已恢复。可使用 superadmin / Admin@123，也兼容 admin / admin123。", "ok");
}

function onQuickAdminLogin() {
  resetUsersToDefaults();
  const adminUser = state.users.find((item) => item.role === "super_admin" && !item.disabled) || DEFAULT_USERS[0];
  state.currentUser = {
    username: adminUser.username,
    displayName: adminUser.displayName,
    role: adminUser.role,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(state.currentUser));
  setLoginStatus("已使用管理员账号直接登录。", "ok");
  renderAuthState();
  renderAll();
}

function onLogout() {
  state.currentUser = null;
  localStorage.removeItem(SESSION_KEY);
  queryResult.classList.add("hidden");
  renderAuthState();
}

function resetUsersToDefaults() {
  localStorage.removeItem(USERS_KEY);
  localStorage.removeItem(SESSION_KEY);
  state.currentUser = null;
  loadUsers();
  loginForm.reset();
  renderAuthState();
  renderAll();
}

function renderAuthState() {
  const loggedIn = Boolean(state.currentUser);
  loginView.classList.toggle("hidden", loggedIn);
  appView.classList.toggle("hidden", !loggedIn);
  if (!loggedIn) {
    return;
  }

  const role = getRoleConfig();
  currentUserLabel.textContent = `${state.currentUser.displayName} (${state.currentUser.username})`;
  currentRoleLabel.textContent = role.label;
  adminPanelWrap.classList.toggle("hidden", !role.canManageQuoteData);
  adjustPanel.classList.toggle("hidden", !role.canAdjustPricing);
  revenueEntrySection.classList.toggle("hidden", !role.canEnterSalesData);
  revenueUploadSection.classList.toggle("hidden", !role.canUploadSalesData);
  salesNotice.classList.toggle("hidden", role.canManageQuoteData);
  superAdminUserSection.classList.toggle("hidden", !role.canManageUsers);
  systemNoPermission.classList.toggle("hidden", role.canManageUsers);
  if (systemModuleNavBtn) {
    systemModuleNavBtn.classList.toggle("hidden", !role.canManageUsers);
  }
  if (costModuleNavBtn) {
    costModuleNavBtn.classList.toggle("hidden", !role.canViewCostModule);
  }
  if (businessModuleNavBtn) {
    businessModuleNavBtn.classList.toggle("hidden", !role.canViewBusinessModule);
  }
  costEntrySection.classList.toggle("hidden", !role.canManageCostData);
  costUploadSection.classList.toggle("hidden", !role.canManageCostData);
  costManualReviewSection.classList.toggle("hidden", !role.canManageCostData);
  businessEntrySection.classList.toggle("hidden", !role.canManageBusinessData);
  businessUploadSection.classList.toggle("hidden", !role.canManageBusinessData);
  if (
    !role.canManageUsers &&
    (localStorage.getItem(ACTIVE_MODULE_KEY) === "systemModuleView" || !systemModuleView.classList.contains("hidden"))
  ) {
    setActiveModule("quoteModuleView");
  }
  if (
    !role.canViewCostModule &&
    (localStorage.getItem(ACTIVE_MODULE_KEY) === "costModuleView" || !costModuleView.classList.contains("hidden"))
  ) {
    setActiveModule("quoteModuleView");
  }
  if (
    !role.canViewBusinessModule &&
    (localStorage.getItem(ACTIVE_MODULE_KEY) === "businessModuleView" || !businessModuleView.classList.contains("hidden"))
  ) {
    setActiveModule("quoteModuleView");
  }
  grossSection.classList.toggle("hidden", !role.canViewGrossProfit);
  grossNoPermission.classList.toggle("hidden", role.canViewGrossProfit);
}

function findUserForLogin(username, password) {
  const normalizedUsername = String(username || "").trim().toLowerCase();
  const normalizedPassword = String(password || "");
  if (!normalizedUsername || !normalizedPassword) {
    return null;
  }

  return (
    state.users.find((item) => {
      const storedUsername = String(item.username || "").trim().toLowerCase();
      if (storedUsername === normalizedUsername && item.password === normalizedPassword) {
        return true;
      }

      const compatGroup = getBuiltInLoginCompat(normalizedUsername);
      if (!compatGroup) {
        return false;
      }

      const sameRole = item.role === compatGroup.role;
      const sameAliasGroup = compatGroup.aliases.includes(storedUsername);
      if (!sameRole || !sameAliasGroup) {
        return false;
      }

      return item.password === normalizedPassword || compatGroup.passwords.includes(normalizedPassword);
    }) || null
  );
}

function getBuiltInLoginCompat(username) {
  const normalizedUsername = String(username || "").trim().toLowerCase();
  return BUILT_IN_LOGIN_COMPAT.find((item) => item.aliases.includes(normalizedUsername)) || null;
}

function renderAll() {
  refreshCustomerOptions();
  refreshAdjustOptions();
  refreshRevenueInputOptions();
  refreshRevenueFilterOptions();
  refreshCostFilters();
  refreshPendingCostOptions();
  ensureCostReviewOptions();
  ensureCostFormDefaults();
  refreshBusinessYearOptions();
  ensureBusinessFormDefaults();
  renderOverviewDashboard();
  renderRecordsTable();
  renderRevenueModule();
  renderCostModule();
  renderBusinessModule();
  renderUserManagement();
}

function renderUserManagement() {
  const role = getRoleConfig();
  if (!role.canManageUsers) {
    usersTableBody.innerHTML = "";
    passwordUserSelect.innerHTML = "";
    userManageStatus.textContent = "";
    return;
  }
  renderUsersTable();
  renderPasswordUserOptions();
}

function getRoleConfig() {
  if (!state.currentUser) {
    return ROLE_CONFIG.sales_rep;
  }
  return ROLE_CONFIG[state.currentUser.role] || ROLE_CONFIG.sales_rep;
}

function hasAdminPermission() {
  return getRoleConfig().canManageQuoteData;
}

function hasAdjustPermission() {
  return getRoleConfig().canAdjustPricing;
}

function isSuperAdmin() {
  return getRoleConfig().canManageUsers;
}

function canViewGrossProfit() {
  return getRoleConfig().canViewGrossProfit;
}

function canEnterSalesData() {
  return getRoleConfig().canEnterSalesData;
}

function canUploadSalesData() {
  return getRoleConfig().canUploadSalesData;
}

function canManageSalesData() {
  return getRoleConfig().canManageSalesData;
}

function canViewCostModule() {
  return getRoleConfig().canViewCostModule;
}

function canManageCostData() {
  return getRoleConfig().canManageCostData;
}

function canViewBusinessModule() {
  return getRoleConfig().canViewBusinessModule;
}

function canManageBusinessData() {
  return getRoleConfig().canManageBusinessData;
}

function canConfirmData() {
  return getRoleConfig().canConfirmData;
}

function createPendingApprovalMeta() {
  return {
    approvalStatus: "pending",
    confirmedAt: "",
    confirmedBy: "",
  };
}

function normalizeApprovalMeta(item, fallbackLabel = "历史数据") {
  const status = item?.approvalStatus === "pending" ? "pending" : "confirmed";
  return {
    approvalStatus: status,
    confirmedAt: status === "confirmed" ? String(item?.confirmedAt || item?.updatedAt || item?.createdAt || "") : "",
    confirmedBy: status === "confirmed" ? String(item?.confirmedBy || fallbackLabel) : "",
  };
}

function resetApprovalMeta(record) {
  record.approvalStatus = "pending";
  record.confirmedAt = "";
  record.confirmedBy = "";
  return record;
}

function confirmRecord(record) {
  record.approvalStatus = "confirmed";
  record.confirmedAt = new Date().toISOString();
  record.confirmedBy = state.currentUser?.displayName || state.currentUser?.username || "系统";
  return record;
}

function getApprovalTag(record) {
  const isConfirmed = record?.approvalStatus === "confirmed";
  const label = isConfirmed
    ? `已确认${record?.confirmedBy ? ` · ${record.confirmedBy}` : ""}`
    : "待确认";
  return `<span class="tag ${isConfirmed ? "tag-confirmed" : "tag-pending"}">${escapeHtml(label)}</span>`;
}

function getPendingApprovalCount() {
  return (
    state.records.filter((item) => item.approvalStatus === "pending").length +
    state.salesRecords.filter((item) => item.approvalStatus === "pending").length +
    state.costRecords.filter((item) => item.approvalStatus === "pending").length +
    state.businessEntries.filter((item) => item.approvalStatus === "pending").length
  );
}

function clearQuoteEditMode() {
  state.ui.editingQuoteKey = "";
}

function clearRevenueEditMode() {
  state.ui.editingRevenueId = "";
}

function clearCostEditMode() {
  state.ui.editingCostId = "";
}

function clearBusinessEditMode() {
  state.ui.editingBusinessId = "";
}

function renderOverviewDashboard() {
  const role = getRoleConfig();
  const quoteCount = state.records.length;
  const configuredMonths = state.records.reduce((sum, record) => {
    return (
      sum +
      Array.from({ length: 12 }, (_, index) => record?.monthlyRrp?.[index + 1]).filter((value) => isFinite(Number(value))).length
    );
  }, 0);
  const quoteCoverage = quoteCount > 0 ? configuredMonths / (quoteCount * 12) : 0;
  const revenueTotal = state.salesRecords.reduce((sum, item) => sum + Number(item.revenue || 0), 0);
  const costTotal = state.costRecords.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const currentBusiness = buildBusinessAnalysisDataset();
  const netProfit = Number(currentBusiness.totalData?.netProfit || 0);
  const pendingCount = getPendingApprovalCount();

  overviewQuoteCount.textContent = formatNumber(quoteCount);
  overviewQuoteHint.textContent = quoteCount === 0 ? "暂无报价数据" : `已配置 ${configuredMonths} 个月度 RRP 单元`;
  overviewQuoteCoverage.textContent = formatPercent(quoteCoverage);
  overviewQuoteCoverageHint.textContent = quoteCount === 0 ? "按月度 RRP 配置情况统计" : "按客户 SKU 的 12 个月 RRP 配置率统计";
  overviewRevenueTotal.textContent = formatMoney(revenueTotal);
  overviewRevenueHint.textContent = state.salesRecords.length === 0 ? "来自销售/收入分析模块" : `${formatNumber(state.salesRecords.length)} 条销售记录已入库`;
  overviewCostTotal.textContent = role.canViewCostModule ? formatMoney(costTotal) : "--";
  overviewCostHint.textContent = role.canViewCostModule
    ? state.costRecords.length === 0
      ? "来自成本分析模块"
      : `${formatNumber(state.costRecords.length)} 条成本记录已入库`
    : "仅财务负责人 / 超级管理员可见";
  overviewNetProfit.textContent = role.canViewBusinessModule ? formatMoney(netProfit) : "--";
  overviewNetProfitHint.textContent = role.canViewBusinessModule
    ? currentBusiness.selectedLabel
      ? `${currentBusiness.selectedLabel} 净利润联动刷新`
      : "收入、补贴、成本、税率联动"
    : "仅财务负责人 / 超级管理员可见";
  overviewPendingCount.textContent = role.canConfirmData ? formatNumber(pendingCount) : "--";
  overviewPendingHint.textContent = role.canConfirmData
    ? pendingCount === 0
      ? "当前没有待确认数据"
      : `报价/销售/成本/经营补充共 ${pendingCount} 条待确认`
    : "需确认权限可见";

  quoteFormulaBreakdown.innerHTML = `
    <p>输入层：<code>customer + SKU + 月份RRP + DB + customerMargin + serviceFee + stkBuffer + frontMargin + VAT + URA</code></p>
    <p>自动层：系统按客户 + SKU + 月份自动推导出货价，并在销量录入时自动回填单价、同步联动收入、毛利与经营利润。</p>
  `;
}

function getQuarterMonths(quarter) {
  const quarterMap = {
    Q1: ["01", "02", "03"],
    Q2: ["04", "05", "06"],
    Q3: ["07", "08", "09"],
    Q4: ["10", "11", "12"],
  };
  return quarterMap[quarter] || quarterMap.Q1;
}

function getBusinessPeriodTypeLabel(type) {
  const labels = {
    month: "月度",
    quarter: "季度",
    half_year: "半年度",
    year: "年度",
  };
  return labels[type] || "周期";
}

function getBusinessPeriodValueOptions(type) {
  if (type === "month") {
    return Array.from({ length: 12 }, (_, index) => {
      const month = String(index + 1).padStart(2, "0");
      return { value: month, label: `${index + 1}月` };
    });
  }
  if (type === "half_year") {
    return [
      { value: "H1", label: "上半年（1-6月）" },
      { value: "H2", label: "下半年（7-12月）" },
    ];
  }
  if (type === "year") {
    return [{ value: "YEAR", label: "全年（1-12月）" }];
  }
  return [
    { value: "Q1", label: "Q1（1-3月）" },
    { value: "Q2", label: "Q2（4-6月）" },
    { value: "Q3", label: "Q3（7-9月）" },
    { value: "Q4", label: "Q4（10-12月）" },
  ];
}

function refreshBusinessPeriodValueOptions() {
  const type = businessPeriodTypeSelect.value || "quarter";
  const currentValue = businessPeriodValueSelect.value || "";
  const options = getBusinessPeriodValueOptions(type);
  businessPeriodValueSelect.innerHTML = "";
  options.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    businessPeriodValueSelect.appendChild(option);
  });
  businessPeriodValueSelect.value = options.some((item) => item.value === currentValue) ? currentValue : options[0]?.value || "";
}

function getBusinessPeriodsBySelection() {
  const year = businessYearSelect.value || "2026";
  const type = businessPeriodTypeSelect.value || "quarter";
  const value = businessPeriodValueSelect.value || getBusinessPeriodValueOptions(type)[0]?.value || "";
  if (type === "month") {
    return [{ key: `${year}-${value}`, label: `${Number(value)}月`, months: [`${year}-${value}`] }];
  }
  if (type === "half_year") {
    const months = value === "H2" ? ["07", "08", "09", "10", "11", "12"] : ["01", "02", "03", "04", "05", "06"];
    return months.map((month) => ({ key: `${year}-${month}`, label: `${Number(month)}月`, months: [`${year}-${month}`] }));
  }
  if (type === "year") {
    return Array.from({ length: 12 }, (_, index) => {
      const month = String(index + 1).padStart(2, "0");
      return { key: `${year}-${month}`, label: `${index + 1}月`, months: [`${year}-${month}`] };
    });
  }
  return getQuarterMonths(value).map((month) => ({
    key: `${year}-${month}`,
    label: `${Number(month)}月`,
    months: [`${year}-${month}`],
  }));
}

function getBusinessSelectedLabel() {
  const year = businessYearSelect.value || "2026";
  const type = businessPeriodTypeSelect.value || "quarter";
  const value = businessPeriodValueSelect.value || "";
  if (type === "month") {
    return `${year}年${Number(value)}月`;
  }
  if (type === "half_year") {
    return `${year}年${value === "H2" ? "下半年" : "上半年"}`;
  }
  if (type === "year") {
    return `${year}年全年`;
  }
  return `${year}年${value}`;
}

function getBusinessFixedCostAmount(record) {
  return ["人力成本", "行政办公", "财务费用", "其他费用"].includes(record.l2) ? record.amount : 0;
}

function getBusinessVariableCostAmount(record) {
  return ["差旅招待", "物流费用", "销售费用"].includes(record.l2) ? record.amount : 0;
}

function refreshBusinessYearOptions() {
  const currentValue = businessYearSelect.value || "2026";
  const options = ["2026", "2027", "2028"];
  businessYearSelect.innerHTML = "";
  options.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = `${year}年`;
    businessYearSelect.appendChild(option);
  });
  businessYearSelect.value = options.includes(currentValue) ? currentValue : "2026";
  refreshBusinessPeriodValueOptions();
}

function ensureBusinessFormDefaults() {
  if (!businessInputMonth.value) {
    businessInputMonth.value = getCurrentMonthValue();
  }
  if (!businessInputIncomeTaxRate.value) {
    businessInputIncomeTaxRate.value = "25%";
  }
}

function ensureCostFormDefaults() {
  if (!canManageCostData()) {
    return;
  }
  if (!costInputOrderCreatedAt.value) {
    const now = new Date();
    costInputOrderCreatedAt.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
      now.getDate()
    ).padStart(2, "0")}T${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  }
  if (!costInputOccurredAt.value) {
    costInputOccurredAt.value = getTodayDateValue();
  }
  if (!costInputAccrualStatus.value) {
    costInputAccrualStatus.value = "已发生已开票";
  }
}

function normalizeCostText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replaceAll("ä", "a")
    .replaceAll("ö", "o")
    .replaceAll("ü", "u")
    .replaceAll("ß", "ss")
    .replace(/[（）()\s\-_/.,:;|]/g, "");
}

function getCostClassificationTokens(item) {
  return [item.l1, item.l2, item.l3, ...(item.aliases || []), ...(COST_L3_MULTILINGUAL_ALIASES[item.l3] || [])]
    .map(normalizeCostText)
    .filter(Boolean);
}

function normalizeAccrualStatus(...values) {
  for (const value of values) {
    const text = String(value || "").trim();
    if (!text) {
      continue;
    }
    const normalized = text.replace(/\s/g, "");
    if (
      ["已发生已开票", "已开票", "开票", "已发生-已开票", "已发生/已开票", "invoiced", "billed"].includes(
        normalized.toLowerCase ? normalized.toLowerCase() : normalized
      )
    ) {
      return "已发生已开票";
    }
    if (
      ["已发生未开票", "未开票", "待开票", "已发生-未开票", "已发生/未开票", "uninvoiced", "unbilled"].includes(
        normalized.toLowerCase ? normalized.toLowerCase() : normalized
      )
    ) {
      return "已发生未开票";
    }
  }
  return "已发生未开票";
}

function matchCostClassification(fields) {
  const l1Text = normalizeCostText(fields.l1);
  const l2Text = normalizeCostText(fields.l2);
  const l3Text = normalizeCostText(fields.l3);
  const nameText = normalizeCostText(fields.costName);
  const descText = normalizeCostText(fields.description);
  const sourceText = normalizeCostText(fields.sourceText || fields.evidenceText || fields.emailText || "");
  const combinedText = normalizeCostText(
    [fields.l1, fields.l2, fields.l3, fields.costName, fields.description, fields.sourceText, fields.evidenceText, fields.emailText].join(" ")
  );

  let best = null;

  COST_CLASSIFICATIONS.forEach((item) => {
    const tokens = getCostClassificationTokens(item);
    let score = 0;

    if (l3Text && tokens.includes(l3Text)) {
      score += 120;
    }
    if (l2Text && normalizeCostText(item.l2) === l2Text) {
      score += 50;
    }
    if (l1Text && normalizeCostText(item.l1) === l1Text) {
      score += 20;
    }
    if (nameText && tokens.some((token) => token && nameText.includes(token))) {
      score += 90;
    }
    if (descText && tokens.some((token) => token && descText.includes(token))) {
      score += 40;
    }
    if (sourceText && tokens.some((token) => token && sourceText.includes(token))) {
      score += 70;
    }
    if (combinedText && tokens.some((token) => token && combinedText.includes(token))) {
      score += 30;
    }

    if (!best || score > best.score) {
      best = { score, item };
    }
  });

  if (!best || best.score <= 0) {
    return {
      l1: "待确认",
      l2: "待确认",
      l3: "待确认",
      matched: false,
      matchedBy: "未识别",
    };
  }

  return {
    l1: best.item.l1,
    l2: best.item.l2,
    l3: best.item.l3,
    matched: true,
    matchedBy: best.score >= 120 ? "精确匹配" : "关键词匹配",
  };
}

function syncCostClassificationPreview() {
  const matched = matchCostClassification({
    costName: costInputName.value,
    description: costInputDescription.value,
    sourceText: costInputSourceText.value,
  });
  costMatchedL1.value = matched.l1;
  costMatchedL2.value = matched.l2;
  costMatchedL3.value = matched.l3;
}

function createCostRecord(payload) {
  const matched = matchCostClassification(payload);
  const approvalMeta = normalizeApprovalMeta({ approvalStatus: payload.approvalStatus || "pending", ...payload });
  return {
    id: String(payload.id || createCostId()),
    costName: String(payload.costName || "").trim(),
    amount: Number(payload.amount) || 0,
    orderCreatedAt: String(payload.orderCreatedAt || ""),
    costOccurredAt: String(payload.costOccurredAt || ""),
    accrualStatus: normalizeAccrualStatus(payload.accrualStatus, payload.invoiceStatus, payload.sourceType),
    description: String(payload.description || "").trim(),
    sourceText: String(payload.sourceText || payload.evidenceText || "").trim(),
    sourceLanguage: String(payload.sourceLanguage || ""),
    l1: matched.l1,
    l2: matched.l2,
    l3: matched.l3,
    matched: matched.matched,
    matchedBy: matched.matchedBy,
    sourceType: String(payload.sourceType || "manual"),
    sourceFileName: String(payload.sourceFileName || ""),
    createdAt: String(payload.createdAt || new Date().toISOString()),
    updatedAt: String(payload.updatedAt || payload.createdAt || new Date().toISOString()),
    ...approvalMeta,
  };
}

function refreshCostFilters() {
  const prevL1 = costFilterL1.value || "ALL";
  const l1Options = [...new Set(state.costRecords.map((item) => item.l1).concat(COST_CLASSIFICATIONS.map((item) => item.l1)))].filter(Boolean);
  costFilterL1.innerHTML = `<option value="ALL">全部L1</option>`;
  l1Options.sort((a, b) => a.localeCompare(b, "zh-CN")).forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    costFilterL1.appendChild(option);
  });
  costFilterL1.value = l1Options.includes(prevL1) ? prevL1 : "ALL";
  refreshCostFilterL2Options();
  refreshCostFilterL3Options();
}

function refreshCostFilterL2Options() {
  const selectedL1 = costFilterL1.value || "ALL";
  const prevL2 = costFilterL2.value || "ALL";
  const l2Options = [
    ...new Set(
      state.costRecords
        .filter((item) => selectedL1 === "ALL" || item.l1 === selectedL1)
        .map((item) => item.l2)
        .concat(
          COST_CLASSIFICATIONS.filter((item) => selectedL1 === "ALL" || item.l1 === selectedL1).map((item) => item.l2)
        )
    ),
  ].filter(Boolean);
  costFilterL2.innerHTML = `<option value="ALL">全部L2</option>`;
  l2Options.sort((a, b) => a.localeCompare(b, "zh-CN")).forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    costFilterL2.appendChild(option);
  });
  costFilterL2.value = l2Options.includes(prevL2) ? prevL2 : "ALL";
}

function refreshCostFilterL3Options() {
  const selectedL1 = costFilterL1.value || "ALL";
  const selectedL2 = costFilterL2.value || "ALL";
  const prevL3 = costFilterL3.value || "ALL";
  const l3Options = [
    ...new Set(
      state.costRecords
        .filter(
          (item) =>
            (selectedL1 === "ALL" || item.l1 === selectedL1) && (selectedL2 === "ALL" || item.l2 === selectedL2)
        )
        .map((item) => item.l3)
        .concat(
          COST_CLASSIFICATIONS.filter(
            (item) =>
              (selectedL1 === "ALL" || item.l1 === selectedL1) && (selectedL2 === "ALL" || item.l2 === selectedL2)
          ).map((item) => item.l3)
        )
    ),
  ].filter(Boolean);
  costFilterL3.innerHTML = `<option value="ALL">全部L3</option>`;
  l3Options.sort((a, b) => a.localeCompare(b, "zh-CN")).forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    costFilterL3.appendChild(option);
  });
  costFilterL3.value = l3Options.includes(prevL3) ? prevL3 : "ALL";
}

function ensureCostReviewOptions() {
  refreshCostReviewL1Options();
  refreshCostReviewL2Options();
  refreshCostReviewL3Options();
}

function refreshPendingCostOptions(preferredId = "") {
  const pendingRecords = state.costRecords
    .filter((item) => !item.matched || item.l1 === "待确认" || item.l2 === "待确认" || item.l3 === "待确认")
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt), "zh-CN"));

  costPendingRecordSelect.innerHTML = "";
  if (pendingRecords.length === 0) {
    costPendingRecordSelect.innerHTML = `<option value="">暂无待确认记录</option>`;
    clearPendingCostReviewForm();
    return;
  }

  pendingRecords.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${item.costName}｜${formatMoney(item.amount)}｜${item.costOccurredAt}｜${item.accrualStatus || "已发生未开票"}`;
    costPendingRecordSelect.appendChild(option);
  });

  const currentId = preferredId || costPendingRecordSelect.value;
  costPendingRecordSelect.value = pendingRecords.some((item) => item.id === currentId) ? currentId : pendingRecords[0].id;
  fillPendingCostReviewForm(findCostRecordById(costPendingRecordSelect.value));
}

function refreshCostReviewL1Options(preferredL1 = "") {
  const l1Options = [...new Set(COST_CLASSIFICATIONS.map((item) => item.l1))].sort((a, b) => a.localeCompare(b, "zh-CN"));
  costReviewL1.innerHTML = `<option value="">请选择L1</option>`;
  l1Options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    costReviewL1.appendChild(option);
  });
  if (preferredL1 && l1Options.includes(preferredL1)) {
    costReviewL1.value = preferredL1;
  }
}

function refreshCostReviewL2Options(preferredL2 = "") {
  const selectedL1 = costReviewL1.value || "";
  const l2Options = [
    ...new Set(
      COST_CLASSIFICATIONS.filter((item) => !selectedL1 || item.l1 === selectedL1).map((item) => item.l2)
    ),
  ].sort((a, b) => a.localeCompare(b, "zh-CN"));
  costReviewL2.innerHTML = `<option value="">请选择L2</option>`;
  l2Options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    costReviewL2.appendChild(option);
  });
  if (preferredL2 && l2Options.includes(preferredL2)) {
    costReviewL2.value = preferredL2;
  }
}

function refreshCostReviewL3Options(preferredL3 = "") {
  const selectedL1 = costReviewL1.value || "";
  const selectedL2 = costReviewL2.value || "";
  const l3Options = [
    ...new Set(
      COST_CLASSIFICATIONS.filter(
        (item) => (!selectedL1 || item.l1 === selectedL1) && (!selectedL2 || item.l2 === selectedL2)
      ).map((item) => item.l3)
    ),
  ].sort((a, b) => a.localeCompare(b, "zh-CN"));
  costReviewL3.innerHTML = `<option value="">请选择L3</option>`;
  l3Options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    costReviewL3.appendChild(option);
  });
  if (preferredL3 && l3Options.includes(preferredL3)) {
    costReviewL3.value = preferredL3;
  }
}

function clearPendingCostReviewForm() {
  costReviewName.value = "";
  costReviewAmount.value = "";
  costReviewDescription.value = "";
  costReviewOrderCreatedAt.value = "";
  costReviewOccurredAt.value = "";
  costReviewAccrualStatus.value = "";
  ensureCostReviewOptions();
  costReviewStatus.textContent = "";
}

function fillPendingCostReviewForm(record) {
  if (!record) {
    clearPendingCostReviewForm();
    return;
  }
  costReviewName.value = record.costName;
  costReviewAmount.value = formatMoney(record.amount);
  costReviewDescription.value = record.description || "";
  costReviewOrderCreatedAt.value = formatDateTimeText(record.orderCreatedAt);
  costReviewOccurredAt.value = record.costOccurredAt || "";
  costReviewAccrualStatus.value = record.accrualStatus || "";
  refreshCostReviewL1Options(record.l1 !== "待确认" ? record.l1 : "");
  refreshCostReviewL2Options(record.l2 !== "待确认" ? record.l2 : "");
  refreshCostReviewL3Options(record.l3 !== "待确认" ? record.l3 : "");
}

function onPendingCostSelectionChange() {
  fillPendingCostReviewForm(findCostRecordById(costPendingRecordSelect.value));
}

function onLoadPendingCostRecord() {
  if (!canManageCostData()) {
    setCostReviewStatus("当前角色无成本人工修整权限。", "error");
    return;
  }
  const record = findCostRecordById(costPendingRecordSelect.value);
  if (!record) {
    setCostReviewStatus("未找到待确认记录。", "error");
    clearPendingCostReviewForm();
    return;
  }
  fillPendingCostReviewForm(record);
  setCostReviewStatus("已载入待确认记录，可选择 L1 / L2 / L3 后保存。", "ok");
}

function onSavePendingCostReview() {
  if (!canManageCostData()) {
    setCostReviewStatus("当前角色无成本人工修整权限。", "error");
    return;
  }
  const record = findCostRecordById(costPendingRecordSelect.value);
  if (!record) {
    setCostReviewStatus("未找到待确认记录。", "error");
    return;
  }
  const l1 = String(costReviewL1.value || "").trim();
  const l2 = String(costReviewL2.value || "").trim();
  const l3 = String(costReviewL3.value || "").trim();
  if (!l1 || !l2 || !l3) {
    setCostReviewStatus("请完整选择 L1 / L2 / L3。", "error");
    return;
  }
  const matched = COST_CLASSIFICATIONS.find((item) => item.l1 === l1 && item.l2 === l2 && item.l3 === l3);
  if (!matched) {
    setCostReviewStatus("当前 L1 / L2 / L3 组合不在分类字典中。", "error");
    return;
  }

  record.l1 = l1;
  record.l2 = l2;
  record.l3 = l3;
  record.matched = true;
  record.matchedBy = "人工修整";
  record.updatedAt = new Date().toISOString();
  resetApprovalMeta(record);

  persistCostRecords();
  refreshCostFilters();
  refreshPendingCostOptions();
  renderCostModule();
  setCostReviewStatus(`已完成人工修整：${record.l1} / ${record.l2} / ${record.l3}，当前状态待确认`, "ok");
  setCostStatus(`待确认成本已人工修整：${record.costName}，请继续确认。`, "ok");
}

function findCostRecordById(id) {
  return state.costRecords.find((item) => item.id === id);
}

async function onRecognizeCostWithAi() {
  if (!canManageCostData()) {
    setCostStatus("当前角色无成本数据维护权限。", "error");
    return;
  }
  const apiKey = getDeepseekApiKey();
  if (!apiKey) {
    setCostStatus("请先输入 DeepSeek API Key。", "error");
    return;
  }
  const costName = String(costInputName.value || "").trim();
  const description = String(costInputDescription.value || "").trim();
  const sourceText = String(costInputSourceText.value || "").trim();
  if (!costName && !description && !sourceText) {
    setCostStatus("请先填写成本名称、辅助说明或原始文字信息。", "error");
    return;
  }
  setCostStatus("正在调用 DeepSeek 识别费用科目...", "ok");
  try {
    const aiResult = await classifySingleCostWithDeepSeek({ costName, description, sourceText }, apiKey, "manual-form");
    costMatchedL1.value = aiResult.l1;
    costMatchedL2.value = aiResult.l2;
    costMatchedL3.value = aiResult.l3;
    setCostStatus(
      `AI 识别完成：${aiResult.l1} / ${aiResult.l2} / ${aiResult.l3}（语言：${aiResult.language || "mixed"}）`,
      "ok"
    );
  } catch (error) {
    setCostStatus("AI 识别失败，已保留本地规则识别结果。", "error");
  }
}

function fillCostFormWithRecognizedRecord(record) {
  if (!record) {
    return;
  }
  costInputName.value = record.costName || costInputName.value;
  if (isFinite(Number(record.amount)) && Number(record.amount) > 0) {
    costInputAmount.value = String(record.amount);
  }
  costInputOrderCreatedAt.value = record.orderCreatedAt || costInputOrderCreatedAt.value;
  costInputOccurredAt.value = record.costOccurredAt || costInputOccurredAt.value;
  costInputAccrualStatus.value = record.accrualStatus || costInputAccrualStatus.value;
  costInputDescription.value = record.description || costInputDescription.value;
  costInputSourceText.value = record.sourceText || costInputSourceText.value;
  costMatchedL1.value = record.l1 || "";
  costMatchedL2.value = record.l2 || "";
  costMatchedL3.value = record.l3 || "";
}

async function onRecognizeCostImageFile(event) {
  if (!canManageCostData()) {
    setCostStatus("当前角色无成本数据维护权限。", "error");
    costImageRecognizeInput.value = "";
    return;
  }
  const deepseekApiKey = getDeepseekApiKey();
  if (!deepseekApiKey) {
    setCostStatus("请先输入 DeepSeek API Key。", "error");
    costImageRecognizeInput.value = "";
    return;
  }

  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }

  try {
    setCostStatus(`正在识别图片/发票：${file.name}`, "ok");
    const recordData = await classifyCostInvoiceFileWithDeepSeek(file, deepseekApiKey);
    const record = createCostRecord({
      ...recordData,
      sourceText: recordData.sourceText || costInputSourceText.value,
      sourceLanguage: recordData.sourceLanguage || "",
    });
    if (recordData.l1 && recordData.l2 && recordData.l3) {
      record.l1 = recordData.l1;
      record.l2 = recordData.l2;
      record.l3 = recordData.l3;
      record.matched = true;
      record.matchedBy = recordData.matchedBy || "DeepSeek发票识别";
    }
    fillCostFormWithRecognizedRecord(record);
    setCostStatus(
      `图片识别完成：${record.l1} / ${record.l2} / ${record.l3}${record.sourceLanguage ? `（语言：${record.sourceLanguage}）` : ""}`,
      "ok"
    );
  } catch (error) {
    setCostStatus(error instanceof Error ? error.message : "图片识别失败，请更换更清晰图片后重试。", "error");
  } finally {
    costImageRecognizeInput.value = "";
  }
}

async function onSaveCostRecord() {
  if (!canManageCostData()) {
    setCostStatus("当前角色无成本数据维护权限。", "error");
    return;
  }

  const costName = String(costInputName.value || "").trim();
  const amount = parseNumber(costInputAmount.value);
  const orderCreatedAt = String(costInputOrderCreatedAt.value || "").trim();
  const costOccurredAt = String(costInputOccurredAt.value || "").trim();
  const accrualStatus = normalizeAccrualStatus(costInputAccrualStatus.value);
  const description = String(costInputDescription.value || "").trim();
  const sourceText = String(costInputSourceText.value || "").trim();

  if (!costName) {
    setCostStatus("成本名称不能为空。", "error");
    return;
  }
  if (!isFinite(amount) || amount < 0) {
    setCostStatus("成本金额格式不正确。", "error");
    return;
  }
  if (!orderCreatedAt || !costOccurredAt) {
    setCostStatus("订单生成时间和成本发生时间均为必填项。", "error");
    return;
  }

  let aiResult = null;
  const apiKey = getDeepseekApiKey();
  const localPreview = matchCostClassification({ costName, description, sourceText });
  if (apiKey && (sourceText || !localPreview.matched)) {
    try {
      aiResult = await classifySingleCostWithDeepSeek({ costName, description, sourceText }, apiKey, "manual-save");
    } catch (error) {
      aiResult = null;
    }
  }

  const record = createCostRecord({
    id: state.ui.editingCostId || createCostId(),
    costName,
    amount,
    orderCreatedAt,
    costOccurredAt,
    accrualStatus,
    description,
    sourceText,
    sourceLanguage: aiResult?.language || "",
    l1: aiResult?.l1 || localPreview.l1,
    l2: aiResult?.l2 || localPreview.l2,
    l3: aiResult?.l3 || localPreview.l3,
    createdAt:
      state.costRecords.find((item) => item.id === state.ui.editingCostId)?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  if (aiResult) {
    record.l1 = aiResult.l1;
    record.l2 = aiResult.l2;
    record.l3 = aiResult.l3;
    record.matched = true;
    record.matchedBy = "DeepSeek手工录入识别";
    record.sourceLanguage = aiResult.language || "";
  }
  resetApprovalMeta(record);
  const editingIndex = state.costRecords.findIndex((item) => item.id === state.ui.editingCostId);
  if (editingIndex >= 0) {
    state.costRecords[editingIndex] = record;
  } else {
    state.costRecords.push(record);
  }
  persistCostRecords();
  refreshCostFilters();
  refreshPendingCostOptions();
  renderCostModule();

  costInputName.value = "";
  costInputAmount.value = "";
  costInputDescription.value = "";
  costInputSourceText.value = "";
  costMatchedL1.value = "";
  costMatchedL2.value = "";
  costMatchedL3.value = "";
  costInputOrderCreatedAt.value = "";
  costInputOccurredAt.value = "";
  costInputAccrualStatus.value = "已发生已开票";
  ensureCostFormDefaults();
  clearCostEditMode();
  setCostStatus(
    `成本记录已保存，识别结果：${record.l1} / ${record.l2} / ${record.l3}${record.sourceLanguage ? `｜识别语言：${record.sourceLanguage}` : ""}｜当前状态待确认`,
    record.matched ? "ok" : "error"
  );
}

function getDeepseekApiKey() {
  return String(costDeepseekApiKey?.value || deepseekApiKey?.value || localStorage.getItem(DEEPSEEK_KEY_STORAGE) || "").trim();
}

function getGeminiApiKey() {
  return String(costGeminiApiKey?.value || localStorage.getItem(GEMINI_KEY_STORAGE) || "").trim();
}

async function requestDeepseekMessages(apiKey, messages, temperature = 0.2) {
  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      temperature,
      messages,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `HTTP ${response.status}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("DeepSeek 返回内容为空");
  }
  return content;
}

async function requestDeepseekChatCompletion(apiKey, systemContent, userContent, temperature = 0.2) {
  return requestDeepseekMessages(
    apiKey,
    [
      { role: "system", content: systemContent },
      { role: "user", content: userContent },
    ],
    temperature
  );
}

async function requestGeminiGenerateContent(apiKey, parts, model = "gemini-2.5-flash") {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts }],
      generationConfig: {
        temperature: 0.1,
      },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `HTTP ${response.status}`);
  }

  const data = await response.json();
  const partsText = data?.candidates?.[0]?.content?.parts || [];
  const content = partsText.map((item) => String(item?.text || "")).join("\n").trim();
  if (!content) {
    throw new Error("Gemini 返回内容为空");
  }
  return content;
}

function dataUrlToInlineData(dataUrl, fallbackMimeType = "image/png") {
  const match = String(dataUrl || "").match(/^data:(.*?);base64,(.*)$/);
  if (!match) {
    throw new Error("无法解析图片数据");
  }
  return {
    mimeType: match[1] || fallbackMimeType,
    data: match[2],
  };
}

async function classifySingleCostWithDeepSeek(fields, apiKey, mode = "manual") {
  const content = await requestDeepseekChatCompletion(
    apiKey,
    "你是企业多语言费用分类助手，支持中文、English、Deutsch。你需要根据发票摘要、邮件信息、文字说明识别费用科目，并且只能从给定的 L1/L2/L3 分类表中选择结果。请输出严格 JSON 对象，不要输出解释。",
    `请识别以下成本/费用信息，并输出 JSON 对象：
{
  "language": "zh|en|de|mixed",
  "l1": "",
  "l2": "",
  "l3": "",
  "confidence": 0.0,
  "matchedBy": "DeepSeek识别",
  "descriptionSummary": ""
}

候选分类（可参考别名和多语言同义词）：
${JSON.stringify(
  COST_CLASSIFICATIONS.map((item) => ({
    l1: item.l1,
    l2: item.l2,
    l3: item.l3,
    aliases: [...(item.aliases || []), ...(COST_L3_MULTILINGUAL_ALIASES[item.l3] || [])],
  })),
  null,
  2
)}

输入来源：${mode}
费用名称：${String(fields.costName || "")}
辅助说明：${String(fields.description || "")}
原始发票/邮件/文字内容：
${String(fields.sourceText || "").slice(0, 12000)}

要求：
1. 可根据中文/英文/德文内容判断费用类型；
2. 若原始内容包含 invoice, freight, salary, bank fee, Beratung, Logistik, Reisekosten 等词，需要正确归类；
3. 只能返回候选分类中的 L1/L2/L3；若把握不足也要返回最接近分类并给出较低 confidence。`,
    0.1
  );

  const parsed = extractJsonFromText(content);
  if (!parsed || Array.isArray(parsed)) {
    throw new Error("DeepSeek 单条费用识别结果不是有效 JSON 对象");
  }
  const resolved = resolveAiCostClassification(parsed || {});
  if (!resolved) {
    throw new Error("DeepSeek 未返回有效费用科目");
  }
  return {
    language: String(parsed.language || "mixed"),
    l1: resolved.l1,
    l2: resolved.l2,
    l3: resolved.l3,
    confidence: Number(parsed.confidence) || 0,
    matchedBy: String(parsed.matchedBy || "DeepSeek识别"),
    descriptionSummary: String(parsed.descriptionSummary || "").trim(),
  };
}

function extractJsonFromText(text) {
  const trimmed = String(text || "").trim();
  if (!trimmed) {
    return null;
  }
  try {
    return JSON.parse(trimmed);
  } catch (error) {
    const fencedMatch = trimmed.match(/```json\s*([\s\S]*?)```/i) || trimmed.match(/```\s*([\s\S]*?)```/i);
    if (fencedMatch) {
      return JSON.parse(fencedMatch[1].trim());
    }
    const arrayMatch = trimmed.match(/\[[\s\S]*\]/);
    if (arrayMatch) {
      return JSON.parse(arrayMatch[0]);
    }
  }
  return null;
}

function resolveAiCostClassification(item) {
  const exact = COST_CLASSIFICATIONS.find(
    (classification) =>
      classification.l1 === item.l1 && classification.l2 === item.l2 && classification.l3 === item.l3
  );
  if (exact) {
    return exact;
  }
  const byL3 = COST_CLASSIFICATIONS.find((classification) => normalizeCostText(classification.l3) === normalizeCostText(item.l3));
  if (byL3) {
    return byL3;
  }
  const aiText = normalizeCostText([item.l3, item.descriptionSummary, item.description, item.costName].join(" "));
  const byAlias = COST_CLASSIFICATIONS.find((classification) =>
    getCostClassificationTokens(classification).some((token) => token && aiText.includes(token))
  );
  if (byAlias) {
    return byAlias;
  }
  return null;
}

async function classifyCostRecordsWithDeepSeek(records, apiKey) {
  const enhancedRecords = records.map((item) => ({ ...item }));
  const classificationCatalog = COST_CLASSIFICATIONS.map((item) => ({
    l1: item.l1,
    l2: item.l2,
    l3: item.l3,
    aliases: [...(item.aliases || []), ...(COST_L3_MULTILINGUAL_ALIASES[item.l3] || [])],
  }));

  for (let start = 0; start < enhancedRecords.length; start += 20) {
    const chunk = enhancedRecords.slice(start, start + 20);
    const content = await requestDeepseekChatCompletion(
      apiKey,
      "你是企业多语言费用分类助手，支持中文、English、Deutsch。你必须只从给定的 L1/L2/L3 分类表中选择结果，输出严格 JSON 数组，不要输出解释。",
      `请根据以下费用明细识别分类，只能从候选分类中选择，并结合发票摘要、邮件信息、文字说明判断：
${JSON.stringify(classificationCatalog, null, 2)}

待识别费用：
${JSON.stringify(
  chunk.map((item, index) => ({
    index,
    costName: item.costName,
    description: item.description,
    sourceText: item.sourceText || "",
    amount: item.amount,
    orderCreatedAt: item.orderCreatedAt,
    costOccurredAt: item.costOccurredAt,
    currentL1: item.l1,
    currentL2: item.l2,
    currentL3: item.l3,
  })),
  null,
  2
)}

请返回 JSON 数组，格式如下：
[{"index":0,"language":"en","l1":"营业费用","l2":"物流费用","l3":"物流费","matched":true,"matchedBy":"DeepSeek识别"}]`
    );

    const parsed = extractJsonFromText(content);
    if (!Array.isArray(parsed)) {
      throw new Error("DeepSeek 分类结果不是有效 JSON 数组");
    }

    parsed.forEach((item) => {
      const index = Number(item?.index);
      if (!Number.isInteger(index) || index < 0 || index >= chunk.length) {
        return;
      }
      const resolved = resolveAiCostClassification(item || {});
      if (!resolved) {
        return;
      }
      chunk[index] = {
        ...chunk[index],
        l1: resolved.l1,
        l2: resolved.l2,
        l3: resolved.l3,
        sourceLanguage: String(item.language || chunk[index].sourceLanguage || ""),
        matched: true,
        matchedBy: "DeepSeek识别",
      };
    });

    for (let index = 0; index < chunk.length; index += 1) {
      enhancedRecords[start + index] = chunk[index];
    }
  }

  return enhancedRecords;
}

function isTabularCostFile(fileName) {
  return fileName.endsWith(".xlsx") || fileName.endsWith(".xls") || fileName.endsWith(".csv");
}

function isInvoiceCostFile(fileName) {
  return [".png", ".jpg", ".jpeg", ".webp", ".pdf"].some((suffix) => fileName.endsWith(suffix));
}

function isTextCostFile(fileName) {
  return [".txt", ".eml", ".md"].some((suffix) => fileName.endsWith(suffix));
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("读取文件失败"));
    reader.readAsText(file, "utf-8");
  });
}

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error("读取文件失败"));
    reader.readAsArrayBuffer(file);
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("读取文件失败"));
    reader.readAsDataURL(file);
  });
}

async function extractPdfEvidence(file) {
  if (typeof pdfjsLib === "undefined") {
    throw new Error("pdf.js 未加载，无法解析 PDF 发票");
  }
  if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.4.168/legacy/build/pdf.worker.min.js";
  }

  const buffer = await readFileAsArrayBuffer(file);
  const loadingTask = pdfjsLib.getDocument({ data: buffer });
  const pdf = await loadingTask.promise;
  const pageTexts = [];
  const pageImages = [];
  const maxPages = Math.min(pdf.numPages || 0, 3);

  for (let pageNumber = 1; pageNumber <= maxPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    try {
      const textContent = await page.getTextContent();
      const pageText = (textContent.items || [])
        .map((item) => String(item.str || "").trim())
        .filter(Boolean)
        .join(" ");
      if (pageText) {
        pageTexts.push(`Page ${pageNumber}: ${pageText}`);
      }
    } catch (error) {
      // ignore text extraction failure and fallback to image
    }

    const viewport = page.getViewport({ scale: 1.6 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) {
      continue;
    }
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    await page.render({ canvasContext: context, viewport }).promise;
    pageImages.push(canvas.toDataURL("image/png"));
  }

  return {
    text: pageTexts.join("\n").trim(),
    images: pageImages,
    pages: maxPages,
  };
}

async function extractTextWithOcrFromImage(dataUrl) {
  if (typeof Tesseract === "undefined") {
    throw new Error("Tesseract OCR 未加载，无法识别发票图片文字");
  }
  const result = await Tesseract.recognize(dataUrl, "chi_sim+eng+deu", {
    logger: () => {},
  });
  return String(result?.data?.text || "").trim();
}

async function buildInvoiceEvidenceText(file) {
  const isPdf = String(file.name || "").toLowerCase().endsWith(".pdf");
  if (isPdf) {
    const pdfEvidence = await extractPdfEvidence(file);
    const ocrTexts = [];
    for (const image of pdfEvidence.images.slice(0, 2)) {
      try {
        const text = await extractTextWithOcrFromImage(image);
        if (text) {
          ocrTexts.push(text);
        }
      } catch (error) {
        // ignore ocr failure for a single page
      }
    }
    return {
      type: "pdf",
      text: [pdfEvidence.text, ...ocrTexts].filter(Boolean).join("\n").trim(),
      imageCount: pdfEvidence.images.length,
      pages: pdfEvidence.pages,
    };
  }

  const dataUrl = await readFileAsDataUrl(file);
  const ocrText = await extractTextWithOcrFromImage(dataUrl);
  return {
    type: "image",
    text: ocrText,
    imageCount: 1,
    pages: 1,
  };
}

async function buildGeminiInvoiceParts(file) {
  const isPdf = String(file.name || "").toLowerCase().endsWith(".pdf");
  if (isPdf) {
    const pdfEvidence = await extractPdfEvidence(file);
    const ocrTexts = [];
    for (const image of pdfEvidence.images.slice(0, 2)) {
      try {
        const text = await extractTextWithOcrFromImage(image);
        if (text) {
          ocrTexts.push(text);
        }
      } catch (error) {
        // ignore single page ocr failure
      }
    }
    const prompt = `请识别这张发票/票据并返回 JSON 对象，字段为：
{
  "costName": "",
  "amount": 0,
  "orderCreatedAt": "",
  "costOccurredAt": "",
  "description": "",
  "l1": "",
  "l2": "",
  "l3": "",
  "accrualStatus": "已发生已开票",
  "language": "zh|en|de|mixed",
  "confidence": 0.0
}

要求：
1. 支持中文、English、Deutsch；
2. 只从下面候选分类中选择 L1/L2/L3；
3. 即使只有部分信息，也请根据发票抬头、供应商、金额、备注、运输/咨询/银行/差旅等线索判断最可能的费用归属；
4. 如果金额或日期识别不完整，也尽量给出费用归属。

候选分类：
${JSON.stringify(
  COST_CLASSIFICATIONS.map((item) => ({
    l1: item.l1,
    l2: item.l2,
    l3: item.l3,
    aliases: [...(item.aliases || []), ...(COST_L3_MULTILINGUAL_ALIASES[item.l3] || [])],
  })),
  null,
  2
)}

文件名：${file.name}
OCR/文本提取结果：
${[pdfEvidence.text, ...ocrTexts].filter(Boolean).join("\n").slice(0, 15000)}`;

    return [
      { text: prompt },
      ...pdfEvidence.images.slice(0, 2).map((image) => ({ inlineData: dataUrlToInlineData(image) })),
    ];
  }

  const dataUrl = await readFileAsDataUrl(file);
  const ocrText = await extractTextWithOcrFromImage(dataUrl).catch(() => "");
  return [
    {
      text: `请识别这张发票/票据并返回 JSON 对象，字段为：
{
  "costName": "",
  "amount": 0,
  "orderCreatedAt": "",
  "costOccurredAt": "",
  "description": "",
  "l1": "",
  "l2": "",
  "l3": "",
  "accrualStatus": "已发生已开票",
  "language": "zh|en|de|mixed",
  "confidence": 0.0
}

要求：
1. 支持中文、English、Deutsch；
2. 只从下面候选分类中选择 L1/L2/L3；
3. 即使只有部分信息，也请根据图片中部分线索判断最可能费用归属。

候选分类：
${JSON.stringify(
  COST_CLASSIFICATIONS.map((item) => ({
    l1: item.l1,
    l2: item.l2,
    l3: item.l3,
    aliases: [...(item.aliases || []), ...(COST_L3_MULTILINGUAL_ALIASES[item.l3] || [])],
  })),
  null,
  2
)}

文件名：${file.name}
OCR参考文本：
${ocrText.slice(0, 12000)}`,
    },
    {
      inlineData: {
        mimeType: file.type || "image/png",
        data: dataUrlToInlineData(dataUrl, file.type || "image/png").data,
      },
    },
  ];
}

function toDefaultDateTime(value) {
  const dateTime = normalizeDateTimeInput(value);
  if (dateTime) {
    return dateTime;
  }
  const date = normalizeDateInput(value);
  return date ? `${date}T00:00` : "";
}

async function processTabularCostFile(file, apiKey) {
  const fileName = String(file.name || "").toLowerCase();
  const isExcelFile = fileName.endsWith(".xlsx") || fileName.endsWith(".xls");
  const content = isExcelFile ? await readFileAsArrayBuffer(file) : await readFileAsText(file);
  const rows = isExcelFile ? parseExcelRows(content) : parseCsv(String(content || ""));
  if (rows.length <= 1) {
    throw new Error("文件内容为空或仅有表头");
  }

  const headers = rows[0];
  const parsedRecords = [];
  let failed = 0;
  for (let index = 1; index < rows.length; index += 1) {
    const row = rows[index];
    if (!Array.isArray(row) || row.every((cell) => String(cell).trim() === "")) {
      continue;
    }
    const mapped = mapCostRowToRecord(headers, row, file.name);
    if (!mapped.ok) {
      failed += 1;
      continue;
    }
    parsedRecords.push(mapped.record);
  }

  let finalRecords = parsedRecords;
  let recognitionMode = "本地规则识别";
  if (apiKey && parsedRecords.length > 0) {
    try {
      finalRecords = await classifyCostRecordsWithDeepSeek(parsedRecords, apiKey);
      recognitionMode = "DeepSeek 优先识别";
    } catch (error) {
      finalRecords = parsedRecords;
      recognitionMode = "DeepSeek 失败，已回退到本地规则识别";
    }
  }

  return { records: finalRecords, failed, recognitionMode, sourceType: "sheet" };
}

async function classifyCostInvoiceFileWithDeepSeek(file, apiKey) {
  const evidence = await buildInvoiceEvidenceText(file);
  if (!evidence.text) {
    throw new Error("未能从发票中提取到可识别文字，请尝试更清晰的扫描件或图片。");
  }
  const content = await requestDeepseekChatCompletion(
    apiKey,
    "你是企业多语言发票识别与费用分类助手，支持中文、English、Deutsch。请根据 OCR/文本提取结果识别票据内容，并只从给定 L1/L2/L3 分类中选择分类，输出严格 JSON 对象，不要输出解释。若无法识别字段，使用空字符串。accrualStatus 只能输出“已发生已开票”或“已发生未开票”。",
    `请识别这张发票/票据并返回 JSON 对象，字段为：
{
  "costName": "",
  "amount": 0,
  "orderCreatedAt": "",
  "costOccurredAt": "",
  "description": "",
  "l1": "",
  "l2": "",
  "l3": "",
  "accrualStatus": "已发生已开票",
  "language": "zh|en|de|mixed"
}

async function classifyCostInvoiceFileWithGemini(file, apiKey, options = {}) {
  const parts = await buildGeminiInvoiceParts(file);
  const content = await requestGeminiGenerateContent(apiKey, parts);
  const parsed = extractJsonFromText(content);
  if (!parsed || Array.isArray(parsed)) {
    throw new Error("Gemini 发票识别结果不是有效 JSON 对象");
  }

  const costName = String(parsed.costName || parsed.invoiceItem || parsed.subject || file.name.replace(/\.[^.]+$/, "")).trim();
  const amount = parseNumber(parsed.amount);
  const costOccurredAt = normalizeDateInput(parsed.costOccurredAt || parsed.invoiceDate || parsed.occurredAt);
  const orderCreatedAt = toDefaultDateTime(parsed.orderCreatedAt || parsed.invoiceDate || parsed.orderDate || costOccurredAt);
  const description = String(parsed.description || parsed.remark || parsed.summary || "").trim();
  const accrualStatus = normalizeAccrualStatus(parsed.accrualStatus, "已发生已开票");
  const resolved = resolveAiCostClassification(parsed);

  if (!options.allowPartial && (!costName || !isFinite(amount) || !orderCreatedAt || !costOccurredAt)) {
    throw new Error("Gemini 发票识别缺少必要字段");
  }

  return {
    costName,
    amount: isFinite(amount) ? amount : 0,
    orderCreatedAt: orderCreatedAt || "",
    costOccurredAt: costOccurredAt || "",
    description,
    accrualStatus,
    sourceLanguage: String(parsed.language || ""),
    l1: resolved?.l1 || "",
    l2: resolved?.l2 || "",
    l3: resolved?.l3 || "",
    matched: Boolean(resolved),
    matchedBy: resolved ? "Gemini发票识别" : "Gemini部分识别",
    sourceType: "invoice",
    sourceFileName: file.name,
  };
}

订单生成时间若无法识别，可返回票据日期；成本发生时间优先返回票据日期。请支持中英文德文票据内容。
候选分类如下：
${JSON.stringify(
  COST_CLASSIFICATIONS.map((item) => ({
    l1: item.l1,
    l2: item.l2,
    l3: item.l3,
    aliases: [...(item.aliases || []), ...(COST_L3_MULTILINGUAL_ALIASES[item.l3] || [])],
  })),
  null,
  2
)}

文件名：${file.name}
文件类型：${evidence.type === "pdf" ? "PDF发票" : "图片发票"}
页数/图片数：${evidence.pages}/${evidence.imageCount}
OCR/文本提取结果：
${evidence.text.slice(0, 15000)}

请优先结合发票标题、金额、税额、开票日期、供应商名称、物流/咨询/银行/差旅等线索综合判断费用科目。`,
    0.1
  );

  const parsed = extractJsonFromText(content);
  if (!parsed || Array.isArray(parsed)) {
    throw new Error("发票识别结果不是有效 JSON 对象");
  }

  const costName = String(parsed.costName || parsed.invoiceItem || parsed.subject || file.name.replace(/\.[^.]+$/, "")).trim();
  const amount = parseNumber(parsed.amount);
  const costOccurredAt = normalizeDateInput(parsed.costOccurredAt || parsed.invoiceDate || parsed.occurredAt);
  const orderCreatedAt = toDefaultDateTime(parsed.orderCreatedAt || parsed.invoiceDate || parsed.orderDate || costOccurredAt);
  const description = String(parsed.description || parsed.remark || parsed.summary || "").trim();
  const accrualStatus = normalizeAccrualStatus(parsed.accrualStatus, "已发生已开票");

  if (!costName || !isFinite(amount) || !orderCreatedAt || !costOccurredAt) {
    throw new Error("发票识别缺少必要字段");
  }

  const record = createCostRecord({
    costName,
    amount,
    orderCreatedAt,
    costOccurredAt,
    accrualStatus,
    description,
    sourceLanguage: String(parsed.language || ""),
    l1: parsed.l1,
    l2: parsed.l2,
    l3: parsed.l3,
    sourceType: "invoice",
    sourceFileName: file.name,
    sourceText: evidence.text,
  });

  const resolved = resolveAiCostClassification(parsed);
  if (resolved) {
    record.l1 = resolved.l1;
    record.l2 = resolved.l2;
    record.l3 = resolved.l3;
    record.matched = true;
    record.matchedBy = "DeepSeek发票识别";
  } else if (record.matched) {
    record.matchedBy = "DeepSeek发票识别+规则匹配";
  }

  return record;
}

async function processInvoiceCostFiles(files, apiKey) {
  if (!apiKey) {
    throw new Error("上传发票识别前，请先输入 DeepSeek API Key。");
  }
  const records = [];
  let failed = 0;
  let lastError = "";
  for (const file of files) {
    try {
      const record = await classifyCostInvoiceFileWithDeepSeek(file, apiKey);
      records.push(record);
    } catch (error) {
      failed += 1;
      lastError = error instanceof Error ? error.message : "未知错误";
    }
  }
  return { records, failed, recognitionMode: "DeepSeek发票识别", sourceType: "invoice", lastError };
}

async function processGeminiInvoiceCostFiles(files, apiKey) {
  const records = [];
  let failed = 0;
  let lastError = "";
  for (const file of files) {
    try {
      const parsed = await classifyCostInvoiceFileWithGemini(file, apiKey);
      const record = createCostRecord({
        ...parsed,
        sourceText: parsed.sourceText || "",
        sourceLanguage: parsed.sourceLanguage || "",
      });
      if (parsed.l1 && parsed.l2 && parsed.l3) {
        record.l1 = parsed.l1;
        record.l2 = parsed.l2;
        record.l3 = parsed.l3;
        record.matched = true;
        record.matchedBy = parsed.matchedBy || "Gemini发票识别";
      }
      records.push(record);
    } catch (error) {
      failed += 1;
      lastError = error instanceof Error ? error.message : "未知错误";
    }
  }
  return { records, failed, recognitionMode: "Gemini发票识别", sourceType: "invoice", lastError };
}

async function classifyCostTextFileWithDeepSeek(file, apiKey) {
  const rawText = (await readFileAsText(file)).slice(0, 16000);
  const content = await requestDeepseekChatCompletion(
    apiKey,
    "你是企业多语言费用分类助手，支持中文、English、Deutsch。请根据邮件正文、报销说明、文字材料提取费用字段，并只从给定的 L1/L2/L3 分类表中选择分类，输出严格 JSON 对象。",
    `请从以下文本中提取费用信息并归类，返回 JSON 对象：
{
  "costName": "",
  "amount": 0,
  "orderCreatedAt": "",
  "costOccurredAt": "",
  "description": "",
  "l1": "",
  "l2": "",
  "l3": "",
  "accrualStatus": "已发生未开票",
  "language": "zh|en|de|mixed"
}

候选分类如下：
${JSON.stringify(
  COST_CLASSIFICATIONS.map((item) => ({
    l1: item.l1,
    l2: item.l2,
    l3: item.l3,
    aliases: [...(item.aliases || []), ...(COST_L3_MULTILINGUAL_ALIASES[item.l3] || [])],
  })),
  null,
  2
)}

原始文本（可能来自发票摘要、邮件正文或报销文字）：
${rawText}

若无法识别某个字段可留空，但请尽量根据邮件日期、invoice date、费用描述等信息补齐。`,
    0.1
  );

  const parsed = extractJsonFromText(content);
  if (!parsed || Array.isArray(parsed)) {
    throw new Error("邮件/文字识别结果不是有效 JSON 对象");
  }

  const costName = String(parsed.costName || file.name.replace(/\.[^.]+$/, "")).trim();
  const amount = parseNumber(parsed.amount);
  const costOccurredAt = normalizeDateInput(parsed.costOccurredAt || parsed.invoiceDate || parsed.occurredAt);
  const orderCreatedAt = toDefaultDateTime(parsed.orderCreatedAt || parsed.emailDate || parsed.invoiceDate || costOccurredAt);
  const description = String(parsed.description || parsed.summary || "").trim();
  const accrualStatus = normalizeAccrualStatus(parsed.accrualStatus, "已发生未开票");

  if (!costName || !isFinite(amount) || !orderCreatedAt || !costOccurredAt) {
    throw new Error("邮件/文字识别缺少必要字段");
  }

  const record = createCostRecord({
    costName,
    amount,
    orderCreatedAt,
    costOccurredAt,
    accrualStatus,
    description,
    sourceText: rawText,
    sourceLanguage: String(parsed.language || ""),
    l1: parsed.l1,
    l2: parsed.l2,
    l3: parsed.l3,
    sourceType: "text",
    sourceFileName: file.name,
  });

  const resolved = resolveAiCostClassification(parsed);
  if (resolved) {
    record.l1 = resolved.l1;
    record.l2 = resolved.l2;
    record.l3 = resolved.l3;
    record.matched = true;
    record.matchedBy = "DeepSeek文本/邮件识别";
  }
  return record;
}

async function processTextCostFiles(files, apiKey) {
  if (!apiKey) {
    throw new Error("上传邮件/文字识别前，请先输入 DeepSeek API Key。");
  }
  const records = [];
  let failed = 0;
  for (const file of files) {
    try {
      const record = await classifyCostTextFileWithDeepSeek(file, apiKey);
      records.push(record);
    } catch (error) {
      failed += 1;
    }
  }
  return { records, failed, recognitionMode: "DeepSeek邮件/文字识别", sourceType: "text" };
}

async function onUploadCostFile(event) {
  if (!canManageCostData()) {
    setCostUploadStatus("当前角色无成本批量上传权限。", "error");
    costUploadInput.value = "";
    return;
  }

  const files = Array.from(event.target.files || []);
  if (files.length === 0) {
    return;
  }

  const invalidFiles = files.filter((file) => {
    const fileName = String(file.name || "").toLowerCase();
    return !isTabularCostFile(fileName) && !isInvoiceCostFile(fileName) && !isTextCostFile(fileName);
  });
  if (invalidFiles.length > 0) {
    setCostUploadStatus("仅支持 .csv / .xlsx / .xls / 发票图片 / PDF / .txt / .eml / .md 文件", "error");
    costUploadInput.value = "";
    return;
  }

  const apiKey = getDeepseekApiKey();
  const collectedRecords = [];
  let failed = 0;
  const messages = [];

  try {
    const tabularFiles = files.filter((file) => isTabularCostFile(String(file.name || "").toLowerCase()));
    const invoiceFiles = files.filter((file) => isInvoiceCostFile(String(file.name || "").toLowerCase()));
    const textFiles = files.filter((file) => isTextCostFile(String(file.name || "").toLowerCase()));

    for (const file of tabularFiles) {
      setCostUploadStatus(`正在处理表格：${file.name}`, "ok");
      const result = await processTabularCostFile(file, apiKey);
      collectedRecords.push(...result.records);
      failed += result.failed;
      messages.push(`${file.name}：成功 ${result.records.length} 条，失败 ${result.failed} 条（${result.recognitionMode}）`);
    }

    if (invoiceFiles.length > 0 && !apiKey) {
      failed += invoiceFiles.length;
      messages.push(`发票识别：跳过 ${invoiceFiles.length} 个文件（未配置 DeepSeek API Key）`);
    } else if (invoiceFiles.length > 0) {
      setCostUploadStatus(`正在识别发票：${invoiceFiles.length} 个文件`, "ok");
      const result = await processInvoiceCostFiles(invoiceFiles, apiKey);
      collectedRecords.push(...result.records);
      failed += result.failed;
      messages.push(
        `发票识别：成功 ${result.records.length} 条，失败 ${result.failed} 条（${result.recognitionMode}${result.lastError ? `：${result.lastError}` : ""}）`
      );
    }

    if (textFiles.length > 0 && !apiKey) {
      failed += textFiles.length;
      messages.push(`邮件/文字识别：跳过 ${textFiles.length} 个文件（未配置 DeepSeek API Key）`);
    } else if (textFiles.length > 0) {
      setCostUploadStatus(`正在识别邮件/文字文件：${textFiles.length} 个`, "ok");
      const result = await processTextCostFiles(textFiles, apiKey);
      collectedRecords.push(...result.records);
      failed += result.failed;
      messages.push(`邮件/文字识别：成功 ${result.records.length} 条，失败 ${result.failed} 条（${result.recognitionMode}）`);
    }

    if (collectedRecords.length === 0) {
      setCostUploadStatus(messages.join("；") || "未成功导入任何成本记录。", "error");
      return;
    }

    state.costRecords.push(...collectedRecords);
    persistCostRecords();
    refreshCostFilters();
    refreshPendingCostOptions();
    renderCostModule();
    const matchedCount = collectedRecords.filter((item) => item.matched).length;
    setCostUploadStatus(
      `${messages.join("；")}；合计成功 ${collectedRecords.length} 条，失败 ${failed} 条，已匹配 ${matchedCount} 条，成功数据已进入待确认`,
      failed > 0 ? "error" : "ok"
    );
  } catch (error) {
    setCostUploadStatus(error instanceof Error ? error.message : "成本文件解析失败，请检查字段和格式", "error");
  } finally {
    costUploadInput.value = "";
  }
}

function onDownloadCostTemplate() {
  const headers = ["costName", "amount", "orderCreatedAt", "costOccurredAt", "accrualStatus", "description", "sourceText", "l1", "l2", "l3"];
  const sample = [
    "物流费",
    "3200",
    "2026-03-13T10:30",
    "2026-03-14",
    "已发生已开票",
    "深圳仓到客户配送",
    "invoice for warehouse delivery / Logistik Rechnung Shenzhen Lager",
    "",
    "",
    "",
  ];
  const csv = `${headers.join(",")}\n${sample.join(",")}\n`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "成本导入模板.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function mapCostRowToRecord(headers, row, sourceFileName = "") {
  const map = {};
  headers.forEach((head, index) => {
    map[String(head || "").trim().toLowerCase()] = row[index];
  });

  const costName = String(pickValue(map, ["costname", "成本名称", "科目名称", "项目名称"]) || "").trim();
  const amount = parseNumber(String(pickValue(map, ["amount", "金额", "成本金额"]) || ""));
  const orderCreatedAt = normalizeDateTimeInput(pickValue(map, ["ordercreatedat", "订单生成时间", "订单时间", "下单时间"]));
  const costOccurredAt = normalizeDateInput(pickValue(map, ["costoccurredat", "成本发生时间", "发生时间", "费用发生时间"]));
  const accrualStatus = normalizeAccrualStatus(
    pickValue(map, ["accrualstatus", "权责发生时间", "开票状态", "发票状态"]),
    "已发生未开票"
  );
  const description = String(pickValue(map, ["description", "备注", "说明", "摘要"]) || "").trim();
  const sourceText = String(
    pickValue(map, ["sourcetext", "evidencetext", "rawtext", "原始文本", "邮件正文", "发票摘要", "emailbody", "mailcontent"]) || ""
  ).trim();
  const l1 = String(pickValue(map, ["l1", "一级", "一级分类"]) || "").trim();
  const l2 = String(pickValue(map, ["l2", "二级", "二级分类"]) || "").trim();
  const l3 = String(pickValue(map, ["l3", "三级", "三级分类"]) || "").trim();

  if (!costName || !isFinite(amount) || !orderCreatedAt || !costOccurredAt) {
    return { ok: false };
  }

  return {
    ok: true,
    record: createCostRecord({
      costName,
      amount,
      orderCreatedAt,
      costOccurredAt,
      accrualStatus,
      description,
      sourceText,
      l1,
      l2,
      l3,
      sourceType: "sheet",
      sourceFileName,
    }),
  };
}

function normalizeDateInput(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }
  const normalized = text.replaceAll("/", "-").replaceAll(".", "-");
  const match = normalized.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (match) {
    return `${match[1]}-${String(Number(match[2])).padStart(2, "0")}-${String(Number(match[3])).padStart(2, "0")}`;
  }
  const asDate = new Date(text);
  if (!Number.isNaN(asDate.getTime())) {
    return `${asDate.getFullYear()}-${String(asDate.getMonth() + 1).padStart(2, "0")}-${String(asDate.getDate()).padStart(2, "0")}`;
  }
  return "";
}

function normalizeDateTimeInput(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }
  const normalized = text.replace(" ", "T").replaceAll("/", "-").replaceAll(".", "-");
  const match = normalized.match(/^(\d{4}-\d{1,2}-\d{1,2})T(\d{1,2}):(\d{1,2})/);
  if (match) {
    const dateText = normalizeDateInput(match[1]);
    return `${dateText}T${String(Number(match[2])).padStart(2, "0")}:${String(Number(match[3])).padStart(2, "0")}`;
  }
  const asDate = new Date(text);
  if (!Number.isNaN(asDate.getTime())) {
    return `${asDate.getFullYear()}-${String(asDate.getMonth() + 1).padStart(2, "0")}-${String(asDate.getDate()).padStart(
      2,
      "0"
    )}T${String(asDate.getHours()).padStart(2, "0")}:${String(asDate.getMinutes()).padStart(2, "0")}`;
  }
  return "";
}

function getFilteredCostRecords() {
  const l1 = costFilterL1.value || "ALL";
  const l2 = costFilterL2.value || "ALL";
  const l3 = costFilterL3.value || "ALL";
  const month = String(costFilterMonth.value || "").trim();
  const accrualStatus = String(costFilterAccrualStatus.value || "ALL").trim();
  const orderMonth = String(costFilterOrderMonth.value || "").trim();
  const keyword = normalizeCostText(costFilterKeyword.value);

  return state.costRecords.filter((item) => {
    if (l1 !== "ALL" && item.l1 !== l1) {
      return false;
    }
    if (l2 !== "ALL" && item.l2 !== l2) {
      return false;
    }
    if (l3 !== "ALL" && item.l3 !== l3) {
      return false;
    }
    if (month && !String(item.costOccurredAt || "").startsWith(month)) {
      return false;
    }
    if (accrualStatus !== "ALL" && item.accrualStatus !== accrualStatus) {
      return false;
    }
    if (orderMonth && !String(item.orderCreatedAt || "").startsWith(orderMonth)) {
      return false;
    }
    if (keyword) {
      const haystack = normalizeCostText(
        [item.costName, item.description, item.sourceText, item.sourceLanguage, item.l1, item.l2, item.l3, item.accrualStatus].join(" ")
      );
      if (!haystack.includes(keyword)) {
        return false;
      }
    }
    return true;
  });
}

function renderCostModule() {
  if (!canViewCostModule()) {
    costRecordsTableBody.innerHTML = "";
    costByL1TableBody.innerHTML = "";
    costByL2TableBody.innerHTML = "";
    costByL3TableBody.innerHTML = "";
    return;
  }
  const filtered = getFilteredCostRecords();
  renderOverviewDashboard();
  renderCostSummary(filtered);
  renderCostRecordsTable(filtered);
  renderCostGroupTable(costByL1TableBody, filtered, (item) => item.l1);
  renderCostGroupTable(costByL2TableBody, filtered, (item) => item.l2);
  renderCostGroupTable(costByL3TableBody, filtered, (item) => item.l3);
}

function renderCostSummary(records) {
  const totalAmount = records.reduce((sum, item) => sum + item.amount, 0);
  const matchedCount = records.filter((item) => item.matched).length;
  const avgAmount = records.length > 0 ? totalAmount / records.length : 0;
  const invoicedAmount = records
    .filter((item) => item.accrualStatus === "已发生已开票")
    .reduce((sum, item) => sum + item.amount, 0);
  const uninvoicedAmount = records
    .filter((item) => item.accrualStatus === "已发生未开票")
    .reduce((sum, item) => sum + item.amount, 0);

  costTotalAmount.textContent = formatMoney(totalAmount);
  costRecordCount.textContent = String(records.length);
  costMatchedCount.textContent = String(matchedCount);
  costAvgAmount.textContent = formatMoney(avgAmount);

  if (records.length === 0) {
    costResultSummary.textContent = "暂无成本数据。";
    return;
  }

  const topL2 = getTopRevenueItem(records, (item) => item.l2, (item) => item.amount);
  const topL3 = getTopRevenueItem(records, (item) => item.l3, (item) => item.amount);
  costResultSummary.textContent = `总成本 ${formatMoney(totalAmount)}；识别成功 ${matchedCount} 条；成本最高 L2 为 ${topL2.key}（${formatMoney(
    topL2.value
  )}）｜成本最高 L3 为 ${topL3.key}（${formatMoney(topL3.value)}）｜已开票 ${formatMoney(invoicedAmount)} / 未开票 ${formatMoney(
    uninvoicedAmount
  )}`;
}

function renderCostRecordsTable(records) {
  costRecordsTableBody.innerHTML = "";
  if (records.length === 0) {
    costRecordsTableBody.innerHTML = `<tr><td colspan="11">暂无成本数据</td></tr>`;
    return;
  }

  records
    .slice()
    .sort((a, b) => String(b.costOccurredAt).localeCompare(String(a.costOccurredAt), "zh-CN"))
    .forEach((item) => {
      const tr = document.createElement("tr");
      const actionButtons = canManageCostData()
        ? [
            `<button class="btn" data-action="edit" data-id="${escapeHtml(item.id)}">编辑</button>`,
            !item.matched || item.l1 === "待确认" || item.l2 === "待确认" || item.l3 === "待确认"
              ? `<button class="btn" data-action="review" data-id="${escapeHtml(item.id)}">修整</button>`
              : "",
            canConfirmData() && item.approvalStatus !== "confirmed"
              ? `<button class="btn" data-action="confirm" data-id="${escapeHtml(item.id)}">确认</button>`
              : "",
            `<button class="btn" data-action="delete" data-id="${escapeHtml(item.id)}">删除</button>`,
          ]
            .filter(Boolean)
            .join("")
        : "-";
      tr.innerHTML = `
        <td>${escapeHtml(item.costName)}</td>
        <td>${formatMoney(item.amount)}</td>
        <td>${escapeHtml(formatDateTimeText(item.orderCreatedAt))}</td>
        <td>${escapeHtml(item.costOccurredAt)}</td>
        <td>${escapeHtml(item.accrualStatus || "已发生未开票")}</td>
        <td>${escapeHtml(item.l1)}</td>
        <td>${escapeHtml(item.l2)}</td>
        <td>${escapeHtml(item.l3)}</td>
        <td><span class="tag ${item.matched ? "" : "off"}">${item.matched ? item.matchedBy : "待确认"}</span></td>
        <td>${getApprovalTag(item)}</td>
        <td>${actionButtons}</td>
      `;
      costRecordsTableBody.appendChild(tr);
    });
}

function renderCostGroupTable(tableBody, records, keyGetter) {
  tableBody.innerHTML = "";
  if (records.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="3">暂无数据</td></tr>`;
    return;
  }

  const grouped = new Map();
  records.forEach((item) => {
    const key = keyGetter(item);
    const current = grouped.get(key) || { count: 0, amount: 0 };
    current.count += 1;
    current.amount += item.amount;
    grouped.set(key, current);
  });

  Array.from(grouped.entries())
    .sort((a, b) => b[1].amount - a[1].amount)
    .forEach(([key, value]) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${escapeHtml(key)}</td>
        <td>${formatNumber(value.count)}</td>
        <td>${formatMoney(value.amount)}</td>
      `;
      tableBody.appendChild(tr);
    });
}

function onCostTableAction(event) {
  if (!canManageCostData()) {
    return;
  }
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const action = String(target.dataset.action || "");
  const id = String(target.dataset.id || "");
  if (!action || !id) {
    return;
  }
  const record = findCostRecordById(id);
  if (!record) {
    return;
  }
  if (action === "edit") {
    fillCostEditForm(record);
    setCostStatus("已载入成本记录，可直接修改后保存。", "ok");
    return;
  }
  if (action === "review") {
    refreshPendingCostOptions(record.id);
    fillPendingCostReviewForm(record);
    const reviewToggle = costManualReviewSection.querySelector(".l3-toggle");
    if (costManualReviewSection.classList.contains("collapsed")) {
      costManualReviewSection.classList.remove("collapsed");
      if (reviewToggle) {
        reviewToggle.textContent = "收起";
        reviewToggle.setAttribute("aria-expanded", "true");
      }
    }
    setCostReviewStatus("已从列表载入待确认记录，可直接人工修整。", "ok");
    return;
  }
  if (action === "confirm") {
    if (!canConfirmData()) {
      setCostStatus("当前角色无成本确认权限。", "error");
      return;
    }
    confirmRecord(record);
    persistCostRecords();
    renderAll();
    setCostStatus("成本记录已确认。", "ok");
    return;
  }
  if (action === "delete") {
    if (state.ui.editingCostId === id) {
      clearCostEditMode();
    }
    state.costRecords = state.costRecords.filter((item) => item.id !== id);
    persistCostRecords();
    refreshCostFilters();
    refreshPendingCostOptions();
    renderCostModule();
    setCostStatus("成本记录已删除。", "ok");
  }
}

function fillCostEditForm(record) {
  state.ui.editingCostId = record.id;
  costInputName.value = record.costName;
  costInputAmount.value = String(record.amount);
  costInputOrderCreatedAt.value = record.orderCreatedAt;
  costInputOccurredAt.value = record.costOccurredAt;
  costInputAccrualStatus.value = record.accrualStatus;
  costInputDescription.value = record.description || "";
  costInputSourceText.value = record.sourceText || "";
  costMatchedL1.value = record.l1 || "";
  costMatchedL2.value = record.l2 || "";
  costMatchedL3.value = record.l3 || "";
}

function formatDateTimeText(value) {
  return String(value || "").replace("T", " ");
}

function onCreateUser() {
  if (!isSuperAdmin()) {
    setUserManageStatus("当前角色无账号管理权限。", "error");
    return;
  }
  const username = String(newUserUsername.value || "").trim().toLowerCase();
  const displayName = String(newUserDisplayName.value || "").trim();
  const role = String(newUserRole.value || "");
  const password = String(newUserPassword.value || "").trim();
  const password2 = String(newUserPassword2.value || "").trim();

  if (!/^[a-zA-Z0-9_.-]{3,30}$/.test(username)) {
    setUserManageStatus("用户名需3-30位，仅支持字母数字_.-", "error");
    return;
  }
  if (!displayName) {
    setUserManageStatus("显示名不能为空", "error");
    return;
  }
  if (!ROLE_CONFIG[role]) {
    setUserManageStatus("角色无效", "error");
    return;
  }
  if (password.length < 6) {
    setUserManageStatus("密码至少6位", "error");
    return;
  }
  if (password !== password2) {
    setUserManageStatus("两次输入密码不一致", "error");
    return;
  }
  if (findUserByUsername(username)) {
    setUserManageStatus("用户名已存在", "error");
    return;
  }

  state.users.push({
    username,
    password,
    role,
    displayName,
    disabled: false,
  });
  persistUsers();
  renderUserManagement();
  setUserManageStatus(`账号 ${username} 已创建`, "ok");
  newUserUsername.value = "";
  newUserDisplayName.value = "";
  newUserRole.value = "sales_rep";
  newUserPassword.value = "";
  newUserPassword2.value = "";
}

function onChangePassword() {
  if (!isSuperAdmin()) {
    setUserManageStatus("当前角色无账号管理权限。", "error");
    return;
  }
  const username = String(passwordUserSelect.value || "").trim();
  const newPassword = String(changePasswordInput.value || "").trim();
  if (!username) {
    setUserManageStatus("请选择账号", "error");
    return;
  }
  if (newPassword.length < 6) {
    setUserManageStatus("新密码至少6位", "error");
    return;
  }

  const user = findUserByUsername(username);
  if (!user) {
    setUserManageStatus("账号不存在", "error");
    return;
  }

  user.password = newPassword;
  persistUsers();
  changePasswordInput.value = "";
  setUserManageStatus(`账号 ${user.username} 密码已更新`, "ok");
}

function onUserTableAction(event) {
  if (!isSuperAdmin()) {
    return;
  }
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const action = target.dataset.action;
  const username = String(target.dataset.username || "");
  if (!action || !username) {
    return;
  }

  const user = findUserByUsername(username);
  if (!user) {
    return;
  }

  if (action === "toggle") {
    if (user.username === state.currentUser.username) {
      setUserManageStatus("不能禁用当前登录账号", "error");
      return;
    }

    if (!user.disabled) {
      const isSuperRole = user.role === "super_admin";
      if (isSuperRole) {
        const activeSuperCount = state.users.filter(
          (item) => item.role === "super_admin" && !item.disabled
        ).length;
        if (activeSuperCount <= 1) {
          setUserManageStatus("至少保留1个启用状态的超级管理员", "error");
          return;
        }
      }
    }

    user.disabled = !user.disabled;
    persistUsers();
    renderUserManagement();
    setUserManageStatus(
      `${user.username} 已${user.disabled ? "禁用" : "启用"}`,
      "ok"
    );
    return;
  }

  if (action === "delete") {
    if (user.username === state.currentUser.username) {
      setUserManageStatus("不能删除当前登录账号", "error");
      return;
    }
    if (user.role === "super_admin") {
      const activeSuperCount = state.users.filter(
        (item) => item.role === "super_admin" && !item.disabled
      ).length;
      if (!user.disabled && activeSuperCount <= 1) {
        setUserManageStatus("至少保留1个启用状态的超级管理员", "error");
        return;
      }
    }
    const confirmed = window.confirm(`确认删除账号 ${user.username}？删除后不可恢复。`);
    if (!confirmed) {
      return;
    }
    state.users = state.users.filter((item) => item.username !== user.username);
    persistUsers();
    renderUserManagement();
    setUserManageStatus(`账号 ${user.username} 已删除`, "ok");
  }
}

function renderUsersTable() {
  usersTableBody.innerHTML = "";
  state.users
    .slice()
    .sort((a, b) => a.username.localeCompare(b.username, "zh-CN"))
    .forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.username}</td>
        <td>${escapeHtml(user.displayName)}</td>
        <td>${ROLE_CONFIG[user.role].label}</td>
        <td><span class="tag ${user.disabled ? "off" : ""}">${user.disabled ? "禁用" : "启用"}</span></td>
        <td>
          <button class="btn" data-action="toggle" data-username="${user.username}">
            ${user.disabled ? "启用" : "禁用"}
          </button>
          <button class="btn btn-danger" data-action="delete" data-username="${user.username}">
            删除
          </button>
        </td>
      `;
      usersTableBody.appendChild(tr);
    });
}

function renderPasswordUserOptions() {
  passwordUserSelect.innerHTML = "";
  state.users
    .slice()
    .sort((a, b) => a.username.localeCompare(b.username, "zh-CN"))
    .forEach((user) => {
      const option = document.createElement("option");
      option.value = user.username;
      option.textContent = `${user.username} (${ROLE_CONFIG[user.role].label})`;
      passwordUserSelect.appendChild(option);
    });
}

function findUserByUsername(username) {
  return state.users.find(
    (item) => item.username.toLowerCase() === String(username || "").trim().toLowerCase()
  );
}

function createMonthInputs() {
  rrpGrid.innerHTML = "";
  for (let month = 1; month <= 12; month += 1) {
    const label = document.createElement("label");
    label.innerHTML = `${month}月RRP<input name="rrp${month}" type="number" step="0.01" min="0" placeholder="可留空" />`;
    rrpGrid.appendChild(label);
  }
}

function createAdjustMonthInputs() {
  adjustRrpGrid.innerHTML = "";
  for (let month = 1; month <= 12; month += 1) {
    const label = document.createElement("label");
    label.innerHTML = `${month}月RRP<input id="adjustRrp${month}" type="number" step="0.01" min="0" placeholder="可留空" />`;
    adjustRrpGrid.appendChild(label);
  }
}

function createMonthSelector() {
  queryMonth.innerHTML = "";
  for (let month = 1; month <= 12; month += 1) {
    const option = document.createElement("option");
    option.value = String(month);
    option.textContent = `${month}月`;
    queryMonth.appendChild(option);
  }
}

function refreshCustomerOptions() {
  const customers = [...new Set(state.records.map((record) => record.customerName))].sort();
  queryCustomer.innerHTML = "";

  if (customers.length === 0) {
    queryCustomer.innerHTML = `<option value="">暂无客户</option>`;
    querySku.innerHTML = `<option value="">暂无SKU</option>`;
    return;
  }

  customers.forEach((customer) => {
    const option = document.createElement("option");
    option.value = customer;
    option.textContent = customer;
    queryCustomer.appendChild(option);
  });
  refreshSkuOptions();
}

function refreshSkuOptions() {
  const customer = queryCustomer.value;
  const keyword = String(queryKeyword.value || "").trim().toLowerCase();
  const selectedSku = querySku.value;
  const skus = state.records
    .filter((record) => record.customerName === customer)
    .map((record) => record.sku)
    .filter((sku) => (keyword ? sku.toLowerCase().includes(keyword) : true))
    .sort();

  querySku.innerHTML = "";
  if (skus.length === 0) {
    querySku.innerHTML = `<option value="">暂无SKU</option>`;
    return;
  }

  skus.forEach((sku) => {
    const option = document.createElement("option");
    option.value = sku;
    option.textContent = sku;
    querySku.appendChild(option);
  });
  querySku.value = skus.includes(selectedSku) ? selectedSku : skus[0];
}

function refreshAdjustOptions(preferredCustomer = "", preferredSku = "") {
  if (!hasAdjustPermission()) {
    adjustCustomer.innerHTML = "";
    adjustSku.innerHTML = "";
    clearAdjustForm();
    return;
  }

  const customers = [...new Set(state.records.map((record) => record.customerName))].sort();
  adjustCustomer.innerHTML = "";

  if (customers.length === 0) {
    adjustCustomer.innerHTML = `<option value="">暂无客户</option>`;
    adjustSku.innerHTML = `<option value="">暂无SKU</option>`;
    clearAdjustForm();
    return;
  }

  if (adjustKeyword) {
    adjustKeyword.value = "";
  }

  customers.forEach((customer) => {
    const option = document.createElement("option");
    option.value = customer;
    option.textContent = customer;
    adjustCustomer.appendChild(option);
  });

  const finalCustomer = customers.includes(preferredCustomer) ? preferredCustomer : customers[0];
  adjustCustomer.value = finalCustomer;
  refreshAdjustSkuOptions(preferredSku);
}

function refreshAdjustSkuOptions(preferredSku = "") {
  const customer = adjustCustomer.value;
  const keyword = String(adjustKeyword.value || "").trim().toLowerCase();
  const currentSku = adjustSku.value;
  const skus = state.records
    .filter((record) => record.customerName === customer)
    .map((record) => record.sku)
    .filter((sku) => (keyword ? sku.toLowerCase().includes(keyword) : true))
    .sort();

  adjustSku.innerHTML = "";
  if (skus.length === 0) {
    adjustSku.innerHTML = `<option value="">暂无SKU</option>`;
    clearAdjustForm();
    return;
  }

  skus.forEach((sku) => {
    const option = document.createElement("option");
    option.value = sku;
    option.textContent = sku;
    adjustSku.appendChild(option);
  });

  if (preferredSku && skus.includes(preferredSku)) {
    adjustSku.value = preferredSku;
    return;
  }
  adjustSku.value = skus.includes(currentSku) ? currentSku : skus[0];
}

function refreshRevenueInputOptions(preferredCustomer = "", preferredSku = "") {
  if (!canEnterSalesData()) {
    revenueInputCustomer.innerHTML = "";
    revenueInputSku.innerHTML = "";
    revenueInputMonth.value = "";
    revenueInputQty.value = "";
    revenueInputUnitPrice.value = "";
    revenueInputUnitCost.value = "";
    return;
  }

  const customers = [...new Set(state.records.map((record) => record.customerName))].sort();
  revenueInputCustomer.innerHTML = "";

  if (customers.length === 0) {
    revenueInputCustomer.innerHTML = `<option value="">暂无客户</option>`;
    revenueInputSku.innerHTML = `<option value="">暂无SKU</option>`;
    return;
  }

  customers.forEach((customer) => {
    const option = document.createElement("option");
    option.value = customer;
    option.textContent = customer;
    revenueInputCustomer.appendChild(option);
  });

  const finalCustomer = customers.includes(preferredCustomer) ? preferredCustomer : customers[0];
  revenueInputCustomer.value = finalCustomer;
  refreshRevenueInputSkuOptions(preferredSku);

  if (!revenueInputMonth.value) {
    revenueInputMonth.value = getCurrentMonthValue();
  }
}

function refreshRevenueInputSkuOptions(preferredSku = "") {
  const customer = revenueInputCustomer.value;
  const skus = state.records
    .filter((record) => record.customerName === customer)
    .map((record) => record.sku)
    .sort();

  revenueInputSku.innerHTML = "";
  if (skus.length === 0) {
    revenueInputSku.innerHTML = `<option value="">暂无SKU</option>`;
    return;
  }

  skus.forEach((sku) => {
    const option = document.createElement("option");
    option.value = sku;
    option.textContent = sku;
    revenueInputSku.appendChild(option);
  });

  revenueInputSku.value = skus.includes(preferredSku) ? preferredSku : skus[0];
}

function refreshRevenueFilterOptions() {
  const prevCustomer = revenueFilterCustomer.value || "ALL";
  const customers = [...new Set(state.salesRecords.map((record) => record.customerName))].sort();
  revenueFilterCustomer.innerHTML = `<option value="ALL">全部客户</option>`;
  customers.forEach((customer) => {
    const option = document.createElement("option");
    option.value = customer;
    option.textContent = customer;
    revenueFilterCustomer.appendChild(option);
  });

  revenueFilterCustomer.value = customers.includes(prevCustomer) ? prevCustomer : "ALL";
  refreshRevenueFilterSkuOptions();
}

function refreshRevenueFilterSkuOptions(preferredSku = "") {
  const customer = revenueFilterCustomer.value || "ALL";
  const prevSku = preferredSku || revenueFilterSku.value || "ALL";
  const skus = [
    ...new Set(
      state.salesRecords
        .filter((record) => customer === "ALL" || record.customerName === customer)
        .map((record) => record.sku)
    ),
  ].sort();

  revenueFilterSku.innerHTML = `<option value="ALL">全部型号</option>`;
  skus.forEach((sku) => {
    const option = document.createElement("option");
    option.value = sku;
    option.textContent = sku;
    revenueFilterSku.appendChild(option);
  });

  revenueFilterSku.value = skus.includes(prevSku) ? prevSku : "ALL";
}

function onSaveRevenueRecord() {
  if (!canEnterSalesData()) {
    setRevenueStatus("当前角色无销售数据录入权限。", "error");
    return;
  }

  const customerName = String(revenueInputCustomer.value || "").trim();
  const sku = String(revenueInputSku.value || "").trim();
  const saleMonth = String(revenueInputMonth.value || "").trim();
  const quantity = parseNumber(revenueInputQty.value);
  const unitPriceRaw = String(revenueInputUnitPrice.value || "").trim();
  const unitCostRaw = String(revenueInputUnitCost.value || "").trim();

  if (!customerName || !sku || !saleMonth) {
    setRevenueStatus("客户、SKU、销售月份均为必填项。", "error");
    return;
  }
  if (!isFinite(quantity) || quantity <= 0) {
    setRevenueStatus("销售数量必须大于0。", "error");
    return;
  }

  let unitPrice = NaN;
  let priceSource = "manual";
  if (unitPriceRaw) {
    unitPrice = parseNumber(unitPriceRaw);
    if (!isFinite(unitPrice) || unitPrice <= 0) {
      setRevenueStatus("成交单价格式不正确。", "error");
      return;
    }
  } else {
    const resolved = resolveRevenueUnitPriceFromQuote(customerName, sku, saleMonth);
    if (!resolved.ok) {
      setRevenueStatus(resolved.message, "error");
      return;
    }
    unitPrice = resolved.unitPrice;
    priceSource = "quote";
  }

  const unitCost = parseNumber(unitCostRaw);
  if (!isFinite(unitCost) || unitCost <= 0) {
    setRevenueStatus("FOB采购成本必须大于0。", "error");
    return;
  }

  const editingRecord =
    state.ui.editingRevenueId && state.salesRecords.find((item) => item.id === state.ui.editingRevenueId)
      ? state.salesRecords.find((item) => item.id === state.ui.editingRevenueId)
      : null;
  const record = createSalesRecord({
    id: editingRecord?.id || createRevenueId(),
    customerName,
    sku,
    category: resolveSalesCategory(customerName, sku),
    saleMonth,
    quantity,
    unitPrice,
    unitCost,
    priceSource,
    costSource: "FOB",
    createdAt: editingRecord?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  resetApprovalMeta(record);
  if (editingRecord) {
    const index = state.salesRecords.findIndex((item) => item.id === editingRecord.id);
    if (index >= 0) {
      state.salesRecords[index] = record;
    }
  } else {
    state.salesRecords.push(record);
  }

  persistSalesRecords();
  const selectedCustomer = revenueFilterCustomer.value || "ALL";
  const selectedSku = revenueFilterSku.value || "ALL";
  const selectedMonth = revenueFilterMonth.value || "";
  renderAll();
  revenueFilterCustomer.value = selectedCustomer;
  refreshRevenueFilterSkuOptions(selectedSku);
  revenueFilterMonth.value = selectedMonth;
  renderRevenueModule();
  revenueInputQty.value = "";
  revenueInputUnitPrice.value = "";
  revenueInputUnitCost.value = "";
  clearRevenueEditMode();
  setRevenueStatus(
    `销售记录已保存，营收 ${formatMoney(record.revenue)}（${
      priceSource === "quote" ? "报价自动" : "手工单价"
    }，成本来源FOB，当前状态待确认）`,
    "ok"
  );
}

function onUploadRevenueFile(event) {
  if (!canUploadSalesData()) {
    setRevenueUploadStatus("当前角色无销量批量上传权限。", "error");
    revenueUploadInput.value = "";
    return;
  }

  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }

  const fileName = String(file.name || "").toLowerCase();
  const isExcelFile = fileName.endsWith(".xlsx") || fileName.endsWith(".xls");
  const isCsvFile = fileName.endsWith(".csv");
  if (!isExcelFile && !isCsvFile) {
    setRevenueUploadStatus("仅支持 .csv / .xlsx / .xls 文件", "error");
    revenueUploadInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const rows = isExcelFile ? parseExcelRows(reader.result) : parseCsv(String(reader.result || ""));
      if (rows.length <= 1) {
        setRevenueUploadStatus("文件内容为空或仅有表头", "error");
        return;
      }

      const headers = rows[0];
      let success = 0;
      let failed = 0;

      for (let index = 1; index < rows.length; index += 1) {
        const row = rows[index];
        if (!Array.isArray(row) || row.every((cell) => String(cell).trim() === "")) {
          continue;
        }
        const mapped = mapSalesRowToRecord(headers, row);
        if (!mapped.ok) {
          failed += 1;
          continue;
        }
        state.salesRecords.push(mapped.record);
        success += 1;
      }

      persistSalesRecords();
      refreshRevenueFilterOptions();
      renderRevenueModule();
      setRevenueUploadStatus(`销量文件处理完成：成功 ${success} 条，失败 ${failed} 条；成功数据已进入待确认`, failed > 0 ? "error" : "ok");
    } catch (error) {
      setRevenueUploadStatus("销量文件解析失败，请检查字段和格式", "error");
    } finally {
      revenueUploadInput.value = "";
    }
  };

  if (isExcelFile) {
    reader.readAsArrayBuffer(file);
  } else {
    reader.readAsText(file, "utf-8");
  }
}

function onDownloadRevenueTemplate() {
  const headers = ["customerName", "sku", "saleMonth", "quantity", "unitPrice", "unitCost", "category"];
  const sample = ["华东渠道A", "Reno14", "2026-03", "120", "", "210.5", "手机"];
  const csv = `${headers.join(",")}\n${sample.join(",")}\n`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "销量导入模板.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function mapSalesRowToRecord(headers, row) {
  const map = {};
  headers.forEach((head, index) => {
    map[String(head || "").trim().toLowerCase()] = row[index];
  });

  const customerName = String(pickValue(map, ["customername", "客户名称", "客户"]) || "").trim();
  const sku = String(pickValue(map, ["sku", "产品sku", "产品"]) || "").trim();
  const saleMonth = normalizeSaleMonth(pickValue(map, ["salemonth", "month", "月份", "销售月份"]));
  const quantity = parseNumber(String(pickValue(map, ["quantity", "qty", "销量", "销售数量"]) || ""));
  const unitPriceRaw = String(pickValue(map, ["unitprice", "price", "单价", "成交单价"]) || "").trim();
  const unitCost = parseNumber(
    String(pickValue(map, ["unitcost", "fob", "fobcost", "fob采购成本", "采购成本", "采购单价"]) || "")
  );
  const categoryRaw = String(pickValue(map, ["category", "机型", "品类"]) || "").trim();

  if (!customerName || !sku || !saleMonth || !isFinite(quantity) || quantity <= 0 || !isFinite(unitCost) || unitCost <= 0) {
    return { ok: false };
  }

  let unitPrice = NaN;
  let priceSource = "manual";
  if (unitPriceRaw) {
    unitPrice = parseNumber(unitPriceRaw);
    if (!isFinite(unitPrice) || unitPrice <= 0) {
      return { ok: false };
    }
  } else {
    const resolved = resolveRevenueUnitPriceFromQuote(customerName, sku, saleMonth);
    if (!resolved.ok) {
      return { ok: false };
    }
    unitPrice = resolved.unitPrice;
    priceSource = "quote";
  }

  return {
    ok: true,
    record: createSalesRecord({
      id: createRevenueId(),
      customerName,
      sku,
      category: categoryRaw || resolveSalesCategory(customerName, sku),
      saleMonth,
      quantity,
      unitPrice,
      unitCost,
      priceSource,
      costSource: "FOB",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...createPendingApprovalMeta(),
    }),
  };
}

function normalizeSaleMonth(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }
  const normalized = text.replaceAll("/", "-").replaceAll(".", "-");
  const matchYm = normalized.match(/^(\d{4})-(\d{1,2})(?:-\d{1,2})?$/);
  if (matchYm) {
    const year = matchYm[1];
    const monthNo = Number(matchYm[2]);
    if (monthNo >= 1 && monthNo <= 12) {
      return `${year}-${String(monthNo).padStart(2, "0")}`;
    }
  }
  const zhMatch = text.match(/^(\d{4})年\s*(\d{1,2})月$/);
  if (zhMatch) {
    const year = zhMatch[1];
    const monthNo = Number(zhMatch[2]);
    if (monthNo >= 1 && monthNo <= 12) {
      return `${year}-${String(monthNo).padStart(2, "0")}`;
    }
  }
  const asDate = new Date(text);
  if (!Number.isNaN(asDate.getTime())) {
    const year = asDate.getFullYear();
    const monthNo = asDate.getMonth() + 1;
    return `${year}-${String(monthNo).padStart(2, "0")}`;
  }
  return "";
}

function resolveSalesCategory(customerName, sku) {
  const matched = findRecord(customerName, sku);
  return matched?.category || "未分类";
}

function createSalesRecord(payload) {
  const quantity = Number(payload.quantity);
  const unitPrice = Number(payload.unitPrice);
  const unitCost = Number(payload.unitCost);
  const revenue = quantity * unitPrice;
  const perUnitGrossProfit = unitPrice - unitCost;
  const grossProfit = perUnitGrossProfit * quantity;
  const grossMargin = unitCost > 0 ? perUnitGrossProfit / unitCost : NaN;
  const approvalMeta = normalizeApprovalMeta({ approvalStatus: payload.approvalStatus || "pending", ...payload });

  return {
    id: String(payload.id || createRevenueId()),
    customerName: String(payload.customerName || ""),
    sku: String(payload.sku || ""),
    category: String(
      payload.category || resolveSalesCategory(String(payload.customerName || ""), String(payload.sku || ""))
    ),
    saleMonth: String(payload.saleMonth || ""),
    quantity: isFinite(quantity) ? quantity : 0,
    unitPrice: isFinite(unitPrice) ? unitPrice : 0,
    unitCost: isFinite(unitCost) && unitCost > 0 ? unitCost : null,
    revenue: isFinite(revenue) ? revenue : 0,
    grossProfit: isFinite(grossProfit) ? grossProfit : null,
    grossMargin: isFinite(grossMargin) ? grossMargin : null,
    priceSource: payload.priceSource === "quote" ? "quote" : "manual",
    costSource: "FOB",
    createdAt: String(payload.createdAt || new Date().toISOString()),
    updatedAt: String(payload.updatedAt || payload.createdAt || new Date().toISOString()),
    ...approvalMeta,
  };
}

function resolveRevenueUnitPriceFromQuote(customerName, sku, saleMonth) {
  const record = findRecord(customerName, sku);
  if (!record) {
    return { ok: false, message: "未找到该客户SKU报价，无法自动带入单价。" };
  }
  const monthNo = Number(String(saleMonth).split("-")[1]);
  if (!isFinite(monthNo) || monthNo < 1 || monthNo > 12) {
    return { ok: false, message: "销售月份格式不正确。" };
  }
  const monthRrp = record.monthlyRrp[monthNo];
  if (!isFinite(monthRrp)) {
    return { ok: false, message: `该客户SKU在${monthNo}月未配置RRP，无法自动计算单价。` };
  }
  const unitPrice = calcPrice(record, monthRrp);
  if (!isFinite(unitPrice) || unitPrice <= 0) {
    return { ok: false, message: "自动计算单价失败，请手工填写成交单价。" };
  }
  return { ok: true, unitPrice };
}

function renderRevenueModule() {
  const filtered = getFilteredRevenueRecords();
  renderOverviewDashboard();
  renderRevenueSummary(filtered);
  renderRevenueRecordsTable(filtered);
  renderRevenueGroupTables(filtered);
  renderGrossAnalysis(filtered);
}

function getFilteredRevenueRecords() {
  const customer = revenueFilterCustomer.value || "ALL";
  const sku = revenueFilterSku.value || "ALL";
  const month = String(revenueFilterMonth.value || "").trim();

  return state.salesRecords.filter((record) => {
    if (customer !== "ALL" && record.customerName !== customer) {
      return false;
    }
    if (sku !== "ALL" && record.sku !== sku) {
      return false;
    }
    if (month && record.saleMonth !== month) {
      return false;
    }
    return true;
  });
}

function renderRevenueSummary(records) {
  const totalRevenue = records.reduce((sum, item) => sum + item.revenue, 0);
  const totalQty = records.reduce((sum, item) => sum + item.quantity, 0);
  const avgPrice = totalQty > 0 ? totalRevenue / totalQty : 0;

  revenueTotalAmount.textContent = formatMoney(totalRevenue);
  revenueTotalQty.textContent = String(Math.round(totalQty * 100) / 100);
  revenueRecordCount.textContent = String(records.length);
  revenueAvgPrice.textContent = formatMoney(avgPrice);

  const topCustomerByQty = getTopRevenueItem(records, (item) => item.customerName, (item) => item.quantity);
  const topSkuByQty = getTopRevenueItem(records, (item) => item.sku, (item) => item.quantity);
  const topCustomerByRevenue = getTopRevenueItem(records, (item) => item.customerName, (item) => item.revenue);
  const topSkuByRevenue = getTopRevenueItem(records, (item) => item.sku, (item) => item.revenue);

  salesResultSummary.textContent =
    records.length === 0
      ? "暂无销售数据"
      : `总销量 ${formatNumber(totalQty)}；最高销量客户 ${topCustomerByQty.key}（${formatNumber(
          topCustomerByQty.value
        )}）｜最高销量型号 ${topSkuByQty.key}（${formatNumber(topSkuByQty.value)}）`;
  incomeResultSummary.textContent =
    records.length === 0
      ? "暂无收入数据"
      : `总收入 ${formatMoney(totalRevenue)}；最高收入客户 ${topCustomerByRevenue.key}（${formatMoney(
          topCustomerByRevenue.value
        )}）｜最高收入型号 ${topSkuByRevenue.key}（${formatMoney(topSkuByRevenue.value)}）`;
}

function renderRevenueRecordsTable(records) {
  const withGross = canViewGrossProfit();
  revenueRecordsHeaderRow.innerHTML = withGross
    ? `<th>客户</th>
       <th>SKU</th>
       <th>机型</th>
       <th>月份</th>
       <th>销量</th>
       <th>单价</th>
       <th>收入</th>
       <th>FOB采购成本</th>
       <th>单台毛利</th>
       <th>单台毛利率</th>
       <th>毛利额</th>
       <th>确认状态</th>
       <th>来源</th>
       <th>操作</th>`
    : `<th>客户</th>
       <th>SKU</th>
       <th>机型</th>
       <th>月份</th>
       <th>销量</th>
       <th>单价</th>
       <th>收入</th>
       <th>确认状态</th>
       <th>来源</th>
       <th>操作</th>`;

  revenueRecordsTableBody.innerHTML = "";
  if (records.length === 0) {
    revenueRecordsTableBody.innerHTML = `<tr><td colspan="${withGross ? 14 : 10}">暂无销售数据</td></tr>`;
    return;
  }

  records
    .slice()
    .sort((a, b) => {
      if (a.saleMonth !== b.saleMonth) {
        return b.saleMonth.localeCompare(a.saleMonth, "zh-CN");
      }
      return b.createdAt.localeCompare(a.createdAt, "zh-CN");
    })
    .forEach((item) => {
      const tr = document.createElement("tr");
      const actionCell = canManageSalesData()
        ? [
            `<button class="btn" data-action="edit" data-id="${escapeHtml(item.id)}">编辑</button>`,
            canConfirmData() && item.approvalStatus !== "confirmed"
              ? `<button class="btn" data-action="confirm" data-id="${escapeHtml(item.id)}">确认</button>`
              : "",
            `<button class="btn" data-action="delete" data-id="${escapeHtml(item.id)}">删除</button>`,
          ]
            .filter(Boolean)
            .join("")
        : "-";
      const unitCostValue = isFinite(item.unitCost) ? item.unitCost : NaN;
      const unitGrossProfit = isFinite(unitCostValue) ? item.unitPrice - unitCostValue : NaN;
      const unitGrossMargin = isFinite(unitCostValue) && unitCostValue > 0 ? unitGrossProfit / unitCostValue : NaN;
      const grossProfit = isFinite(item.grossProfit) ? item.grossProfit : item.quantity * unitGrossProfit;
      const sourceLabel = `${item.priceSource === "quote" ? "报价自动" : "手工录入"} / FOB`;
      tr.innerHTML = `
        <td>${escapeHtml(item.customerName)}</td>
        <td>${escapeHtml(item.sku)}</td>
        <td>${escapeHtml(item.category || "未分类")}</td>
        <td>${escapeHtml(item.saleMonth)}</td>
        <td>${formatNumber(item.quantity)}</td>
        <td>${formatMoney(item.unitPrice)}</td>
        <td>${formatMoney(item.revenue)}</td>
        ${
          withGross
            ? `<td>${formatMoney(unitCostValue)}</td>
               <td>${formatMoney(unitGrossProfit)}</td>
               <td>${formatPercent(unitGrossMargin)}</td>
               <td>${formatMoney(grossProfit)}</td>
               <td>${getApprovalTag(item)}</td>`
            : ""
        }
        ${withGross ? "" : `<td>${getApprovalTag(item)}</td>`}
        <td>${sourceLabel}</td>
        <td>${actionCell}</td>
      `;
      revenueRecordsTableBody.appendChild(tr);
    });
}

function renderRevenueGroupTables(records) {
  renderGroupedRevenueTable(revenueByCustomerTableBody, records, (item) => item.customerName);
  renderGroupedRevenueTable(revenueBySkuTableBody, records, (item) => item.sku);
  renderGroupedRevenueTable(revenueByMonthTableBody, records, (item) => item.saleMonth);
}

function renderGroupedRevenueTable(tableBody, records, keyGetter) {
  tableBody.innerHTML = "";
  if (records.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="3">暂无数据</td></tr>`;
    return;
  }

  const grouped = new Map();
  records.forEach((item) => {
    const key = keyGetter(item);
    const existing = grouped.get(key) || { qty: 0, revenue: 0 };
    existing.qty += item.quantity;
    existing.revenue += item.revenue;
    grouped.set(key, existing);
  });

  Array.from(grouped.entries())
    .sort((a, b) => b[1].revenue - a[1].revenue)
    .forEach(([key, value]) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${escapeHtml(key)}</td>
        <td>${formatNumber(value.qty)}</td>
        <td>${formatMoney(value.revenue)}</td>
      `;
      tableBody.appendChild(tr);
    });
}

function getTopRevenueItem(records, keyGetter, metricGetter) {
  const grouped = new Map();
  records.forEach((item) => {
    const key = keyGetter(item);
    const current = grouped.get(key) || 0;
    grouped.set(key, current + Number(metricGetter(item) || 0));
  });
  let topKey = "-";
  let topValue = Number.NEGATIVE_INFINITY;
  grouped.forEach((value, key) => {
    if (value > topValue) {
      topKey = key;
      topValue = value;
    }
  });
  if (topValue === Number.NEGATIVE_INFINITY) {
    return { key: "-", value: 0 };
  }
  return { key: topKey, value: topValue };
}

function renderGrossAnalysis(records) {
  if (!canViewGrossProfit()) {
    grossSection.classList.add("hidden");
    grossNoPermission.classList.remove("hidden");
    return;
  }
  grossSection.classList.remove("hidden");
  grossNoPermission.classList.add("hidden");

  const valid = records.filter((item) => isFinite(item.unitCost) && item.unitCost > 0);
  if (valid.length === 0) {
    grossTotalAmount.textContent = formatMoney(0);
    grossMarginRate.textContent = "0.00%";
    grossAvgUnitProfit.textContent = formatMoney(0);
    grossAvgUnitMargin.textContent = "0.00%";
    grossResultSummary.textContent = "暂无可计算毛利的数据（需提供FOB采购成本）。";
    grossMarginResultSummary.textContent = "暂无可计算毛利率的数据。";
    renderGroupedGrossTable(grossByCustomerTableBody, [], (item) => item.customerName);
    renderGroupedGrossTable(grossByCategoryTableBody, [], (item) => item.category || "未分类");
    renderGroupedGrossTable(grossBySkuTableBody, [], (item) => item.sku);
    return;
  }

  const totalQty = valid.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = valid.reduce((sum, item) => sum + item.unitCost * item.quantity, 0);
  const totalGross = valid.reduce((sum, item) => sum + (item.unitPrice - item.unitCost) * item.quantity, 0);
  const avgUnitProfit = totalQty > 0 ? totalGross / totalQty : 0;
  const weightedMargin = totalCost > 0 ? totalGross / totalCost : 0;
  const avgUnitMargin =
    valid.reduce((sum, item) => sum + ((item.unitPrice - item.unitCost) / item.unitCost) * item.quantity, 0) /
    (totalQty || 1);

  grossTotalAmount.textContent = formatMoney(totalGross);
  grossMarginRate.textContent = formatPercent(weightedMargin);
  grossAvgUnitProfit.textContent = formatMoney(avgUnitProfit);
  grossAvgUnitMargin.textContent = formatPercent(avgUnitMargin);

  const topGrossCustomer = getTopRevenueItem(valid, (item) => item.customerName, (item) => (item.unitPrice - item.unitCost) * item.quantity);
  const topGrossCategory = getTopRevenueItem(valid, (item) => item.category || "未分类", (item) => (item.unitPrice - item.unitCost) * item.quantity);
  const topGrossSku = getTopRevenueItem(valid, (item) => item.sku, (item) => (item.unitPrice - item.unitCost) * item.quantity);
  const topMarginSku = getTopRevenueItem(valid, (item) => item.sku, (item) => ((item.unitPrice - item.unitCost) / item.unitCost) * item.quantity);

  grossResultSummary.textContent = `总毛利额 ${formatMoney(totalGross)}；最高毛利客户 ${topGrossCustomer.key}（${formatMoney(
    topGrossCustomer.value
  )}）｜最高毛利机型 ${topGrossCategory.key}（${formatMoney(topGrossCategory.value)}）｜最高毛利型号 ${topGrossSku.key}（${formatMoney(
    topGrossSku.value
  )}）`;
  grossMarginResultSummary.textContent = `综合毛利率 ${formatPercent(weightedMargin)}；平均单台毛利率 ${formatPercent(
    avgUnitMargin
  )}｜毛利率领先型号 ${topMarginSku.key}`;

  renderGroupedGrossTable(grossByCustomerTableBody, valid, (item) => item.customerName);
  renderGroupedGrossTable(grossByCategoryTableBody, valid, (item) => item.category || "未分类");
  renderGroupedGrossTable(grossBySkuTableBody, valid, (item) => item.sku);
}

function renderGroupedGrossTable(tableBody, records, keyGetter) {
  tableBody.innerHTML = "";
  if (records.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6">暂无数据</td></tr>`;
    return;
  }

  const grouped = new Map();
  records.forEach((item) => {
    const key = keyGetter(item);
    const current = grouped.get(key) || { qty: 0, revenue: 0, cost: 0, gross: 0 };
    current.qty += item.quantity;
    current.revenue += item.revenue;
    current.cost += item.unitCost * item.quantity;
    current.gross += (item.unitPrice - item.unitCost) * item.quantity;
    grouped.set(key, current);
  });

  Array.from(grouped.entries())
    .sort((a, b) => b[1].gross - a[1].gross)
    .forEach(([key, value]) => {
      const margin = value.cost > 0 ? value.gross / value.cost : NaN;
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${escapeHtml(key)}</td>
        <td>${formatNumber(value.qty)}</td>
        <td>${formatMoney(value.revenue)}</td>
        <td>${formatMoney(value.cost)}</td>
        <td>${formatMoney(value.gross)}</td>
        <td>${formatPercent(margin)}</td>
      `;
      tableBody.appendChild(tr);
    });
}

async function onRunAiAnalysis() {
  const apiKey = String(deepseekApiKey.value || "").trim();
  if (!apiKey) {
    setAiStatus("请先输入 DeepSeek API Key。", "error");
    return;
  }

  const records = getFilteredRevenueRecords();
  if (records.length === 0) {
    setAiStatus("当前筛选下暂无数据，无法分析。", "error");
    return;
  }

  localStorage.setItem(DEEPSEEK_KEY_STORAGE, apiKey);

  const focus = String(aiFocusInput.value || "").trim();
  const analysisPayload = buildRevenueAnalysisPayload(records);
  const prompt = `请基于以下销售/收入数据给出简洁业务分析：
${JSON.stringify(analysisPayload, null, 2)}

请输出：
1. 关键结论（3-5条）
2. 风险点（2-3条）
3. 下月行动建议（3条）
4. 若有异常波动，请指出对应客户/型号/月
关注点：${focus || "无特别关注点"}`;

  setAiStatus("正在请求 DeepSeek 分析...", "ok");
  aiResult.classList.add("hidden");

  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        temperature: 0.2,
        messages: [
          { role: "system", content: "你是企业销售与收入分析助手，输出中文，结论务实可执行。" },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || `HTTP ${response.status}`);
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("AI返回内容为空");
    }

    aiResult.innerHTML = `<pre class="ai-pre">${escapeHtml(content)}</pre>`;
    aiResult.classList.remove("hidden");
    setAiStatus("AI 分析已生成。", "ok");
  } catch (error) {
    setAiStatus("AI 分析失败，请检查密钥、网络或接口权限。", "error");
  }
}

async function onRunCostAiCostAnalysis() {
  const apiKey = getDeepseekApiKey();
  if (!apiKey) {
    setCostAiStatus("请先输入 DeepSeek API Key。", "error");
    return;
  }

  const records = getFilteredCostRecords();
  if (records.length === 0) {
    setCostAiStatus("当前筛选下暂无成本数据，无法分析。", "error");
    return;
  }

  localStorage.setItem(DEEPSEEK_KEY_STORAGE, apiKey);

  const focus = String(costAiFocusInput.value || "").trim();
  const analysisPayload = buildCostAnalysisPayload(records);
  const prompt = `请基于以下成本数据给出中文分析：
${JSON.stringify(analysisPayload, null, 2)}

请输出：
1. 核心结论（3-5条）
2. 成本异常或风险点（2-4条）
3. 未开票/待确认成本风险提示
4. 降本与流程优化建议（3条）
5. 若有异常波动，请指出对应 L1/L2/L3、月份或关键成本项
关注点：${focus || "无特别关注点"}`;

  setCostAiStatus("正在请求 DeepSeek 成本分析...", "ok");
  costAiResult.classList.add("hidden");

  try {
    const content = await requestDeepseekChatCompletion(
      apiKey,
      "你是企业成本分析助手，输出中文，强调结构、风险、权责发生和管理动作，结论务实可执行。",
      prompt,
      0.2
    );
    costAiResult.innerHTML = `<pre class="ai-pre">${escapeHtml(content)}</pre>`;
    costAiResult.classList.remove("hidden");
    setCostAiStatus("成本 AI 分析已生成。", "ok");
  } catch (error) {
    costAiResult.classList.add("hidden");
    setCostAiStatus("成本 AI 分析失败，请检查密钥、网络或接口权限。", "error");
  }
}

function buildRevenueAnalysisPayload(records) {
  const totalRevenue = records.reduce((sum, item) => sum + item.revenue, 0);
  const totalQty = records.reduce((sum, item) => sum + item.quantity, 0);
  const avgPrice = totalQty > 0 ? totalRevenue / totalQty : 0;
  const customerTop = getTopRevenueItem(records, (item) => item.customerName, (item) => item.revenue);
  const skuTop = getTopRevenueItem(records, (item) => item.sku, (item) => item.revenue);

  const monthMap = new Map();
  records.forEach((item) => {
    const current = monthMap.get(item.saleMonth) || { qty: 0, revenue: 0 };
    current.qty += item.quantity;
    current.revenue += item.revenue;
    monthMap.set(item.saleMonth, current);
  });

  const monthBreakdown = Array.from(monthMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0], "zh-CN"))
    .map(([month, value]) => ({
      month,
      qty: Number(value.qty.toFixed(2)),
      revenue: Number(value.revenue.toFixed(2)),
    }));

  const payload = {
    filters: {
      customer: revenueFilterCustomer.value || "ALL",
      sku: revenueFilterSku.value || "ALL",
      month: revenueFilterMonth.value || "ALL",
    },
    overview: {
      records: records.length,
      totalQty: Number(totalQty.toFixed(2)),
      totalRevenue: Number(totalRevenue.toFixed(2)),
      avgPrice: Number(avgPrice.toFixed(2)),
    },
    top: {
      customerByRevenue: customerTop,
      skuByRevenue: skuTop,
    },
    monthBreakdown,
  };

  if (canViewGrossProfit()) {
    const valid = records.filter((item) => isFinite(item.unitCost) && item.unitCost > 0);
    const totalCost = valid.reduce((sum, item) => sum + item.unitCost * item.quantity, 0);
    const totalGross = valid.reduce((sum, item) => sum + (item.unitPrice - item.unitCost) * item.quantity, 0);
    payload.grossOverview = {
      validRecords: valid.length,
      totalCost: Number(totalCost.toFixed(2)),
      totalGrossProfit: Number(totalGross.toFixed(2)),
      grossMarginRate: Number((totalCost > 0 ? totalGross / totalCost : 0).toFixed(4)),
      topCustomerByGrossProfit: getTopRevenueItem(valid, (item) => item.customerName, (item) => (item.unitPrice - item.unitCost) * item.quantity),
      topCategoryByGrossProfit: getTopRevenueItem(valid, (item) => item.category || "未分类", (item) => (item.unitPrice - item.unitCost) * item.quantity),
      topSkuByGrossProfit: getTopRevenueItem(valid, (item) => item.sku, (item) => (item.unitPrice - item.unitCost) * item.quantity),
    };
  }
  return payload;
}

function buildCostAnalysisPayload(records) {
  const totalAmount = records.reduce((sum, item) => sum + item.amount, 0);
  const matchedCount = records.filter((item) => item.matched).length;
  const pendingCount = records.length - matchedCount;
  const invoiced = records.filter((item) => item.accrualStatus === "已发生已开票");
  const uninvoiced = records.filter((item) => item.accrualStatus === "已发生未开票");

  const buildGroup = (keyGetter) => {
    const grouped = new Map();
    records.forEach((item) => {
      const key = keyGetter(item) || "未分类";
      const current = grouped.get(key) || { count: 0, amount: 0 };
      current.count += 1;
      current.amount += item.amount;
      grouped.set(key, current);
    });
    return Array.from(grouped.entries())
      .sort((a, b) => b[1].amount - a[1].amount)
      .slice(0, 10)
      .map(([key, value]) => ({
        key,
        count: value.count,
        amount: Number(value.amount.toFixed(2)),
      }));
  };

  const monthGroup = new Map();
  records.forEach((item) => {
    const month = String(item.costOccurredAt || "").slice(0, 7) || "未填写";
    const current = monthGroup.get(month) || { count: 0, amount: 0 };
    current.count += 1;
    current.amount += item.amount;
    monthGroup.set(month, current);
  });

  return {
    filters: {
      l1: costFilterL1.value || "ALL",
      l2: costFilterL2.value || "ALL",
      l3: costFilterL3.value || "ALL",
      occurredMonth: costFilterMonth.value || "ALL",
      orderMonth: costFilterOrderMonth.value || "ALL",
      accrualStatus: costFilterAccrualStatus.value || "ALL",
      keyword: String(costFilterKeyword.value || "").trim() || "ALL",
    },
    overview: {
      recordCount: records.length,
      totalAmount: Number(totalAmount.toFixed(2)),
      matchedCount,
      pendingCount,
      avgAmount: Number((records.length > 0 ? totalAmount / records.length : 0).toFixed(2)),
    },
    accrualBreakdown: {
      invoicedCount: invoiced.length,
      invoicedAmount: Number(invoiced.reduce((sum, item) => sum + item.amount, 0).toFixed(2)),
      uninvoicedCount: uninvoiced.length,
      uninvoicedAmount: Number(uninvoiced.reduce((sum, item) => sum + item.amount, 0).toFixed(2)),
    },
    topL1: buildGroup((item) => item.l1),
    topL2: buildGroup((item) => item.l2),
    topL3: buildGroup((item) => item.l3),
    topCostItems: records
      .slice()
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 10)
      .map((item) => ({
        costName: item.costName,
        amount: Number(item.amount.toFixed(2)),
        costOccurredAt: item.costOccurredAt,
        accrualStatus: item.accrualStatus,
        l1: item.l1,
        l2: item.l2,
        l3: item.l3,
        matchedBy: item.matchedBy,
      })),
    byMonth: Array.from(monthGroup.entries())
      .sort((a, b) => a[0].localeCompare(b[0], "zh-CN"))
      .map(([month, value]) => ({
        month,
        count: value.count,
        amount: Number(value.amount.toFixed(2)),
      })),
  };
}

function getBusinessEntryMap() {
  const map = new Map();
  state.businessEntries.forEach((item) => {
    const current = map.get(item.month);
    if (!current || String(item.createdAt).localeCompare(String(current.createdAt), "zh-CN") > 0) {
      map.set(item.month, item);
    }
  });
  return map;
}

function buildBusinessAnalysisDataset() {
  const periods = getBusinessPeriodsBySelection();
  const entryMap = getBusinessEntryMap();
  const periodData = periods.map((period) => {
    const sales = state.salesRecords.filter((item) => period.months.includes(item.saleMonth));
    const revenue = sales.reduce((sum, item) => sum + item.revenue, 0);
    const salesGrossProfit = sales.reduce((sum, item) => sum + (Number(item.grossProfit) || 0), 0);
    const costs = state.costRecords.filter((item) =>
      period.months.some((month) => String(item.costOccurredAt || "").startsWith(month))
    );
    const fixedCost = costs.reduce((sum, item) => sum + getBusinessFixedCostAmount(item), 0);
    const variableCost = costs.reduce((sum, item) => sum + getBusinessVariableCostAmount(item), 0);
    const entries = period.months.map((month) => entryMap.get(month)).filter(Boolean);
    const factoryRebate = entries.reduce((sum, item) => sum + Number(item?.factoryRebate || 0), 0);
    const incomeTaxRate =
      entries.length > 0 ? entries.reduce((sum, item) => sum + Number(item?.incomeTaxRate ?? 0.25), 0) / entries.length : 0.25;
    const incomeTotal = salesGrossProfit + factoryRebate;
    const operatingProfit = incomeTotal - fixedCost - variableCost;
    const incomeTax = operatingProfit > 0 ? operatingProfit * incomeTaxRate : 0;
    const netProfit = operatingProfit - incomeTax;
    const grossMargin = revenue > 0 ? salesGrossProfit / revenue : NaN;
    const netMargin = revenue > 0 ? netProfit / revenue : NaN;
    return {
      key: period.key,
      label: period.label,
      months: period.months,
      revenue,
      salesGrossProfit,
      factoryRebate,
      incomeTotal,
      fixedCost,
      variableCost,
      operatingProfit,
      incomeTax,
      netProfit,
      grossMargin,
      netMargin,
      incomeTaxRate,
      salesCount: sales.length,
      costCount: costs.length,
    };
  });

  const periodLabel = getBusinessSelectedLabel();
  const totalData = periodData.reduce(
    (acc, item) => {
      acc.revenue += item.revenue;
      acc.salesGrossProfit += item.salesGrossProfit;
      acc.factoryRebate += item.factoryRebate;
      acc.incomeTotal += item.incomeTotal;
      acc.fixedCost += item.fixedCost;
      acc.variableCost += item.variableCost;
      acc.operatingProfit += item.operatingProfit;
      acc.incomeTax += item.incomeTax;
      acc.netProfit += item.netProfit;
      return acc;
    },
    {
      label: periodLabel,
      revenue: 0,
      salesGrossProfit: 0,
      factoryRebate: 0,
      incomeTotal: 0,
      fixedCost: 0,
      variableCost: 0,
      operatingProfit: 0,
      incomeTax: 0,
      netProfit: 0,
      grossMargin: NaN,
      netMargin: NaN,
    }
  );
  totalData.grossMargin = totalData.revenue > 0 ? totalData.salesGrossProfit / totalData.revenue : NaN;
  totalData.netMargin = totalData.revenue > 0 ? totalData.netProfit / totalData.revenue : NaN;

  return { periods, periodData, totalData, selectedLabel: periodLabel };
}

function renderBusinessModule() {
  if (!canViewBusinessModule()) {
    businessAnalysisTableHead.innerHTML = "";
    businessAnalysisTableBody.innerHTML = "";
    businessEntryTableBody.innerHTML = "";
    businessAnalysisSummary.textContent = "当前角色无经营情况分析权限。";
    businessSourceSummary.innerHTML = "";
    businessAiResult.classList.add("hidden");
    return;
  }

  renderOverviewDashboard();
  const { periods, periodData, totalData, selectedLabel } = buildBusinessAnalysisDataset();
  businessAnalysisTableHead.innerHTML = `<tr><th>项目</th>${periods
    .map((item) => `<th>${escapeHtml(item.label)}</th>`)
    .join("")}<th>${escapeHtml(selectedLabel)}</th></tr>`;

  const rows = [
    ["销售收入", "revenue", "money"],
    ["销售毛利", "salesGrossProfit", "money"],
    ["工厂补贴/返点", "factoryRebate", "money"],
    ["收入合计", "incomeTotal", "money"],
    ["固定费用合计", "fixedCost", "money"],
    ["变动费用合计", "variableCost", "money"],
    ["营业利润", "operatingProfit", "money"],
    ["企业所得税", "incomeTax", "money"],
    ["净利润", "netProfit", "money"],
    ["毛利率", "grossMargin", "percent"],
    ["净利润率", "netMargin", "percent"],
  ];

  businessAnalysisTableBody.innerHTML = "";
  rows.forEach(([label, key, type]) => {
    const tr = document.createElement("tr");
    const periodCells = periodData
      .map((item) => (type === "percent" ? formatPercent(item[key]) : formatMoney(item[key])))
      .map((text) => `<td>${text}</td>`)
      .join("");
    const totalValue = type === "percent" ? formatPercent(totalData[key]) : formatMoney(totalData[key]);
    tr.innerHTML = `<td>${escapeHtml(label)}</td>${periodCells}<td>${totalValue}</td>`;
    businessAnalysisTableBody.appendChild(tr);
  });

  businessRevenueTotal.textContent = formatMoney(totalData.revenue);
  businessOperatingProfitTotal.textContent = formatMoney(totalData.operatingProfit);
  businessNetProfitTotal.textContent = formatMoney(totalData.netProfit);
  businessNetMarginTotal.textContent = formatPercent(totalData.netMargin);

  businessSourceSummary.innerHTML = `
    <p>销售收入 → 销售/收入分析模块的 <code>revenue</code> 字段汇总；销售毛利 → <code>grossProfit</code> 字段汇总。</p>
    <p>工厂补贴/返点、企业所得税率 → 经营补充数据录入/上传字段 <code>factoryRebate</code> / <code>incomeTaxRate</code>。</p>
    <p>固定费用合计 → 成本分析模块中 <code>人力成本 / 行政办公 / 财务费用 / 其他费用</code>；变动费用合计 → <code>差旅招待 / 物流费用 / 销售费用</code>。</p>
    <p>营业利润 = 收入合计 - 固定费用合计 - 变动费用合计；净利润 = 营业利润 - 企业所得税；毛利率/净利润率均以销售收入为分母。</p>
  `;

  businessAnalysisSummary.textContent =
    periodData.length === 0
      ? "暂无经营分析数据。"
      : `${selectedLabel}销售收入 ${formatMoney(totalData.revenue)}，营业利润 ${formatMoney(totalData.operatingProfit)}，净利润 ${formatMoney(
          totalData.netProfit
        )}，净利润率 ${formatPercent(totalData.netMargin)}。工厂补贴/返点合计 ${formatMoney(totalData.factoryRebate)}。`;

  renderBusinessEntryTable();
}

function renderBusinessEntryTable() {
  businessEntryTableBody.innerHTML = "";
  if (state.businessEntries.length === 0) {
    businessEntryTableBody.innerHTML = `<tr><td colspan="6">暂无经营补充数据</td></tr>`;
    return;
  }

  state.businessEntries
    .slice()
    .sort((a, b) => String(b.month).localeCompare(String(a.month), "zh-CN"))
    .forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${escapeHtml(item.month)}</td>
        <td>${formatMoney(item.factoryRebate)}</td>
        <td>${formatPercent(item.incomeTaxRate)}</td>
        <td>${escapeHtml(item.remark || "-")}</td>
        <td>${getApprovalTag(item)}</td>
        <td>${
          canManageBusinessData()
            ? [
                `<button class="btn" data-action="edit" data-id="${escapeHtml(item.id)}">编辑</button>`,
                canConfirmData() && item.approvalStatus !== "confirmed"
                  ? `<button class="btn" data-action="confirm" data-id="${escapeHtml(item.id)}">确认</button>`
                  : "",
                `<button class="btn" data-action="delete" data-id="${escapeHtml(item.id)}">删除</button>`,
              ]
                .filter(Boolean)
                .join("")
            : "-"
        }</td>
      `;
      businessEntryTableBody.appendChild(tr);
    });
}

function createBusinessEntry(payload) {
  const approvalMeta = normalizeApprovalMeta({ approvalStatus: payload.approvalStatus || "pending", ...payload });
  return {
    id: String(payload.id || `biz_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`),
    month: normalizeSaleMonth(payload.month),
    factoryRebate: Number(payload.factoryRebate) || 0,
    incomeTaxRate: isFinite(Number(payload.incomeTaxRate)) ? Number(payload.incomeTaxRate) : 0.25,
    remark: String(payload.remark || "").trim(),
    createdAt: String(payload.createdAt || new Date().toISOString()),
    updatedAt: String(payload.updatedAt || payload.createdAt || new Date().toISOString()),
    ...approvalMeta,
  };
}

function onSaveBusinessEntry() {
  if (!canManageBusinessData()) {
    setBusinessEntryStatus("当前角色无经营补充数据维护权限。", "error");
    return;
  }
  const month = normalizeSaleMonth(businessInputMonth.value);
  const factoryRebate = parseNumber(String(businessInputFactoryRebate.value || "0"));
  const incomeTaxRate = parseRate(businessInputIncomeTaxRate.value, 0.25);
  const remark = String(businessInputRemark.value || "").trim();
  if (!month) {
    setBusinessEntryStatus("月份不能为空。", "error");
    return;
  }
  const editingRecord =
    state.ui.editingBusinessId && state.businessEntries.find((item) => item.id === state.ui.editingBusinessId)
      ? state.businessEntries.find((item) => item.id === state.ui.editingBusinessId)
      : null;
  const nextEntry = createBusinessEntry({
    id: editingRecord?.id,
    month,
    factoryRebate,
    incomeTaxRate,
    remark,
    createdAt: editingRecord?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  const nextEntries = state.businessEntries.filter((item) => !editingRecord || item.id !== editingRecord.id);
  const currentIndex = nextEntries.findIndex((item) => item.month === month);
  if (currentIndex >= 0) {
    nextEntries[currentIndex] = nextEntry;
  } else {
    nextEntries.push(nextEntry);
  }
  state.businessEntries = nextEntries;
  persistBusinessEntries();
  refreshBusinessYearOptions();
  renderBusinessModule();
  businessInputMonth.value = getCurrentMonthValue();
  businessInputFactoryRebate.value = "";
  businessInputIncomeTaxRate.value = "25%";
  businessInputRemark.value = "";
  clearBusinessEditMode();
  setBusinessEntryStatus(`已保存 ${month} 的经营补充数据，当前状态待确认。`, "ok");
}

function onDownloadBusinessTemplate() {
  const headers = ["month", "factoryRebate", "incomeTaxRate", "remark"];
  const sample = ["2026-03", "15000", "25%", "总部返点补贴"];
  const csv = `${headers.join(",")}\n${sample.join(",")}\n`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "经营分析补充数据模板.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function mapBusinessRowToEntry(headers, row) {
  const map = {};
  headers.forEach((head, index) => {
    map[String(head || "").trim().toLowerCase()] = row[index];
  });
  const month = normalizeSaleMonth(pickValue(map, ["month", "月份", "monthvalue"]));
  const factoryRebate = parseNumber(String(pickValue(map, ["factoryrebate", "工厂补贴", "返点", "工厂补贴/返点"]) || "0"));
  const incomeTaxRate = parseRate(pickValue(map, ["incometaxrate", "企业所得税率", "税率"]), 0.25);
  const remark = String(pickValue(map, ["remark", "备注", "说明"]) || "").trim();
  if (!month) {
    return { ok: false };
  }
  return { ok: true, record: createBusinessEntry({ month, factoryRebate, incomeTaxRate, remark }) };
}

function onUploadBusinessFile(event) {
  if (!canManageBusinessData()) {
    setBusinessUploadStatus("当前角色无经营补充数据上传权限。", "error");
    businessUploadInput.value = "";
    return;
  }
  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }
  const fileName = String(file.name || "").toLowerCase();
  const isExcelFile = fileName.endsWith(".xlsx") || fileName.endsWith(".xls");
  const isCsvFile = fileName.endsWith(".csv");
  if (!isExcelFile && !isCsvFile) {
    setBusinessUploadStatus("仅支持 .csv / .xlsx / .xls 文件", "error");
    businessUploadInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const rows = isExcelFile ? parseExcelRows(reader.result) : parseCsv(String(reader.result || ""));
      if (rows.length <= 1) {
        setBusinessUploadStatus("文件内容为空或仅有表头", "error");
        return;
      }
      const headers = rows[0];
      let success = 0;
      let failed = 0;
      for (let index = 1; index < rows.length; index += 1) {
        const row = rows[index];
        if (!Array.isArray(row) || row.every((cell) => String(cell).trim() === "")) {
          continue;
        }
        const mapped = mapBusinessRowToEntry(headers, row);
        if (!mapped.ok) {
          failed += 1;
          continue;
        }
        const currentIndex = state.businessEntries.findIndex((item) => item.month === mapped.record.month);
        if (currentIndex >= 0) {
          state.businessEntries[currentIndex] = { ...state.businessEntries[currentIndex], ...mapped.record, id: state.businessEntries[currentIndex].id };
        } else {
          state.businessEntries.push(mapped.record);
        }
        success += 1;
      }
      persistBusinessEntries();
      refreshBusinessYearOptions();
      renderBusinessModule();
      setBusinessUploadStatus(`经营补充数据导入完成：成功 ${success} 条，失败 ${failed} 条；成功数据已进入待确认。`, failed > 0 ? "error" : "ok");
    } catch (error) {
      setBusinessUploadStatus("经营补充数据解析失败，请检查字段和格式。", "error");
    } finally {
      businessUploadInput.value = "";
    }
  };
  if (isExcelFile) {
    reader.readAsArrayBuffer(file);
  } else {
    reader.readAsText(file, "utf-8");
  }
}

function onBusinessEntryTableAction(event) {
  if (!canManageBusinessData()) {
    return;
  }
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const action = String(target.dataset.action || "");
  const id = String(target.dataset.id || "");
  if (!action || !id) {
    return;
  }
  const record = state.businessEntries.find((item) => item.id === id);
  if (!record) {
    return;
  }
  if (action === "edit") {
    fillBusinessEntryForm(record);
    setBusinessEntryStatus("已载入经营补充数据，可直接修改后保存。", "ok");
    return;
  }
  if (action === "confirm") {
    if (!canConfirmData()) {
      setBusinessEntryStatus("当前角色无经营补充数据确认权限。", "error");
      return;
    }
    confirmRecord(record);
    persistBusinessEntries();
    renderAll();
    setBusinessEntryStatus("经营补充数据已确认。", "ok");
    return;
  }
  if (action === "delete") {
    if (state.ui.editingBusinessId === id) {
      clearBusinessEditMode();
    }
    state.businessEntries = state.businessEntries.filter((item) => item.id !== id);
    persistBusinessEntries();
    refreshBusinessYearOptions();
    renderBusinessModule();
    setBusinessEntryStatus("经营补充数据已删除。", "ok");
  }
}

function fillBusinessEntryForm(record) {
  state.ui.editingBusinessId = record.id;
  businessInputMonth.value = record.month;
  businessInputFactoryRebate.value = String(record.factoryRebate || 0);
  businessInputIncomeTaxRate.value = formatPercent(record.incomeTaxRate);
  businessInputRemark.value = record.remark || "";
}

async function onRunBusinessAiAnalysis() {
  const apiKey = getDeepseekApiKey();
  if (!apiKey) {
    setBusinessAiStatus("请先输入 DeepSeek API Key。", "error");
    return;
  }
  const payload = buildBusinessAiPayload();
  if (payload.months.length === 0) {
    setBusinessAiStatus("当前时间段暂无经营数据，无法分析。", "error");
    return;
  }
  localStorage.setItem(DEEPSEEK_KEY_STORAGE, apiKey);
  const focus = String(businessAiFocusInput.value || "").trim();
  setBusinessAiStatus("正在请求 DeepSeek 经营分析...", "ok");
  businessAiResult.classList.add("hidden");
  try {
    const content = await requestDeepseekChatCompletion(
      apiKey,
      "你是企业经营分析助手，请结合收入、毛利、费用、返点与税率输出中文分析，重点强调经营质量、利润结构与改进建议。",
      `请基于以下经营数据输出分析：
${JSON.stringify(payload, null, 2)}

请输出：
1. 当前时间段经营结论（3-5条）
2. 盈利变化的关键驱动
3. 固定费用 / 变动费用 / 返点对利润的影响
4. 风险提示（2-3条）
5. 下一阶段建议（3条）
关注点：${focus || "无特别关注点"}`,
      0.2
    );
    businessAiResult.innerHTML = `<pre class="ai-pre">${escapeHtml(content)}</pre>`;
    businessAiResult.classList.remove("hidden");
    setBusinessAiStatus("经营 AI 分析已生成。", "ok");
  } catch (error) {
    businessAiResult.classList.add("hidden");
    setBusinessAiStatus("经营 AI 分析失败，请检查密钥、网络或接口权限。", "error");
  }
}

function buildBusinessAiPayload() {
  const dataset = buildBusinessAnalysisDataset();
  return {
    year: businessYearSelect.value || "2026",
    periodType: businessPeriodTypeSelect.value || "quarter",
    periodTypeLabel: getBusinessPeriodTypeLabel(businessPeriodTypeSelect.value || "quarter"),
    periodValue: businessPeriodValueSelect.value || "",
    selectedLabel: dataset.selectedLabel,
    months: dataset.periodData.map((item) => ({
      period: item.label,
      months: item.months,
      salesRevenue: Number(item.revenue.toFixed(2)),
      salesGrossProfit: Number(item.salesGrossProfit.toFixed(2)),
      factoryRebate: Number(item.factoryRebate.toFixed(2)),
      incomeTotal: Number(item.incomeTotal.toFixed(2)),
      fixedCost: Number(item.fixedCost.toFixed(2)),
      variableCost: Number(item.variableCost.toFixed(2)),
      operatingProfit: Number(item.operatingProfit.toFixed(2)),
      incomeTax: Number(item.incomeTax.toFixed(2)),
      netProfit: Number(item.netProfit.toFixed(2)),
      grossMargin: Number((isFinite(item.grossMargin) ? item.grossMargin : 0).toFixed(4)),
      netMargin: Number((isFinite(item.netMargin) ? item.netMargin : 0).toFixed(4)),
      incomeTaxRate: Number(item.incomeTaxRate.toFixed(4)),
      salesCount: item.salesCount,
      costCount: item.costCount,
    })),
    periodTotals: {
      salesRevenue: Number(dataset.totalData.revenue.toFixed(2)),
      salesGrossProfit: Number(dataset.totalData.salesGrossProfit.toFixed(2)),
      factoryRebate: Number(dataset.totalData.factoryRebate.toFixed(2)),
      incomeTotal: Number(dataset.totalData.incomeTotal.toFixed(2)),
      fixedCost: Number(dataset.totalData.fixedCost.toFixed(2)),
      variableCost: Number(dataset.totalData.variableCost.toFixed(2)),
      operatingProfit: Number(dataset.totalData.operatingProfit.toFixed(2)),
      incomeTax: Number(dataset.totalData.incomeTax.toFixed(2)),
      netProfit: Number(dataset.totalData.netProfit.toFixed(2)),
      grossMargin: Number((isFinite(dataset.totalData.grossMargin) ? dataset.totalData.grossMargin : 0).toFixed(4)),
      netMargin: Number((isFinite(dataset.totalData.netMargin) ? dataset.totalData.netMargin : 0).toFixed(4)),
    },
    sourceMapping: {
      salesRevenue: "salesRecords.revenue",
      salesGrossProfit: "salesRecords.grossProfit",
      factoryRebate: "businessEntries.factoryRebate",
      incomeTaxRate: "businessEntries.incomeTaxRate",
      fixedCost: "costRecords by L2: 人力成本/行政办公/财务费用/其他费用",
      variableCost: "costRecords by L2: 差旅招待/物流费用/销售费用",
    },
  };
}

function onRevenueTableAction(event) {
  if (!canManageSalesData()) {
    return;
  }
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const action = target.dataset.action;
  const id = String(target.dataset.id || "");
  if (!action || !id) {
    return;
  }
  const index = state.salesRecords.findIndex((item) => item.id === id);
  if (index < 0) {
    return;
  }
  if (action === "edit") {
    fillRevenueForm(state.salesRecords[index]);
    setRevenueStatus("已载入销售记录，可直接修改后保存。", "ok");
    return;
  }
  if (action === "confirm") {
    if (!canConfirmData()) {
      setRevenueStatus("当前角色无销售数据确认权限。", "error");
      return;
    }
    confirmRecord(state.salesRecords[index]);
    persistSalesRecords();
    renderAll();
    setRevenueStatus("销售记录已确认。", "ok");
    return;
  }
  if (action === "delete") {
    if (state.ui.editingRevenueId === id) {
      clearRevenueEditMode();
    }
    state.salesRecords.splice(index, 1);
    persistSalesRecords();
    refreshRevenueFilterOptions();
    renderRevenueModule();
    setRevenueStatus("销售记录已删除。", "ok");
  }
}

function fillRevenueForm(record) {
  state.ui.editingRevenueId = record.id;
  revenueInputCustomer.value = record.customerName;
  refreshRevenueInputSkuOptions(record.sku);
  revenueInputSku.value = record.sku;
  revenueInputMonth.value = record.saleMonth;
  revenueInputQty.value = record.quantity;
  revenueInputUnitPrice.value = record.priceSource === "manual" ? String(record.unitPrice) : "";
  revenueInputUnitCost.value = isFinite(Number(record.unitCost)) ? String(record.unitCost) : "";
}

function onLoadAdjustRecord() {
  if (!hasAdjustPermission()) {
    setAdjustStatus("当前角色无调价权限。", "error");
    return;
  }

  const customer = adjustCustomer.value;
  const sku = adjustSku.value;
  const record = findRecord(customer, sku);
  if (!record) {
    setAdjustStatus("没有找到可调价的数据记录。", "error");
    clearAdjustForm();
    return;
  }

  fillAdjustForm(record);
  setAdjustStatus("已载入当前RRP和红色区域数据。", "ok");
}

function onSaveAdjustRecord() {
  if (!hasAdjustPermission()) {
    setAdjustStatus("当前角色无调价权限。", "error");
    return;
  }

  const customer = adjustCustomer.value;
  const sku = adjustSku.value;
  const record = findRecord(customer, sku);
  if (!record) {
    setAdjustStatus("没有找到可更新的数据记录。", "error");
    return;
  }

  const monthlyRrp = {};
  let hasRrp = false;
  for (let month = 1; month <= 12; month += 1) {
    const input = document.getElementById(`adjustRrp${month}`);
    const raw = String(input.value || "").trim();
    if (!raw) {
      monthlyRrp[month] = null;
      continue;
    }
    const value = parseNumber(raw);
    if (!isFinite(value) || value < 0) {
      setAdjustStatus(`第${month}月RRP格式不正确`, "error");
      return;
    }
    monthlyRrp[month] = value;
    hasRrp = true;
  }
  if (!hasRrp) {
    setAdjustStatus("请至少填写一个月份RRP", "error");
    return;
  }

  const dbRate = parseRate(adjustDbRate.value);
  const customerMargin = parseRate(adjustCustomerMargin.value);
  const serviceFee = parseRate(adjustServiceFee.value);
  const stkBuffer = parseNumber(adjustStkBuffer.value);
  const frontMargin = parseRate(adjustFrontMargin.value);

  if ([dbRate, customerMargin, serviceFee, stkBuffer, frontMargin].some((item) => !isFinite(item))) {
    setAdjustStatus("红色区域字段存在无法识别的数字格式", "error");
    return;
  }

  record.monthlyRrp = monthlyRrp;
  record.dbRate = dbRate;
  record.customerMargin = customerMargin;
  record.serviceFee = serviceFee;
  record.stkBuffer = stkBuffer;
  record.frontMargin = frontMargin;
  record.updatedAt = new Date().toISOString();
  resetApprovalMeta(record);

  persistRecords();
  renderAll();
  refreshAdjustOptions(customer, sku);
  onLoadAdjustRecord();
  setAdjustStatus("调价已保存，确认状态已重置为待确认。", "ok");
}

function fillAdjustForm(record) {
  for (let month = 1; month <= 12; month += 1) {
    const input = document.getElementById(`adjustRrp${month}`);
    input.value = isFinite(record.monthlyRrp[month]) ? record.monthlyRrp[month] : "";
  }
  adjustDbRate.value = formatPercent(record.dbRate);
  adjustCustomerMargin.value = formatPercent(record.customerMargin);
  adjustServiceFee.value = formatPercent(record.serviceFee);
  adjustStkBuffer.value = record.stkBuffer;
  adjustFrontMargin.value = formatPercent(record.frontMargin);
}

function clearAdjustForm() {
  for (let month = 1; month <= 12; month += 1) {
    const input = document.getElementById(`adjustRrp${month}`);
    if (input) {
      input.value = "";
    }
  }
  adjustDbRate.value = "";
  adjustCustomerMargin.value = "";
  adjustServiceFee.value = "";
  adjustStkBuffer.value = "";
  adjustFrontMargin.value = "";
}

function findRecord(customerName, sku) {
  return state.records.find((item) => item.customerName === customerName && item.sku === sku);
}

function onQueryPrice() {
  const customer = queryCustomer.value;
  const sku = querySku.value;
  const month = Number(queryMonth.value);
  const record = state.records.find((item) => item.customerName === customer && item.sku === sku);

  if (!record) {
    queryResult.classList.remove("hidden");
    queryResult.innerHTML = "没有找到对应客户SKU数据。";
    quoteFormulaBreakdown.innerHTML = "系统会按客户 + SKU + 月份自动取值，除核心点位外，其余结果统一自动计算。";
    return;
  }

  const monthRrp = record.monthlyRrp[month];
  if (!isFinite(monthRrp)) {
    queryResult.classList.remove("hidden");
    queryResult.innerHTML = `${month}月RRP未设置，无法计算出货价。`;
    quoteFormulaBreakdown.innerHTML = `当前客户 SKU 在 ${month} 月未配置 RRP，暂时无法生成自动出货价。`;
    return;
  }

  const role = getRoleConfig();
  const price = calcPrice(record, monthRrp);
  const lines = [
    `<p><strong>${escapeHtml(record.customerName)}</strong> / <strong>${escapeHtml(record.sku)}</strong> / <strong>${month}月</strong></p>`,
    `<p>对应出货价：<strong>${formatMoney(price)}</strong></p>`,
    `<p>确认状态：${record.approvalStatus === "confirmed" ? "已确认" : "待确认"}</p>`,
  ];

  if (role.canViewAllMonthPrices) {
    lines.push(`<p>${buildMonthPriceLine(record)}</p>`);
  }

  if (role.canViewFormula) {
    lines.push(
      `<p class="hint">公式代入：(${monthRrp} / (1 + ${formatPercent(record.vatRate)})) × (1 - ${formatPercent(
        record.frontMargin
      )}) × (1 - ${formatPercent(record.dbRate)} - ${formatPercent(record.customerMargin)} - ${formatPercent(
        record.serviceFee
      )}) - ${record.stkBuffer}</p>`
    );
  }

  queryResult.classList.remove("hidden");
  queryResult.innerHTML = lines.join("");
  quoteFormulaBreakdown.innerHTML = `
    <p>当前定位：<code>${escapeHtml(record.customerName)}</code> / <code>${escapeHtml(record.sku)}</code> / <code>${month}月</code></p>
    <p>系统取值：RRP=${formatMoney(monthRrp)}，VAT=${formatPercent(record.vatRate)}，Front Margin=${formatPercent(
      record.frontMargin
    )}，DB=${formatPercent(record.dbRate)}，客户Margin=${formatPercent(record.customerMargin)}，Service Fee=${formatPercent(
      record.serviceFee
    )}，STKbuffer=${formatNumber(record.stkBuffer)}</p>
    <p>自动结果：当月出货价 <strong>${formatMoney(price)}</strong>；后续销量录入若成交单价留空，将直接回填该自动报价。</p>
  `;
}

function calcPrice(record, monthRrp) {
  return (
    (monthRrp / (1 + record.vatRate)) *
      (1 - record.frontMargin) *
      (1 - record.dbRate - record.customerMargin - record.serviceFee) -
    record.stkBuffer
  );
}

function buildMonthPriceLine(record) {
  const rows = [];
  for (let month = 1; month <= 12; month += 1) {
    const rrp = record.monthlyRrp[month];
    if (!isFinite(rrp)) {
      continue;
    }
    rows.push(`${month}月: ${formatMoney(calcPrice(record, rrp))}`);
  }
  return rows.length > 0 ? `该客户该SKU已配置月份价格：${rows.join(" | ")}` : "暂无已配置月份价格";
}

function onSaveRecord(event) {
  event.preventDefault();
  if (!hasAdminPermission()) {
    setUploadStatus("当前角色无后台维护权限。", "error");
    return;
  }
  const payload = readFormData();
  if (!payload) {
    return;
  }
  const editingKey = state.ui.editingQuoteKey || "";
  const originalRecord = editingKey ? findRecordByKey(editingKey) : null;
  const nextRecord = {
    id: String(originalRecord?.id || payload.id || `quote_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`),
    createdAt: String(originalRecord?.createdAt || payload.createdAt || new Date().toISOString()),
    ...payload,
  };
  resetApprovalMeta(nextRecord);
  upsertRecord(nextRecord, editingKey);
  persistRecords();
  renderAll();
  setUploadStatus("报价数据已保存。相同客户+SKU已自动更新，当前状态为待确认。", "ok");
  form.reset();
  form.elements.vatRate.value = "20%";
  form.elements.ura.value = "5.5";
  clearQuoteEditMode();
}

function readFormData() {
  const formData = new FormData(form);
  const customerName = String(formData.get("customerName") || "").trim();
  const sku = String(formData.get("sku") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const monthlyRrp = {};
  let hasRrp = false;

  for (let month = 1; month <= 12; month += 1) {
    const raw = String(formData.get(`rrp${month}`) || "").trim();
    if (!raw) {
      monthlyRrp[month] = null;
      continue;
    }
    const value = parseNumber(raw);
    if (!isFinite(value) || value < 0) {
      setUploadStatus(`第${month}月RRP格式不正确`, "error");
      return null;
    }
    monthlyRrp[month] = value;
    hasRrp = true;
  }

  if (!customerName || !sku) {
    setUploadStatus("客户名称和SKU为必填项", "error");
    return null;
  }
  if (!hasRrp) {
    setUploadStatus("请至少填写一个月份RRP", "error");
    return null;
  }

  const dbRate = parseRate(formData.get("dbRate"));
  const customerMargin = parseRate(formData.get("customerMargin"));
  const serviceFee = parseRate(formData.get("serviceFee"));
  const frontMargin = parseRate(formData.get("frontMargin"));
  const vatRate = parseRate(formData.get("vatRate"), 0.2);
  const stkBuffer = parseNumber(String(formData.get("stkBuffer") || ""));
  const ura = parseNumber(String(formData.get("ura") || "0"));

  if (
    [dbRate, customerMargin, serviceFee, frontMargin, vatRate, stkBuffer, ura].some(
      (item) => !isFinite(item)
    )
  ) {
    setUploadStatus("点位字段里存在无法识别的数字格式", "error");
    return null;
  }

  return {
    customerName,
    sku,
    category,
    monthlyRrp,
    dbRate,
    customerMargin,
    serviceFee,
    stkBuffer,
    frontMargin,
    vatRate,
    ura,
    updatedAt: new Date().toISOString(),
  };
}

function upsertRecord(record, originalKey = "") {
  if (originalKey) {
    const original = unescapeKey(originalKey);
    const originalIndex = state.records.findIndex(
      (item) =>
        item.customerName.toLowerCase() === original.customerName.toLowerCase() &&
        item.sku.toLowerCase() === original.sku.toLowerCase()
    );
    if (originalIndex >= 0) {
      state.records.splice(originalIndex, 1);
    }
  }
  const index = state.records.findIndex(
    (item) =>
      item.customerName.toLowerCase() === record.customerName.toLowerCase() &&
      item.sku.toLowerCase() === record.sku.toLowerCase()
  );
  if (index >= 0) {
    state.records[index] = record;
    return;
  }
  state.records.push(record);
}

function onUploadCsv(event) {
  if (!hasAdminPermission()) {
    setUploadStatus("当前角色无后台维护权限。", "error");
    csvInput.value = "";
    return;
  }

  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }

  const fileName = String(file.name || "").toLowerCase();
  const isExcelFile = fileName.endsWith(".xlsx") || fileName.endsWith(".xls");
  const isCsvFile = fileName.endsWith(".csv");
  if (!isExcelFile && !isCsvFile) {
    setUploadStatus("仅支持 .csv / .xlsx / .xls 文件", "error");
    csvInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const rows = isExcelFile ? parseExcelRows(reader.result) : parseCsv(String(reader.result || ""));
      if (rows.length <= 1) {
        setUploadStatus("文件内容为空或仅有表头", "error");
        return;
      }
      const headers = rows[0];
      let success = 0;
      let failed = 0;

      for (let index = 1; index < rows.length; index += 1) {
        const row = rows[index];
        if (row.every((cell) => String(cell).trim() === "")) {
          continue;
        }
        const record = mapCsvRowToRecord(headers, row);
        if (!record) {
          failed += 1;
          continue;
        }
        upsertRecord(record);
        success += 1;
      }

      persistRecords();
      renderAll();
      setUploadStatus(`文件处理完成：成功 ${success} 条，失败 ${failed} 条；成功数据已进入待确认`, failed > 0 ? "error" : "ok");
    } catch (error) {
      setUploadStatus("解析失败，请检查文件格式和表头字段", "error");
    } finally {
      csvInput.value = "";
    }
  };
  if (isExcelFile) {
    reader.readAsArrayBuffer(file);
  } else {
    reader.readAsText(file, "utf-8");
  }
}

function onDownloadTemplate() {
  const headers = [
    "customerName",
    "sku",
    "category",
    "rrp1",
    "rrp2",
    "rrp3",
    "rrp4",
    "rrp5",
    "rrp6",
    "rrp7",
    "rrp8",
    "rrp9",
    "rrp10",
    "rrp11",
    "rrp12",
    "dbRate",
    "customerMargin",
    "serviceFee",
    "stkBuffer",
    "frontMargin",
    "vatRate",
    "ura",
  ];
  const sample = [
    "华东渠道A",
    "Reno14",
    "手机",
    "529",
    "529",
    "449",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "3.34%",
    "12.4%",
    "0.12%",
    "5",
    "0.5%",
    "20%",
    "5.5",
  ];
  const csv = `${headers.join(",")}\n${sample.join(",")}\n`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "报价导入模板.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function mapCsvRowToRecord(headers, row) {
  const map = {};
  headers.forEach((head, index) => {
    const key = String(head || "").trim().toLowerCase();
    map[key] = row[index];
  });

  const customerName = String(pickValue(map, ["customername", "客户名称", "客户"]) || "").trim();
  const sku = String(pickValue(map, ["sku", "产品sku", "产品"]) || "").trim();
  const category = String(pickValue(map, ["category", "品类"]) || "").trim();
  if (!customerName || !sku) {
    return null;
  }

  const monthlyRrp = {};
  let hasRrp = false;
  for (let month = 1; month <= 12; month += 1) {
    const raw = pickValue(map, [`rrp${month}`, `${month}月rrp`, `${month}月`]);
    if (raw === undefined || raw === null || String(raw).trim() === "") {
      monthlyRrp[month] = null;
      continue;
    }
    const value = parseNumber(String(raw));
    if (!isFinite(value) || value < 0) {
      return null;
    }
    monthlyRrp[month] = value;
    hasRrp = true;
  }
  if (!hasRrp) {
    return null;
  }

  const dbRate = parseRate(pickValue(map, ["dbrate", "db点位", "db"]));
  const customerMargin = parseRate(pickValue(map, ["customermargin", "客户margin"]));
  const serviceFee = parseRate(pickValue(map, ["servicefee", "service fee", "service_fee"]));
  const stkBuffer = parseNumber(String(pickValue(map, ["stkbuffer", "stkbuffer-5", "stk"]) || ""));
  const frontMargin = parseRate(pickValue(map, ["frontmargin", "front margin", "front_margin"]));
  const vatRate = parseRate(pickValue(map, ["vatrate", "vat"]), 0.2);
  const ura = parseNumber(String(pickValue(map, ["ura"]) || "0"));

  if ([dbRate, customerMargin, serviceFee, stkBuffer, frontMargin, vatRate, ura].some((item) => !isFinite(item))) {
    return null;
  }

  return {
    id: `quote_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    customerName,
    sku,
    category,
    monthlyRrp,
    dbRate,
    customerMargin,
    serviceFee,
    stkBuffer,
    frontMargin,
    vatRate,
    ura,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...createPendingApprovalMeta(),
  };
}

function renderRecordsTable() {
  if (!hasAdminPermission()) {
    recordsTableBody.innerHTML = "";
    return;
  }
  recordsTableBody.innerHTML = "";
  state.records
    .slice()
    .sort((a, b) => {
      if (a.customerName !== b.customerName) {
        return a.customerName.localeCompare(b.customerName, "zh-CN");
      }
      return a.sku.localeCompare(b.sku, "zh-CN");
    })
    .forEach((record) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${escapeHtml(record.customerName)}</td>
        <td>${escapeHtml(record.sku)}</td>
        <td>${escapeHtml(record.category || "-")}</td>
        <td>${formatPercent(record.dbRate)}</td>
        <td>${formatPercent(record.customerMargin)}</td>
        <td>${formatPercent(record.serviceFee)}</td>
        <td>${formatPercent(record.frontMargin)}</td>
        <td>${formatPercent(record.vatRate)}</td>
        <td>${getApprovalTag(record)}</td>
        <td>
          <button class="btn" data-action="edit" data-key="${escapeKey(record.customerName, record.sku)}">编辑</button>
          ${
            canConfirmData() && record.approvalStatus !== "confirmed"
              ? `<button class="btn" data-action="confirm" data-key="${escapeKey(record.customerName, record.sku)}">确认</button>`
              : ""
          }
          <button class="btn" data-action="delete" data-key="${escapeKey(record.customerName, record.sku)}">删除</button>
        </td>
      `;
      recordsTableBody.appendChild(tr);
    });
}

function onRecordTableAction(event) {
  if (!hasAdminPermission()) {
    return;
  }
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const action = target.dataset.action;
  if (!action) {
    return;
  }
  const key = target.dataset.key || "";
  const parsed = unescapeKey(key);
  const index = state.records.findIndex(
    (record) => record.customerName === parsed.customerName && record.sku === parsed.sku
  );
  if (index < 0) {
    return;
  }
  if (action === "delete") {
    if (state.ui.editingQuoteKey === key) {
      clearQuoteEditMode();
    }
    state.records.splice(index, 1);
    persistRecords();
    renderAll();
    queryResult.classList.add("hidden");
    setUploadStatus("该客户SKU已删除", "ok");
    return;
  }
  if (action === "edit") {
    fillForm(state.records[index]);
    setUploadStatus("已载入到表单，可直接修改后保存", "ok");
    return;
  }
  if (action === "confirm") {
    if (!canConfirmData()) {
      setUploadStatus("当前角色无报价确认权限。", "error");
      return;
    }
    confirmRecord(state.records[index]);
    persistRecords();
    renderAll();
    setUploadStatus("报价已确认。", "ok");
  }
}

function fillForm(record) {
  state.ui.editingQuoteKey = escapeKey(record.customerName, record.sku);
  form.elements.customerName.value = record.customerName;
  form.elements.sku.value = record.sku;
  form.elements.category.value = record.category || "";
  for (let month = 1; month <= 12; month += 1) {
    form.elements[`rrp${month}`].value = isFinite(record.monthlyRrp[month]) ? record.monthlyRrp[month] : "";
  }
  form.elements.dbRate.value = formatPercent(record.dbRate);
  form.elements.customerMargin.value = formatPercent(record.customerMargin);
  form.elements.serviceFee.value = formatPercent(record.serviceFee);
  form.elements.stkBuffer.value = record.stkBuffer;
  form.elements.frontMargin.value = formatPercent(record.frontMargin);
  form.elements.vatRate.value = formatPercent(record.vatRate);
  form.elements.ura.value = record.ura;
}

function findRecordByKey(key) {
  const parsed = unescapeKey(key);
  return (
    state.records.find(
      (record) =>
        record.customerName.toLowerCase() === parsed.customerName.toLowerCase() &&
        record.sku.toLowerCase() === parsed.sku.toLowerCase()
    ) || null
  );
}

function pickValue(map, aliases) {
  for (const alias of aliases) {
    const value = map[String(alias).trim().toLowerCase()];
    if (value !== undefined) {
      return value;
    }
  }
  return undefined;
}

function parseRate(value, fallback = NaN) {
  if (value === undefined || value === null || String(value).trim() === "") {
    return fallback;
  }
  const text = String(value).trim().replaceAll(",", "");
  if (text.endsWith("%")) {
    return parseFloat(text.slice(0, -1)) / 100;
  }
  const numeric = parseFloat(text);
  if (!isFinite(numeric)) {
    return NaN;
  }
  return Math.abs(numeric) > 1 ? numeric / 100 : numeric;
}

function parseNumber(value) {
  const text = String(value).trim().replaceAll(",", "");
  return parseFloat(text);
}

function formatPercent(value) {
  if (!isFinite(value)) {
    return "--";
  }
  return `${(value * 100).toFixed(2)}%`;
}

function formatMoney(value) {
  if (!isFinite(value)) {
    return "--";
  }
  return Number(value).toLocaleString("zh-CN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatNumber(value) {
  if (!isFinite(value)) {
    return "--";
  }
  return Number(value).toLocaleString("zh-CN", {
    minimumFractionDigits: Number.isInteger(Number(value)) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function createRevenueId() {
  return `rev_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function createCostId() {
  return `cost_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getCurrentMonthValue() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function getTodayDateValue() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function setUploadStatus(text, type) {
  uploadStatus.textContent = text;
  uploadStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setAdjustStatus(text, type) {
  adjustStatus.textContent = text;
  adjustStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setRevenueStatus(text, type) {
  revenueStatus.textContent = text;
  revenueStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setRevenueUploadStatus(text, type) {
  revenueUploadStatus.textContent = text;
  revenueUploadStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setCostStatus(text, type) {
  costStatus.textContent = text;
  costStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setCostUploadStatus(text, type) {
  costUploadStatus.textContent = text;
  costUploadStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setCostReviewStatus(text, type) {
  costReviewStatus.textContent = text;
  costReviewStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setCostAiStatus(text, type) {
  costAiStatus.textContent = text;
  costAiStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setBusinessEntryStatus(text, type) {
  businessEntryStatus.textContent = text;
  businessEntryStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setBusinessUploadStatus(text, type) {
  businessUploadStatus.textContent = text;
  businessUploadStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setBusinessAiStatus(text, type) {
  businessAiStatus.textContent = text;
  businessAiStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setAiStatus(text, type) {
  aiStatus.textContent = text;
  aiStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setLoginStatus(text, type) {
  loginStatus.textContent = text;
  loginStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function setUserManageStatus(text, type) {
  userManageStatus.textContent = text;
  userManageStatus.style.color = type === "error" ? "#b01919" : "#0b7d34";
}

function escapeKey(customerName, sku) {
  return encodeURIComponent(`${customerName}::${sku}`);
}

function unescapeKey(key) {
  const text = decodeURIComponent(key);
  const [customerName, sku] = text.split("::");
  return { customerName: customerName || "", sku: sku || "" };
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuote = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];

    if (char === '"') {
      if (inQuote && nextChar === '"') {
        cell += '"';
        index += 1;
      } else {
        inQuote = !inQuote;
      }
      continue;
    }

    if (char === "," && !inQuote) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuote) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  if (cell !== "" || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((line) => line.length > 0);
}

function parseExcelRows(content) {
  if (typeof XLSX === "undefined") {
    throw new Error("xlsx library missing");
  }
  const workbook = XLSX.read(content, { type: "array" });
  const firstSheetName = workbook.SheetNames[0];
  if (!firstSheetName) {
    return [];
  }
  const sheet = workbook.Sheets[firstSheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: "",
    raw: false,
  });
  return rows.filter((line) => Array.isArray(line) && line.length > 0);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
