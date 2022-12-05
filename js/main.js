//햄버거 메뉴 클릭
const elMenuBtn = document.querySelector(".menu_btn");
const elCloseBtn = document.querySelector(".close");

elMenuBtn.onclick = () => {
    document.querySelector(".menu").style.display = "flex";
    document
        .querySelector(".menu")
        .animate([{ right: "-700px" }, { right: "0" }], {
            duration: 500,
            fill: "forwards",
        });
};
elCloseBtn.onclick = () => {
    setTimeout(() => {
        document.querySelector(".menu").style.display = "none";
    }, 500);
    document
        .querySelector(".menu")
        .animate([{ right: "0" }, { right: "-700px" }], {
            duration: 500,
            fill: "forwards",
        });
};

//slick 이 달의 신작
$(".new_slider").slick({
    arrows: true,
    prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i> &nbsp; Prev</button>',
    nextArrow:
        '<button type="button" class="slick-next">Next &nbsp; <i class="fa-solid fa-chevron-right"></i></button>',
});

//slick News

// $(".articles").slick({
//     // arrows: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
// });

$(".articles").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
});

//isotope
const elArticles = document.querySelector(".articles");
const elAll = document.querySelectorAll("article.all");
const elNewsBtn = document.querySelectorAll(".menu_bar button");
const elArticleBox = document.querySelectorAll(".article_box");
const elIsoBox = document.querySelector(".articles .iso_box");

//클릭시 on + 클래스 이름
let num = 0;
elNewsBtn.forEach(function (btn, btnnum) {
    btn.onclick = function () {
        elNewsBtn[num].classList.remove("on");

        let BtnName = this.className;
        this.classList.add("on");
        num = btnnum;

        if (BtnName !== "all") {
            $(".articles").slick("unslick");

            for (i = 0; i < elArticleBox.length; i++) {
                elArticleBox[i].style.display = "none";
            }
            document.querySelector(`h2.${BtnName}`).style.display = 'none'

            for (i = 0; i < elAll.length; i++) {
                elAll[i].classList.remove("all");
                elAll[i].classList.add("notall");
            }

            const thisContent= document.getElementsByClassName( `notall ${BtnName}`)

            $('.iso_box').append(thisContent);
            
            const iso = new Isotope(elArticles, {
                    // options
                    itemSelector: "article.notall",
                    percentPosition: true,
            
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        gutter: 10,
                    },
                });

            document.getElementsByClassName(
                `article_box ${BtnName}`,
            )[0].style.display = "block";

            

        } else {
            window.location.reload()
        }
    };
});

// window.addEventListener("load", () => {
//     //= documnet.ready
//     $(".articles").slick("unslick");

//     const iso = new Isotope(elArticles, {
//         // options
//         itemSelector: "article.notall",
//         percentPosition: true,

//         masonry: {
//             // use outer width of grid-sizer for columnWidth
//             gutter: 10,
//         },
//     });
// });
