// получаем кнопку возврата наверх
const backToTopButton = document.querySelector('.back-to-top');

// функция показа/скрытия кнопки возврата наверх
function toggleBackToTopButton() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

// функция плавного скролла вверх
function scrollToTop() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {

    window.scrollTo(0, document.body.scrollTop - 10 || document.documentElement.scrollTop - 10);
  }
}

// событие прокрутки окна браузера
window.addEventListener('scroll', toggleBackToTopButton);

// событие клика на кнопку возврата наверх
backToTopButton.addEventListener('click', function () {
  scrollToTop();
});

// стартовая проверка для показа кнопки возврата наверх
toggleBackToTopButton();

// функция для получения даты
function getDayInfo(dateStr) {
  const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  const date = new Date(dateStr);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const weekNum = Math.floor(date.getDate() / 7) + 1; // номер недели
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayOfWeek}, ${weekNum} неделя ${month} ${year} года`;
}

// функция для создания карточек
function createCard(src, alt, name, date, category) {
  let productCard = document.createElement('article');
  productCard.classList.add('product');

  let productFigure = document.createElement('figure');
  productFigure.classList.add('product-figure');

  let productImage = document.createElement('img');
  productImage.classList.add('product-image');
  productImage.src = src;
  productImage.alt = alt;

  productFigure.appendChild(productImage);

  let productTitle = document.createElement('h3');
  productTitle.classList.add('product-title');
  productTitle.textContent = name;

  let productDate = document.createElement('p');
  productDate.classList.add('date');
  productDate.textContent = "Добавлен: " + getDayInfo(date);

  let buyButton = document.createElement('button');
  buyButton.classList.add('buy-btn');
  buyButton.textContent = 'Купить';

  productCard.appendChild(productFigure);
  productCard.appendChild(productTitle);
  productCard.appendChild(productDate);
  productCard.appendChild(buyButton);

  category.appendChild(productCard);
}

// добавляем карточки на страницу
createCard("photos/asicsKay.jpg", "кроссовки", "Asics GEL-KAYANO 27", "01.01.2022", document.getElementById("asics"));
createCard("photos/asicsNimb.jpg", "кроссовки", "Asics GEL-NIMBUS 24", "01.12.2022", document.getElementById("asics"));
createCard("photos/asicsCum.jpg", "кроссовки", "Asics GEL-CUMULUS 23", "11.12.2022", document.getElementById("asics"));
createCard("photos/asicsCont.jpg", "кроссовки", "Asics GEL-CONTEND 7", "09.05.2022", document.getElementById("asics"));
createCard("photos/asicsPuls.jpg", "кроссовки", "Asics GEL-PULSE 13", "04.02.2022", document.getElementById("asics"));
createCard("photos/asicsTrab.jpg", "кроссовки", "Asics Gel-FujiTrabuco 8", "07.24.2022", document.getElementById("asics"));
createCard("photos/asicsSon.jpg", "кроссовки", "Asics GEL-SONOMA 5", "12.06.2023", document.getElementById("asics"));
createCard("photos/asicsVent.jpg", "кроссовки", "Asics GEL-VENTURE 8", "05.04.2023", document.getElementById("asics"));
createCard("photos/asicsNov.jpg", "кроссовки", "Asics NOVABLAST 2", "03.01.2023", document.getElementById("asics"));
createCard("photos/asicsEvor.jpg", "кроссовки", "Asics EVORIDE", "01.20.2023", document.getElementById("asics"));
createCard("photos/asicsTar.jpg", "кроссовки", "Asics TARTHER BLAST", "07.15.2023", document.getElementById("asics"));
createCard("photos/asicsGt.jpg", "кроссовки", "Asics GT-2000 9", "05.26.2023", document.getElementById("asics"));

createCard("photos/adidasAdiz.jpg", "кроссовки", "Adidas Adizero SL", "01.05.2022", document.getElementById("adidas"));
createCard("photos/adidas4D.jpg", "кроссовки", "Adidas 4DFWD 2", "02.26.2022", document.getElementById("adidas"));
createCard("photos/adidasSol.jpg", "кроссовки", "Adidas SOLARGLIDE 6", "03.10.2021", document.getElementById("adidas"));
createCard("photos/adidasPur.jpg", "кроссовки", "Adidas Pureboost 22", "04.27.2021", document.getElementById("adidas"));
createCard("photos/adidasGal.jpg", "кроссовки", "Adidas Galaxy 6 Shoes", "05.26.2023", document.getElementById("adidas"));
createCard("photos/adidasRun.jpg", "кроссовки", "Adidas RUNFALCON 3", "06.21.2023", document.getElementById("adidas"));
createCard("photos/adidasDur.jpg", "кроссовки", "Adidas DURAMO 10", "07.04.2023", document.getElementById("adidas"));
createCard("photos/adidasSup.jpg", "кроссовки", "Adidas SUPERNOVA 2.0", "08.11.2022", document.getElementById("adidas"));
createCard("photos/adidasAdis.jpg", "кроссовки", "Adidas ADISTAR CS", "09.20.2022", document.getElementById("adidas"));
createCard("photos/adidasEQ.jpg", "кроссовки", "Adidas EQ21 RUN", "10.30.2021", document.getElementById("adidas"));
createCard("photos/adidasUltr.jpg", "кроссовки", "Adidas ULTRABOUNCE", "11.01.2022", document.getElementById("adidas"));

createCard("photos/nikeVap.webp", "кроссовки", "Nike Vaporfly 2", "10.19.2021", document.getElementById("nike"));
createCard("photos/nikePeg.webp", "кроссовки", "Nike Pegasus 39", "05.23.2023", document.getElementById("nike"));
createCard("photos/nikeInv.webp", "кроссовки", "Nike Invincible 3", "01.12.2022", document.getElementById("nike"));
createCard("photos/nikeInf.webp", "кроссовки", "Nike React Infinity 3", "03.17.2022", document.getElementById("nike"));
createCard("photos/nikeRun.webp", "кроссовки", "Nike Free Run 5.0", "11.25.2023", document.getElementById("nike"));
createCard("photos/nikeStr.webp", "кроссовки", "Nike Streakfly Premium", "08.20.2021", document.getElementById("nike"));
createCard("photos/nikeZoom.webp", "кроссовки", "Nike Zoom Fly 5", "09.08.2021", document.getElementById("nike"));
createCard("photos/nikeRev.webp", "кроссовки", "Nike Revolution 5", "07.05.2021", document.getElementById("nike"));
createCard("photos/nikeAir.webp", "кроссовки", "Nike Air Zoom Rival Fly 3", "02.11.2023", document.getElementById("nike"));
createCard("photos/nikeWin.webp", "кроссовки", "Nike Winflo 9", "06.28.2022", document.getElementById("nike"));

// получаем кнопку "Купить" и форму
const buyBtn = document.querySelectorAll('.buy-btn');
const overlay = document.querySelector('.overlay');
const buyForm = document.querySelector('.buy-form');
const buyClose = document.querySelector('.buy-close');

// показываем форму при клике на кнопку "Купить"
for (let i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    let name = buyBtn[i].parentNode.querySelector(".product-title").innerHTML;
    overlay.style.display = 'flex';
    overlay.querySelector(".nameBrands").innerHTML = name;
  });
}

// скрываем форму при клике на кнопку "Закрыть"
buyClose.addEventListener('click', function () {
  document.body.style.overflow = 'auto';
  overlay.style.display = 'none';
});

// отправляем данные формы при клике на кнопку "Купить"
buyForm.addEventListener('submit', function (event) {
  event.preventDefault();
  document.body.style.overflow = 'auto';
  let name = document.querySelector(".nameBrands").innerHTML;
  let quantity = document.querySelector('#quantity').value;
  let color = document.querySelector('input[name="color"]:checked').value;
  let comment = document.querySelector('#comment').value;
  alert(`Вы купили ${name} в количестве ${quantity} шт, цвет - ${color}, комментарий: ${comment}`);
  overlay.style.display = 'none';
});

// добавляем обработчки input для выбора цвета 
document.addEventListener("DOMContentLoaded", function () {
  const cpColor = document.querySelectorAll(".cp__color");
  cpColor.forEach(function (item) {
    item.addEventListener("click", function () {
      cpColor.forEach(function (element) {
        element.classList.remove("active_color");
      });
      item.classList.add("active_color");
      item.querySelector("input").checked = true;
    });
  });
});

// получаем элементы для смены темы
const themeBtn = document.querySelector('.theme');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu a');
const categories = document.querySelectorAll('.category');
const hTwo = document.querySelectorAll('h2');
const hThree = document.querySelectorAll('h3');
const product = document.querySelectorAll('.product');
const listItems = document.querySelectorAll('.listItem');
const listP = document.querySelectorAll('.list a');
const upBtn = document.querySelector('.back-to-top');
const theme = document.querySelector('.theme');
const buyBtnForm = document.querySelector('.buy-form');
const buyInput = document.querySelector('.form-group input');
const textarea = document.querySelector('.form-group textarea');
const dropdown = document.querySelector('.dropdown-menu');
const dropdownA = document.querySelectorAll('.dropdown-menu a');
const burgerLines = document.querySelectorAll('.burger-menu-line');

// смена темы
themeBtn.addEventListener('click', function () {
  if (themeBtn.innerHTML == "день") {
    themeBtn.innerHTML = "ночь";
    body.style.backgroundColor = "#2e2e2e";
    menu.style.backgroundColor = "#414141";
    menuItems.forEach(function (item) {
      item.style.color = "white";
    })
    categories.forEach(function (item) {
      item.style.backgroundColor = "#414141";
    })
    hTwo.forEach(function (item) {
      item.style.color = "white";
    })
    hThree.forEach(function (item) {
      item.style.color = "white";
    })
    product.forEach(function (item) {
      item.style.borderColor = "#181818";
    })
    listItems.forEach(function (item) {
      item.style.backgroundColor = "#414141";
    })
    listP.forEach(function (item) {
      item.style.color = "white";
    })
    dropdownA.forEach(function (item) {
      item.style.color = "white";
    })
    upBtn.style.backgroundColor = "#414141";
    upBtn.style.color = "white";
    theme.style.backgroundColor = "#414141";
    theme.style.color = "white";
    buyBtnForm.style.backgroundColor = "#414141";
    buyBtnForm.style.color = "white";
    buyInput.style.backgroundColor = "#616161";
    buyInput.style.color = "white";
    textarea.style.backgroundColor = "#616161";
    dropdown.style.backgroundColor = "#414141";
    dropdownA.forEach(function (item) {
      item.style.color = "white";
    })
    burgerLines.forEach(function (item) {
      item.style.backgroundColor = "white";
    })
  } else {
    themeBtn.innerHTML = "день";
    body.style.backgroundColor = "white";
    menu.style.backgroundColor = "white";
    menuItems.forEach(function (item) {
      item.style.color = "#333333";
    })
    categories.forEach(function (item) {
      item.style.backgroundColor = "#f2f2f2";
    })
    hTwo.forEach(function (item) {
      item.style.color = "black";
    })
    hThree.forEach(function (item) {
      item.style.color = "black";
    })
    product.forEach(function (item) {
      item.style.borderColor = "#dddddd";
    })
    listItems.forEach(function (item) {
      item.style.backgroundColor = "#f2f2f2";
    })
    listP.forEach(function (item) {
      item.style.color = "black";
    })
    upBtn.style.backgroundColor = "#f2f2f2";
    upBtn.style.color = "black";
    theme.style.backgroundColor = "#f2f2f2";
    theme.style.color = "black";
    buyBtnForm.style.backgroundColor = "#f2f2f2";
    buyBtnForm.style.color = "black";
    buyInput.style.backgroundColor = "white";
    buyInput.style.color = "black";
    textarea.style.backgroundColor = "white";
    dropdown.style.backgroundColor = "white";
    dropdownA.forEach(function (item) {
      item.style.color = "#333333";
    })
    burgerLines.forEach(function (item) {
      item.style.backgroundColor = "#333333";
    })
  }
});

// бургем меню
const burgerMenu = document.querySelector('.burger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

burgerMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
  burgerMenu.classList.toggle('actives');
});

const li = document.querySelectorAll('.dropdown-menu li');
li.forEach(function (item) {
  item.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
    burgerMenu.classList.toggle('actives');
  })
});
