'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");
    
    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);
  
}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }



const hiddenLeft = document.querySelectorAll('.hiddenLeft')
const hiddenRight = document.querySelectorAll('.hiddenRight')
const animatedOnscrolContact = document.querySelectorAll('.animated-onscrol-contact')
const whychooseusboxAnimatedOpacity = document.querySelectorAll('.why-choose-us-box')


const observer = new IntersectionObserver ((entries, observer)=> {
  entries.forEach((entry=>{
    // console.log(entry)
    if(entry.isIntersecting){

            
      entry.target.classList.add('show')
    }
    else{
     
      entry.target.classList.remove('show')

    }
  }))
})

hiddenLeft.forEach((el)=>{
  observer.observe(el)
})
hiddenRight.forEach((el)=>{
  observer.observe(el)
})
animatedOnscrolContact.forEach((el)=>{
  observer.observe(el)
  // console.log(el)
})





const observeOpacity = new IntersectionObserver ((entries, observer)=> {
  entries.forEach((entry=>{
    console.log(entry)
    if(entry.isIntersecting){
        entry.target.classList.add('animatedOpacity')
        console.log(entry.target)
        
        
      }
      else{
        entry.target.classList.remove('animatedOpacity')
        console.log(entry.target)


    }
  }))
})



whychooseusboxAnimatedOpacity.forEach((el)=>{
  observeOpacity.observe(el)
  // console.log(el)
})







const animatedOnscrol = document.querySelectorAll('.animated-onscrol')
const Options = {
  rootMargin: "280px",
}





const observe = new IntersectionObserver ((entries, observer)=> {
  entries.forEach((entry=>{
    // console.log(entry)
    if(entry.isIntersecting){
        entry.target.classList.add('animated-box')

            
    }
    else{
        entry.target.classList.remove('animated-box')


    }
  }))
}, Options)


animatedOnscrol.forEach((el)=>{
  observe.observe(el)
})







/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 52,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  
  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});


