<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

type Stat = {
  label: string
  value: string
}

type Signal = {
  title: string
  description: string
}

type SkillGroup = {
  title: string
  items: string[]
}

type Certification = {
  title: string
  note: string
}

type Experience = {
  period: string
  company: string
  role: string
  summary: string
  bullets: string[]
}

type Project = {
  title: string
  role: string
  description: string
  image?: string
  tags: string[]
  highlights: string[]
  visualTitle?: string
  visualItems?: string[]
  storeLinks?: {
    label: string
    image: string
    href: string
  }[]
  link?: string
  showHeaderLink?: boolean
  accent?: boolean
}

const stats: Stat[] = [
  { value: '2022 - Present', label: '聯邦銀行金融 IT 經歷' },
  { value: 'Vue 2 / Vue 3', label: '行動銀行前端技術棧' },
  { value: 'Nginx + SSL', label: '部署與安全維運能力' },
  { value: '金融專業證照', label: '具備金融商品與業務流程之基礎理解' },
]

const financeSignals: Signal[] = [
  {
    title: '行動銀行前端開發',
    description:
      '負責正式上線的行動銀行產品，從需求規劃、畫面開發、交易流程串接到上線後維運都實際參與。',
  },
  {
    title: '金融系統上線思維',
    description:
      '熟悉交易流程的風險感與可用性平衡，能在 UI 設計與操作路徑中優先思考穩定性、清楚性與錯誤預防。',
  },
  {
    title: '部署與資安實務',
    description:
      '具備 Nginx 反向代理、SSL/TLS 憑證佈署、CSR 與憑證鏈處理經驗，能獨立推進前端服務上線。',
  },
]

const financeSignalEntries = financeSignals.map((signal, index) => ({
  ...signal,
  order: `0${index + 1}`,
}))

