const copy = {
  th: {
    skip: 'ข้ามไปยังเนื้อหา', brandTag: 'ความปลอดภัยที่คุณมองเห็นได้', menu: 'เปิดเมนู',
    navFeatures: 'ความสามารถ', navScans: 'รูปแบบสแกน', navTransparency: 'ข้อจำกัด', language: 'ภาษา', navDownload: 'ดาวน์โหลด',
    heroEyebrow: 'INTRODUCING LUNA GUARD', heroLead: 'ความปลอดภัย', heroAccent: 'ที่มองเห็นได้',
    heroDescription: 'เครื่องมือสแกนตามคำสั่ง ที่ช่วยให้คุณตรวจสอบไฟล์ ทำความเข้าใจผลตรวจ และจัดการสิ่งที่พบได้ด้วยตัวเอง',
    heroPrimary: 'ดู Releases', heroSecondary: 'ดูซอร์สโค้ด', heroNote: 'Windows desktop · สแกนเมื่อคุณสั่ง · ไม่แทนที่ Microsoft Defender',
    illustrationOnDemand: 'ON-DEMAND', illustrationPipeline: 'DETECTION PIPELINE', illustrationTitle: 'ตรวจหลายชั้น อธิบายทุกผล',
    pipelineHash: 'ฐานข้อมูล Hash', pipelineLocal: 'LOCAL', pipelineYara: 'กฎ YARA', pipelineYaraSub: 'กฎที่จัดการได้และตรวจสอบได้', pipelineRules: 'RULES',
    pipelineFile: 'ข้อมูลไฟล์', pipelineFileSub: 'PE metadata · entropy · imports', pipelineAnalyze: 'ANALYZE', pipelineIntel: 'Threat intelligence', pipelineFeeds: 'FEEDS',
    illustrationLocal: 'วิเคราะห์บนเครื่องของคุณ', illustrationConcept: 'PRODUCT OVERVIEW', chipRisk: 'RISK SCORE', chipExplain: 'มีเหตุผลประกอบ', chipAction: 'YOUR DEVICE', chipControl: 'คุณเป็นผู้ควบคุม',
    trustIntro: 'สร้างขึ้นบนหลักการ', trustLocal: 'ประมวลผลในเครื่อง', trustExplain: 'อธิบายที่มาของผลตรวจ', trustControl: 'ผู้ใช้ควบคุมการจัดการ',
    featuresEyebrow: 'BUILT FOR CLARITY', featuresTitle: 'จากสัญญาณเล็ก ๆ สู่ผลตรวจที่เข้าใจง่าย', featuresIntro: 'ผสานตัวบ่งชี้หลายประเภท แล้วบอกให้เห็นว่าตรวจพบอะไรและมาจากไหน',
    featureHashTitle: 'จำสิ่งที่รู้จัก', featureHashBody: 'เทียบ SHA-256, SHA-1 และ MD5 กับฐานข้อมูลในเครื่องก่อนวิเคราะห์ขั้นต่อไป',
    featureYaraTitle: 'อธิบายด้วย YARA', featureYaraBody: 'กฎมีชื่อครอบครัว คำอธิบาย ระดับความรุนแรง และข้อมูลประกอบผลการตรวจ', featureOpenRules: 'ตรวจสอบกฎได้',
    featureMetadataTitle: 'เห็นบริบทของไฟล์', featureMetadataBody: 'ตรวจข้อมูล PE เช่น architecture, imports, entropy และลายเซ็นที่มีอยู่',
    featureControlTitle: 'ตัดสินใจได้ด้วยตัวเอง', featureControlBody: 'ตรวจเหตุผลก่อนจัดการ กักกันไฟล์ที่เข้าเงื่อนไข และกู้คืนได้จากหน้ากักกัน', featureQuarantine: 'กักกัน', featureReview: 'ตรวจสอบก่อน',
    scansEyebrow: 'CHOOSE YOUR SCOPE', scansTitle: 'เลือกขอบเขตให้เหมาะกับงาน', scansIntro: 'แต่ละโหมดตรวจไม่เหมือนกัน Luna Guard จะแสดงขอบเขตและปัญหาที่พบในผลสแกน',
    scanFocusedTag: 'FOCUSED', scanAutoTitle: 'Auto file scan', scanAutoBody: 'ตรวจ Downloads, Temp, AppData และ Startup แบบอ่านอย่างเดียว รองรับ archive ที่ใช้งานได้', scanAutoItem1: 'เหมาะสำหรับการตรวจไฟล์ทั่วไป', scanAutoItem2: 'ไม่ตรวจ process, memory หรือ network',
    scanExpandedTag: 'EXPANDED', scanQuickTitle: 'Quick scan', scanQuickBody: 'ตรวจโฟลเดอร์พื้นฐาน พร้อม process และ memory, persistence, network/DNS และ PowerShell history', scanQuickItem1: 'ตรวจสัญญาณจากระบบเพิ่มเติม', scanQuickItem2: 'สิทธิ์ Windows อาจจำกัดบางรายการ',
    scanDeepTag: 'DEEP DRIVE', scanDriveTitle: 'สแกนไดรฟ์ C:', scanDriveBody: 'พยายามตรวจทุกไฟล์ที่เข้าถึงได้ในไดรฟ์ C: โดยไม่มีเพดานรวมจำนวนไฟล์หรือเวลา', scanDriveItem1: 'ใช้โปรไฟล์ archive แบบ Deep ที่มีขอบเขต', scanDriveItem2: 'junction และรายการที่เข้าถึงไม่ได้ทำให้ผลไม่ครบ',
    scanFootnote: 'การสแกนไดรฟ์เต็มอาจใช้เวลานานมาก และไม่สามารถรับประกันการเข้าถึงทุกไฟล์ได้ ดูรายละเอียดขอบเขต archive ในคู่มือ', readGuide: 'อ่านคู่มือ ↗',
    privacyEyebrow: 'YOUR FILES STAY YOURS', privacyTitleLead: "\u0e44\u0e1f\u0e25\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13", privacyTitleAccent: "\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e19\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13", privacyBody: 'Luna Guard วิเคราะห์ไฟล์ในเครื่อง ไม่อัปโหลดไฟล์ที่สแกนหรือประวัติการสแกน การอัปเดตฐานข้อมูลจะเชื่อมต่อกับผู้ให้บริการ threat intelligence ที่ระบุไว้',
    privacyLink: 'ดูข้อมูลและความเป็นส่วนตัว', privacyFact1: 'สแกนและวิเคราะห์ในเครื่อง', privacyFact2: 'ไม่ส่งไฟล์ขึ้น cloud', privacyFact3: 'เชื่อมต่อเฉพาะตอนอัปเดต feed', privacyCaption: 'PRIVACY BY DESIGN',
    limitsEyebrow: 'HONEST BY DESIGN', limitsTitle: 'ความชัดเจนคือส่วนหนึ่งของการป้องกัน', limitsIntro: 'เครื่องมือสแกนมีขอบเขต ผลที่อ่านง่ายควรบอกทั้งสิ่งที่พบและสิ่งที่ตรวจไม่ครบ',
    limit1: 'Luna Guard สแกนเมื่อผู้ใช้สั่ง และไม่แทนที่การป้องกันแบบ real-time ของ Microsoft Defender', limit2: 'การตรวจ archive มีขีดจำกัดด้านจำนวน ขนาด ความลึก และทรัพยากร เพื่อป้องกันการใช้พื้นที่หรือเวลามากเกินไป',
    limit3: 'ไฟล์ที่อ่านไม่ได้ ถูกเข้ารหัส หรือเกินขอบเขตจะทำให้ผลสแกนไม่ครบ ไม่ควรตีความว่าไฟล์นั้นปลอดภัย', limit4: 'ผล “ไม่พบภัยคุกคาม” ใช้ได้เฉพาะขอบเขตที่สแกน และไม่รับประกันว่าอุปกรณ์ปลอดภัยทั้งหมด', limitsLink: 'อ่านข้อจำกัดและรายละเอียดทั้งหมด',
    communityEyebrow: 'STAY IN THE LOOP', communityTitle: 'ร่วมสร้าง Luna Guard ไปด้วยกัน', communityBody: 'ดูซอร์สโค้ด ติดตามการอัปเดต หรือพูดคุยกับชุมชนของเรา', communityDownload: 'ดู Releases', communityDiscord: 'เข้าร่วม Discord',
    footerDisclaimer: 'เครื่องมือสแกนตามคำสั่ง ไม่ใช่โปรแกรมป้องกันไวรัสแบบ real-time', footerSecurity: 'ความปลอดภัย'
  },
  en: {
    skip: 'Skip to content', brandTag: 'Security you can see', menu: 'Open menu',
    navFeatures: 'Capabilities', navScans: 'Scan modes', navTransparency: 'Limitations', language: 'Language', navDownload: 'Downloads',
    heroEyebrow: 'INTRODUCING LUNA GUARD', heroLead: 'Security,', heroAccent: 'made visible.',
    heroDescription: 'An on-demand scanner that helps you inspect files, understand findings, and stay in control of what happens next.',
    heroPrimary: 'View releases', heroSecondary: 'Explore the source', heroNote: 'Windows desktop · Runs when you ask · Does not replace Microsoft Defender',
    illustrationOnDemand: 'ON-DEMAND', illustrationPipeline: 'DETECTION PIPELINE', illustrationTitle: 'Layered checks. Clear reasons.',
    pipelineHash: 'Hash database', pipelineLocal: 'LOCAL', pipelineYara: 'YARA rules', pipelineYaraSub: 'Rules you can inspect and maintain', pipelineRules: 'RULES',
    pipelineFile: 'File intelligence', pipelineFileSub: 'PE metadata · entropy · imports', pipelineAnalyze: 'ANALYZE', pipelineIntel: 'Threat intelligence', pipelineFeeds: 'FEEDS',
    illustrationLocal: 'Analysis on your device', illustrationConcept: 'PRODUCT OVERVIEW', chipRisk: 'RISK SCORE', chipExplain: 'Evidence included', chipAction: 'YOUR DEVICE', chipControl: 'You stay in control',
    trustIntro: 'Built around', trustLocal: 'Local analysis', trustExplain: 'Explainable findings', trustControl: 'User-controlled actions',
    featuresEyebrow: 'BUILT FOR CLARITY', featuresTitle: 'From small signals to understandable findings', featuresIntro: 'Combine multiple indicator types and see what was detected and where it came from.',
    featureHashTitle: 'Recognize known threats', featureHashBody: 'Compare SHA-256, SHA-1, and MD5 against a local database before deeper analysis.',
    featureYaraTitle: 'Explain detections with YARA', featureYaraBody: 'Rules include family, description, severity, and context to help explain each finding.', featureOpenRules: 'Inspectable rules',
    featureMetadataTitle: 'See file context', featureMetadataBody: 'Inspect PE details such as architecture, imports, entropy, and available signatures.',
    featureControlTitle: 'Keep control of actions', featureControlBody: 'Review reasons first, quarantine eligible files, and restore them from quarantine.', featureQuarantine: 'QUARANTINE', featureReview: 'REVIEW FIRST',
    scansEyebrow: 'CHOOSE YOUR SCOPE', scansTitle: 'Choose the scan for the task', scansIntro: 'Each mode covers a different scope. Luna Guard reports that scope and any issues it encounters.',
    scanFocusedTag: 'FOCUSED', scanAutoTitle: 'Auto file scan', scanAutoBody: 'Read-only checks of Downloads, Temp, AppData, and Startup, including supported archives.', scanAutoItem1: 'For a focused check of common file locations', scanAutoItem2: 'Does not inspect processes, memory, or network',
    scanExpandedTag: 'EXPANDED', scanQuickTitle: 'Quick scan', scanQuickBody: 'Adds process and memory checks, persistence, network/DNS, and PowerShell history.', scanQuickItem1: 'Checks additional system indicators', scanQuickItem2: 'Windows permissions may limit some checks',
    scanDeepTag: 'DEEP DRIVE', scanDriveTitle: 'Scan drive C:', scanDriveBody: 'Attempts to inspect every accessible file on C: with no overall file-count or scan-time cap.', scanDriveItem1: 'Uses the bounded Deep archive profile', scanDriveItem2: 'Junctions and access errors can make results incomplete',
    scanFootnote: 'A full-drive scan can take a long time and cannot guarantee access to every file. See the guide for archive inspection limits.', readGuide: 'Read the guide ↗',
    privacyEyebrow: 'YOUR FILES STAY YOURS', privacyTitleLead: "Your files", privacyTitleAccent: "stay on your device.", privacyBody: 'Luna Guard analyzes files locally and does not upload scanned files or scan history. Database updates connect to the listed threat-intelligence providers.',
    privacyLink: 'Privacy and data details', privacyFact1: 'Scanning and analysis run locally', privacyFact2: 'Scanned files are not uploaded', privacyFact3: 'Network access for feed updates', privacyCaption: 'PRIVACY BY DESIGN',
    limitsEyebrow: 'HONEST BY DESIGN', limitsTitle: 'Clarity is part of protection.', limitsIntro: 'Scanners have limits. Useful results explain both what was found and what could not be checked.',
    limit1: 'Luna Guard scans on demand and does not replace the real-time protection in Microsoft Defender.', limit2: 'Archive inspection has member, size, depth, and resource limits to control disk and time use.',
    limit3: 'Unreadable, encrypted, or out-of-scope files make a scan incomplete. They should not be treated as clean.', limit4: '“No threats found” applies only to the scanned scope and does not guarantee the device is safe.', limitsLink: 'Read all limitations and details',
    communityEyebrow: 'STAY IN THE LOOP', communityTitle: 'Build Luna Guard with us.', communityBody: 'Explore the source, follow updates, or talk with the community.', communityDownload: 'View releases', communityDiscord: 'Join Discord',
    footerDisclaimer: 'On-demand scanner. Not real-time antivirus software.', footerSecurity: 'Security'
  },
  zh: {
    skip: '跳转到正文', brandTag: '看得见的安全防护', menu: '打开菜单',
    navFeatures: '功能', navScans: '扫描模式', navTransparency: '使用限制', language: '语言', navDownload: '下载',
    heroEyebrow: '认识 LUNA GUARD', heroLead: '安全防护，', heroAccent: '清晰可见。',
    heroDescription: '按需运行的扫描工具，帮助您检查文件、理解检测结果，并自主决定后续操作。',
    heroPrimary: '查看发行版', heroSecondary: '查看源代码', heroNote: 'Windows 桌面版 · 按需扫描 · 不替代 Microsoft Defender',
    illustrationOnDemand: '按需扫描', illustrationPipeline: '检测流程', illustrationTitle: '多层检查，说明每项结果。',
    pipelineHash: '哈希数据库', pipelineLocal: '本地', pipelineYara: 'YARA 规则', pipelineYaraSub: '规则可供查看和维护', pipelineRules: '规则',
    pipelineFile: '文件信息', pipelineFileSub: 'PE 元数据 · 熵 · 导入项', pipelineAnalyze: '分析', pipelineIntel: '威胁情报', pipelineFeeds: '数据源',
    illustrationLocal: '在您的设备上分析', illustrationConcept: '产品概览', chipRisk: '风险评分', chipExplain: '附带判断依据', chipAction: '您的设备', chipControl: '操作由您掌控',
    trustIntro: '产品原则', trustLocal: '本地分析', trustExplain: '说明检测依据', trustControl: '用户自主操作',
    featuresEyebrow: '清晰易懂', featuresTitle: '从风险信号到清晰易懂的结果', featuresIntro: '结合多种指标，查看检测内容及其来源。',
    featureHashTitle: '识别已知威胁', featureHashBody: '深入分析前，先将 SHA-256、SHA-1 和 MD5 与本地数据库进行比对。',
    featureYaraTitle: '通过 YARA 说明检测结果', featureYaraBody: '规则包含家族、说明、严重性和上下文，帮助解释每项结果。', featureOpenRules: '规则可查看',
    featureMetadataTitle: '了解文件上下文', featureMetadataBody: '检查 PE 架构、导入项、熵和可用的数字签名信息。',
    featureControlTitle: '操作由您掌控', featureControlBody: '先查看检测依据，再隔离符合条件的文件，并可从隔离区恢复。', featureQuarantine: '隔离', featureReview: '先检查',
    scansEyebrow: '选择扫描范围', scansTitle: '按任务选择扫描模式', scansIntro: '不同模式覆盖不同范围。Luna Guard 会报告扫描范围及遇到的问题。',
    scanFocusedTag: '重点扫描', scanAutoTitle: '自动文件扫描', scanAutoBody: '以只读方式检查下载、临时、AppData 和启动文件夹，并检查受支持的压缩包。', scanAutoItem1: '适合快速检查常见文件位置', scanAutoItem2: '不检查进程、内存或网络',
    scanExpandedTag: '扩展扫描', scanQuickTitle: '快速扫描', scanQuickBody: '增加进程和内存、持久化、网络/DNS 及 PowerShell 历史记录检查。', scanQuickItem1: '检查更多系统指标', scanQuickItem2: 'Windows 权限可能限制部分检查',
    scanDeepTag: '深度扫描', scanDriveTitle: '扫描 C: 盘', scanDriveBody: '尝试检查 C: 盘中所有可访问文件，不设总文件数或扫描时间上限。', scanDriveItem1: '压缩包仍使用有资源上限的深度配置', scanDriveItem2: '联接点和访问错误可能导致扫描不完整',
    scanFootnote: '全盘扫描可能需要很长时间，也无法保证访问每个文件。压缩包扫描限制请参阅使用指南。', readGuide: '阅读指南 ↗',
    privacyEyebrow: '文件只属于您', privacyTitleLead: "\u6587\u4ef6", privacyTitleAccent: "\u7559\u5728\u60a8\u7684\u8bbe\u5907\u4e0a\u3002", privacyBody: 'Luna Guard 在本地分析文件，不会上传扫描文件或扫描历史。更新数据库时会连接所列的威胁情报服务。',
    privacyLink: '隐私与数据详情', privacyFact1: '在本地扫描和分析', privacyFact2: '不上传扫描文件', privacyFact3: '更新数据源时联网', privacyCaption: '隐私设计',
    limitsEyebrow: '如实说明', limitsTitle: '透明是防护的一部分。', limitsIntro: '扫描工具有范围限制。结果应说明检测到的内容以及无法检查的项目。',
    limit1: 'Luna Guard 按需扫描，不替代 Microsoft Defender 的实时防护。', limit2: '压缩包检查受到成员数量、文件大小、嵌套深度和资源用量限制。',
    limit3: '无法读取、已加密或超出范围的文件会导致扫描不完整，不应视为安全。', limit4: '“未发现威胁”仅适用于已扫描范围，并不保证设备完全安全。', limitsLink: '阅读全部限制与详情',
    communityEyebrow: '关注项目动态', communityTitle: '与我们一起建设 Luna Guard。', communityBody: '查看源代码、关注更新，或加入社区交流。', communityDownload: '查看发行版', communityDiscord: '加入 Discord',
    footerDisclaimer: '按需扫描工具，不是实时防病毒软件。', footerSecurity: '安全'
  }
};

