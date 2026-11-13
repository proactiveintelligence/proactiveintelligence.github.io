const COPY = {
  zh: {
    "nav.company": "公司",
    "nav.products": "产品",
    "nav.pipeline": "能力",
    "nav.scenarios": "场景",
    "nav.clients": "客户",
    "nav.team": "团队",
    "nav.career": "招聘",
    "nav.contact": "联系我们",
    "nav.cta": "了解产品",
    "hero.eyebrow": "主动式人工智能公司",
    "hero.title": "感知当下，主动行动。",
    "hero.lede":
      "PROACTIVE INTELLIGENCE LIMITED 打造上下文感知助手：融合第一人称视频、屏幕活动与可穿戴信号，推断用户需求，并通过数字信息、设备操作和硬件指令主动交付帮助。",
    "hero.cta1": "查看产品",
    "hero.cta2": "工作原理",
    "stats.s1k": "输入模态",
    "stats.s2k": "输出通道",
    "stats.s3k": "记忆层级",
    "stats.s4k": "验证场景",
    "company.eyebrow": "关于我们",
    "company.title": "PROACTIVE INTELLIGENCE LIMITED",
    "company.lede":
      "我们相信助手不该只在被问到时才回答。它应该看见用户正在做什么，记住过往上下文，并在合适的时机主动提供下一步。",
    "company.c1t": "主动，而不是被动",
    "company.c1p":
      "Agent 持续感知场景与屏幕活动，推断当前最需要的事项，而不是等待一句明确指令。",
    "company.c2t": "多模态融合",
    "company.c2p":
      "智能眼镜/手机视频、PC 与 Android 录屏、心率与姿态等可穿戴数据可以单独使用，也可以一起进入同一条推理流水线。",
    "company.c3t": "记得，并跟进",
    "company.c3p":
      "七层记忆保存场景历史、用户偏好与过往建议；下一次会话会检查用户是否已经按上次方案行动。",
    "company.photoAlt": "PROACTIVE INTELLIGENCE LIMITED 位于九龙塘创新中心的办公室",
    "products.eyebrow": "产品线",
    "products.title": "QIAN BOT：一套感知系统，两条产品线",
    "products.p1tag": "核心产品",
    "products.p1p":
      "上下文感知助手。它读取视频、录屏与传感器，识别场景与需求，再把方案路由到 AR/通知、手机电脑操作，或智能家居与机器人。",
    "products.p1l1": "场景识别 → 需求分析 → 方案生成 → 多通道交付",
    "products.p1l2": "支持 camera / screen_record / gui_agent / wearable / multimodal",
    "products.p1l3": "视觉理解使用 Qwen3-VL，语音转写使用 Whisper",
    "products.p1alt": "Proactive AI Agent 智能眼镜产品图",
    "products.p2tag": "集成能力",
    "products.p2p":
      "PC 与 Android（应用名 XOOGUIAGT）全天录屏系统。GUI-Owl 识别应用、页面、UI 元素和用户操作，再交给 Proactive Agent 做需求推断。",
    "products.p2l1": "PC Web 壳录屏 + Android 上传到电脑",
    "products.p2l2": "本地 GUI-Owl 或云端视觉模型分析",
    "products.p2l3": "分析结果写入记忆，支持检索与用户画像",
    "products.p2alt": "LLM-based GUI Agent 电脑与手机产品图",
    "io.inEyebrow": "输入",
    "io.inTitle": "看见用户正在经历什么",
    "io.in1t": "用户拍摄视频",
    "io.in1p": "智能眼镜、手机摄像头或第一人称 POV 录像。",
    "io.in2t": "手机 / 电脑录屏",
    "io.in2p": "理解应用界面、页面跳转与操作流程。",
    "io.in3t": "GUI Agent",
    "io.in3p": "GUI-Owl 结构化识别应用名、页面、元素与动作。",
    "io.in4t": "可穿戴数据",
    "io.in4p": "心率、步数、位置、姿态；可与视频同时融合。",
    "io.outEyebrow": "输出",
    "io.outTitle": "把帮助送到真正能执行的地方",
    "io.out1t": "数字信息与应用服务",
    "io.out1p": "AR 叠加、通知、提示、应用内引导。",
    "io.out2t": "手机 / 电脑操作",
    "io.out2p": "打开应用、点击界面、输入文字、发送消息、浏览网页。",
    "io.out3t": "智能硬件与机器人",
    "io.out3p": "灯光、温控等家居控制，以及机器人动作指令。",
    "pipe.eyebrow": "工作原理",
    "pipe.title": "四阶段流水线",
    "pipe.lede": "帧提取、音频提取和转写只做一次，在预检查与主分析之间共享，避免重复计算。",
    "pipe.s0t": "预检查",
    "pipe.s0p": "对照上一轮建议，检查用户是否已经按方案行动。",
    "pipe.sAt": "识别与决策",
    "pipe.sAp": "场景分析 → 需求推断 → 方案生成 → 写入记忆。",
    "pipe.sBt": "交付与反馈",
    "pipe.sBp": "按数字 / 设备 / 硬件通道执行，并收集用户确认。",
    "pipe.sCt": "记忆整合",
    "pipe.sCp": "反馈完成后触发，默认后台运行，不阻塞响应。",
    "mem.title": "七层记忆 + HintMemory",
    "mem.p":
      "PersonMemory 从当前时刻、同环境历史、今日记录，压缩到近期任务、长期事件与用户画像，并按时间、活动、人物、地点归档。HintMemory 保存用户自定义的「触发条件 → 需求」规则，在需求分析时注入。",
    "mem.l1": "L1–3 当前 / 同环境 / 今日",
    "mem.l2": "L4–6 任务压缩 / 长期事件 / 画像",
    "mem.l3": "L7 分类归档",
    "mem.l4": "Hint 用户规则",
    "sc.eyebrow": "验证场景",
    "sc.title": "从出行到健康，覆盖日常主动帮助",
    "sc.1": "社交提示",
    "sc.2": "出国旅行",
    "sc.3": "遗忘物品",
    "sc.4": "急救",
    "sc.5": "健康防护",
    "sc.6": "酒店前台",
    "sc.7": "拍照辅助",
    "sc.8": "诈骗识别",
    "sc.9": "安全警报",
    "sc.10": "对话辅助",
    "sc.11": "情感支持",
    "sc.12": "购物选择",
    "stack.eyebrow": "技术栈",
    "stack.title": "可本地运行的感知与执行栈",
    "stack.th1": "服务",
    "stack.th2": "端口",
    "stack.th3": "作用",
    "stack.r1": "Qwen3-VL 视觉 + Whisper 语音",
    "stack.r2": "录屏与 GUI-Owl 屏幕分析",
    "stack.r3": "接收 Android 录屏",
    "clients.eyebrow": "客户群",
    "clients.title": "我们服务的对象",
    "clients.lede":
      "我们与需要「用户开口之前就能获得帮助」的机构合作——从日常个人协助，到基于视频、屏幕与传感器的行业流程。",
    "clients.c1t": "健康与独立生活",
    "clients.c1p":
      "护理机构、长者照护与健康团队，借助场景与可穿戴信号，覆盖急救、健康防护，以及独居场景下的跟进。",
    "clients.c1alt": "健康与独立生活客户头像",
    "clients.c2t": "出行、酒店与日常生活",
    "clients.c2p":
      "出行、酒店与消费服务团队，部署出国旅行、遗忘物品、前台接待、购物选择与对话辅助等主动提示。",
    "clients.c2alt": "出行与酒店客户头像",
    "clients.c3t": "设备、职场与研究",
    "clients.c3p":
      "智能眼镜、可穿戴与机器人合作方，以及职场 GUI 自动化与香港研究实验室，在产品试验与本地试点中运行感知栈。",
    "clients.c3alt": "设备、职场与研究客户头像",
    "team.eyebrow": "团队",
    "team.title": "产品背后的人",
    "team.lede":
      "创始团队覆盖产品、技术、财务与运营，成员毕业于西北大学、佐治亚理工学院与伦敦大学学院，正在打造可本地运行的上下文感知助手。",
    "team.ceoRole": "CEO",
    "team.ceoP":
      "PROACTIVE INTELLIGENCE LIMITED 创始人兼首席执行官。毕业于美国西北大学（Northwestern University），负责产品方向、合作伙伴关系，以及公司在香港人工智能生态中的推进。",
    "team.ctoRole": "CTO",
    "team.ctoP":
      "PROACTIVE INTELLIGENCE LIMITED 首席技术官。毕业于佐治亚理工学院（Georgia Institute of Technology）。负责多模态 Agent 技术架构，覆盖视觉语言模型、端侧推理与 GUI 自动化，把感知能力做成可稳定交付的产品系统。",
    "team.cfoRole": "CFO",
    "team.cfoP":
      "PROACTIVE INTELLIGENCE LIMITED 首席财务官。毕业于伦敦大学学院（UCL）。负责财务规划、资本结构与融资推进，以可对接投资人的财务纪律支持公司在香港及更广市场的扩张。",
    "team.cooRole": "COO",
    "team.cooP":
      "PROACTIVE INTELLIGENCE LIMITED 首席运营官。毕业于美国西北大学（Northwestern University）。负责日常运营、客户试点与跨团队协同，让研究、产品与合作按同一节奏推进。",
    "footer.p": "主动式上下文感知助手。产品信息来自当前工程实现。",
    "footer.addrLabel": "地址",
    "footer.phoneLabel": "电话",
    "footer.emailLabel": "邮箱",
    "footer.backed": "由香港科技园公司（HKSTP）与 HKAI Lab 支持",
    "career.meta":
      "PROACTIVE INTELLIGENCE LIMITED 正在招聘：基于大语言模型的 AI Agent 开发工程师、电商技术开发、一线开发工程师与 IT 开发工程师。",
    "career.eyebrow": "招聘",
    "career.title": "开放职位",
    "career.lede":
      "我们正在招聘工程师，一起打造支付智能、电商平台，以及客户每天都在使用的系统。",
    "career.howto": "请将简历与申请职位发送至",
    "career.cta": "查看职位",
    "career.open": "全职与实习",
    "career.apply": "申请职位",
    "career.responsibilities": "工作内容",
    "job1.title": "基于大语言模型的 AI Agent 开发工程师",
    "job1.d1": "开发并优化 AI Agent，智能识别商户二维码所属支付平台（如支付宝、微信支付等）。",
    "job1.d2": "构建并维护支付路由算法，推荐最优的跨平台转账路径。",
    "job1.d3": "参与 AI 模型的训练、部署与迭代，提升识别准确率与系统响应速度。",
    "job1.d4": "对接主流支付平台 API（如 MCP 接口）。",
    "job2.title": "电商技术开发",
    "job2.s1t": "平台开发",
    "job2.s1p": "设计、构建并维护核心电商网站与结账流程。",
    "job2.s2t": "前端实现",
    "job2.s2p":
      "将 UI/UX 设计线框转化为高质量、响应式且可交互的用户界面，使用 HTML5、CSS3、JavaScript 及现代框架（如 React、Vue.js 或 Liquid）。",
    "job2.s3t": "后端集成",
    "job2.s3p":
      "开发并维护定制后端功能，包括与 ERP、CRM、支付网关（Stripe、PayPal）及物流服务商（Shippo、FedEx）等第三方服务的 API 集成。",
    "job2.s4t": "维护与安全",
    "job2.s4p": "排查技术问题、进行定期更新，并确保平台安全且符合 PCI 合规要求。",
    "job2.s5t": "协作",
    "job2.s5p":
      "与市场、设计及产品团队紧密合作，落地 A/B 测试、落地页和新功能发布，以推动销售。",
    "job3.title": "一线开发工程师",
    "job3.d1": "在客户现场，或与客户、产品、销售及客户成功团队紧密协作，收集需求、梳理流程并识别痛点。",
    "job3.d2":
      "设计、开发、测试并部署原型与生产级方案，包括 Web 应用、API、数据管道、自动化脚本和集成组件。",
    "job3.d3": "负责系统集成、数据迁移、配置管理、部署与现场调试，确保稳定交付。",
    "job3.d4": "排查并解决现场技术问题，提供根因分析、修复方案与预防措施。",
    "job3.d5": "将现场反馈转化为产品需求，并与产品及工程团队协作，提升平台能力。",
    "job3.d6": "编写技术文档、部署指南与最佳实践；培训客户与内部团队。",
    "job3.d7": "支持概念验证（POC）、售前演示、技术评估与客户技术沟通。",
    "job4.title": "IT 开发工程师",
    "job4.intro":
      "IT 开发工程师负责设计、开发、测试并维护软件应用、系统集成与 IT 系统。该岗位需要扎实的技术能力、对细节的关注，以及与跨职能团队协作、交付可靠且可扩展方案的能力。",
    "job4.d1": "设计、开发、测试、部署并维护软件应用与系统。",
    "job4.d2": "编写清晰、可扩展且文档完善的代码。",
    "job4.d3": "与业务分析师、项目经理及其他开发人员协作，理解需求并交付技术方案。",
    "job4.d4": "开发并维护 API、系统集成与数据库方案。",
    "job4.d5": "排查、调试并优化现有应用的性能与安全性。",
    "job4.d6": "参与代码评审，并贡献开发最佳实践。",
    "job4.d7": "编写并维护技术文档。",
    "job4.d8": "在 Agile/Scrum 开发流程中工作。",
    "job4.d9": "持续关注新兴技术，并提出改进建议。",
    "job4.d10": "确保符合安全、数据隐私及公司 IT 政策。",
  },
  en: {
    "nav.company": "Company",
    "nav.products": "Products",
    "nav.pipeline": "How it works",
    "nav.scenarios": "Scenarios",
    "nav.clients": "Clients",
    "nav.team": "Team",
    "nav.career": "Careers",
    "nav.contact": "Contact",
    "nav.cta": "See products",
    "hero.eyebrow": "Proactive AI company",
    "hero.title": "Sense the moment. Act first.",
    "hero.lede":
      "PROACTIVE INTELLIGENCE LIMITED builds a context-aware assistant that fuses first-person video, screen activity, and wearable signals, infers what the user needs, and delivers help through digital info, device control, and hardware commands.",
    "hero.cta1": "View products",
    "hero.cta2": "How it works",
    "stats.s1k": "Input modalities",
    "stats.s2k": "Output channels",
    "stats.s3k": "Memory layers",
    "stats.s4k": "Eval scenarios",
    "company.eyebrow": "About",
    "company.title": "PROACTIVE INTELLIGENCE LIMITED",
    "company.lede":
      "We believe an assistant should not wait to be asked. It should see what the user is doing, remember prior context, and offer the next step at the right time.",
    "company.c1t": "Proactive, not reactive",
    "company.c1p":
      "The agent continuously reads scenes and screen activity to infer the top needs of the moment, instead of waiting for an explicit prompt.",
    "company.c2t": "Multimodal fusion",
    "company.c2p":
      "Smart-glasses or phone video, PC and Android screen recordings, and wearable telemetry such as heart rate or posture can run alone or together in one pipeline.",
    "company.c3t": "Remember, then follow up",
    "company.c3p":
      "A seven-layer memory keeps scene history, preferences, and prior advice. The next session checks whether the user already acted on the last plan.",
    "company.photoAlt": "PROACTIVE INTELLIGENCE LIMITED office at InnoCentre, Kowloon Tong",
    "products.eyebrow": "Products",
    "products.title": "QIAN BOT：One sensing stack, two product lines",
    "products.p1tag": "Core product",
    "products.p1p":
      "A context-aware assistant. It reads video, screen, and sensors, recognizes scenes and needs, then routes solutions to AR/notifications, phone and PC actions, or smart-home and robot commands.",
    "products.p1l1": "Scene recognition → need analysis → solutions → multi-channel delivery",
    "products.p1l2": "Inputs: camera / screen_record / gui_agent / wearable / multimodal",
    "products.p1l3": "Vision with Qwen3-VL, speech with Whisper",
    "products.p1alt": "Proactive AI Agent smart glasses product",
    "products.p2tag": "Integrated capability",
    "products.p2p":
      "All-day screen recording on PC and Android (app name XOOGUIAGT). GUI-Owl recognizes apps, pages, UI elements, and actions, then Proactive Agent infers needs.",
    "products.p2l1": "PC web shell recording + Android upload",
    "products.p2l2": "Local GUI-Owl or cloud vision analysis",
    "products.p2l3": "Results persist to memory for search and user profiling",
    "products.p2alt": "LLM-based GUI Agent on PC and phone",
    "io.inEyebrow": "Inputs",
    "io.inTitle": "See what the user is going through",
    "io.in1t": "User-shot video",
    "io.in1p": "Smart glasses, phone cameras, or first-person POV footage.",
    "io.in2t": "Phone / PC screen recordings",
    "io.in2p": "Understand apps, page transitions, and workflows.",
    "io.in3t": "GUI Agent",
    "io.in3p": "GUI-Owl structures app name, page, elements, and actions.",
    "io.in4t": "Wearable data",
    "io.in4p": "Heart rate, steps, location, posture — alone or fused with video.",
    "io.outEyebrow": "Outputs",
    "io.outTitle": "Deliver help where it can actually run",
    "io.out1t": "Digital info & app services",
    "io.out1p": "AR overlays, notifications, tips, and in-app guidance.",
    "io.out2t": "Phone / PC operations",
    "io.out2p": "Open apps, tap UI, type text, send messages, browse.",
    "io.out3t": "Hardware & robots",
    "io.out3p": "Lights, thermostats, and robot motion commands.",
    "pipe.eyebrow": "How it works",
    "pipe.title": "A four-phase pipeline",
    "pipe.lede":
      "Frame extraction, audio extraction, and transcription run once and are shared between the pre-check and the main analysis.",
    "pipe.s0t": "Pre-check",
    "pipe.s0p": "Compare against last session’s advice and see if the user followed it.",
    "pipe.sAt": "Recognize & decide",
    "pipe.sAp": "Scene analysis → need inference → solution generation → memory write.",
    "pipe.sBt": "Deliver & feedback",
    "pipe.sBp": "Execute on digital / device / hardware channels, then collect confirmation.",
    "pipe.sCt": "Consolidate",
    "pipe.sCp": "Triggered after feedback; runs in the background by default.",
    "mem.title": "Seven-layer memory + HintMemory",
    "mem.p":
      "PersonMemory moves from the current moment, same-environment history, and today’s record into compressed recent tasks, long-term events, and a user profile, then archives by time, activity, person, and place. HintMemory stores user-authored trigger→need rules and injects them at analysis time.",
    "mem.l1": "L1–3 now / same place / today",
    "mem.l2": "L4–6 tasks / long-term / profile",
    "mem.l3": "L7 classified archive",
    "mem.l4": "Hint user rules",
    "sc.eyebrow": "Scenarios",
    "sc.title": "Everyday proactive help, from travel to health",
    "sc.1": "Social hints",
    "sc.2": "Travel abroad",
    "sc.3": "Forgotten items",
    "sc.4": "First aid",
    "sc.5": "Health safeguard",
    "sc.6": "Hotel reception",
    "sc.7": "Photo taking",
    "sc.8": "Fraud detection",
    "sc.9": "Security alert",
    "sc.10": "Conversation assistance",
    "sc.11": "Emotional support",
    "sc.12": "Shopping selection",
    "stack.eyebrow": "Stack",
    "stack.title": "A sensing and actuation stack you can run locally",
    "stack.th1": "Service",
    "stack.th2": "Port",
    "stack.th3": "Role",
    "stack.r1": "Qwen3-VL vision + Whisper speech",
    "stack.r2": "Screen recording and GUI-Owl analysis",
    "stack.r3": "Receive Android recordings",
    "clients.eyebrow": "Client base",
    "clients.title": "Who we work with",
    "clients.lede":
      "We partner with organizations that need help before the user has to ask — from everyday personal assistance to industry workflows that run on video, screens, and sensors.",
    "clients.c1t": "Health & independent living",
    "clients.c1p":
      "Care providers, elder-care programs, and wellness teams use scene and wearable signals for first aid, health safeguard, and follow-up when someone is living alone.",
    "clients.c1alt": "Health and independent living client",
    "clients.c2t": "Travel, hospitality & daily life",
    "clients.c2p":
      "Travel, hotel, and consumer services teams deploy proactive hints for abroad travel, forgotten items, reception, shopping, and conversation support.",
    "clients.c2alt": "Travel and hospitality client",
    "clients.c3t": "Devices, workplaces & research",
    "clients.c3p":
      "Smart-glasses, wearable, and robot partners, plus workplace GUI automation and Hong Kong research labs, run the sensing stack in product trials and local pilots.",
    "clients.c3alt": "Devices and workplace research client",
    "team.eyebrow": "Team",
    "team.title": "People behind the product",
    "team.lede":
      "The founding team combines product, technology, finance, and operations — spanning Northwestern, Georgia Tech, and UCL — to build a context-aware assistant that can be run locally.",
    "team.ceoRole": "CEO",
    "team.ceoP":
      "Founder and CEO of PROACTIVE INTELLIGENCE LIMITED. Graduate of Northwestern University, leading product direction, partnerships, and the company’s work in Hong Kong’s AI ecosystem.",
    "team.ctoRole": "CTO",
    "team.ctoP":
      "CTO of PROACTIVE INTELLIGENCE LIMITED. Graduate of the Georgia Institute of Technology. Leads the multimodal agent architecture — vision-language models, on-device inference, GUI automation, and the engineering that turns sensing into a reliable product.",
    "team.cfoRole": "CFO",
    "team.cfoP":
      "CFO of PROACTIVE INTELLIGENCE LIMITED. Graduate of University College London (UCL). Oversees financial planning, capital structure, and fundraising, bringing investor-ready discipline to how the company scales in Hong Kong and beyond.",
    "team.cooRole": "COO",
    "team.cooP":
      "COO of PROACTIVE INTELLIGENCE LIMITED. Graduate of Northwestern University. Runs day-to-day operations, client pilots, and cross-team execution so research, product, and partnerships move on the same timeline.",
    "footer.p": "A proactive, context-aware assistant. Product details reflect the current implementation.",
    "footer.addrLabel": "Address",
    "footer.phoneLabel": "Phone",
    "footer.emailLabel": "Email",
    "footer.backed": "Backed by HKSTP and HKAI Lab",
    "career.meta":
      "Open roles at PROACTIVE INTELLIGENCE LIMITED: LLM-based AI Agent Developer, E-commerce Technology Developer, Frontline Development Engineer, and IT Developer.",
    "career.eyebrow": "Careers",
    "career.title": "Open positions",
    "career.lede":
      "We are hiring engineers to build payment intelligence, commerce platforms, and the systems our clients rely on.",
    "career.howto": "Send your resume and the role title to",
    "career.cta": "View openings",
    "career.open": "Full-time & Internship",
    "career.apply": "Apply",
    "career.responsibilities": "What you will do",
    "job1.title": "LLM-based AI Agent Developer",
    "job1.d1":
      "Develop and optimize AI Agents to intelligently identify the payment platform of merchant QR codes (such as Alipay, WeChat Pay, etc.).",
    "job1.d2":
      "Build and maintain payment routing algorithms to recommend the optimal cross-platform transfer paths.",
    "job1.d3":
      "Participate in AI model training, deployment, and iteration to improve recognition accuracy and system response speed.",
    "job1.d4": "Integrate mainstream payment platform APIs (such as MCP interfaces).",
    "job2.title": "E-commerce Technology Developer",
    "job2.s1t": "Platform Development",
    "job2.s1p": "Design, build, and maintain the core e-commerce website and checkout flow.",
    "job2.s2t": "Frontend Implementation",
    "job2.s2p":
      "Translate UI/UX design wireframes into high-quality, responsive, and interactive user interfaces using HTML5, CSS3, JavaScript, and modern frameworks (e.g., React, Vue.js, or Liquid).",
    "job2.s3t": "Backend Integration",
    "job2.s3p":
      "Develop and maintain custom backend functionalities, including API integrations with third-party services such as ERPs, CRMs, payment gateways (Stripe, PayPal), and shipping providers (Shippo, FedEx).",
    "job2.s4t": "Maintenance & Security",
    "job2.s4p":
      "Troubleshoot technical issues, perform regular updates, and ensure the platform is secure and PCI compliant.",
    "job2.s5t": "Collaboration",
    "job2.s5p":
      "Work closely with the Marketing, Design, and Product teams to implement A/B tests, landing pages, and new feature rollouts that drive sales.",
    "job3.title": "Frontline Development Engineer",
    "job3.d1":
      "Work on-site or closely with customers, product, sales, and customer success teams to gather requirements, map workflows, and identify pain points.",
    "job3.d2":
      "Design, develop, test, and deploy prototypes and production-grade solutions, including web applications, APIs, data pipelines, automation scripts, and integration components.",
    "job3.d3":
      "Own system integration, data migration, configuration management, deployment, and on-site debugging to ensure stable delivery.",
    "job3.d4":
      "Troubleshoot and resolve technical issues in the field, and provide root cause analysis, fixes, and preventive measures.",
    "job3.d5":
      "Translate field feedback into product requirements and collaborate with product and engineering teams to improve platform capabilities.",
    "job3.d6":
      "Write technical documentation, deployment guides, and best practices; train customers and internal teams.",
    "job3.d7":
      "Support POCs, pre-sales demos, technical evaluations, and customer technical discussions.",
    "job4.title": "IT Developer",
    "job4.intro":
      "The IT Developer will be responsible for designing, developing, testing, and maintaining software applications, integrations, and IT systems. This role requires strong technical skills, attention to detail, and the ability to collaborate with cross-functional teams to deliver reliable and scalable solutions.",
    "job4.d1": "Design, develop, test, deploy, and maintain software applications and systems.",
    "job4.d2": "Write clean, scalable, and well-documented code.",
    "job4.d3":
      "Collaborate with business analysts, project managers, and other developers to understand requirements and deliver technical solutions.",
    "job4.d4": "Develop and maintain APIs, integrations, and database solutions.",
    "job4.d5": "Troubleshoot, debug, and optimize existing applications for performance and security.",
    "job4.d6": "Participate in code reviews and contribute to development best practices.",
    "job4.d7": "Create and maintain technical documentation.",
    "job4.d8": "Work within Agile/Scrum development processes.",
    "job4.d9": "Stay current with emerging technologies and recommend improvements.",
    "job4.d10": "Ensure compliance with security, data privacy, and company IT policies.",
  },
};

function applyLang(lang) {
  const dict = COPY[lang] || COPY.en;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.setAttribute("alt", dict[key]);
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  const isCareer = document.body.dataset.page === "career";
  const title = isCareer
    ? lang === "zh"
      ? "招聘 — PROACTIVE INTELLIGENCE LIMITED"
      : "Careers — PROACTIVE INTELLIGENCE LIMITED"
    : "PROACTIVE INTELLIGENCE LIMITED";
  const desc = isCareer
    ? dict["career.meta"]
    : lang === "zh"
      ? "PROACTIVE INTELLIGENCE LIMITED — 构建感知多路输入、执行多通道输出的主动式 AI 助手。"
      : "PROACTIVE INTELLIGENCE LIMITED builds a context-aware assistant that senses multimodal input and acts through multiple output channels.";
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && desc) meta.setAttribute("content", desc);
  localStorage.setItem("pi-lang", lang);
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

applyLang(localStorage.getItem("pi-lang") === "zh" ? "zh" : "en");
