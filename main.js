//수량 버튼 //

  $(function(){
  let cnt = 1;

  $('.plus_btn').click(function(){

    cnt++;

    if(cnt > 10) {
      cnt = 10;
      alert('최대10개까지 구매 가능!');
    }

    $('.count_box').text(cnt);

  });
});



//상세정보 //


  document.addEventListener('DOMContentLoaded',() => {
const btn = document.querySelector('.btn');
const inforText = document.querySelector('.info_text');
let isOpen =false;

 btn.addEventListener('click',() => {

  e.preventDefault();

  if(isOpen === false) {
    inforText.style.display = 'block';
    btn.textContent ='상세설명닫기';
    isOpen = true;
  } else {
    inforText.style.display = 'none';
    btn.textContent ='상세설명보기'
    isOpen = false;
  }
  
});
});



//상세페이지 눌렀을때 스크롤 이동x

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  const inforText = document.querySelector('.info_text');
  let isOpen = false;
  let lastScrollY = 0;

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (isOpen === false) {
      lastScrollY = window.scrollY;   
      inforText.style.display = 'block';
      btn.textContent = '상세설명닫기';
      isOpen = true;
    } else {
      inforText.style.display = 'none';
      btn.textContent = '상세설명보기';
      isOpen = false;

      window.scrollTo({
        top: lastScrollY,     
        behavior: "instant"
      });
    }
  });
});





        //좋아요 +댓글
        document.addEventListener("DOMContentLoaded", () => {

          const reviewBoxes = document.querySelectorAll(".rev_bottom");

  reviewBoxes.forEach(box => {
    const likeBtn = box.querySelector(".like_btn");
    const likeCount = box.querySelector(".like_count");

    let liked = false;

    likeBtn.addEventListener("click", () => {
      liked = !liked;

      let count = parseInt(likeCount.textContent) || 0;

      if (liked) {
        count++;
        likeBtn.classList.add("active");
      } else {
        count--;
        likeBtn.classList.remove("active");
      }

      likeCount.textContent = count;
    });
  });



  const commentBtns = document.querySelectorAll(".dbtn"); 

  commentBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const parentBox = this.closest(".rev_bottom");
      const commentBox = parentBox.querySelector(".rev_retextbox"); 

     
      if (commentBox.style.display === "block") {
        commentBox.style.display = "none";
      } else {
        commentBox.style.display = "block";
      }
    });
  });



  const submitBtns = document.querySelectorAll(".cbtn");

  submitBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const parentBox = this.closest(".rev_bottom");
      const textarea = parentBox.querySelector(".comentbox");

      let text = textarea.value.trim();
      if (text === "") {
        alert("댓글을 입력해주세요!");
        return;
      }

      let listBox = parentBox.querySelector(".comment_list");
      if (!listBox) {
        listBox = document.createElement("div");
        listBox.classList.add("comment_list");
        parentBox.appendChild(listBox);
      }

      const newComment = document.createElement("p");
      newComment.textContent = "• " + text;
      listBox.appendChild(newComment);

      textarea.value = ""; 
    });
  });

});




//리뷰 박스 상자

 $(document).ready(function(){
      $('.rev_center_imgbox').bxSlider({
        slideWidth: 306,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10,
          slideSelector: '.rev_imgbox' 
      });
    });


    //탑 버튼

document.addEventListener("DOMContentLoaded", () => {


  const wing = document.querySelector(".wing_box");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      wing.classList.remove("show");
      return;
    }

    if (currentScroll > lastScroll) {
      wing.classList.add("show");
    } else {
      wing.classList.remove("show");
    }

    lastScroll = currentScroll;
  });


  const topLinks = document.querySelectorAll('a[href="#top"]');
  topLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });




  const bottomLinks = document.querySelectorAll('a[href="#bottom"]');
  bottomLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });
  });

});


//메인 로고

$(function(){
  $('.main_R').bxSlider({
  infiniteLoop: false,
  hideControlOnEnd: true,
  slideWidth: 306

});
});





//상세 review_img_box
$(document).ready(function(){
$('.review_img_box').bxSlider({
  minSlides: 7, 
  maxSlides: 7, 
  slideWidth: 300, 
  slideMargin: 15, 
  ticker: true,
  speed: 9000
});
});





//메인 리뷰 박스

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });