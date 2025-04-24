const sideCogs = document.querySelectorAll(".side-icon");
const covers = document.querySelectorAll(".cover");
const articleBtns = document.querySelectorAll(".header-btn");
const articleEls = document.querySelectorAll(".article-style");
const boxEls = document.querySelectorAll(".box-style");
const projectItemEls = document.querySelectorAll(".project-item")

function sideCogOn() {
  sideCogs[0].classList.add("side-spin-right");
  sideCogs[1].classList.add("side-spin-left");
  sideCogs[2].classList.add("side-spin-right");
  sideCogs[3].classList.add("side-spin-right");
  sideCogs[4].classList.add("side-spin-left");


  setTimeout(() => {
    sideCogs[0].classList.remove("side-spin-right");
    sideCogs[1].classList.remove("side-spin-left");
    sideCogs[2].classList.remove("side-spin-right");
    sideCogs[3].classList.remove("side-spin-right");
    sideCogs[4].classList.remove("side-spin-left");
  }, 2000);
}

function sideCogOff() {
  sideCogs[0].classList.add("side-spin-left");
  sideCogs[1].classList.add("side-spin-right");
  sideCogs[2].classList.add("side-spin-left");
  sideCogs[3].classList.add("side-spin-left");
  sideCogs[4].classList.add("side-spin-right");


  setTimeout(() => {
    sideCogs[0].classList.remove("side-spin-left");
    sideCogs[1].classList.remove("side-spin-right");
    sideCogs[2].classList.remove("side-spin-left");
    sideCogs[3].classList.remove("side-spin-left");
    sideCogs[4].classList.remove("side-spin-right");
  }, 2000);
}

function articleOn(nextArticle) {
  nextArticle.classList.add("article-on");
  nextArticle.classList.add("article-present");

  setTimeout(() => {
    nextArticle.classList.remove("article-on");
  }, 2000);
}

function articleOff(postArticle) {
  postArticle.classList.add("article-off");
  postArticle.classList.remove("article-present");
      
  setTimeout(() => {
    postArticle.classList.remove("article-off");
  }, 2000);
}

function thisArticle(articleEls) {
  let article = null;
  articleEls.forEach((articleEl) => {
    if (articleEl.classList.contains("article-present")) {
      article = articleEl;
    }
  });

  return article;
}

function coverOn() {
  covers.forEach((cover) => {
    cover.classList.remove("cover-off");
  });
}

function coverOff() {
  covers.forEach((cover) => {
    cover.classList.add("cover-off");
  });
}

function boxOff() {
  boxEls.forEach((box) => {
    box.classList.remove("box-show");
  })
}

function boxOn() {
  boxEls.forEach((box) => {
    box.classList.add("box-show");
  })
}

function headerOpening() {
  document.querySelector("header").classList.add("header-active");
  document.querySelector("header").classList.add("header-opening");

  setTimeout(() => {
    document.querySelector("header").classList.remove("header-opening");
  }, 2000);
}

function sideOpening() {
  sideCogs.forEach((sideCog, index) => {
    sideCog.classList.add("side-active");

    if (index === 0 || index === 1) {
      sideCog.classList.add("side-opening");
    } else if (index === 2 || index === 3) {
      sideCog.classList.add("side-opening-bottom");
    } else if (index === 4) {
      sideCog.classList.add("side-opening-left");
    }

    setTimeout(() => {
      sideCog.classList.remove("side-opening");
      sideCog.classList.remove("side-opening-bottom");
      sideCog.classList.remove("side-opening-left");
    }, 2000);
  })
}

function changeWindow(postArticle, nextArticle) {
  coverOn();
  boxOff();
  sideCogOff();
  articleOff(postArticle);

  setTimeout(() => {
    sideCogOn();
    articleOn(nextArticle);
  }, 2000);

  setTimeout(() => {
    boxOn();
    coverOff();
  }, 4000);
}

function openingClose() {
  document.getElementById("opening-box").classList.add("opening-closed");
}

articleBtns.forEach((articleBtn, index) => {
  articleBtn.addEventListener("click", () => {
    const postArticle = thisArticle(articleEls);
    
    if (postArticle !== articleEls[index]) {
      changeWindow(postArticle, articleEls[index]);
    }
  })
});

document.getElementById("copyright").textContent = new Date().getFullYear();

function main() { //6000 7500 9000 11000 13000
  coverOn();

  setTimeout(() => {
    openingClose();
  }, 0);

  setTimeout(() => {
    headerOpening();
  }, 0);
  
  setTimeout(() => {
    sideOpening();
  }, 0);

  setTimeout(() => {
    sideCogOn();
    articleOn(articleEls[1]);
  }, 0);
  
  setTimeout(() => {
    boxOn();
    coverOff();
  }, 0);
}

main();