// langauge
const lan ={
  Ar:{
    home: "الرئيسية",
    who: "من نحن",
    service: "خداماتنا",
    whyUs: "لماذا نحن",
    contact: " تواصل معنا",
    exprience: "خبرة كبيرة فى مجال المحاماة",
    exprienceP:"سنين من الخبرة فى المحاماة والاستشارة جعلتنا رقم واحد فى مجالنا نبذل قصارى جهدنا لنتميز على من حولنا",
    takeLook: "اطلع على اخر خدماتنا",
    ourTeam:"فريقنا",
    whyUsContent: "يعتبر مكتب إبراهيم خوري للمحاماة والإستشارات القانونية الذي تأسس عام2008 بفروعة في دبي وأبو ظبي والعين أحد أكبر المكاتب الرائدة متعددة  التخصصات القانونية في دولة الإمارات العربية المتحدة  كما أن التجارب  القانونية والقضائية التي مررنا بها علي مدار الأعوام السابقة",
    whatWeDo: "يعتبر مكتب إبراهيم خوري للمحاماة والإستشارات القانونية الذي تأسس عام2008 بفروعة في دبي وأبو ظبي والعين أحد أكبر المكاتب الرائدة متعددة  التخصصات القانونية في دولة الإمارات العربية المتحدة  كما أن التجارب  القانونية والقضائية التي مررنا بها علي مدار الأعوام السابقة",
    aboutOurOffice: "يعتبر مكتب إبراهيم خوري للمحاماة والإستشارات القانونية الذي تأسس عام2008 بفروعة في دبي وأبو ظبي والعين أحد أكبر المكاتب الرائدة متعددة  التخصصات القانونية في دولة الإمارات العربية المتحدة  كما أن التجارب  القانونية والقضائية التي مررنا بها علي مدار الأعوام السابقة",
    aboutUs: "حولنا___",
    aboutUsNav: " اقرا عنا",
    aboutOurOfficeTittle: "عن مكاتبنا",
    whyUsTittle: " لماذا نحن ؟",
    whatWeDoTitle: "ماذا نقدم ؟",
    ShowContent: "قيمنا الأساسية هي عرض كل حالة من منظور عاطفي ، وحل النزاعات ",
    theExperince: " الخبرة",
    theExperinceContent: "  كل من يعمل فى مكاتبنا هم محامون على اعلى مستوى ولديهم من الخبرة الكثير مما يؤهلهم ان يبدعوا فى اجاد الحلول",
    theReady: " الجاهزية",
    thereadyContent: " نهتم دائما بادق التفاصيل ونكون مستعدون وجاهزون فى اى وقت  نسعى لحل النزاعات المعقدة بخبراتنا التى تجاوزت العشر سنوات",
    perfict: " محامين متمكنيين",
    perfictContent: " لدينا فريق من المدافعين المؤهلين تأهيلا عاليا والمهنيين في دبي والذين لديهم شغف لمساعدتك بخبراتهم. على مر السنين ، ساعد فريقنا آلاف العملاء في سعيهم لتحقيق العدالة. .",
    serviceDown: "_____خدماتنا_____",
    exprienceDown: "خبرتنا",
    exprienceDownOther: "امتيازاتنا",
    contactWithUs: "تحتاج الي أستشارة قانونية؟ تواصل معنا الأن",
    layerGi: " القانون الدولى",
    layerGiContent: "إن القانون الجنائي في دولة الإمارات العربية المتحدة أكثر تعقيداً بكثير ، إذ يحتوي على أحكام وقواعد مستمدة من الشريعة الإسلامية، فهو مهم جدا للمحامين أن يكونوا على معرفة متعمقة بأحكام",
    layerFa: "قانون الاسرة الشخصية ",
    layerFaContent: "إن القانون الجنائي في دولة الإمارات العربية المتحدة أكثر تعقيداً بكثير ، إذ يحتوي على أحكام وقواعد مستمدة من الشريعة الإسلامية، فهو مهم جدا للمحامين أن يكونوا على معرفة متعمقة بأحكام.",
    layerGinaai: "القانون الجنائى",
    layerGinaaiGinaaiContent:"إن القانون الجنائي في دولة الإمارات العربية المتحدة أكثر تعقيداً بكثير ، إذ يحتوي على أحكام وقواعد مستمدة من الشريعة الإسلامية، فهو مهم جدا للمحامين أن يكونوا على معرفة متعمقة بأحكام. ",
    layerImug: "قانون الهجرة و الجنسية",
    layerImugContent:"إن القانون الجنائي في دولة الإمارات العربية المتحدة أكثر تعقيداً بكثير ، إذ يحتوي على أحكام وقواعد مستمدة من الشريعة الإسلامية، فهو مهم جدا للمحامين أن يكونوا على معرفة متعمقة بأحكام. ",
    layerTrade: " القانون التجارى",
    layerTradeContent:"إن القانون الجنائي في دولة الإمارات العربية المتحدة أكثر تعقيداً بكثير ، إذ يحتوي على أحكام وقواعد مستمدة من الشريعة الإسلامية، فهو مهم جدا للمحامين أن يكونوا على معرفة متعمقة بأحكام. ",
    layerController: "التحكيم ",
    layerControllerContent:"إن القانون الجنائي في دولة الإمارات العربية المتحدة أكثر تعقيداً بكثير ، إذ يحتوي على أحكام وقواعد مستمدة من الشريعة الإسلامية، فهو مهم جدا للمحامين أن يكونوا على معرفة متعمقة بأحكام. ",
    whatWeHaveT1: "فريق عمل متخصص",
    whatWeHaveT2: "أنت أكثر من مجرد عميل",
    whatWeHaveT3: "تحقيق العدالة",
    whatWeHaveT4: "التفكير الاستراتيجي الفعال",
    whatWeHaveC1: "إن القانون الجنائي في دولة الإمارات العربية المتحدة أكثر تعقيداً بكثير ، إذ يحتوي على أحكام وقواعد مستمدة من الشريعة الإسلامية،قة بأحكام ",
    whatWeHaveC2: "إن القانون الجنائي في دولة الإمارات العربية المتحدة أكثر تعقيداً بكثير ، إذ يحتوي على أحكام وقواعد مستمدة من الشريعة الإسلامية،قة بأحكام ",
    whatWeHaveC3: "إن القانون الجنائي في دولة الإمارات العربية المتحدة أكثر تعقيداً بكثير ، إذ يحتوي على أحكام وقواعد مستمدة من الشريعة الإسلامية،قة بأحكام ",
    whatWeHaveC4: "إن القانون الجنائي في دولة الإمارات العربية المتحدة أكثر تعقيداً بكثير ، إذ يحتوي على أحكام وقواعد مستمدة من الشريعة الإسلامية،قة بأحكام ",
    ourLOcation: "موقعنا",
    ourLOcationReach: "يمكنك الوصول لموقعنا من هنا",
    ourTeam: "فريق عملنا",
    team: "______الفريق_____",
    view: "تواصل معنا",
    name1: "ali",
    name2: "said",
    name3: "khalid",
    name4: "ali",
    name5: "ahmed",
    info1: "حاصل على بكالوريس من جامعة هارفرد الامريكية على أحكام وقواعد مستمدة من الشريعة" ,
    info2: "حاصل على بكالوريس من جامعة هارفرد الامريكية على أحكام وقواعد مستمدة من الشريعة" ,
    info3: " حاصل على بكالوريس من جامعة هارفرد الامريكية  على أحكام وقواعد مستمدة من الشريعة",
    info4: "حاصل على بكالوريس من جامعة هارفرد الامريكية على أحكام وقواعد مستمدة من الشريعة",
    info5: "حاصل على بكالوريس من جامعة هارفرد الامريكية على أحكام وقواعد مستمدة من الشريعة" ,
    Privacy: " ماذا عن الامان  ",
    LearnMore: " اعرف المزيد    ",
    GetinTouch: "ابقى على تواصل",
    TermsofUse: " شروط الاستخدام",
    Subscribe: "اشترك في النشرة الإخبارية لدينا للحصول على أخبارنا وعروضنا التي يتم توصيلها إليك.",
    OurNewsletter: " نشرتنا الاخبارية ",
    Join: "انضم",
    address: "28 شارع احمد لطفي - النزهة الجديدة - امام البنك الاهلي المصري",

    


    

  },
  En:{
    home: "home",
    service: "service",
    whyUs: "why us",
    who: "who us",
    contact: "contact us",
    exprience: "Extensive experience in the field of law",
    exprienceP: "Years of experience in law and consulting have made us number one in our field. We do our best to stand out from those around us",
    takeLook: "Check out our latest services",
    ourTeam:"our team",
    whyUsContent: " Ibrahim Khoury Law Firm and Legal Consultations, which was established in...2008 with branches in Dubai, Abu Dhabi and Al Ain, one of the largest multi-leading officesLegal specializations in the United Arab Emirates also have experiencesThe legal and judicial issues we have experienced over the past years",
    whatWeDo: " Ibrahim Khoury Law Firm and Legal Consultations, which was established in...2008 with branches in Dubai, Abu Dhabi and Al Ain, one of the largest multi-leading officesLegal specializations in the United Arab Emirates also have experiencesThe legal and judicial issues we have experienced over the past years",
    aboutOurOffice: " Ibrahim Khoury Law Firm and Legal Consultations, which was established in...2008 with branches in Dubai, Abu Dhabi and Al Ain, one of the largest multi-leading officesLegal specializations in the United Arab Emirates also have experiencesThe legal and judicial issues we have experienced over the past years",
    aboutUs: " about us_____",
    aboutOurOfficeTittle: "our offices",
    whyUsTittle: "why us",
    whatWeDoTitle: "what we do",
    theExperince: "the experince",
    theExperinceContent: "Access a world of exclusive assets designed to set you apart. From unique graphics to premium content,our exclusive assets add a touch of exclusivity to your projects, helping you stand out in a competitivelandscape",
    theReady: " the ready",
    thereadyContent: "Experience unparalleled customer service with our top-notch support team. Whether you have questions,concerns, or need assistance, our dedicated support is ready to provide prompt and effective solutionsensuring a smooth",
    perfict: "perfict layers",
    ShowContent: " Elevate your online presence with our professional ",
    perfictContent: "  Elevate your online presence with our professional design, crafted to reflect a polished andsophisticatedimage. Our designs are tailored to enhance user experience and leave a lasting impression. ",
    serviceDown: "_____service____",
    exprienceDown: "service",
    exprienceDownOther: "our binfits",
    contactWithUs: " Connect with us Do you need legal advice? Contact us now",
    layerGi: "international law",
    layerGiContent: "The criminal law in the United Arab Emirates is much more complex, as it contains provisions and rules derived from Islamic Sharia. It is very important for lawyers to have in-depth knowledge of the provisions.",
    layerFa: "family personal law",
    layerFaContent: "he criminal law in the United Arab Emirates is much more complex, as it contains provisions and rules derived from Islamic Sharia. It is very important for lawyers to have in-depth knowledge of the provisions.",
    layerGinaai:"Genetic law",
    layerGinaaiGinaaiContent:"he criminal law in the United Arab Emirates is much more complex, as it contains provisions and rules derived from Islamic Sharia. It is very important for lawyers to have in-depth knowledge of the provisions. ",
    layerImug: "Immigration law",
    layerImugContent:"he criminal law in the United Arab Emirates is much more complex, as it contains provisions and rules derived from Islamic Sharia. It is very important for lawyers to have in-depth knowledge of the provisions.",
    layerTrade: "trade law",
    layerTradeContent:"he criminal law in the United Arab Emirates is much more complex, as it contains provisions and rules derived from Islamic Sharia. It is very important for lawyers to have in-depth knowledge of the provisions.",
    layerController: "controller ",
    layerControllerContent:"he criminal law in the United Arab Emirates is much more complex, as it contains provisions and rules derived from Islamic Sharia. It is very important for lawyers to have in-depth knowledge of the provisions.",
    whatWeHaveT1: "Specialized work team ",
    whatWeHaveT2: "You are more than just a customer",
    whatWeHaveT3: "Achieving justice ",
    whatWeHaveT4: "Effective strategic thinking ",
    whatWeHaveC1: "The criminal law in the United Arab Emirates is much more complex, as it contains provisions and rules derived from Islamic Sharia, related to the provisions of... ",
    whatWeHaveC2: "The criminal law in the United Arab Emirates is much more complex, as it contains provisions and rules derived from Islamic Sharia, related to the provisions of... ",
    whatWeHaveC3: "The criminal law in the United Arab Emirates is much more complex, as it contains provisions and rules derived from Islamic Sharia, related to the provisions of... ",
    whatWeHaveC4: "The criminal law in the United Arab Emirates is much more complex, as it contains provisions and rules derived from Islamic Sharia, related to the provisions of... ",
    ourLOcation: "our Location",
    ourLOcationReach: "you can reach our location ",
    ourTeam: "our team",
    team: "____team_____",
    view: "contact with us",
    name1: "ali",
    name2: "said",
    name3: "khalid",
    name4: "ali",
    name5: "ahmed",
    info1: "the criminal law in the United Arab Emirates is much more complex",
    info2: "the criminal law in the United Arab Emirates is much more complex",
    info3: "the criminal law in the United Arab Emirates is much more complex",
    info4: "the criminal law in the United Arab Emirates is much more complex",
    info5: "the criminal law in the United Arab Emirates is much more complex",
    aboutUsNav: " about us ",
    Privacy: " Privacy Policy ",
    LearnMore: "Learn More",
    GetinTouch: "Get in Touch",
    TermsofUse: "Terms of Use",
    Subscribe: "Subscribe to our newsletter to get our news & deals delivered to you.",
    OurNewsletter: " Our Newsletter  ",
    Join: "Join",
    address: "28 Avenue Ahmed Lotfy - New Nozha - in front of National Bank Of Egypt"
   
  }
}