const skillGroups: SkillGroup[] = [
  {
    title: 'Front-End',
    items: ['Vue 3', 'Vue 2', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Financial IT / DevOps',
    items: ['Nginx', 'SSL/TLS', 'Linux CLI', 'Git', 'Deployment', 'Reverse Proxy', 'CSR / RSA Key Flow'],
  },
  {
    title: 'Back-End / Tooling',
    items: ['Node.js', 'MongoDB', 'REST API Integration', 'Render', 'Figma', 'Photoshop', 'Illustrator'],
  },
]

const certifications: Certification[] = [
  {
    title: '銀行內部控制與內部稽核測驗',
    note: '一般金融領域，熟悉金融內控觀念與流程語境。',
  },
  {
    title: '信託業業務人員信託業務專業測驗',
    note: '具備與金融業務單位溝通時所需的基本知識背景。',
  },
  {
    title: '人身保險業務員資格測驗',
    note: '有助於理解金融產品規範與跨部門需求。',
  },
]

const experiences: Experience[] = [
  {
    period: '2022 - Present',
    company: '聯邦銀行',
    role: 'Front-End Web Developer',
    summary:
      '專注於行動銀行前端開發與維運，兼具金融產品理解、跨部門協作與正式環境上線經驗。',
    bullets: [
      '參與行動銀行英文版開發，從前期規劃、介面實作到最終上線完整投入。',
      '以 Vue 2、Vue 3 串接後端 API，完成正式環境交易功能與互動流程。',
      '與 UI 設計、後端工程師協作，整理 API 規格並提升組件重用與使用者體驗。',
      '處理跨瀏覽器與多裝置渲染差異，確保金融服務介面呈現一致且穩定。',
      '實作 Nginx 部署、反向代理設定與 SSL/TLS 憑證配置，具備前端服務上線能力。',
    ],
  },
]

const projects: Project[] = [
  {
    title: '聯邦行動銀行',
    role: '核心專案 / 金融 IT / 正式上線產品',
    description:
      '入職後最核心的正式上線產品。工作範圍不只限於畫面開發，而是從需求理解、交易流程梳理、前端實作到正式環境部署與維運都實際參與。',
    tags: ['金融 IT', 'Vue 2 / Vue 3', 'Mobile Banking', 'Nginx', 'SSL/TLS'],
    highlights: [
      '參與行動銀行英文版開發，實際投入規劃、切版、功能串接與上線流程。',
      '以 Vue 2、Vue 3 串接後端 API，處理交易流程中的互動、驗證與操作清晰度。',
      '支援 Nginx 反向代理與 SSL/TLS 憑證配置，具備金融服務前端正式上線的維運視角。',
    ],
    visualTitle: '公開商店連結',
    storeLinks: [
      {
        label: 'App Store',
        image: '/images/app_store.png',
        href: 'https://apps.apple.com/tw/app/%E8%81%AF%E9%82%A6%E8%A1%8C%E5%8B%95%E9%8A%80%E8%A1%8C/id1537067533',
      },
      {
        label: 'Google Play',
        image: '/images/google_play.png',
        href: 'https://play.google.com/store/apps/details?id=wbank.ubot.com.tw&hl=zh_TW',
      },
    ],
    link: 'https://apps.apple.com/tw/app/%E8%81%AF%E9%82%A6%E8%A1%8C%E5%8B%95%E9%8A%80%E8%A1%8C/id1537067533',
    showHeaderLink: false,
    accent: true,
  },
  {
    title: '吃香喝辣 形象官網',
    role: '品牌網站 / 訂位與點餐流程整合',
    description:
      '結合品牌官網、LINE Bot 與後台管理的整合型專案，展示從前台體驗設計到資料管理流程的完整規劃能力。',
    image: '/images/pin-1.jpg',
    tags: ['Vue.js', 'BootstrapVue', 'MongoDB', 'Node.js'],
    highlights: [
      '前台包含候位、下單、結帳與留言機制，強化顧客端操作流暢度。',
      '後台整合公告、商品、留言、候位與訂單管理，提升店家營運效率。',
      '透過 LINE Bot 連動通知，讓候位與訂單狀態更即時、更貼近真實商業場景。',
    ],
    link: 'https://xun0101.github.io/front_/#/',
  },
  {
    title: '番茄鐘',
    role: '前端互動產品 / 個人效率工具',
    description:
      '以時間管理情境為主題的前端作品，重點放在互動節奏、資料視覺化與可安裝式網頁應用體驗。',
    image: '/images/pomodoro.jpg',
    tags: ['Vue.js', 'Pug', 'PWA', 'Chart.js'],
    highlights: [
      '使用 Vue CLI 開發，整合 Pug 模板語法與 PWA 能力。',
      '結合 chart.js 呈現時間紀錄，讓使用者更容易理解專注狀態。',
      '從 UI 視覺到操作節點都偏向產品思維，而不只是單純功能實作。',
    ],
    link: 'https://xun0101.github.io/pomodoro20210131/#/',
  },
  {
    title: 'LINE Bot',
    role: 'API 串接 / Node.js 自動化互動',
    description:
      '使用 Node.js 開發的聊天機器人專案，重點在於外部資料串接、查詢流程設計與對話式互動體驗。',
    image: '/images/line.jpg',
    tags: ['Node.js', 'axios', 'linebot', 'dotenv'],
    highlights: [
      '串接文化部 API，讓使用者可快速查詢傳統民俗活動資訊。',
      '以 linebot 套件建構對話式使用情境，提升資訊取得效率。',
      '展現後端整合與訊息流程規劃能力，補強前端以外的技術廣度。',
    ],
    link: 'https://github.com/xun0101/2021linebot-test',
  },
  {
    title: '十二地支與生肖',
    role: '互動遊戲 / 教育導向 UI 設計',
    description:
      '以兒童互動學習為出發點的翻牌遊戲，將配對機制與知識內容結合，提升遊戲的教育性與記憶點。',
    image: '/images/12.jpg',
    tags: ['jQuery', 'Game UI'],
    highlights: [
      '透過翻牌配對結合十二地支與生肖知識，增加遊戲主題辨識度。',
      '完成後提供補充知識內容，讓互動體驗延伸成學習流程。',
      '呈現 jQuery 時期對 DOM 互動、狀態切換與遊戲節奏的掌握。',
    ],
    link: 'https://xun0101.github.io/jq-cards/',
  },
  {
    title: '打地鼠',
    role: '純 JavaScript 遊戲邏輯實作',
    description:
      '以原生 JavaScript 開發的互動遊戲，從分數規則、道具差異到紀錄保存都自行設計，強調基礎邏輯與互動回饋。',
    image: '/images/rabbit.jpg',
    tags: ['JavaScript', 'localStorage'],
    highlights: [
      '設計不同武器效果，讓單一玩法增加變化與重玩性。',
      '加入正負分機制與節奏控制，強化遊戲挑戰感。',
      '使用 localStorage 保留最高分資料，完成基本遊戲資料持久化。',
    ],
    link: 'https://xun0101.github.io/js-wam/',
  },
]

const tickerItems = [
  'Mobile Banking',
  'Vue 3 + TypeScript',
  'Nginx Deployment',
  'SSL/TLS Operations',
  'Financial Domain Knowledge',
  'Cross-team Collaboration',
]

const tickerLoop = [...tickerItems, ...tickerItems].map((item, index) => ({
  item,
  key: `${item}-${index}`,
}))

let observer: IntersectionObserver | null = null
let handlePointerMove: ((event: PointerEvent) => void) | null = null

onMounted(() => {
  const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]')

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.18 },
  )

  revealTargets.forEach(target => observer?.observe(target))

  handlePointerMove = event => {
    const x = (event.clientX / window.innerWidth) * 100
    const y = (event.clientY / window.innerHeight) * 100
    document.documentElement.style.setProperty('--pointer-x', `${x}%`)
    document.documentElement.style.setProperty('--pointer-y', `${y}%`)
  }

  window.addEventListener('pointermove', handlePointerMove)
})

