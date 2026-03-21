
const TripLog = {
  header(active, base='') {
    const links = [
      {key:'destination', href:'destination/', label:'🌍 목적지'},
      {key:'cruise',      href:'cruise/',      label:'🚢 크루즈'},
      {key:'flight',      href:'flight/',      label:'✈️ 항공'},
      {key:'hotel',       href:'hotel/',       label:'🏨 숙박'},
      {key:'budget',      href:'budget/',      label:'💰 예산'},
      {key:'tools',       href:'tools/',       label:'📱 도구·앱'},
      {key:'health',      href:'health/',      label:'🏥 건강·안전'},
    ];
    const nav = links.map(l =>
      `<li><a href="${base}${l.href}" class="${active===l.key?'active':''}">${l.label}</a></li>`
    ).join('');
    return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="${base}" class="logo">트립<span>로그</span></a>
        <nav><ul class="nav" id="main-nav">${nav}</ul></nav>
        <div class="header-actions">
          <button class="login-btn" onclick="alert('로그인 기능 준비 중입니다.')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:5px;vertical-align:-2px"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            로그인
          </button>
          <button class="hamburger" onclick="document.getElementById('main-nav').classList.toggle('open')">☰</button>
        </div>
      </div>
    </header>`;
  },
  footer(base='') {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">트립<span>로그</span></div>
            <p class="footer-desc">한국인을 위한 실용적인 해외여행 정보 블로그.<br>크루즈·항공·숙박·목적지·예산 절약까지.</p>
          </div>
          <div class="footer-col"><h4>목적지</h4><ul>
            <li><a href="${base}destination/asia/">아시아</a></li>
            <li><a href="${base}destination/europe/">유럽</a></li>
            <li><a href="${base}destination/america/">아메리카</a></li>
            <li><a href="${base}destination/oceania/">오세아니아</a></li>
          </ul></div>
          <div class="footer-col"><h4>여행 정보</h4><ul>
            <li><a href="${base}cruise/">크루즈</a></li>
            <li><a href="${base}flight/">항공</a></li>
            <li><a href="${base}hotel/">숙박</a></li>
            <li><a href="${base}budget/">예산·절약</a></li>
          </ul></div>
          <div class="footer-col"><h4>도구·기타</h4><ul>
            <li><a href="${base}tools/">여행 앱·도구</a></li>
            <li><a href="${base}health/">건강·안전</a></li>
            <li><a href="${base}about/">소개</a></li>
          </ul></div>
        </div>
        <div class="footer-bottom">© 2026 트립로그. All rights reserved.</div>
      </div>
    </footer>`;
  }
};