const languageSelect = document.querySelector('[data-language]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('#main-nav');

function applyLanguage(language) {
  const selected = copy[language] ? language : 'th';
  document.documentElement.lang = selected === 'zh' ? 'zh-CN' : selected;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translated = copy[selected][element.dataset.i18n];
    if (translated) element.textContent = translated;
  });
  if (languageSelect) languageSelect.value = selected;
  try { localStorage.setItem('luna-site-language', selected); } catch { /* Storage may be disabled. */ }
}

let savedLanguage = 'th';
try { savedLanguage = localStorage.getItem('luna-site-language') || 'th'; } catch { /* Use Thai when storage is unavailable. */ }
applyLanguage(savedLanguage);
languageSelect?.addEventListener('change', (event) => applyLanguage(event.target.value));
document.querySelector('[data-year]').textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navigation?.classList.toggle('is-open', !expanded);
});

navigation?.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const pointerCanTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const siteLoader = document.querySelector('[data-site-loader]');
if (siteLoader) {
  const loaderStartedAt = performance.now();
  let loaderFinished = false;
  const finishLoader = () => {
    if (loaderFinished) return;
    loaderFinished = true;
    const minimumShowTime = prefersReducedMotion ? 0 : 1450;
    const wait = Math.max(0, minimumShowTime - (performance.now() - loaderStartedAt));
    window.setTimeout(() => {
      document.documentElement.classList.remove('site-loading');
      if (!prefersReducedMotion) document.documentElement.classList.add('site-entry-start');
      siteLoader.classList.add('is-leaving');
      window.setTimeout(() => siteLoader.remove(), prefersReducedMotion ? 0 : 720);
    }, wait);
  };

  if (prefersReducedMotion) {
    finishLoader();
  } else {
    window.addEventListener('load', finishLoader, { once: true });
    window.setTimeout(finishLoader, 5200);
  }
}
const interactiveVisual = document.querySelector('[data-interactive-visual]');
const tiltCard = document.querySelector('[data-tilt-card]');

