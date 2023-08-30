import React , {useState} from 'react'
import { GlobalContext} from '../GlobalState'



function Product({product}) {
  const {money, setMoney} = React.useContext(GlobalContext)

  const [deger, setDeger] = useState(0)
  const handleValue = () =>{
    setDeger(deger + 1)
    setMoney(money - product.price)
  }
  const satClick = () =>{
    if(deger === 0){
    return 0;
    }else{
      setDeger(deger - 1)
      setMoney(money + product.price)
    }
  }
  return (

    <>
        <div className='products'>
            <div className='picture'>
            <img src={product && product.image} alt={product && product.name} />
           </div>
           <div className='content'>
                <h5> {product && product.title}</h5>
                <p> <span>$</span> {product && product.price} </p>
           </div> 
           <div className='productFoot'>
             <button  id='sat' onClick={satClick} >Sat</button>
             <input  type="number"  value={deger} readOnly></input>
             <button id='satınAl' onClick={handleValue}>Satın Al</button>
           </div>
        </div>
    </>
  )
}

export default Product