let selectorLanguage = document.getElementById("language-change")
let navbarlist = document.getElementById("navbar-list")
let logo = document.querySelectorAll(".logo-text")

function lannguageChossed(){
  // in localStorage
  localStorage.setItem("ourLangauge", selectorLanguage.value);
  // reload
  location.reload()

}

function changePage(){
  let nodes = document.querySelectorAll("[data-lan]")
  let allElement = document.querySelectorAll(".our-knowlage >div:nth-child(2) >div >div:nth-child(2) h3, .why-choose-us-box h3,.our-knowlage >div:nth-child(2) >div >div:nth-child(2) p, .why-choose-us-box p ")

  let i = nodes.length 
  let j= 0

  while(i--){
    let key = nodes[i].getAttribute("data-lan")
    nodes[i].innerHTML = lan[localStorage.getItem('ourLangauge')][key]
  }
  if(localStorage.getItem('ourLangauge')==="En"){
    // nav
    navbarlist.classList.add("english-nav")
    // logo
    document.querySelectorAll(".logo-text-head")[1].style.position = "static";
    document.querySelectorAll(".logo-text-head")[0].style.position = "static";
    // why us
    document.getElementById("whyUs-first").classList.add("english-title")
    document.getElementById("whyUs-second").classList.add("english-title")
    
    // next picture
    document.querySelectorAll(".right-paragragh")[0].style.position = "static";
    document.querySelectorAll(".right-paragragh")[1].style.position = "static";
    document.querySelectorAll(".right-paragragh")[2].style.position = "static";
    
    // next picture but top
    document.querySelectorAll(".section-subtitle-p,.section-subtitle-h2")[0].style.textAlign = "start";
    
    // about our office
    document.getElementById("aboutOurOfficeTittle").classList.add("aboutOurOfficeTittle")
    
    // show
    document.getElementById("section-subtitle-h2-en").classList.add("section-subtitle-h2-en")
    
    
    // main-en
    document.querySelectorAll(".main-ar")[0].style.display = "none";
    document.querySelectorAll(".main-en")[0].style.display = "block";
    
    
    // last tow section
    document.querySelectorAll(".why-choose-us-box")[0].style.height= "360px";
    document.querySelectorAll(".why-choose-us-box")[1].style.height= "360px";
    document.querySelectorAll(".why-choose-us-box")[2].style.height= "360px";
    document.querySelectorAll(".why-choose-us-box")[3].style.height= "360px";
    for(j; allElement.length>j; j++){
      
      allElement[j].style.textAlign = "start";
      // console.log(allElement[j])

    }
    
    
  }else{
    // nav
    navbarlist.classList.remove("english-nav")
    // logo
    document.querySelectorAll(".logo-text-head")[0].style.position = "absolute";
    document.querySelectorAll(".logo-text-head")[1].style.position = "absolute";
    // why us
    document.getElementById("whyUs-first").classList.remove("english-title")
    document.getElementById("whyUs-second").classList.remove("english-title")
    // next picture
    document.querySelectorAll(".right-paragragh")[0].style.position = "absolute";
    document.querySelectorAll(".right-paragragh")[1].style.position = "absolute";
    document.querySelectorAll(".right-paragragh")[2].style.position = "absolute";
    
    // next picture but top
    document.querySelectorAll(".section-subtitle-p,.section-subtitle-h2")[0].style.textAlign = "end";
    
    // about our office
    document.getElementById("aboutOurOfficeTittle").classList.remove("aboutOurOfficeTittle")
    
    
    // show
    document.getElementById("section-subtitle-h2-en").classList.remove("section-subtitle-h2-en")
    // last tow section
    document.querySelectorAll(".why-choose-us-box")[0].style.height= "260px";
    document.querySelectorAll(".why-choose-us-box")[1].style.height= "260px";
    document.querySelectorAll(".why-choose-us-box")[2].style.height= "260px";
    document.querySelectorAll(".why-choose-us-box")[3].style.height= "260px";
    // main-en
    document.querySelectorAll(".main-ar")[0].style.display = "block";
    document.querySelectorAll(".main-en")[0].style.display = "none";
    
    // last tow section
    for(j; allElement.length>j; j++){
      
    allElement[j].style.textAlign = "end";
    // console.log(allElement[j])
    
  }
    
  }
  
  
}



changePage()