// The hero title reacts directly to the pointer instead of relying on a passive float.
const heroTitle = document.querySelector('.hero h1');
if (heroTitle && pointerCanTilt && !prefersReducedMotion) {
  let titleFrame = 0;
  let rippleTimer;
  heroTitle.classList.add('is-pointer-aware');
  heroTitle.addEventListener('pointermove', (event) => {
    if (titleFrame) return;
    titleFrame = requestAnimationFrame(() => {
      titleFrame = 0;
      const bounds = heroTitle.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
      heroTitle.style.setProperty('--title-tilt-x', `${((0.5 - y) * 7).toFixed(2)}deg`);
      heroTitle.style.setProperty('--title-tilt-y', `${((x - 0.5) * 9).toFixed(2)}deg`);
      heroTitle.style.setProperty('--title-glow-x', `${(x * 100).toFixed(1)}%`);
      heroTitle.style.setProperty('--title-glow-y', `${(y * 100).toFixed(1)}%`);
    });
  });
  heroTitle.addEventListener('pointerdown', (event) => {
    const bounds = heroTitle.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'title-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.left = `${event.clientX - bounds.left}px`;
    ripple.style.top = `${event.clientY - bounds.top}px`;
    heroTitle.append(ripple);
    window.setTimeout(() => ripple.remove(), 850);
    heroTitle.classList.add('is-title-pressed');
    window.clearTimeout(rippleTimer);
    rippleTimer = window.setTimeout(() => heroTitle.classList.remove('is-title-pressed'), 420);
  });
  heroTitle.addEventListener('pointerleave', () => {
    heroTitle.style.setProperty('--title-tilt-x', '0deg');
    heroTitle.style.setProperty('--title-tilt-y', '0deg');
    heroTitle.style.setProperty('--title-glow-x', '50%');
    heroTitle.style.setProperty('--title-glow-y', '35%');
    heroTitle.classList.remove('is-title-pressed');
  });
}

