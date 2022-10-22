// scroll button 
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


let topProducts = document.getElementById("topProducts");
function showTopShoes(startIndex, endIndex) {
	fetch('https://raw.githubusercontent.com/imhardikdesai/Kiks-Square-Store/master/Assets/json/topProducts.json')
		.then(response => response.json())
		.then(data => {
			let shoes = data.shoes;
			console.log(shoes);
			let str = "";
			for (startIndex; startIndex < endIndex; startIndex++) {
				str += `
			<div class="p-body">
			<div class="circle" style="background: linear-gradient(239deg, ${shoes[startIndex].bgGradient[0]} 0%, ${shoes[startIndex].bgGradient[1]} 100%);"></div>
                <img class="shoesImg" src="${shoes[startIndex].imgSrc}" alt="shoes">
                <div class="rating">
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star"></i>
                </div>
				<div class="top-p-text">
                	<p class="top-p-name">${shoes[startIndex].name}</p>
					<p class="top-p-price">${shoes[startIndex].price}<span id="${shoes[startIndex].id}" onClick="addProduct(this.id)" class="material-symbols-outlined addIcon">add_shopping_cart</span></p>
				</div>
            </div>
			`;
			}
			topProducts.innerHTML = str;
		})
		.catch(err => console.error(err));
}
showTopShoes(0, 12);


let cartCount = document.getElementById("cartCount");
let count = 0;
function addProduct(id) {
	count++;
	cartCount.innerHTML = count;
	console.log(id);
	setCartItems(count)
}

function displayNewShoes() {
	let toggleGender = document.getElementById("toggleGender");
	let sellerShoes = document.getElementById("sellerShoes");
	if (toggleGender.checked == true) {
		sellerShoes.setAttribute('src', './Assets/img/best-seller-women.png');
		document.getElementById('shoesDisplay').style.background = 'linear-gradient(270deg, #FF3C78 0%, #FFB2B2 100%) ';
		document.getElementById('bestSellerShoesText').innerText = 'Adidas Falcon Shoes for women - 2021 Edition (PINK)';
	} else {
		sellerShoes.setAttribute('src', './Assets/img/best-seller-men.png');
		document.getElementById('shoesDisplay').style.background = 'linear-gradient(270deg, #2226d4 0%, #98cef9 100%) ';
		document.getElementById('bestSellerShoesText').innerText = 'Adidas Falcon Shoes for men - 2021 Edition (BLUE)';
	}
}



function setCartItems(cartNumbers) {
	sessionStorage.setItem('cartNumbers', cartNumbers);
}