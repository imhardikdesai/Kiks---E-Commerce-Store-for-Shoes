let topProducts = document.getElementById("topProducts");
function showTopShoes(shoesNumbers) {
	fetch('https://raw.githubusercontent.com/imhardikdesai/Kiks-Square-Store/master/Assets/js/json/topProducts.json')
		.then(response => response.json())
		.then(data => {
			let shoes = data.shoes;
			console.log(shoes);
			let str = "";
			for (let i = 0; i < shoesNumbers; i++) {
				console.log(shoes[i].id);
				str += `
			<div class="p-body">
			<div class="circle" style="${shoes[i].bgGradient}"></div>
                <img class="shoesImg" src="${shoes[i].imgSrc}" alt="shoes">
                <div class="rating">
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star"></i>
                </div>
				<div class="top-p-text">
                	<p class="top-p-name">${shoes[i].name}</p>
					<p class="top-p-price">${shoes[i].price}<span id="${shoes[i].id}" onClick="addProduct(this.id)" class="material-symbols-outlined addIcon">add_shopping_cart</span></p>
				</div>
            </div>
			`;
			}
			topProducts.innerHTML = str;
		})
		.catch(err => console.error(err));
}
showTopShoes('4');


function addProduct(id){
	console.log(id);
}