if (interactiveVisual && tiltCard && pointerCanTilt && !prefersReducedMotion) {
  let pressTimer;
  interactiveVisual.addEventListener('pointermove', (event) => {
    const bounds = interactiveVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    tiltCard.style.setProperty('--tilt-x', `${((0.5 - y) * 7).toFixed(2)}deg`);
    tiltCard.style.setProperty('--tilt-y', `${((x - 0.5) * 9).toFixed(2)}deg`);
    tiltCard.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`);
    tiltCard.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`);
  });
  interactiveVisual.addEventListener('pointerdown', (event) => {
    const bounds = tiltCard.getBoundingClientRect();
    tiltCard.style.setProperty('--tap-x', `${event.clientX - bounds.left}px`);
    tiltCard.style.setProperty('--tap-y', `${event.clientY - bounds.top}px`);
    interactiveVisual.classList.remove('is-pressed');
    requestAnimationFrame(() => interactiveVisual.classList.add('is-pressed'));
    window.clearTimeout(pressTimer);
    pressTimer = window.setTimeout(() => interactiveVisual.classList.remove('is-pressed'), 760);
  });
  interactiveVisual.addEventListener('pointerleave', () => {
    tiltCard.style.setProperty('--tilt-x', '0deg');
    tiltCard.style.setProperty('--tilt-y', '0deg');
    tiltCard.style.setProperty('--shine-x', '50%');
    tiltCard.style.setProperty('--shine-y', '35%');
    interactiveVisual.classList.remove('is-pressed');
  });
}

