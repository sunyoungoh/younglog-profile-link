const headerDesc = document.getElementById('header-desc');
const titleStore = document.getElementById('title-store');
const titleContact = document.getElementById('title-contact');
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

if (btnLang) {
  btnLang.addEventListener('click', () => {
    btnLang.innerText = btnLang.innerText == 'πΊπΈ' ? 'π°π·' : 'πΊπΈ';
    if (btnLang.innerText == 'π°π·') {
      headerDesc.innerHTML =
        'μ¬ννκ³  μ§κ΄μ μ΄κ³  ν¨μ¨μ μΈ λμ§νΈ μμ, <b>μλ‘κ·Έ</b>';
      titleStore.innerText = 'ποΈ μμ μ²';
      titleContact.innerText = 'π¬ λ¬Έμ';
      titleFree.innerText = 'π λ¬΄λ£κ³΅μ ';
      btnNaverText.innerText = 'β¨ μλ‘κ·Έ μ€λ§νΈμ€ν μ΄ β¨';
      btnTenyetenText.innerText = 'μλ‘κ·Έ νλ°μ΄ν';
      btnWeKorText.innerText = 'μλ²λ© KOR';
      btnWeEngText.innerText = 'μλ²λ© ENG';
      btnKakaoText.innerText = 'μΉ΄μΉ΄μ€ μ±λ 1:1 λ¬Έμ';
      btnMailText.innerText = 'λ©μΌ λ³΄λ΄κΈ°';
      btnFreePriorityText.innerText = `μ°μ μμ λ°μΌλ¦¬ νλλ`;
      btnFreeMandalartText.innerText = ' λ§λ€λΌνΈ νλλ';
    } else {
      headerDesc.innerHTML =
        'Simple, intuitive and efficient digital templates, <b>younglog</b>';
      titleStore.innerText = 'ποΈ Store';
      titleContact.innerText = 'π¬ Contact';
      titleFree.innerText = 'π Free Download';
      btnNaverText.innerText = 'β¨ younglog Smart Store β¨';
      btnTenyetenText.innerText = 'younglog TenByTen';
      btnWeKorText.innerText = 'Webudding KOR';
      btnWeEngText.innerText = 'Webudding ENG';
      btnKakaoText.innerText = 'Kakao Channel 1:1 Chat';
      btnMailText.innerText = 'Send Mail';
      btnFreePriorityText.innerText = 'Priority Daily Planner';
      btnFreeMandalartText.innerText = 'Mandal Art Planner';
    }
  });
}
