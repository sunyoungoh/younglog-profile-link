const headerDesc = document.getElementById('header-desc');
const titleStore = document.getElementById('title-store');
const titleContact = document.getElementById('title-contact');
const titleFree = document.getElementById('title-free');
const btnLang = document.getElementById('btn-lang');
const btnNaver = document.getElementById('btn-naver');
const btnTenyeten = document.getElementById('btn-tenbyten');
const btnWeKor = document.getElementById('btn-we-kor');
const btnWeEng = document.getElementById('btn-we-eng');
const btnKakao = document.getElementById('btn-kakao');
const btnMail = document.getElementById('btn-mail');
const btnFreePriority = document.getElementById('btn-free__priority');
const btnFreeMandalart = document.getElementById('btn-free__mandalart');

const logoNaver = '<img src="./assets/img/logo_naver.png" class="btn-icon">';
const logoTenbyten =
  '<img src="./assets/img/logo_tenbyten.png" class="btn-icon">';
const logoWebudding =
  '<img src="./assets/img/logo_webudding.png" class="btn-icon">';
const logokakao = '<img src="./assets/img/logo_kakao.png" class="btn-icon">';
const iconMail = '<img src="./assets/img/icon_mail.jpg" class="btn-icon">';
const iconDownload =
  '<img src="./assets/img/icon_download.png" class="btn-icon">';

if (btnLang) {
  btnLang.addEventListener('click', () => {
    btnLang.innerText = btnLang.innerText == '🇺🇸' ? '🇰🇷' : '🇺🇸';
    if (btnLang.innerText == '🇰🇷') {
      headerDesc.innerHTML =
        '심플하고 직관적이고 효율적인 디지털 서식, <b>영로그</b>';
      titleStore.innerText = '🛍️ 입점처';
      titleContact.innerText = '💬 문의';
      titleFree.innerText = '🎁 무료공유';
      btnNaver.innerHTML = `${logoNaver} ✨ 영로그 스마트스토어 ✨`;
      btnTenyeten.innerHTML = `${logoTenbyten} 영로그 텐바이텐`;
      btnWeKor.innerHTML = `${logoWebudding} 위버딩 KOR`;
      btnWeEng.innerHTML = `${logoWebudding} 위버딩 ENG`;
      btnKakao.innerHTML = `${logokakao} 카카오 채널 1:1 문의`;
      btnMail.innerHTML = `${iconMail} 메일 보내기`;
      btnFreePriority.innerHTML = `${iconDownload} 우선순위 데일리 플래너`;
      btnFreeMandalart.innerHTML = `${iconDownload} 만다라트 플래너`;
    } else {
      headerDesc.innerHTML =
        'Simple, intuitive and efficient digital templates, <b>younglog</b>';
      titleStore.innerHTML = '🛍️ Store';
      titleContact.innerHTML = '💬 Contact';
      titleFree.innerHTML = '🎁 Free Download';
      btnNaver.innerHTML = `${logoNaver} ✨ younglog Smart Store ✨`;
      btnTenyeten.innerHTML = `${logoTenbyten} younglog TenByTen`;
      btnWeKor.innerHTML = `${logoWebudding} Webudding KOR`;
      btnWeEng.innerHTML = `${logoWebudding} Webudding ENG`;
      btnKakao.innerHTML = `${logokakao} Kakao Channel 1:1 Chat`;
      btnMail.innerHTML = `${iconMail} Send Mail`;
      btnFreePriority.innerHTML = `${iconDownload} Priority Daily Planner`;
      btnFreeMandalart.innerHTML = `${iconDownload}Mandal Art Planner`;
    }
  });
}
