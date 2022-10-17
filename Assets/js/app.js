let topProducts = document.getElementById("topProducts");

fetch('https://raw.githubusercontent.com/imhardikdesai/Kiks-Square-Store/master/Assets/js/json/topProducts.json')
	.then(response => response.json())
	.then(data => {
		let shoes = data.shoes;
		console.log(shoes);
		let str = "";
		for (key in shoes) {
			str += `
			<div class="p-body">
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
                <p class="top-p-price">${shoes[key].price}</p>
				</div>
            </div>
			`;
		}
		topProducts.innerHTML = str;
	})
	.catch(err => console.error(err));