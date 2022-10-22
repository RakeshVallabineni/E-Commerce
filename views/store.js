// let finalCart=document.querySelector('#finalCart');
// let cr=document.querySelector('.cart-holder');
// let cartN=document.querySelector('.cart-number');

// function displayCart(){
// cr.addEventListener('click',()=>{
//    cr.classList.toggle('active');
//    finalCart.classList.toggle('active');
// })
// }
// displayCart();

// let see=document.querySelector('#see');
// see.addEventListener('click',()=>{
//    cr.classList.toggle('active');
//    finalCart.classList.toggle('active');
// })

// window.addEventListener('DOMContentLoaded',async (e)=>{
   
//     let response=await axios.get('http://localhost:5600/cartDetails');
//     console.log(response);
//     for(i of response.data.res){
//       addToCartPurchase(i);
//     }

//    // addToCartPurchase(response.data.res.);
// })




// const addToCart=document.querySelectorAll('.addToCart' );
// const cartList=document.querySelector('.cartList' );
// const totalPrice=document.querySelector('#totalPrice');
// var total=0;
// var cartNumber=0;

// function addToCartPurchase(j){
   
// for(i of addToCart){
// i.addEventListener('click',(event)=>{ 
//    event.preventDefault();
//    cartNumber+=1;
//    cartN.innerHTML=cartNumber;

//    //  /images/album1.png

//    const li=document.createElement('li');

//    const img=document.createElement('img');
//    img.id='cartImg';
//    img.setAttribute('src',event.target.parentElement.children[1].currentSrc);
//    li.appendChild(img);

//    const title=document.createElement('h1');
//    title.id='cartTitle';
//    title.innerHTML= event.target.parentElement.children[0].innerText;
//    li.appendChild(title);   

//    const price=document.createElement('span');
//    price.id='cartPrice'
//    price.innerHTML=event.target.parentElement.children[2].children[0].innerText;
//    li.appendChild(price);

//    const quantity=document.createElement('input');
//    quantity.type=Number;
//    quantity.value=1;
//    quantity.id='quantities';
//    li.appendChild(quantity);

//    const remove=document.createElement('button');
//    remove.innerHTML='Remove';
//    remove.id='delete';
//    li.appendChild(remove);

//    const br=document.createElement('br');
//    cartList.appendChild(br)

//    const hr=document.createElement('hr');
//    li.appendChild(hr);

//    cartList.appendChild(li);
   
   

//    total+=parseFloat(event.target.parentElement.children[2].children[0].innerText)*parseInt(quantity.value);
//    totalPrice.innerHTML=total;
//    console.log(event.target.parentElement.children[1].currentSrc)
//   function postOrder(){
//    let obj={
//        itemName:event.target.parentElement.children[0].innerText,
//        price:event.target.parentElement.children[2].children[0].innerText,
//        image:event.target.parentElement.children[1].currentSrc
//       }
      
//       axios.post('http://localhost:5600/orderDetails',obj).then((response)=>{console.log(response.data);del(response.data.ORDER.id)}).catch(err=>{console.log(err)});
      
//   }
//   postOrder();



   
//    function del(delId){

   
//    const Delete=document.querySelectorAll('#delete');
//    for(i of Delete){
//    i.addEventListener('click',(event)=>{
   
//    cartList.removeChild(event.target.parentElement);
//    cartN.innerHTML=cartNumber-1;
//    cartNumber-=1;

//    axios.delete(`http://localhost:5600/orderDetails/${delId}`).then(()=>{}).catch(err=>{console.log(err)});
//    console.log(delId);
//    if(total>1){
//    totalPrice.innerHTML=total-parseFloat(event.target.parentElement.children[2].innerText);
//    total-=parseFloat(event.target.parentElement.children[2].innerText);
//    }
//    if(total<1){
//       totalPrice.innerHTML=0;
//    }
//    });
// }

// }




// })
// }
// }


// addToCartPurchase();


// function orderPlaced(){
//    let purchase=document.querySelector('#purchase');
   
//    purchase.addEventListener('click',(event)=>{
//       alert('Thank you for Purchase');
//       total=0;
//       totalPrice.innerHTML=0;
//       cartList.remove()
//       addToCartPurchase();

//    })   
// }

// orderPlaced()