const privacyVisual = document.querySelector('[data-pointer-glow]');
if (privacyVisual && pointerCanTilt && !prefersReducedMotion) {
  let pointerFrame = 0;
  privacyVisual.addEventListener('pointermove', (event) => {
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      const bounds = privacyVisual.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
      privacyVisual.style.setProperty('--glow-x', `${(x * 100).toFixed(1)}%`);
      privacyVisual.style.setProperty('--glow-y', `${(y * 100).toFixed(1)}%`);
      privacyVisual.style.setProperty('--privacy-tilt-x', `${((0.5 - y) * 3).toFixed(2)}deg`);
      privacyVisual.style.setProperty('--privacy-tilt-y', `${((x - 0.5) * 4).toFixed(2)}deg`);
    });
  });
  privacyVisual.addEventListener('pointerleave', () => {
    privacyVisual.style.setProperty('--privacy-tilt-x', '0deg');
    privacyVisual.style.setProperty('--privacy-tilt-y', '0deg');
  });
}

// Soft pointer light and a restrained 3D lean make the quiet information panels feel tactile.
if (pointerCanTilt && !prefersReducedMotion) {
  document.querySelectorAll('[data-hover-light]').forEach((panel) => {
    let frame = 0;
    panel.addEventListener('pointermove', (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const bounds = panel.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
        const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
        panel.style.setProperty('--light-x', `${(x * 100).toFixed(1)}%`);
        panel.style.setProperty('--light-y', `${(y * 100).toFixed(1)}%`);
        panel.style.setProperty('--card-tilt-x', `${((0.5 - y) * 1.6).toFixed(2)}deg`);
        panel.style.setProperty('--card-tilt-y', `${((x - 0.5) * 2).toFixed(2)}deg`);
      });
    });
    panel.addEventListener('pointerleave', () => {
      panel.style.setProperty('--card-tilt-x', '0deg');
      panel.style.setProperty('--card-tilt-y', '0deg');
    });
  });

  document.querySelectorAll('[data-logo-interactive]').forEach((logo) => {
    let clickTimer;
    logo.addEventListener('pointermove', (event) => {
      const bounds = logo.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      logo.style.setProperty('--logo-tilt-x', `${((0.5 - y) * 10).toFixed(2)}deg`);
      logo.style.setProperty('--logo-tilt-y', `${((x - 0.5) * 12).toFixed(2)}deg`);
      logo.style.setProperty('--logo-glint-x', `${(x * 100).toFixed(1)}%`);
      logo.style.setProperty('--logo-glint-y', `${(y * 100).toFixed(1)}%`);
    });
    logo.addEventListener('pointerdown', () => {
      logo.classList.remove('is-tapped');
      requestAnimationFrame(() => logo.classList.add('is-tapped'));
      window.clearTimeout(clickTimer);
      clickTimer = window.setTimeout(() => logo.classList.remove('is-tapped'), 760);
    });
    logo.addEventListener('pointerleave', () => {
      logo.style.setProperty('--logo-tilt-x', '0deg');
      logo.style.setProperty('--logo-tilt-y', '0deg');
      logo.classList.remove('is-tapped');
    });
  });
}

