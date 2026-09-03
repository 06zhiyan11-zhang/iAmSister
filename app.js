(function () {
  'use strict';

  const personalityIcons = {
    MAO: '🌰',
    XU: '🌸',
    NING: '🌹',
    ZHENG: '💎',
    CHEN: '🌻',
    JING: '🌿',
    YANG: '🌊'
  };

  const personalityKeys = ['MAO', 'XU', 'NING', 'ZHENG', 'CHEN', 'JING', 'YANG'];

  let currentQuestionIndex = 0;
  let answers = [];
  let scores = {};
  let finalResult = null;

  const els = {};

  function initElements() {
    els.pages = {
      home: document.getElementById('page-home'),
      quiz: document.getElementById('page-quiz'),
      result: document.getElementById('page-result')
    };

    els.buttons = {
      start: document.getElementById('btn-start'),
      backHome: document.getElementById('btn-back-home'),
      prev: document.getElementById('btn-prev'),
      next: document.getElementById('btn-next'),
      share: document.getElementById('btn-share'),
      restart: document.getElementById('btn-restart'),
      closeShare: document.getElementById('btn-close-share')
    };

    els.quiz = {
      category: document.getElementById('q-category'),
      text: document.getElementById('q-text'),
      options: document.getElementById('options-list'),
      currentQ: document.getElementById('current-q'),
      totalQ: document.getElementById('total-q'),
      progressFill: document.getElementById('progress-fill')
    };

    els.result = {
      loading: document.getElementById('result-loading'),
      body: document.getElementById('result-body'),
      photo: document.getElementById('result-photo'),
      icon: document.getElementById('result-icon'),
      name: document.getElementById('result-name'),
      title: document.getElementById('result-title'),
      match: document.getElementById('result-match'),
      tags: document.getElementById('result-tags'),
      desc: document.getElementById('result-desc'),
      chartLegend: document.getElementById('chart-legend'),
      allResults: document.getElementById('all-results')
    };

    els.shareMask = document.getElementById('share-mask');

    const logoImg = document.getElementById('logo-img');
    if (logoImg) {
      logoImg.addEventListener('error', () => { logoImg.style.display = 'none'; });
    }
  }

  function showPage(pageName) {
    Object.values(els.pages).forEach(p => p.classList.remove('active'));
    els.pages[pageName].classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function resetState() {
    currentQuestionIndex = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    scores = {};
    personalityKeys.forEach(k => scores[k] = 0);
    finalResult = null;
    els.quiz.totalQ.textContent = QUESTIONS.length;
  }

  function renderQuestion() {
    const q = QUESTIONS[currentQuestionIndex];
    const selectedOption = answers[currentQuestionIndex];

    els.quiz.category.textContent = q.category;
    els.quiz.text.textContent = q.question;
    els.quiz.currentQ.textContent = currentQuestionIndex + 1;

    const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
    els.quiz.progressFill.style.width = progress + '%';

    els.quiz.options.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const item = document.createElement('div');
      item.className = 'option-item' + (selectedOption === idx ? ' selected' : '');
      item.textContent = opt.text;
      item.addEventListener('click', () => selectOption(idx));
      els.quiz.options.appendChild(item);
    });

    els.buttons.prev.disabled = currentQuestionIndex === 0;
    els.buttons.next.disabled = selectedOption === null;

    if (currentQuestionIndex === QUESTIONS.length - 1) {
      els.buttons.next.querySelector('span').textContent = '查看结果';
    } else {
      els.buttons.next.querySelector('span').textContent = '下一题';
    }
  }

  function selectOption(idx) {
    answers[currentQuestionIndex] = idx;

    const optionItems = els.quiz.options.querySelectorAll('.option-item');
    optionItems.forEach((item, i) => {
      if (i === idx) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });

    els.buttons.next.disabled = false;
  }

  function nextQuestion() {
    if (answers[currentQuestionIndex] === null) return;

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      calculateResult();
      showPage('result');
      renderResult();
    }
  }

  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  }

  function calculateResult() {
    const THEORETICAL_MAX = QUESTIONS.reduce((sum, q) => {
      let qMax = 0;
      q.options.forEach(o => {
        const sumW = Object.values(o.weights || {}).reduce((s, v) => s + (v || 0), 0);
        if (sumW > qMax) qMax = sumW;
      });
      return sum + qMax;
    }, 0);

    personalityKeys.forEach(k => scores[k] = 0);

    QUESTIONS.forEach((q, qIdx) => {
      const selectedIdx = answers[qIdx];
      if (selectedIdx === null || selectedIdx === undefined) return;
      const selected = q.options[selectedIdx];
      if (!selected || !selected.weights) return;

      Object.keys(selected.weights).forEach(key => {
        scores[key] = (scores[key] || 0) + (selected.weights[key] || 0);
      });
    });

    let maxScore = 0;
    let minScore = Infinity;
    Object.values(scores).forEach(s => {
      if (s > maxScore) maxScore = s;
      if (s < minScore) minScore = s;
    });

    let topKey = 'MAO';
    let topScore = -1;
    personalityKeys.forEach(k => {
      if (scores[k] > topScore) {
        topScore = scores[k];
        topKey = k;
      }
    });

    let secondScore = -1;
    personalityKeys.forEach(k => {
      if (k !== topKey && scores[k] > secondScore) secondScore = scores[k];
    });

    let medianScore = 0;
    const sortedScores = Object.values(scores).slice().sort((a, b) => a - b);
    medianScore = (sortedScores[3] + sortedScores[2]) / 2;

    const dominanceRatio = secondScore > 0 ? (topScore - secondScore) / (topScore || 1) : 1;
    const perfectRatio = topScore / THEORETICAL_MAX;
    const spreadRatio = Math.max(0, Math.min(1, (topScore - medianScore) / (topScore || 1)));
    const mixedRatio = perfectRatio * 0.40 + Math.min(1, dominanceRatio * 2.0) * 0.30 + spreadRatio * 0.30;
    const matchPercent = Math.max(52, Math.min(97, Math.round(52 + mixedRatio * 45)));

    const scoreRange = maxScore - minScore || 1;
    const normalizedScores = {};
    personalityKeys.forEach(k => {
      if (maxScore === minScore) {
        normalizedScores[k] = 62;
      } else {
        normalizedScores[k] = Math.max(32, Math.round(32 + ((scores[k] - minScore) / scoreRange) * 58));
      }
    });

    const allSorted = personalityKeys
      .map(k => ({ key: k, score: scores[k], pct: normalizedScores[k] }))
      .sort((a, b) => b.score - a.score);

    finalResult = {
      topKey,
      matchPercent,
      normalizedScores,
      allSorted
    };
  }

  function renderResult() {
    const { topKey, matchPercent, normalizedScores, allSorted } = finalResult;
    const desc = PERSONALITY_DESC[topKey];
    const color = PERSONALITY_COLORS[topKey];

    els.result.loading.style.display = 'flex';
    els.result.body.classList.add('hidden');

    setTimeout(() => {
      els.result.loading.style.display = 'none';
      els.result.body.classList.remove('hidden');

      els.result.icon.textContent = personalityIcons[topKey];
      els.result.name.textContent = PERSONALITIES[topKey];
      els.result.title.textContent = desc.title;
      els.result.match.textContent = matchPercent;
      els.result.desc.textContent = desc.desc;

      const photoUrl = PERSONALITY_IMAGES[topKey];
      els.result.photo.alt = PERSONALITIES[topKey];
      els.result.photo.onerror = () => {
        els.result.photo.style.display = 'none';
        els.result.icon.style.display = '';
      };
      els.result.photo.onload = () => {
        els.result.photo.style.display = 'block';
        els.result.icon.style.display = 'none';
      };
      els.result.photo.src = photoUrl;

      els.result.tags.innerHTML = '';
      desc.tags.forEach(tag => {
        const t = document.createElement('span');
        t.className = 'result-tag';
        t.textContent = tag;
        els.result.tags.appendChild(t);
      });

      renderRadarChart(normalizedScores);

      els.result.chartLegend.innerHTML = '';
      personalityKeys.forEach(k => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `
          <span class="legend-color" style="background:${PERSONALITY_COLORS[k]}"></span>
          <span>${PERSONALITIES[k]}</span>
          <span class="legend-percent">${normalizedScores[k]}%</span>
        `;
        els.result.chartLegend.appendChild(item);
      });

      els.result.allResults.innerHTML = '';
      allSorted.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'result-row' + (idx === 0 ? ' top-match' : '');
        row.innerHTML = `
          <span class="result-guest-name">${personalityIcons[item.key]} ${PERSONALITIES[item.key]}</span>
          <div class="result-bar-wrapper">
            <div class="result-bar-fill" style="width:0%; background:${PERSONALITY_COLORS[item.key]}"></div>
          </div>
          <span class="result-guest-percent">${item.pct}%</span>
        `;
        els.result.allResults.appendChild(row);

        setTimeout(() => {
          const fill = row.querySelector('.result-bar-fill');
          if (fill) fill.style.width = item.pct + '%';
        }, 100 + idx * 80);
      });
    }, 1500);
  }

  function renderRadarChart(normalizedScores) {
    const canvas = document.getElementById('radar-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height) || 300;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.34;
    const labels = personalityKeys.map(k => PERSONALITIES[k]);
    const levels = 5;
    const angleStep = (Math.PI * 2) / personalityKeys.length;
    const startAngle = -Math.PI / 2;

    ctx.clearRect(0, 0, size, size);

    for (let i = levels; i >= 1; i--) {
      const r = (radius / levels) * i;
      ctx.beginPath();
      for (let j = 0; j < personalityKeys.length; j++) {
        const angle = startAngle + j * angleStep;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (j === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      const alpha = 0.08 + (levels - i) * 0.02;
      ctx.fillStyle = `rgba(166, 124, 82, ${alpha})`;
      ctx.fill();
      ctx.strokeStyle = 'rgba(166, 124, 82, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    for (let j = 0; j < personalityKeys.length; j++) {
      const angle = startAngle + j * angleStep;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.strokeStyle = 'rgba(166, 124, 82, 0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    const dataPoints = [];
    personalityKeys.forEach((k, j) => {
      const angle = startAngle + j * angleStep;
      const pct = normalizedScores[k] / 100;
      const r = radius * pct;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      dataPoints.push({ x, y, key: k });
    });

    const topK = finalResult.topKey;
    const fillColor = PERSONALITY_COLORS[topK];

    ctx.beginPath();
    dataPoints.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.fillStyle = fillColor + '35';
    ctx.fill();
    ctx.strokeStyle = fillColor;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    dataPoints.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.strokeStyle = PERSONALITY_COLORS[p.key];
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    ctx.font = '500 11px -apple-system, "PingFang SC", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#6b5744';

    personalityKeys.forEach((k, j) => {
      const angle = startAngle + j * angleStep;
      const labelR = radius + 20;
      let x = cx + Math.cos(angle) * labelR;
      let y = cy + Math.sin(angle) * labelR;

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      if (Math.abs(cosA) < 0.2) {
        if (sinA > 0) y += 8;
        else y -= 8;
      }

      const label = personalityIcons[k] + ' ' + labels[j];
      ctx.fillText(label, x, y);
    });
  }

  function handleShare() {
    const shareTip = document.getElementById('share-tip');
    if (shareTip) shareTip.classList.remove('hidden');
    els.shareMask.classList.remove('hidden');
  }

  let toastTimer = null;
  function showToast(msg) {
    let toast = document.querySelector('.app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'app-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(60, 48, 40, 0.92);
        color: #fff;
        padding: 12px 24px;
        border-radius: 50px;
        font-size: 14px;
        z-index: 200;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        pointer-events: none;
        max-width: 80%;
        text-align: center;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(10px)';
    }, 2500);
  }

  function bindEvents() {
    els.buttons.start.addEventListener('click', () => {
      resetState();
      showPage('quiz');
      renderQuestion();
    });

    els.buttons.backHome.addEventListener('click', () => {
      showPage('home');
    });

    els.buttons.prev.addEventListener('click', prevQuestion);
    els.buttons.next.addEventListener('click', nextQuestion);

    els.buttons.share.addEventListener('click', handleShare);
    els.buttons.restart.addEventListener('click', () => {
      resetState();
      showPage('home');
    });

    els.buttons.closeShare.addEventListener('click', () => {
      els.shareMask.classList.add('hidden');
    });

    els.shareMask.addEventListener('click', (e) => {
      if (e.target === els.shareMask) {
        els.shareMask.classList.add('hidden');
      }
    });
  }

  function init() {
    initElements();
    bindEvents();
    resetState();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
