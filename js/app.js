const selectedElement = document.getElementById('selected-seat');
const totalBooked = document.getElementById('total-booked');
const availableSeat = document.getElementById('available-seat').innerText;
const availableSeatNumber = parseFloat(availableSeat);
const totalPrice = document.getElementById('total-price');
const couponInputValue = document.getElementById('input-coupon');
const couponInputBtn = document.getElementById('input-btn-coupon');
const defoutlTextEl = document.getElementById('defoult-text');
const grandTotal = document.getElementById('grand-total');
const phoneNuberEl = document.getElementById('phone-number');
const nextBtnEl = document.getElementById('next-btn');
let price = 0;
// console.log(availableSeatNumber);
let selectedEle = [];
function handleSelectSeat(event){
    let value = event.innerText;
    if(selectedEle.includes(value)){
        return alert('seat already booked');
    }else if (selectedEle.length < 4){
        event.classList.add('bg-primary');
        event.classList.add('text-white');
        
        // increase policy 
        selectedEle.push(event.innerText);
       
        totalBooked.innerText = selectedEle.length;
        // remove defoutlText 
        defoutlTextEl.classList.add('hidden');
        // decrease policy 
    
        document.getElementById('available-seat').innerText = availableSeatNumber  - selectedEle.length;
       selectedElement.innerHTML += `<li class ="text-base font-normal flex justify-between">
       <span>${event.innerText}</span>
       <span>Economy</span>
       <span>550</span>
       </li>`
    //    update price after click 
    price += 550;
    document.getElementById('total-price').innerText = price;
    if(selectedEle.length>3){
        couponInputValue.removeAttribute('disabled');
        couponInputBtn.removeAttribute('disabled')
        
    }
    }else{
        return alert('maximum seat booked')
    }
    phoneNuberEl.addEventListener('input', function(e){
        const inputValue = e.target.value;
        if(inputValue.length >= 11){
          nextBtnEl.removeAttribute('disabled');
        }
    })
   
}
couponInputBtn.addEventListener('click', function(){
    const couponInputNumber = couponInputValue.value;
    let couponSave = 0;
    if(couponInputNumber !== 'NEW50' &&  couponInputNumber !== "cauple 20" ){
       return alert('invalid coupon code');

    }if(couponInputNumber === "NEW50"){
        couponSave = price * 0.15;
    }else if(couponInputNumber === 'cauple 20'){
        couponSave = price * .20;
    }
    const showCouponEl = document.getElementById('show-coupon-price') ;
    showCouponEl.innerHTML = 
                 ` <p>Discount</p>
                 <p> <span>-BDT: </span>
                  <span>${couponSave.toFixed(2)}</span>
               </p>`

    const grandTotalValue = price - couponSave;
    grandTotal.innerText = grandTotalValue.toFixed(2);
    phoneNuberEl.addEventListener('input', function(e){
        const inputValue = e.target.value;
        if(inputValue.length >= 11){
          nextBtnEl.removeAttribute('disabled');
        }
    })

})
// phoneNuberEl.addEventListener('input', function(e){
//     const inputValue = e.target.value;
//     if(inputValue.length >= 11){
//       nextBtnEl.removeAttribute('disabled');
//     }
// })
document.getElementById('btn-close').addEventListener('click', function(){
    window.location.reload();
})