const revealTargets = document.querySelectorAll(
  '.hero-copy, .hero-art, .trust-inner, .section-heading, .feature-card, .scan-card, .scan-footnote, .privacy-copy, .privacy-visual, .limits-panel, .community-card, .footer-inner'
);

if (revealTargets.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
  revealTargets.forEach((element) => element.setAttribute('data-reveal', ''));
  document.documentElement.classList.add('has-reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}

// Reveal copy as it enters view without splitting translated text into fragile character spans.
const textRevealTargets = document.querySelectorAll(
  '.hero h1 > span, .hero-description, .hero-actions > *, .hero-note, .trust-inner > *, .eyebrow span, .micro-label, .section-heading h2, .section-heading p, .scan-heading h2, .feature-card h3, .feature-card p, .feature-meta, .scan-card h3, .scan-card > p, .scan-card li, .scan-footnote, .privacy-copy h2 > span, .privacy-copy > p, .privacy-copy .text-link, .privacy-facts > div, .limits-content h2, .limits-content > p, .limit-list > div, .limits-content .text-link, .community-content h2, .community-content > p, .community-actions > *, .footer-inner > *'
);

if (textRevealTargets.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('has-text-reveal');
  textRevealTargets.forEach((element, index) => {
    element.setAttribute('data-text-reveal', '');
    element.style.setProperty('--text-delay', `${Math.min(index % 4, 3) * 55}ms`);
  });
  const textObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-text-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -5% 0px' });
  textRevealTargets.forEach((element) => textObserver.observe(element));
}
