const cartCls = document.getElementById("js-cart").classList
const bodyCls = document.getElementById('body').classList 
const overlay = document.querySelector(".overlay");
const cartBtn  = document.getElementById('js-cart');
const cartBox = document.getElementById('js-cart-detail');

overlay.hidden = true;
cartBox.hidden = true;

cartBtn.addEventListener("click", ()=>{
	if(overlay.hidden && cartBox) {
		overlay.hidden = false
		cartBox.hidden = false;
		bodyCls.add('no-scroll');
	}
	else {
		 overlay.hidden = true
		 cartBox.hidden = true;
		 bodyCls.remove('no-scroll');
	 }
})
