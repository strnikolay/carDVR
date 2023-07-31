import "./first.css"
import plusIcon from "../images/plus-icon1.png"
import OrderForm from "./order-form"
import left from "../images/first/left2.png"
import right from "../images/first/right2.png"



const First = () =>{

const Alt = "Neoline X-COP 9100S"    

return(
    <div className="section">
        <section class="offer">
            {/*<div className="left"/>*/}
            <div className="left">
            <img className="left" src={left} alt="Блок 2" />    
            <div class="price clearfix">
				<div class="old-cost">
					<span>Обычная цена:</span>
					<p><span>3980</span><i>р</i></p>
				</div>
				<div class="new-cost">
					<span>Цена сегодня:</span>
					<p>1990<i>р</i></p>
				</div>
			</div>
            
            </div>
            <div className="right">
            <img className="right" src={right} alt="Блок 2" />
                <div class="sale">акция! <p>50%</p> <span>скидка</span></div>
                
            </div>
            
	        <div class="wrap">
            
	            <h1>Видеорегистратор VVCAR-V17<br/>&nbsp;&nbsp;&nbsp;&nbsp;с камерой заднего вида</h1>
		        <h2>комплексное устройство для записи видео</h2>
		        

		        <ul class="plus">
			        <li className="one">
				        <img src={plusIcon} alt={Alt}/>
				        <p>Циклическая запись</p>
			        </li>
			        <li className="two">
				        <img src={plusIcon} alt={Alt}/>
				        <p>Помощь при движении задним ходом</p>
			        </li>
			        <li className="three">
				        <img src={plusIcon} alt={Alt}/>
				        <p>Широкий угол захвата</p>
			        </li>
			        <li className="four">
				        <img src={plusIcon} alt={Alt}/>
				        <p>Две камеры для захвата сразу двух сторон</p>
			        </li>
		        </ul>
                <OrderForm />
            </div>
            <div className="right"/>
        </section>
    </div>
)} 

export default First