const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const menu = $('.menu-toggle');
const nav = $('.nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '×' : '☰';
});
$$('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
  if(menu) menu.textContent='☰';
}));

const progress = $('#progressBar');
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / h) * 100}%`;
}, {passive:true});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, {threshold:.08});
$$('.reveal').forEach(el => observer.observe(el));

const filterButtons = $$('.filter-bar button');
const workCards = $$('.work-card');
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  workCards.forEach(card => {
    card.style.display = (filter === 'all' || card.dataset.cat === filter) ? '' : 'none';
  });
}));

const caseData = {
  bhumi: {
    type:'BHUMI’S / FACEBOOK MARKETING',
    title:'Building a clearer Facebook presence for a clothing brand.',
    intro:'This case study is based on the Facebook Marketing client deliverable in my portfolio. The work shows how I approached brand presentation, page positioning and audience-facing communication for Bhumi’s: The Clothing Brand.',
    steps:[
      ['01','Clarify the brand surface','Present the brand name, category and visual identity consistently so a new visitor can understand the business quickly.'],
      ['02','Make the page useful','Structure the page around the information a potential customer needs before taking the next step: what the brand sells, who it serves and how to engage.'],
      ['03','Plan audience-facing content','Use product-focused, brand-led and engagement-oriented content rather than treating every post as an isolated design.'],
      ['04','Keep conversion in mind','Make calls to action and page messaging support the customer journey without turning every interaction into a hard sell.']
    ],
    track:'page visits · engagement · message enquiries · product interest · audience growth',
    source:'assets/portfolio/facebook-marketing.pdf'
  },
  sportskeeda: {
    type:'SPORTSKEEDA FOOTBALL / INSTAGRAM MARKETING',
    title:'Turning a football page into a focused content destination.',
    intro:'The Instagram portfolio piece is built around Sportskeeda Football and shows a clear niche-led approach: football first, audience clarity second, and content designed for fans who want regular updates.',
    steps:[
      ['01','Define the audience promise','Make it immediately clear that the page is for football fans looking for live updates, stories and football-focused content.'],
      ['02','Create a recognizable identity','Keep the profile message, content themes and visual treatment aligned so the account feels like one media destination.'],
      ['03','Design for repeat consumption','Prioritize formats that can support regular football updates, match moments, player stories and timely conversations.'],
      ['04','Measure audience behavior','Look beyond follower count and study reach, engagement, shares, saves, profile actions and the formats that repeatedly attract attention.']
    ],
    track:'reach · engagement rate · shares · saves · profile visits · follower growth',
    source:'assets/portfolio/instagram-marketing.pdf'
  },
  facebookads: {
    type:'FACEBOOK ADS / SALES CAMPAIGN',
    title:'Structuring a Meta campaign around sales instead of vanity metrics.',
    intro:'The source portfolio is a Facebook campaign example explicitly framed around sales. That makes the business objective clear: advertising activity should be connected to a commercial action, not only attention.',
    steps:[
      ['01','Start with the business objective','Use sales as the central objective and make the campaign structure reflect the desired customer action.'],
      ['02','Match audience to offer','Separate prospecting and warmer audiences where appropriate and make the message relevant to each stage.'],
      ['03','Test creative variables','Compare hooks, formats, offers, social proof and calls to action instead of changing everything at once.'],
      ['04','Optimize against meaningful events','Evaluate the campaign using purchase or conversion signals, then use cost and volume metrics to decide what deserves further testing.']
    ],
    track:'purchases · conversion rate · cost per purchase · CTR · CPC · ROAS',
    source:'assets/portfolio/facebook-ads.pdf'
  },
  leadgen: {
    type:'LEAD GENERATION / TEXAS RESTAURANTS',
    title:'Turning scattered business information into a usable prospecting list.',
    intro:'The lead-generation deliverable contains a structured list of restaurant prospects in Texas, including business names and location/contact information. The value of the work is in turning research into an outreach-ready dataset.',
    steps:[
      ['01','Define the prospect type','Start with a specific category — restaurants — and a geographic boundary — Texas — so the research stays focused.'],
      ['02','Collect useful fields','Capture business information such as company name, location and available contact or website details in a consistent structure.'],
      ['03','Standardize the dataset','Use consistent formatting so the list can be filtered, reviewed and transferred into an outreach workflow without unnecessary cleanup.'],
      ['04','Prepare for outreach','Add qualification criteria before contacting prospects, such as location fit, business type, online presence and the relevance of the service being offered.']
    ],
    track:'qualified prospects · valid contacts · response rate · meetings booked · conversion to client',
    source:'assets/portfolio/lead-generation.pdf'
  },
  keyword: {
    type:'KEYWORD RESEARCH / SEARCH STRATEGY',
    title:'From search suggestions to a usable keyword research workflow.',
    intro:'The keyword research portfolio demonstrates a research workflow using search discovery and Google Autocomplete. The important step is not collecting the largest possible list — it is turning search language into useful content opportunities.',
    steps:[
      ['01','Start with seed topics','Use the business topic and audience language to establish the first set of search themes.'],
      ['02','Expand real search language','Use autocomplete and related suggestions to uncover variations people may actually type into search engines.'],
      ['03','Group by intent','Separate informational, commercial and transactional themes so different queries can be matched to appropriate content.'],
      ['04','Map keywords to pages','Choose a primary topic for each page and use related terms as supporting language instead of creating unnecessary duplicate pages.']
    ],
    track:'search impressions · clicks · CTR · rankings · indexed pages · organic conversions',
    source:'assets/portfolio/keyword-research.pdf'
  },
  email: {
    type:'FINANCIAL PLANNING / EMAIL MARKETING',
    title:'Creating a simple, trust-led email message for a financial brand.',
    intro:'The email marketing portfolio contains a financial-planning communication built around a clear promise: “We keep our promises to you.” The case focuses on trust, clarity and message hierarchy rather than unnecessary complexity.',
    steps:[
      ['01','Lead with the promise','Put the central customer-facing message where it is immediately visible instead of burying the value proposition.'],
      ['02','Keep the tone credible','Financial communication needs clarity and reassurance; the language should feel professional without becoming difficult to understand.'],
      ['03','Connect message to service','Make the financial-planning context obvious so the reader understands why the email is relevant to them.'],
      ['04','Build a next step','A strong email should guide the reader toward one clear action, whether that is learning more, replying, booking or visiting a relevant page.']
    ],
    track:'open rate · click rate · reply rate · landing-page visits · qualified enquiries',
    source:'assets/portfolio/email-marketing.pdf'
  },
  data: {
    type:'RESEARCH / DATA ENTRY',
    title:'Turning raw company information into a structured research database.',
    intro:'The data-entry portfolio shows a structured company research sheet containing fields such as company name, dates, location, contact person and website. This is operational marketing work: the quality of the database directly affects the quality of later research and outreach.',
    steps:[
      ['01','Collect the right fields','Capture the information needed for the downstream purpose instead of collecting data without a use case.'],
      ['02','Keep records consistent','Use a consistent structure for company names, dates, locations, contacts and URLs so the dataset remains usable.'],
      ['03','Check data quality','Review obvious formatting issues, duplicates and incomplete records before the dataset is handed over.'],
      ['04','Make the research actionable','Structure the final sheet so it can support prospecting, market research, competitor research or further enrichment.']
    ],
    track:'record completeness · duplicate rate · valid URLs · usable contacts · qualified records',
    source:'assets/portfolio/data-entry.pdf'
  }
};

const caseModal = $('#caseModal'), modalType = $('#modalType'), modalTitle = $('#modalTitle'), modalIntro = $('#modalIntro'), modalGrid = $('#modalGrid'), modalTrack = $('#modalTrack'), modalSource = $('#modalSource');
$$('.case-open').forEach(btn => btn.addEventListener('click', () => {
  const data = caseData[btn.closest('.case-card').dataset.case];
  modalType.textContent = data.type;
  modalTitle.textContent = data.title;
  modalIntro.textContent = data.intro;
  modalGrid.innerHTML = data.steps.map(s => `<div class="modal-step"><b>${s[0]}</b><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('');
  modalTrack.innerHTML = `<strong>WHAT I WOULD TRACK</strong> · ${data.track}`;
  modalSource.href = data.source;
  caseModal.classList.add('open');
  caseModal.setAttribute('aria-hidden','false');
}));
$('#caseClose')?.addEventListener('click', closeCase);
caseModal?.addEventListener('click', e => { if(e.target === caseModal) closeCase(); });
function closeCase(){ caseModal.classList.remove('open'); caseModal.setAttribute('aria-hidden','true'); }

const certModal = $('#certificateModal');
$('#certificateView')?.addEventListener('click', () => {
  certModal.classList.add('open'); certModal.setAttribute('aria-hidden','false');
});
$('#certificateClose')?.addEventListener('click', closeCert);
certModal?.addEventListener('click', e => { if(e.target === certModal) closeCert(); });
function closeCert(){ certModal.classList.remove('open'); certModal.setAttribute('aria-hidden','true'); }

document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeCase(); closeCert(); }
});
$('#year').textContent = new Date().getFullYear();
