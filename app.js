const copy = {
  th: {
    skip: 'ข้ามไปยังเนื้อหา', brandTag: 'ความปลอดภัยที่คุณมองเห็นได้', menu: 'เปิดเมนู',
    navFeatures: 'ความสามารถ', navScans: 'รูปแบบสแกน', navTransparency: 'ข้อจำกัด', navSecurity: 'ความปลอดภัย', navAcquisition: 'Acquisition', language: 'ภาษา', navDownload: 'ดาวน์โหลด',
    heroEyebrow: 'INTRODUCING LUNA GUARD', heroLead: 'ความปลอดภัย', heroAccent: 'ที่มองเห็นได้',
    heroDescription: 'เครื่องมือสแกนตามคำสั่ง ที่ช่วยให้คุณตรวจสอบไฟล์ ทำความเข้าใจผลตรวจ และจัดการสิ่งที่พบได้ด้วยตัวเอง',
    heroPrimary: 'Download Luna Guard', heroSecondary: 'ดูซอร์สโค้ด', heroNote: 'Windows desktop · สแกนเมื่อคุณสั่ง · ไม่แทนที่ Microsoft Defender',
    releasePlatform: 'Windows 10/11 • x64 • Public source', releaseVersionLabel: 'Release', copyHash: 'คัดลอก', tourEyebrow: 'INSIDE LUNA GUARD', tourTitle: 'เห็นขั้นตอนจริง ก่อนติดตั้ง', tourIntro: 'ภาพจากหน้าจอแอป พร้อมข้อมูลสาธิตเพื่อให้เห็นลำดับการทำงาน ไม่ใช่ผลตรวจจากเครื่องจริง', tourDashboard: 'Dashboard', tourScan: 'Scan', tourThreat: 'พบภัยคุกคาม', tourQuarantine: 'กักกัน', tourHistory: 'ประวัติ', tourDemo: 'ข้อมูลสาธิต',
    illustrationOnDemand: 'ON-DEMAND', illustrationPipeline: 'DETECTION PIPELINE', illustrationTitle: 'ตรวจหลายชั้น อธิบายทุกผล',
    pipelineHash: 'ฐานข้อมูล Hash', pipelineLocal: 'LOCAL', pipelineYara: 'กฎ YARA', pipelineYaraSub: 'กฎที่จัดการได้และตรวจสอบได้', pipelineRules: 'RULES',
    pipelineFile: 'ข้อมูลไฟล์', pipelineFileSub: 'File entropy · PE details when supported', pipelineAnalyze: 'ANALYZE', pipelineIntel: 'Threat intelligence', pipelineFeeds: 'FEEDS',
    illustrationLocal: 'วิเคราะห์บนเครื่องของคุณ', illustrationConcept: 'PRODUCT OVERVIEW', chipRisk: 'RISK SCORE', chipExplain: 'มีเหตุผลประกอบ', chipAction: 'YOUR DEVICE', chipControl: 'คุณเป็นผู้ควบคุม',
    trustIntro: 'สร้างขึ้นบนหลักการ', trustLocal: 'ประมวลผลในเครื่อง', trustExplain: 'อธิบายที่มาของผลตรวจ', trustControl: 'ผู้ใช้ควบคุมการจัดการ',
    featuresEyebrow: 'BUILT FOR CLARITY', featuresTitle: 'จากสัญญาณเล็ก ๆ สู่ผลตรวจที่เข้าใจง่าย', featuresIntro: 'ผสานตัวบ่งชี้หลายประเภท แล้วบอกให้เห็นว่าตรวจพบอะไรและมาจากไหน',
    featureHashTitle: 'จำสิ่งที่รู้จัก', featureHashBody: 'เทียบ SHA-256, SHA-1 และ MD5 กับฐานข้อมูลในเครื่องก่อนวิเคราะห์ขั้นต่อไป',
    featureYaraTitle: 'อธิบายด้วย YARA', featureYaraBody: 'กฎมีชื่อครอบครัว คำอธิบาย ระดับความรุนแรง และข้อมูลประกอบผลการตรวจ', featureOpenRules: 'ตรวจสอบกฎได้',
    featureMetadataTitle: 'เห็นบริบทของไฟล์', featureMetadataBody: 'คำนวณ entropy ของไฟล์ทุกชนิด; สำหรับ PE ที่อ่านได้และไม่เกิน 32 MiB จะแสดง architecture, entropy สูงสุด 32 sections, imports แบบจำกัดรายการ และการมีตำแหน่งข้อมูลลายเซ็น โดยไม่ตรวจสอบความถูกต้องของ Authenticode',
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
    footerDisclaimer: 'เครื่องมือสแกนตามคำสั่ง ไม่ใช่โปรแกรมป้องกันไวรัสแบบ real-time', footerSecurity: 'ความปลอดภัย',
    statsEyebrow: 'PROJECT SNAPSHOT', statsTitle: 'ตัวเลขสาธารณะที่ตรวจสอบได้', statsLive: 'ข้อมูลจาก GitHub', statsStars: 'GitHub stars', statsDownloads: 'ยอดโหลด Release assets', statsReleases: 'Published releases', statsContributors: 'GitHub contributors', statsNote: 'ตัวเลขอ้างอิง GitHub API และอัปเดตเมื่อเปิดหน้า; ยอดโหลดนับไฟล์ Release assets รวม ไม่ใช่จำนวนผู้ใช้', statsUsers: 'Active users', statsNotTracked: 'ไม่ได้ติดตามเพื่อรักษาความเป็นส่วนตัว',
    acqEyebrow: 'PROJECT AVAILABLE FOR ACQUISITION', acqTitle: 'Luna Guard — Acquisition', acqIntro: 'โปรเจกต์ cybersecurity สำหรับ Windows ที่มีซอร์สโค้ด ตัวแอป เอกสาร และเว็บไซต์ พร้อมพูดคุยเรื่องการเข้าซื้อกิจการ', acqContact: 'ติดต่อผู้ขายผ่าน GitHub', acqGithub: 'ดู GitHub', acqPreRevenue: 'Pre-revenue', acqPublicRepo: 'Public repository', acqWindows: 'Windows desktop', acqSnapshot: 'PROJECT SNAPSHOT', acqOverviewTitle: 'ฐานซอฟต์แวร์ที่มีอยู่ พร้อมต่อยอด', acqOverviewBody: 'Luna Guard เป็นเครื่องมือสแกนไฟล์ตามคำสั่งสำหรับ Windows พร้อม dashboard, ฐานข้อมูล hash/IOC ในเครื่อง, YARA, การวิเคราะห์ไฟล์ และ quarantine ที่ตรวจ SHA-256 ก่อนกู้คืน มี companion app บน Android ที่ทำงานในขอบเขตจำกัด', acqOverviewFeature1: 'On-demand Windows malware scanner', acqOverviewFeature2: 'YARA และ threat-intelligence feeds', acqOverviewFeature3: 'File, archive และ quarantine workflows', acqOverviewFeature4: 'Companion app และเว็บไซต์หลายภาษา',
    acqIncludedEyebrow: 'TRANSFER SCOPE', acqIncludedTitle: 'สิ่งที่อยู่ในขอบเขตพูดคุย', acqIncludedIntro: 'รายการด้านล่างเป็นองค์ประกอบของโปรเจกต์ที่มีอยู่ การโอนจริงขึ้นกับการตรวจสิทธิ์และข้อตกลงเป็นลายลักษณ์อักษร', acqItemCode: 'ซอร์สโค้ดและแอป', acqItemCodeBody: 'Windows app, Android companion source, dashboard, tests และ build/release workflows', acqItemDocs: 'เอกสารและ security notes', acqItemDocsBody: 'README, คู่มือผู้ใช้, ข้อจำกัดที่เปิดเผย และเอกสารประกอบการพัฒนา', acqItemWeb: 'เว็บไซต์และเนื้อหา', acqItemWebBody: 'เว็บไซต์ Luna Guard, หน้า Security และหน้า Acquisition พร้อม assets ที่สิทธิ์ได้รับการยืนยัน', acqItemBrand: 'แบรนด์และ product assets', acqItemBrandBody: 'ชื่อ โลโก้ ไอคอน และภาพหน้าจอ เฉพาะรายการที่ผู้ขายยืนยันสิทธิ์ได้',
    acqWhyEyebrow: 'WHY LUNA GUARD', acqWhyTitle: 'พร้อมสำหรับเจ้าของรายถัดไป', acqWhyBody: 'ผู้ซื้อสามารถประเมิน codebase ที่มีอยู่และตัดสินใจเองว่าจะพัฒนาต่อ ทำเชิงพาณิชย์ หรือรวมเข้ากับผลิตภัณฑ์อื่น โดยไม่ต้องเริ่มจากศูนย์', acqWhy1: 'Product workflows มีอยู่แล้ว', acqWhy2: 'มี release/build automation และ regression tests', acqWhy3: 'มีเว็บไซต์ เอกสาร และหน้า security disclosure', acqTransparencyEyebrow: 'IMPORTANT TRANSPARENCY', acqTransparencyTitle: 'ขอบเขตและสิทธิ์ต้องตรวจให้ครบ', acqTransparencyBody: 'โปรเจกต์ยังไม่มีรายได้ และไม่ใช่สิ่งทดแทน Microsoft Defender หรือแพลตฟอร์ม endpoint protection เต็มรูปแบบ ปัจจุบัน repo ยังไม่มีไฟล์ LICENSE; สิทธิ์ของ YARA rules และที่มาของบาง assets ต้องยืนยันก่อนสรุปการโอน Dependencies ยังคงอยู่ภายใต้ license ของเจ้าของแต่ละราย และเงื่อนไขของ threat-intelligence providers ไม่ได้โอนให้อัตโนมัติ', acqContactTitle: 'สนใจเข้าซื้อ Luna Guard?', acqContactBody: 'เริ่มต้นติดต่อผู้ดูแลผ่าน GitHub profile เพื่อพูดคุยขอบเขต ทรัพย์สิน และขั้นตอนตรวจสอบก่อนทำข้อตกลง', acqScopeNote: 'หน้านี้เป็นการแสดงความสนใจขายโปรเจกต์ ไม่ใช่การรับประกันสิทธิ์หรือผลการตรวจจับ ขอบเขตสุดท้ายต้องระบุในสัญญา',
    secEyebrow: 'SECURITY / TRANSPARENCY', secTitle: 'ความปลอดภัยที่ตรวจสอบได้', secIntro: 'สรุปว่า Luna Guard ตรวจอะไร มีขอบเขตตรงไหน และจัดการข้อมูลในเครื่องอย่างไร รายละเอียดอ้างอิงจากแอปเดสก์ท็อปรุ่นปัจจุบันและอาจเปลี่ยนตามรุ่น', secSource: 'อ่านบันทึกความปลอดภัยจากซอร์ส ↗', secBrief: 'สรุปความปลอดภัย', secScope: 'ขอบเขตปัจจุบัน', secConsole1: 'ตรวจจับเมื่อสั่งสแกน', secDesktop: 'เดสก์ท็อป', secConsole2: 'ข้อมูลสแกนจัดเก็บในเครื่อง', secPrivacy: 'ความเป็นส่วนตัว', secConsole3: 'ตรวจ SHA-256 ก่อนกู้คืน', secTransparencyLabel: 'ข้อมูลโปร่งใส',
    secNavArchitecture: 'Detection Architecture', secNavIntel: 'Threat Intelligence', secNavArchives: 'Archive Protection', secNavQuarantine: 'Quarantine Security', secNavPrivacy: 'Privacy', secNavLimits: 'Limitations', secNavDisclosure: 'Security Disclosure',
    secArchitectureTitle: 'Detection Architecture', secArchitectureBody: 'แอปเดสก์ท็อปสแกนเมื่อผู้ใช้สั่ง ขั้นตอนประกอบด้วยการเทียบ SHA-256, SHA-1 และ MD5 กับฐานข้อมูลในเครื่อง กฎ YARA ที่ตั้งค่าไว้ บริบทไฟล์ (รวม entropy และ PE metadata ที่มีขอบเขตเมื่อรองรับ) และตัวบ่งชี้จาก threat feed ที่เลือกไว้ Quick scan ตรวจสัญญาณ process และ memory/ระบบบางส่วนได้ ผลแต่ละรายการแสดงหลักฐานประกอบ คะแนนความเสี่ยงเป็นการสรุปจาก heuristic ไม่ใช่ความน่าจะเป็น',
    secIntelTitle: 'Threat Intelligence', secIntelBody: 'การอัปเดต feed เชื่อมต่อ MalwareBazaar (รวม recent detections), ThreatFox และ URLhaus โดยไม่อัปโหลดเนื้อหาไฟล์หรือประวัติการสแกนไปยังผู้ให้บริการดังกล่าว API key ของ abuse.ch เป็นตัวเลือก จัดเก็บในเครื่องและป้องกันด้วย Windows DPAPI สำหรับบัญชีปัจจุบัน ทั้งนี้ไม่ป้องกันมัลแวร์ที่ทำงานภายใต้บัญชีเดียวกัน การเชื่อมต่อเครือข่ายเกิดขึ้นตอนอัปเดต feed',
    secArchiveTitle: 'Archive Protection', secArchiveBody: 'การสแกน archive จำกัดทรัพยากรรวมถึงสมาชิกซ้อนกัน เนื้อหาที่เข้ารหัส เสียหาย ไม่รองรับ เข้าไม่ถึง หรือเกินงบอาจถูกข้าม และต้องแสดงสถานะสแกนไม่ครบ', secLimit: 'ขีดจำกัด', secMembers: 'จำนวนสมาชิก', secMemberSize: 'ขนาดขยายต่อสมาชิก', secTotalSize: 'ขนาดขยายรวม', secDepth: 'ความลึกซ้อน', secRatio: 'อัตราบีบอัด', secTime: 'เวลาต่อ archive', secNoTimer: 'ไม่จับเวลา', secArchiveNote: 'Deep mode จะหยุดตรวจเมื่อพื้นที่ชั่วคราวเหลือน้อยกว่า 1 GiB การสแกนไดรฟ์ C: ไม่มีเพดานรวมจำนวนไฟล์หรือเวลา และไม่ตาม junction/reparse point โดยรายงานรายการที่ข้ามเป็นสแกนไม่ครบ ข้อมูล ZIP central directory ใช้หน่วยความจำตามจำนวนสมาชิกที่ถูกจำกัดไว้',
    secQuarantineTitle: 'Quarantine Security', secQuarantineBody: 'การกักกันบันทึก metadata ก่อนคัดลอก ตรวจ SHA-256 ก่อนลบต้นฉบับ และเขียนสถานะอย่าง atomic การกู้คืนตรวจ digest ปฏิเสธปลายทางที่ชนกัน และเขียนไฟล์ชั่วคราวก่อนวางแบบ atomic โดยไม่เขียนทับ การกู้คืนเมื่อเริ่มแอปจะคงรายการที่คลุมเครือไว้ในสถานะต้องตรวจสอบ การลบถาวรต้องยืนยันใน UI และตรวจ digest ซ้ำ',
    secPrivacyTitle: 'Privacy', secPrivacyBody: 'การสแกนเดสก์ท็อปทำในเครื่อง ประวัติสแกนจัดเก็บในเครื่องและอาจมี file path กับเหตุผลการตรวจ Activity log อยู่ในหน่วยความจำ Audit log แบบจำกัดบันทึกเฉพาะ event metadata และ ID ที่กำหนดไว้ ไม่บันทึก path หรือ API key API ของ dashboard เดสก์ท็อป bind ที่ loopback ใช้ token เฉพาะรอบและตรวจ Host/Origin แอปมือถือสแกนเฉพาะไฟล์ที่ผู้ใช้เลือก ไม่ตรวจข้อมูลส่วนตัวของแอปอื่น',
    secLimitsTitle: 'Limitations', secLimitItem1: 'Luna Guard เป็นเครื่องมือสแกนตามคำสั่งและช่วยกักกัน ไม่ใช่ระบบป้องกันแบบ real-time หรือสิ่งทดแทน Microsoft Defender', secLimitItem2: 'ผลสะอาดครอบคลุมเฉพาะส่วนที่สแกนตรวจได้ ปัญหาสิทธิ์ ไฟล์ไม่รองรับ และขีดจำกัดทรัพยากรทำให้ผลไม่ครบ', secLimitItem3: 'กฎ YARA เป็น heuristic ที่จัดทำโดยโครงการ ข้อมูลใบอนุญาตหรือการตรวจสอบอิสระอาจยังไม่ครบ ควรทบทวนผลที่อาจเป็น false positive', secLimitItem4: 'การมีข้อมูลลายเซ็น PE เป็นเพียงการตรวจ metadata ไม่ได้ยืนยัน Authenticode หรือตัวตนผู้เผยแพร่ และ version string ปลอมแปลงได้', secLimitItem5: 'คะแนนความเสี่ยงเป็น heuristic ไม่ใช่ค่าความน่าจะเป็นที่สอบเทียบแล้ว ไฟล์ Windows ยังไม่มีลายเซ็นดิจิทัลและอาจแสดง unknown publisher หรือ SmartScreen',
    secDisclosureTitle: 'Security Disclosure', secDisclosureBody: 'รายงานช่องโหว่ที่สงสัยผ่าน GitHub security reporting ของเจ้าของ repository เมื่อเปิดใช้งาน หรือแจ้งผู้ดูแลเป็นการส่วนตัวก่อนเผยแพร่รายละเอียดการโจมตี ห้ามแนบ API key เนื้อหาไฟล์ส่วนบุคคล หรือกุญแจลงนาม', secDisclosureLink: 'เปิด GitHub Security ↗'
  },
  en: {
    skip: 'Skip to content', brandTag: 'Security you can see', menu: 'Open menu',
    navFeatures: 'Capabilities', navScans: 'Scan modes', navTransparency: 'Limitations', navSecurity: 'Security', navAcquisition: 'Acquisition', language: 'Language', navDownload: 'Downloads',
    heroEyebrow: 'INTRODUCING LUNA GUARD', heroLead: 'Security,', heroAccent: 'made visible.',
    heroDescription: 'An on-demand scanner that helps you inspect files, understand findings, and stay in control of what happens next.',
    heroPrimary: 'Download Luna Guard', heroSecondary: 'Explore the source', heroNote: 'Windows desktop · Runs when you ask · Does not replace Microsoft Defender',
    releasePlatform: 'Windows 10/11 • x64 • Public source', releaseVersionLabel: 'Release', copyHash: 'Copy', tourEyebrow: 'INSIDE LUNA GUARD', tourTitle: 'See the workflow before installing', tourIntro: 'Screenshots from the app with demonstration data. They illustrate the workflow and are not results from a real device.', tourDashboard: 'Dashboard', tourScan: 'Scan', tourThreat: 'Threat found', tourQuarantine: 'Quarantine', tourHistory: 'History', tourDemo: 'Demo data',
    illustrationOnDemand: 'ON-DEMAND', illustrationPipeline: 'DETECTION PIPELINE', illustrationTitle: 'Layered checks. Clear reasons.',
    pipelineHash: 'Hash database', pipelineLocal: 'LOCAL', pipelineYara: 'YARA rules', pipelineYaraSub: 'Rules you can inspect and maintain', pipelineRules: 'RULES',
    pipelineFile: 'File intelligence', pipelineFileSub: 'File entropy · PE details when supported', pipelineAnalyze: 'ANALYZE', pipelineIntel: 'Threat intelligence', pipelineFeeds: 'FEEDS',
    illustrationLocal: 'Analysis on your device', illustrationConcept: 'PRODUCT OVERVIEW', chipRisk: 'RISK SCORE', chipExplain: 'Evidence included', chipAction: 'YOUR DEVICE', chipControl: 'You stay in control',
    trustIntro: 'Built around', trustLocal: 'Local analysis', trustExplain: 'Explainable findings', trustControl: 'User-controlled actions',
    featuresEyebrow: 'BUILT FOR CLARITY', featuresTitle: 'From small signals to understandable findings', featuresIntro: 'Combine multiple indicator types and see what was detected and where it came from.',
    featureHashTitle: 'Recognize known threats', featureHashBody: 'Compare SHA-256, SHA-1, and MD5 against a local database before deeper analysis.',
    featureYaraTitle: 'Explain detections with YARA', featureYaraBody: 'Rules include family, description, severity, and context to help explain each finding.', featureOpenRules: 'Inspectable rules',
    featureMetadataTitle: 'See file context', featureMetadataBody: 'Calculates entropy for files. For parseable PE files up to 32 MiB, reports architecture, entropy for up to 32 sections, a bounded import list, and whether the signature data directory is present. It does not verify Authenticode validity or trust.',
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
    footerDisclaimer: 'On-demand scanner. Not real-time antivirus software.', footerSecurity: 'Security',
    statsEyebrow: 'PROJECT SNAPSHOT', statsTitle: 'Public, verifiable metrics', statsLive: 'From GitHub', statsStars: 'GitHub stars', statsDownloads: 'Release asset downloads', statsReleases: 'Published releases', statsContributors: 'GitHub contributors', statsNote: 'Counts come from the GitHub API and refresh when the page loads. Asset downloads include all release files and are not unique users.', statsUsers: 'Active users', statsNotTracked: 'Not tracked to preserve privacy',
    acqEyebrow: 'PROJECT AVAILABLE FOR ACQUISITION', acqTitle: 'Luna Guard — Acquisition', acqIntro: 'A Windows cybersecurity project with an existing codebase, application, documentation, and website, available for acquisition discussions.', acqContact: 'Contact seller on GitHub', acqGithub: 'View GitHub', acqPreRevenue: 'Pre-revenue', acqPublicRepo: 'Public repository', acqWindows: 'Windows desktop', acqSnapshot: 'PROJECT SNAPSHOT', acqOverviewTitle: 'An existing codebase to build on', acqOverviewBody: 'Luna Guard is an on-demand Windows file scanner with a dashboard, local hash/IOC database, YARA, file analysis, and quarantine that verifies SHA-256 before restore. A limited-scope Android companion app is also available.', acqOverviewFeature1: 'On-demand Windows malware scanner', acqOverviewFeature2: 'YARA and threat-intelligence feeds', acqOverviewFeature3: 'File, archive, and quarantine workflows', acqOverviewFeature4: 'Companion app and multilingual website',
    acqIncludedEyebrow: 'TRANSFER SCOPE', acqIncludedTitle: 'Assets in scope for discussion', acqIncludedIntro: 'These are existing project components. Any transfer depends on rights verification and a written agreement.', acqItemCode: 'Source code and apps', acqItemCodeBody: 'Windows app, Android companion source, dashboard, tests, and build/release workflows', acqItemDocs: 'Documentation and security notes', acqItemDocsBody: 'README, user guidance, published limitations, and development references', acqItemWeb: 'Website and content', acqItemWebBody: 'Luna Guard website, Security and Acquisition pages, and assets whose rights are verified', acqItemBrand: 'Brand and product assets', acqItemBrandBody: 'Name, logo, icons, and screenshots, subject to the seller confirming rights',
    acqWhyEyebrow: 'WHY LUNA GUARD', acqWhyTitle: 'A foundation for its next owner', acqWhyBody: 'A buyer can evaluate the existing codebase and decide whether to continue development, commercialize it, or integrate it into another product.', acqWhy1: 'Existing product workflows', acqWhy2: 'Release automation and regression tests', acqWhy3: 'Website, documentation, and security disclosure page', acqTransparencyEyebrow: 'IMPORTANT TRANSPARENCY', acqTransparencyTitle: 'Scope and rights need verification', acqTransparencyBody: 'The project is pre-revenue and is not a replacement for Microsoft Defender or a full endpoint protection platform. The repositories currently have no LICENSE file; YARA rule licensing and the provenance of some assets need confirmation before transfer. Dependencies remain under their respective owners’ licenses, and threat-intelligence provider terms do not transfer automatically.', acqContactTitle: 'Interested in acquiring Luna Guard?', acqContactBody: 'Contact the maintainer through the GitHub profile to discuss scope, assets, and due diligence before an agreement.', acqScopeNote: 'This page expresses availability for acquisition discussions. It does not warrant rights or detection results; final scope must be stated in a written agreement.',
    secEyebrow: 'SECURITY / TRANSPARENCY', secTitle: 'Security, built to be inspected.', secIntro: 'A practical overview of what Luna Guard checks, where its boundaries are, and how local data is handled. Details reflect the current desktop implementation and may change between releases.', secSource: 'Source security notes ↗', secBrief: 'SECURITY BRIEF', secScope: 'CURRENT SCOPE', secConsole1: 'On-demand detection', secDesktop: 'DESKTOP', secConsole2: 'Local-first scan data', secPrivacy: 'PRIVACY', secConsole3: 'Verified quarantine restore', secTransparencyLabel: 'TRANSPARENCY NOTES',
    secNavArchitecture: 'Detection Architecture', secNavIntel: 'Threat Intelligence', secNavArchives: 'Archive Protection', secNavQuarantine: 'Quarantine Security', secNavPrivacy: 'Privacy', secNavLimits: 'Limitations', secNavDisclosure: 'Security Disclosure',
    secArchitectureTitle: 'Detection Architecture', secArchitectureBody: 'Desktop scans run on demand. The pipeline uses local SHA-256, SHA-1 and MD5 lookups, configured YARA rules, file context (including entropy and bounded PE metadata when supported), and selected threat-feed indicators. Quick scan can also inspect selected process and memory/system signals. Each result includes evidence; risk scores are heuristic summaries, not probabilities.',
    secIntelTitle: 'Threat Intelligence', secIntelBody: 'Feed updates contact MalwareBazaar (including its recent detections feed), ThreatFox and URLhaus. File contents and scan history are not uploaded to those providers. The optional abuse.ch API key is stored locally and protected with Windows DPAPI for the current account; this does not protect against malware already running as that user. Network access is used when updating feeds.',
    secArchiveTitle: 'Archive Protection', secArchiveBody: 'Archive scanning applies limits across nested members. Encrypted, corrupt, unsupported, inaccessible, or over-budget content can be skipped and must leave the scan marked incomplete.', secLimit: 'Limit', secMembers: 'Members', secMemberSize: 'Expanded size / member', secTotalSize: 'Total expanded size', secDepth: 'Nesting depth', secRatio: 'Compression ratio', secTime: 'Per-archive time limit', secNoTimer: 'No timer', secArchiveNote: 'Deep mode stops when the temporary drive cannot retain 1 GiB free. Full C: scanning has no overall file-count or time cap, does not follow junctions/reparse points, and reports skipped paths as incomplete. ZIP central-directory memory is proportional to its capped member count.',
    secQuarantineTitle: 'Quarantine Security', secQuarantineBody: 'Quarantine records metadata before copying, verifies SHA-256 before removing the source, and writes state changes atomically. Restore verifies the digest, refuses destination conflicts, and uses a temporary file followed by atomic no-overwrite placement. Startup recovery leaves ambiguous operations in a recovery-required state. Permanent deletion requires explicit UI confirmation and another digest check.',
    secPrivacyTitle: 'Privacy', secPrivacyBody: 'Desktop scans run locally. Scan history is stored locally and may contain file paths and detection reasons; activity logs are held in process memory. A bounded audit log records allowlisted event metadata and IDs, not paths or API keys. The desktop dashboard API binds to loopback and uses a per-run token plus Host/Origin checks. The mobile app scans only user-selected files and does not inspect other apps’ private data.',
    secLimitsTitle: 'Limitations', secLimitItem1: 'Luna Guard is an on-demand scanner and quarantine helper, not real-time protection or a replacement for Microsoft Defender.', secLimitItem2: 'A clean result covers only components the scan could inspect. Permission errors, unsupported files, and resource limits make results incomplete.', secLimitItem3: 'YARA rules are first-party heuristics; licensing and independent review may be incomplete. Review matches for false positives.', secLimitItem4: 'PE signature presence checks metadata only; it does not validate Authenticode signatures or publisher trust. Version strings can be forged.', secLimitItem5: 'Risk scores are heuristic summaries, not calibrated probabilities. The Windows executable is unsigned and may show an unknown-publisher or SmartScreen warning.',
    secDisclosureTitle: 'Security Disclosure', secDisclosureBody: 'Report suspected vulnerabilities through the repository owner’s GitHub security reporting channel when enabled, or contact the maintainer privately before publishing exploit details. Do not include API keys, personal file contents, or signing material.', secDisclosureLink: 'Open GitHub Security ↗'
  },
  zh: {
    skip: '跳转到正文', brandTag: '看得见的安全防护', menu: '打开菜单',
    navFeatures: '功能', navScans: '扫描模式', navTransparency: '使用限制', navSecurity: '安全', navAcquisition: '项目收购', language: '语言', navDownload: '下载',
    heroEyebrow: '认识 LUNA GUARD', heroLead: '安全防护，', heroAccent: '清晰可见。',
    heroDescription: '按需运行的扫描工具，帮助您检查文件、理解检测结果，并自主决定后续操作。',
    heroPrimary: '下载 Luna Guard', heroSecondary: '查看源代码', heroNote: 'Windows 桌面版 · 按需扫描 · 不替代 Microsoft Defender',
    releasePlatform: 'Windows 10/11 • x64 • 公开源码', releaseVersionLabel: '版本', copyHash: '复制', tourEyebrow: '应用界面', tourTitle: '安装前先了解扫描流程', tourIntro: '以下为应用界面截图，使用演示数据展示流程，并非真实设备的扫描结果。', tourDashboard: '仪表板', tourScan: '扫描', tourThreat: '发现威胁', tourQuarantine: '隔离', tourHistory: '历史记录', tourDemo: '演示数据',
    illustrationOnDemand: '按需扫描', illustrationPipeline: '检测流程', illustrationTitle: '多层检查，说明每项结果。',
    pipelineHash: '哈希数据库', pipelineLocal: '本地', pipelineYara: 'YARA 规则', pipelineYaraSub: '规则可供查看和维护', pipelineRules: '规则',
    pipelineFile: '文件信息', pipelineFileSub: '文件熵 · 支持时读取 PE 信息', pipelineAnalyze: '分析', pipelineIntel: '威胁情报', pipelineFeeds: '数据源',
    illustrationLocal: '在您的设备上分析', illustrationConcept: '产品概览', chipRisk: '风险评分', chipExplain: '附带判断依据', chipAction: '您的设备', chipControl: '操作由您掌控',
    trustIntro: '产品原则', trustLocal: '本地分析', trustExplain: '说明检测依据', trustControl: '用户自主操作',
    featuresEyebrow: '清晰易懂', featuresTitle: '从风险信号到清晰易懂的结果', featuresIntro: '结合多种指标，查看检测内容及其来源。',
    featureHashTitle: '识别已知威胁', featureHashBody: '深入分析前，先将 SHA-256、SHA-1 和 MD5 与本地数据库进行比对。',
    featureYaraTitle: '通过 YARA 说明检测结果', featureYaraBody: '规则包含家族、说明、严重性和上下文，帮助解释每项结果。', featureOpenRules: '规则可查看',
    featureMetadataTitle: '了解文件上下文', featureMetadataBody: '计算文件熵。对于可解析且不超过 32 MiB 的 PE 文件，会显示架构、最多 32 个节的熵、受限的导入项列表，以及是否存在签名数据目录；不会验证 Authenticode 签名或证书信任链。',
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
    footerDisclaimer: '按需扫描工具，不是实时防病毒软件。', footerSecurity: '安全',
    statsEyebrow: '项目概览', statsTitle: '可验证的公开数据', statsLive: '来自 GitHub', statsStars: 'GitHub 星标', statsDownloads: '发行文件下载量', statsReleases: '已发布版本', statsContributors: 'GitHub 贡献者', statsNote: '数据来自 GitHub API，并在打开页面时更新。下载量包含所有发行文件，不代表独立用户数。', statsUsers: '活跃用户', statsNotTracked: '为保护隐私，不进行跟踪',
    acqEyebrow: '项目可供收购', acqTitle: 'Luna Guard — 项目收购', acqIntro: '一个面向 Windows 的网络安全项目，包含现有代码、应用、文档和网站，可就收购事宜进行沟通。', acqContact: '通过 GitHub 联系卖家', acqGithub: '查看 GitHub', acqPreRevenue: '尚无收入', acqPublicRepo: '公开仓库', acqWindows: 'Windows 桌面版', acqSnapshot: '项目概览', acqOverviewTitle: '可继续开发的现有代码库', acqOverviewBody: 'Luna Guard 是一款按需运行的 Windows 文件扫描工具，包含 dashboard、本地 hash/IOC 数据库、YARA、文件分析，以及恢复前验证 SHA-256 的隔离功能。另有功能范围有限的 Android companion app。', acqOverviewFeature1: '按需运行的 Windows 恶意软件扫描器', acqOverviewFeature2: 'YARA 与威胁情报数据源', acqOverviewFeature3: '文件、压缩包和隔离工作流程', acqOverviewFeature4: '配套应用与多语言网站',
    acqIncludedEyebrow: '转让范围', acqIncludedTitle: '可讨论的项目组成', acqIncludedIntro: '以下为现有项目组件；实际转让须完成权利核验并签订书面协议。', acqItemCode: '源代码与应用', acqItemCodeBody: 'Windows 应用、Android 配套源代码、dashboard、测试及构建/发布工作流', acqItemDocs: '文档与安全说明', acqItemDocsBody: 'README、用户指南、公开限制及开发参考资料', acqItemWeb: '网站与内容', acqItemWebBody: 'Luna Guard 网站、安全与收购页面，以及权利已核实的素材', acqItemBrand: '品牌与产品素材', acqItemBrandBody: '名称、徽标、图标和截图，须由卖家确认权利',
    acqWhyEyebrow: '为何选择 LUNA GUARD', acqWhyTitle: '交给下一任所有者继续发展', acqWhyBody: '买方可以评估现有代码库，并决定继续开发、商业化，或集成到其他产品中。', acqWhy1: '已有产品工作流程', acqWhy2: '发布自动化与回归测试', acqWhy3: '网站、文档及安全披露页面', acqTransparencyEyebrow: '重要说明', acqTransparencyTitle: '转让范围与权利仍需核实', acqTransparencyBody: '项目目前尚无收入，不能替代 Microsoft Defender 或完整的终端防护平台。当前仓库没有 LICENSE 文件；转让前需确认 YARA 规则许可及部分素材来源。依赖仍受各自权利人的许可约束，威胁情报服务条款也不会自动转移。', acqContactTitle: '有意收购 Luna Guard？', acqContactBody: '请通过 GitHub 个人主页联系维护者，讨论项目范围、资产及签约前的尽职调查。', acqScopeNote: '本页面仅表示项目可供收购沟通，不构成权利或检测结果保证；最终范围应写入书面协议。',
    secEyebrow: '安全 / 透明度', secTitle: '安全设计，经得起审查。', secIntro: '概述 Luna Guard 检查的内容、功能边界及本地数据处理方式。详情基于当前桌面版实现，可能随版本更新而变化。', secSource: '查看源代码安全说明 ↗', secBrief: '安全概览', secScope: '当前范围', secConsole1: '按需检测', secDesktop: '桌面端', secConsole2: '扫描数据优先保存在本地', secPrivacy: '隐私', secConsole3: '恢复前验证 SHA-256', secTransparencyLabel: '透明度说明',
    secNavArchitecture: '检测架构', secNavIntel: '威胁情报', secNavArchives: '压缩包防护', secNavQuarantine: '隔离安全', secNavPrivacy: '隐私', secNavLimits: '限制', secNavDisclosure: '安全问题披露',
    secArchitectureTitle: '检测架构', secArchitectureBody: '桌面版按需扫描。检测流程包括本地 SHA-256、SHA-1 和 MD5 查询、已配置的 YARA 规则、文件上下文（包括熵和支持时读取的受限 PE 元数据）及选定的威胁数据源指标。快速扫描还可检查部分进程、内存和系统信号。每项结果附有依据；风险评分是启发式摘要，并非概率。',
    secIntelTitle: '威胁情报', secIntelBody: '更新数据源时会连接 MalwareBazaar（包括近期检测源）、ThreatFox 和 URLhaus。不会向这些服务上传文件内容或扫描历史。可选的 abuse.ch API 密钥保存在本地，并通过当前账户的 Windows DPAPI 保护；无法防止同一账户下已运行的恶意软件。更新数据源时需要网络连接。',
    secArchiveTitle: '压缩包防护', secArchiveBody: '压缩包扫描会限制所有嵌套成员的资源用量。加密、损坏、不支持、无法访问或超出预算的内容可能被跳过，扫描结果必须标记为不完整。', secLimit: '限制项', secMembers: '成员数量', secMemberSize: '单个成员展开大小', secTotalSize: '展开总大小', secDepth: '嵌套深度', secRatio: '压缩比', secTime: '单个压缩包时间限制', secNoTimer: '无计时器', secArchiveNote: 'Deep 模式在临时磁盘无法保留 1 GiB 可用空间时停止。C: 盘完整扫描没有总文件数或时间上限，不跟随 junction/reparse point，并将跳过路径报告为扫描不完整。ZIP central directory 的内存用量与受限的成员数成正比。',
    secQuarantineTitle: '隔离安全', secQuarantineBody: '隔离时先记录元数据，再复制文件；删除源文件前验证 SHA-256，并以原子方式写入状态。恢复时再次验证摘要、拒绝目标冲突，并先写入临时文件再以原子方式放置且不覆盖。启动恢复会将状态不明确的操作保留为需要恢复处理。永久删除需要在界面明确确认并再次验证摘要。',
    secPrivacyTitle: '隐私', secPrivacyBody: '桌面扫描在本地运行。扫描历史保存在本地，可能包含文件路径和检测原因；活动日志保存在进程内存中。受限审计日志只记录允许列表中的事件元数据和 ID，不记录路径或 API 密钥。桌面 dashboard API 绑定 loopback，使用每次运行的 token 并检查 Host/Origin。移动版只扫描用户选择的文件，不检查其他应用的私有数据。',
    secLimitsTitle: '限制', secLimitItem1: 'Luna Guard 是按需扫描和隔离工具，不提供实时防护，也不能替代 Microsoft Defender。', secLimitItem2: '扫描干净只涵盖能够检查的组件。权限错误、不支持的文件和资源限制都会使结果不完整。', secLimitItem3: 'YARA 规则是项目自行编写的启发式规则；许可信息或独立审查可能不完整，请复核可能的误报。', secLimitItem4: 'PE 签名数据是否存在仅为元数据检查，不验证 Authenticode 签名或发布者信任；版本字符串可以伪造。', secLimitItem5: '风险评分是启发式摘要，不是校准后的概率。Windows 程序未签名，可能出现未知发布者或 SmartScreen 警告。',
    secDisclosureTitle: '安全问题披露', secDisclosureBody: '如发现疑似漏洞，请在启用时通过仓库所有者的 GitHub 安全报告渠道提交，或在公开攻击细节前私下联系维护者。请勿附上 API 密钥、个人文件内容或签名材料。', secDisclosureLink: '打开 GitHub Security ↗'
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

// Use public GitHub counters; the checked-in values remain visible if the API is unavailable.
const statNodes = document.querySelectorAll('[data-stat]');
let latestPublicStats = null;
function renderPublicStats(stats) {
  if (!stats) return;
  const locale = document.documentElement.lang || 'en';
  document.querySelectorAll('[data-stat]').forEach((node) => {
    const value = stats[node.dataset.stat];
    if (Number.isFinite(value)) node.textContent = value.toLocaleString(locale);
  });
}
if (statNodes.length) {
  fetch('https://api.github.com/repos/Aomtana0070/Luna-Guard', { headers: { Accept: 'application/vnd.github+json' } })
    .then(async (response) => {
      if (!response.ok) throw new Error('GitHub repository metrics unavailable');
      const repo = await response.json();
      const [releasesResponse, contributorsResponse] = await Promise.all([
        fetch(`${repo.url}/releases?per_page=100`, { headers: { Accept: 'application/vnd.github+json' } }),
        fetch(`${repo.url}/contributors?per_page=100`, { headers: { Accept: 'application/vnd.github+json' } })
      ]);
      if (!releasesResponse.ok || !contributorsResponse.ok) throw new Error('GitHub project metrics unavailable');
      const [releases, contributors] = await Promise.all([releasesResponse.json(), contributorsResponse.json()]);
      latestPublicStats = {
        stars: repo.stargazers_count,
        downloads: releases.reduce((sum, release) => sum + (release.assets || []).reduce((assetSum, asset) => assetSum + (Number(asset.download_count) || 0), 0), 0),
        releases: releases.length,
        contributors: contributors.length
      };
      renderPublicStats(latestPublicStats);
    })
    .catch(() => { /* Keep the dated public snapshot in the HTML; linked GitHub pages remain available. */ });
}

document.querySelectorAll('[data-copy-sha]').forEach((button) => button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(button.dataset.copySha);
    const label = button.querySelector('[data-i18n="copyHash"]');
    if (label) label.textContent = document.documentElement.lang === 'th' ? 'คัดลอกแล้ว' : document.documentElement.lang === 'zh-CN' ? '已复制' : 'Copied';
    window.setTimeout(() => { if (label) label.textContent = copy[document.documentElement.lang === 'zh-CN' ? 'zh' : document.documentElement.lang]?.copyHash || 'Copy'; }, 1800);
  } catch { button.title = button.dataset.copySha; }
}));

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
const visualViewport = window.visualViewport;
const siteLoader = document.querySelector('[data-site-loader]');
if (siteLoader) {
  const syncLoaderViewport = () => {
    if (!visualViewport) return;
    siteLoader.style.left = `${visualViewport.offsetLeft}px`;
    siteLoader.style.top = `${visualViewport.offsetTop}px`;
    siteLoader.style.width = `${visualViewport.width}px`;
    siteLoader.style.height = `${visualViewport.height}px`;
  };
  if (visualViewport) {
    syncLoaderViewport();
    visualViewport.addEventListener('resize', syncLoaderViewport);
    visualViewport.addEventListener('scroll', syncLoaderViewport);
  }
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
      window.setTimeout(() => {
        visualViewport?.removeEventListener('resize', syncLoaderViewport);
        visualViewport?.removeEventListener('scroll', syncLoaderViewport);
        siteLoader.remove();
      }, prefersReducedMotion ? 0 : 720);
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
  '.hero-copy, .hero-art, .trust-inner, .stat-card, .section-heading, .feature-card, .scan-card, .tour-shot, .scan-footnote, .privacy-copy, .privacy-visual, .limits-panel, .community-card, .footer-inner, .acq-copy, .acq-dossier, .acq-metric, .acq-asset, .acq-why-copy, .acq-reasons, .acq-transparency-card, .acq-contact-card, .security-hero-copy, .security-console, .security-block'
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
