import './style.css';
import { CartContext } from '../../Contexts/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {myCart,total,addToCart, setTotal} = useContext(CartContext);
    const handleCheckout = ()=>{
        setTotal(0);
        addToCart([]);
    }
    const navigate = useNavigate();
    const handleHome = () =>{
        navigate('/');
    }
    return ( 
        <>
            <section className='cart-container'>
                <div className="cart-header">CHECKOUT: </div>
                <div className="cart-items">
                    {myCart.slice(1).map((item)=>{
                        return(
                            <div className="cart-item">
                                <img src={item.imageUrl} className='cart-item-img' alt=""/>
                                {item.name} : {item.price}$
                            </div>
                        )
                    })
                    }
                    <div className="cart-total">TOTAL: {total} $</div>
                </div>
                <button onClick={handleCheckout} className='cart-checkout'>DONE</button>
                <button onClick={handleHome} className='cart-gohome'>Return back home</button>
            </section>
        </>
     );
}
 
export default Cart;