onUnmounted(() => {
  observer?.disconnect()

  if (handlePointerMove) {
    window.removeEventListener('pointermove', handlePointerMove)
  }
})
</script>

<template>
  <div class="page-shell">
    <div class="backdrop">
      <div class="backdrop__grid"></div>
      <div class="backdrop__orb backdrop__orb--left"></div>
      <div class="backdrop__orb backdrop__orb--right"></div>
      <div class="backdrop__spotlight"></div>
    </div>

    <header class="topbar">
      <a class="brand" href="#hero">
        <span class="brand__mono">Resume / Portfolio</span>
        <strong>林佳勳</strong>
      </a>

      <nav class="nav">
        <a href="#finance">金融 IT</a>
        <a href="#experience">經歷</a>
        <a href="#skills">技能</a>
        <a href="#portfolio">作品</a>
      </nav>
    </header>

    <main>
      <section id="hero" class="hero section">
        <div class="hero__visual" data-reveal>
          <div class="profile-card">
            <div class="profile-card__frame">
              <img src="/images/avatar.jpg" alt="林佳勳大頭照" />
            </div>

            <div class="profile-card__body">
              <p class="profile-card__title">Profile Snapshot</p>
              <h2>林佳勳</h2>
              <ul class="profile-card__list">
                <li>現職：聯邦銀行前端工程師</li>
                <li>聚焦：行動銀行與金融服務前端</li>
                <li>能力：Vue、部署維運、跨部門協作</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="hero__content" data-reveal>
          <p class="eyebrow">Front-End Web Developer / Financial IT</p>
          <div class="hero__headline">
            <h1>金融 IT 前端工程師</h1>
            <p class="hero__lede">專注行動銀行開發、交易流程優化與正式環境維運</p>
          </div>

          <div class="hero__highlights">
            <span>聯邦銀行</span>
            <span>Vue / TypeScript</span>
            <span>Nginx / SSL</span>
          </div>

          <div class="hero__summary-grid">
            <p class="hero__summary">現任聯邦銀行前端工程師，主要投入行動銀行前端開發與正式環境維運。</p>
            <p class="hero__summary">熟悉 Vue、TypeScript、Nginx 與 SSL/TLS，能從需求到上線完整推進交付。</p>
          </div>

          <div class="hero__actions">
            <a class="button button--primary" href="#portfolio">查看重點作品</a>
            <a class="button button--secondary" href="https://github.com/xun0101" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div class="hero__stats">
            <article v-for="stat in stats" :key="stat.label" class="stat-card">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </article>
          </div>
        </div>
      </section>

      <section class="ticker" aria-label="Core capabilities">
        <div class="ticker__track">
          <span v-for="entry in tickerLoop" :key="entry.key">
            {{ entry.item }}
          </span>
        </div>
      </section>

      <section id="finance" class="section">
        <div class="section-heading" data-reveal>
          <p class="eyebrow">Financial IT Strength</p>
          <h2>金融服務上線思維</h2>
        </div>

        <div class="signal-grid">
          <article v-for="signal in financeSignalEntries" :key="signal.title" class="signal-card" data-reveal>
            <p class="signal-card__index">{{ signal.order }}</p>
            <h3>{{ signal.title }}</h3>
            <p>{{ signal.description }}</p>
          </article>
        </div>
      </section>

      <section id="experience" class="section section--split">
        <div class="section-heading" data-reveal>
          <p class="eyebrow">Experience</p>
          <h2>正式環境開發經歷</h2>
        </div>

        <div class="timeline">
          <article v-for="experience in experiences" :key="experience.company" class="timeline-card" data-reveal>
            <div class="timeline-card__meta">
              <span>{{ experience.period }}</span>
              <h3>{{ experience.company }}</h3>
              <p>{{ experience.role }}</p>
            </div>

            <div class="timeline-card__content">
              <p class="timeline-card__summary">{{ experience.summary }}</p>
              <ul>
                <li v-for="bullet in experience.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" class="section">
        <div class="section-heading section-heading--compact" data-reveal>
          <p class="eyebrow">Skills & Certifications</p>
          <h2>Vue 技術與金融 IT 協作能力</h2>
        </div>

        <div class="skills-layout">
          <div class="skills-grid">
            <article v-for="group in skillGroups" :key="group.title" class="skill-card" data-reveal>
              <h3>{{ group.title }}</h3>
              <div class="chip-list">
                <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
              </div>
            </article>
          </div>

          <aside class="certification-panel" data-reveal>
            <p class="certification-panel__label">Certifications</p>
            <article v-for="certification in certifications" :key="certification.title" class="certification-item">
              <h3>{{ certification.title }}</h3>
              <p>{{ certification.note }}</p>
            </article>
          </aside>
        </div>
      </section>

      <section id="portfolio" class="section">
        <div class="section-heading" data-reveal>
          <p class="eyebrow">Portfolio</p>
          <h2>重點作品</h2>
        </div>

        <div class="portfolio-grid">
          <article
            v-for="project in projects"
            :key="project.title"
            class="project-card"
            :class="{ 'project-card--accent': project.accent }"
            data-reveal
          >
            <div v-if="project.image" class="project-card__image">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div v-else class="project-card__visual">
              <div v-if="project.storeLinks?.length" class="project-card__qr-grid">
                <a
                  v-for="store in project.storeLinks"
                  :key="store.label"
                  :href="store.href"
                  class="project-card__qr-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img :src="store.image" :alt="`${store.label} QR Code`" />
                  <span>{{ store.label }}</span>
                </a>
              </div>
              <template v-else>
                <p class="project-card__visual-label">Financial Product Case</p>
                <h4>{{ project.visualTitle }}</h4>
                <div class="project-card__visual-grid">
                <span v-for="item in project.visualItems" :key="item">{{ item }}</span>
                </div>
              </template>
            </div>

            <div class="project-card__body">
              <div class="project-card__header">
                <h3>{{ project.title }}</h3>
                <a v-if="project.link && project.showHeaderLink !== false" :href="project.link" target="_blank" rel="noreferrer">Open</a>
              </div>

              <p>{{ project.description }}</p>
              <p class="project-card__role">{{ project.role }}</p>

              <ul class="project-highlights">
                <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
              </ul>

              <div class="chip-list chip-list--compact">
                <span v-for="tag in project.tags" :key="tag" class="chip chip--strong">{{ tag }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div>
        <p class="eyebrow">Ready for collaboration</p>
        <h2>擅長把複雜需求整理成可上線、可維運、可延伸的前端方案。</h2>
      </div>

      <a class="button button--secondary" href="https://github.com/xun0101" target="_blank" rel="noreferrer">
        前往 GitHub
      </a>
    </footer>
  </div>
</template>
