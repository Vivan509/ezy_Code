
const productArr = [
    {name: 'White Cameras',company: 'Polaroid', price: '12000', imageUrl:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name: 'White Watch',company: 'Apple', price: '6000', imageUrl:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'},
    {name: 'Digital Watch',company: 'Boat', price: '10000', imageUrl:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'},
] 

const popularProduct = [
    {name: 'Boat Headphones',company: 'Boat', price: '2000', imageUrl:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'},
    {name: 'Green Casual Boots',company: 'RedTape', price: '5000', imageUrl:'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'},
    {name: 'Old Chair',company: 'Furniture', price: '1500', imageUrl:'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'},
]

let cart = [];

const showProduct = function() {
    let cluster = '';
    productArr.forEach((product, index)=> {
        cluster += `<div class="product w-fit rounded-xl p-2 bg-white">
                            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                            <img src='${product.imageUrl}' class="w-full h-full object-cover object-center overflow-hidden"/>
                            </div>
                            <div class="data w-full px-2 py-5">
                                <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                                <div class="flex justify-between w-full items-center mt-2">
                                    <div class="w-1/2">
                                        <h3 class="font-semibold opacity-20">${product.company}.</h3>
                                        <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                                    </div>
                                    <button data-value="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
                                            class="add ri-add-line" data-value="${index}"></i></button>
                                </div>
                            </div>
                        </div>`
    })
    document.querySelector('.products').innerHTML = cluster;
}

const showPopularProduct = function() {
    let clutter = ''
    popularProduct.forEach((product, index) => {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                            <img class="w-full h-full object-cover object-center"
                                src="${product.imageUrl}"
                                alt="">
                        </div>
                        <div class="data py-2 w-full">
                            <h1 class="leading-none font-semibold">${product.name}</h1>
                            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.company}.</h4>
                            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
                        </div>
                    </div>`
    })

    document.querySelector('.populars').innerHTML = clutter;
}

const addToCart = function () {
    document.querySelector('.products')
    .addEventListener('click', function(dets){
        if(dets.target.classList.contains('add')){
            cart.push(productArr[dets.target.dataset.value]); 

            setTimeout(() => {
                const para = document.createElement('p')
                para.setAttribute('class', 'my-para')
                para.textContent = 'Product Added to the Cart'
                document.body.appendChild(para);
                console.log(para)

                setTimeout(() => {
                    document.body.removeChild(para)
                }, 3000);
             }, 1000);
        }
        
    })
}

const showCart = function(){
    document.querySelector('.carticon').addEventListener('click', function(){
        document.querySelector('.cartexpnd').style.display = 'block'

        let clutter = '';
        cart.forEach(function(prod, index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                                 <img src="${prod.imageUrl}" class="h-full w-full object-cover object-center" />
                            </div>
                            <div>
                                <h3 class="font-semi-bold">${prod.name}</h3>
                                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h3>
                            </div>
        </div>`
        })
        document.querySelector('.cartexpnd').innerHTML = clutter;
    })
    
}

showCart();
addToCart();
showPopularProduct();
showProduct();