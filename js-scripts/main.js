const engWord = document.querySelector('.Eng-wrd');
const dthWord = document.querySelector('.Dth-wrd');

const LanguageDataArr = {
  "privacy": {
    "en": "Provider/Privacy",
    "dt": "Anbieter/Datenschutz",
  },
  "search": {
    "en": "Search",
    "dt": "Suchen",
  },
};

const langSwitcher = document.querySelector(".switch-language");
const langButtons = langSwitcher.querySelectorAll("button");

// langSwitcher.addEventListener("click", changeLanguage);

langButtons.forEach((btn) => {
  btn.addEventListener("click", changeLanguage);
});

var elements = document.querySelectorAll(".lng");


function changeLanguage(e) {
  // let currentLang = langSwitcher.value;
  let currentLang = e.target.innerHTML;

  if(currentLang == 'English'){
    currentLang = 'en'
  }else{
    currentLang = 'dt'
  }


  for (let el of elements) {
    el.innerHTML = LanguageDataArr[el.dataset.key][currentLang];
  }
}




// let onLight = localStorage.getItem("onLight") === "true";

//   if(onLight){

//   }

//   function changeLang(){ 
//     if(onLight){
//       engWord.style.color = "white";
//     } else {
      
//     }

// }

// changeLang();
