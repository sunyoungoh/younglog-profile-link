const headerDesc = document.getElementById('header-desc');
const titleStore = document.getElementById('title-store');
const titleContact = document.getElementById('title-contact');
const titleFont = document.getElementById('title-font');
const titleFree = document.getElementById('title-free');
const btnLang = document.getElementById('btn-lang');
const btnNaverText = document.querySelector('#btn-naver > span');
const btnTenyetenText = document.querySelector('#btn-tenbyten > span');
const btnWeKorText = document.querySelector('#btn-we-kor > span');
const btnWeEngText = document.querySelector('#btn-we-eng > span');
const btnKakaoText = document.querySelector('#btn-kakao > span');
const btnMailText = document.querySelector('#btn-mail > span');
const btnFreePriorityText = document.querySelector(
  '#btn-free__priority > span'
);
const btnFreeMandalartText = document.querySelector(
  '#btn-free__mandalart > span'
);
const btnFreeYearlyText = document.querySelector(
  '#btn-free__yearly > span'
);
const btnFreeHabitText = document.querySelector('#btn-free__habit > span');
const btnFontYounglogText = document.querySelector(
  '#btn-font__younglog > span'
);
const btnFontYounglogBoldText = document.querySelector(
  '#btn-font__younglog-bold > span'
);

if (btnLang) {
  btnLang.addEventListener('click', () => {
    btnLang.innerText = btnLang.innerText == '🇺🇸' ? '🇰🇷' : '🇺🇸';
    if (btnLang.innerText == '🇰🇷') {
      headerDesc.innerHTML =
        '심플하고 직관적이고 효율적인 디지털 서식, <b>영로그</b>';
      titleStore.innerText = '🛍️ 입점처';
      titleFont.innerText = '✍🏻 폰트';
      titleContact.innerText = '💬 문의';
      titleFree.innerText = '🎁 무료공유';
      btnNaverText.innerText = '✨ 영로그 스마트스토어 ✨';
      btnTenyetenText.innerText = '영로그 텐바이텐';
      btnWeKorText.innerText = '위버딩 KOR';
      btnWeEngText.innerText = '위버딩 ENG';
      btnKakaoText.innerText = '카카오 채널 1:1 문의';
      btnMailText.innerText = '메일 보내기';
      btnFreeHabitText.innerText = '해빗트래커 스티커';
      btnFreeYearlyText.innerText = '이얼리 플래너';
      btnFreePriorityText.innerText = '우선순위 데일리 플래너';
      btnFreeMandalartText.innerText = '만다라트 플래너';
      btnFontYounglogText.innerText = '온글잎 영로그체';
      btnFontYounglogBoldText.innerText = '온글잎 영로그체 볼드';
    } else {
      headerDesc.innerHTML =
        'Simple, intuitive and efficient digital templates, <b>younglog</b>';
      titleStore.innerText = '🛍️ Store';
      titleFont.innerText = '✍🏻 Font';
      titleContact.innerText = '💬 Contact';
      titleFree.innerText = '🎁 Free Download';
      btnNaverText.innerText = '✨ younglog Smart Store ✨';
      btnTenyetenText.innerText = 'younglog TenByTen';
      btnWeKorText.innerText = 'Webudding KOR';
      btnWeEngText.innerText = 'Webudding ENG';
      btnKakaoText.innerText = 'Kakao Channel 1:1 Chat';
      btnMailText.innerText = 'Send Mail';
      btnFreeHabitText.innerText = 'Habit Tracker Sticker';
      btnFreeYearlyText.innerText = 'Yearly Planner';
      btnFreePriorityText.innerText = 'Priority Daily Planner';
      btnFreeMandalartText.innerText = 'Mandal Art Planner';
      btnFontYounglogText.innerText = 'Ownglyph younglog';
      btnFontYounglogBoldText.innerText =
        'Ownglyph younglog Bold';
    }
  });
}
