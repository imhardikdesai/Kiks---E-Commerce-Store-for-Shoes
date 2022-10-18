let topProducts = document.getElementById("topProducts");
function showTopShoes() {
	fetch('https://raw.githubusercontent.com/imhardikdesai/Kiks-Square-Store/master/Assets/js/json/topProducts.json')
		.then(response => response.json())
		.then(data => {
			let shoes = data.shoes;
			console.log(shoes);
			let str = "";
			for (key in shoes) {
				str += `
			<div class="p-body">
			<div class="circle" style="${shoes[key].bgGradient}"></div>
                <img class="shoesImg" src="${shoes[key].imgSrc}" alt="shoes">
                <div class="rating">
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star"></i>
                </div>
				<div class="top-p-text">
                	<p class="top-p-name">${shoes[key].name}</p>
					<p class="top-p-price">${shoes[key].price}<span id="${shoes[key].id}" onClick="addProduct(this.id)" class="material-symbols-outlined addIcon">add_shopping_cart</span></p>
				</div>
            </div>
			`;
			}
			topProducts.innerHTML = str;
		})
		.catch(err => console.error(err));
}
showTopShoes();


let cartCount = document.getElementById("cartCount");
let count = 0;
function addProduct(id) {
	count++;
	cartCount.innerHTML = count;
	console.log(id);
}