let finalCart=document.querySelector('#finalCart');
let cr=document.querySelector('.cart-holder');
let cartN=document.querySelector('.cart-number');
let addToCart=document.querySelectorAll('.addToCart');
let cartList=document.querySelector('.cartList');
let cart_number=document.querySelector('.cart-number');
let purchase=document.querySelector('#purchase');


function displayCart(){
cr.addEventListener('click',()=>{
   cr.classList.toggle('active');
   finalCart.classList.toggle('active');
})
}
displayCart();

let see=document.querySelector('#see');
see.addEventListener('click',()=>{
   cr.classList.toggle('active');
   finalCart.classList.toggle('active');
})







window.addEventListener('DOMContentLoaded',(e)=>{
    
    
    getAddToCart()
})

async function getAddToCart(){
    let getResponse=await axios.get('http://localhost:5600/getCartDetails')

    for(i of getResponse.data.res){
        displayAddToCart(i)
        console.log(i)
    }
    cart_number.innerHTML=getResponse.data.res.length
    
}


let cart=0;

    for(i of addToCart){
    i.addEventListener('click',async (e)=>{
        cart+=1;
        cart_number.innerHTML=cart
        let postCartDetails={
            itemname:e.target.parentNode.children[0].innerText,
            
           image:e.target.parentNode.children[1].src,
           
           prices:e.target.parentNode.children[2].innerText
        }
        
        let response=await axios.post('http://localhost:5600/cartDetails',postCartDetails)
        console.log(response);
        displayAddToCart(response.data.ORDER)
 
    })
    





function displayAddToCart(items){
    const li=document.createElement('li')
    li.id=items.id
    const img=document.createElement('img');
    img.setAttribute('src',items.image)
    img.id='cartImg'
    
    const itemName=document.createElement('p');
    itemName.innerHTML=items.itemname
    itemName.id='cartTitle'

    const price=document.createElement('span');
    price.innerHTML=items.prices
    price.id='cartPrice'
    
    

    const quantity=document.createElement('input');
    quantity.value=1
    quantity.id='quantities'

    const remove=document.createElement('button');
    remove.innerHTML='Remove'
    remove.id='delete'


    const hr=document.createElement('hr');
    hr.id='hr'


    li.appendChild(img);
    li.appendChild(itemName);
    li.appendChild(price);
    li.appendChild(quantity);
    li.appendChild(remove);

    li.appendChild(hr);
    cartList.appendChild(li)


    remove.addEventListener('click',async (e)=>{
        if(cart>0){
        --cart
        cart_number.innerHTML=cart
        }
        
        console.log(e.target.parentElement)
        cartList.removeChild(e.target.parentElement);
        
        let deleteResonse=await axios.delete(`http://localhost:5600/orderDetails/${e.target.parentElement.id}`)
        if(deleteResonse){
            alert('removed successfully')
        }
    })
}
}


purchase.addEventListener('click',async (e)=>{
    
    cartList.remove(e.target.parentElement);
    cart=0;
    cart_number.innerHTML=cart
    
    let purchaseResponse=await axios.get('http://localhost:5600/purchased')
    alert(purchaseResponse.data.message)
})



