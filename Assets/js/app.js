let topProducts = document.getElementById("topProducts");
function showTopShoes(shoesNumbers) {
	fetch('https://raw.githubusercontent.com/imhardikdesai/Kiks-Square-Store/master/Assets/js/json/topProducts.json')
		.then(response => response.json())
		.then(data => {
			let shoes = data.shoes;
			console.log(shoes);
			let str = "";
			for (let i = 0; i < shoesNumbers; i++) {
				str += `
			<div class="p-body">
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
                <p class="top-p-price">${shoes[i].price}</p>
				</div>
            </div>
			`;
			}
			topProducts.innerHTML = str;
		})
		.catch(err => console.error(err));
}
showTopShoes('4');