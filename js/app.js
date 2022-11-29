function isWebp() {
  function testWebp(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  };
  testWebp(function (support) {
    let className = (support = true ? "webp" : "no-webp");
    document.documentElement.classList.add(className);
  });
}

isWebp();



const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__body");

btnBurger.addEventListener("click", (item) => {
  btnBurger.classList.toggle("close");
});

btnBurger.addEventListener("click", () => {
  burger.classList.toggle("burger__body-active");
  btnBurger.classList.remove("header__burger_close");
});

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active");
  };
});

var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml4 .letters-1",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".ml4 .letters-1",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".ml4 .letters-2",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".ml4 .letters-2",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".ml4 .letters-3",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".ml4 .letters-3",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".ml4",
    opacity: 0,
    duration: 500,
    delay: 500,
  });


let diamondParent = document.querySelectorAll(".dekor");

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
 };

 setInterval(()=>{
 	if (diamondParent) {
 		diamondParent.forEach((item) => {
		  
 			 item.classList.add("active");
			 	 
			 delay(1990).then(() =>{
				item.classList.remove("active");
			 });		
 	 });
   };

 }, 2100);

let attainmentTableItem = document.querySelectorAll(".table-first-item");

  function xx(){
   let min = +0;
   let max = +attainmentTableItem.length-1;
      let randomaizer = min + Math.round(Math.random()*(max-min));
      attainmentTableItem[randomaizer].classList.add("active");
      delay(1990).then(() =>{
				attainmentTableItem[randomaizer].classList.remove("active");
			 });

  };
  setInterval(xx,2100);

new Swiper('.swiper__item', {
  

    spaceBetween: 25,
    navigation: {
      nextEl: '.swiper_arrow-next',
      prevEl: '.swiper_arrow-prev',
    },
    pagination: {
      el: ".progressbar",
      type: "progressbar"
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        loop: false,
        
      },
      601: {
        loop: true,
      },
      767:{
        slidesPerView: 2,
        loop: true
      },
      1100: {
        slidesPerView: 3,
        loop: true
      }
    }
    

  });
  

  

new Swiper('.swiper__assurance', {
  pagination: {
    el: ".progressbar-2",
    type: "progressbar"
  },
  spaceBetween: 25,
  breakpoints: {
    0: {
      slidesPerView: 1,
      loop: false,
    },
    601: {
      loop: true,
    },
    767: {
      slidesPerView: 2,
      loop: true,
      
    },  
    993: {
      slidesPerView: 1,
      loop: true,
    }
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  });

  new Swiper('.swiper__assurance-2', {
    pagination: {
      el: ".progressbar-3",
      type: "progressbar"
    },
    spaceBetween: 25,
    breakpoints: {
      0: {
        slidesPerView: 1,
        loop: false,
      },
      601: {
        loop: true,
      },
      767: {
        slidesPerView: 2,
        loop: true,
       
      },  
      993: {
        slidesPerView: 1,
        loop: true,
      }
    },
    navigation: {
      nextEl: '.next2',
      prevEl: '.prev2',
    },
    });

    //validation

    let userName = document.querySelector("#user_name");
    let tell = document.querySelector("#user_tell");
    let btnSubmit = document.querySelector("#form__submit");
    let regTell = /^\+?[0-9]{10,15}$/;
    let regName = /^[а-яА-Яa-zA-ZЄ-ЯҐа-їґ]{3,}$/;



    btnSubmit.addEventListener("click", ()=>{


      if(regName.test(userName.value)){
        userName.style.border = "1px solid #898989";
      }else{
        userName.style.border = "1px solid #DB3138";
      }

      if(regTell.test(tell.value)){
        tell.style.border = "1px solid #898989";
      }else{
        tell.style.border = "1px solid #DB3138";
      }


      let reg = regName.test(userName.value) && regTell.test(tell.value);
      if(reg){
        alert("The information is transferred to the database");
        console.log("++");
      }
     
    });