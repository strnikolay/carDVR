import "./order-form.css"


const OrderForm = () =>{

const popUp = () =>{

}	

return(
	<div class="order_form">
			<div className="button">
			<input  className="button-m" type="button" onClick={popUp} value="Заказать "></input>	
			{/*<a href="#order">Заказать сейчас</a>*/}
			<div class="stock">Осталось <b>22 шт.</b> товара по акции</div>
            </div>
	</div>
    )
} 

export default OrderForm