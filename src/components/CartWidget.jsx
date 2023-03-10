import React from "react";


const CartWidget = () => {
    return (
        <button type="button" class="btn btn-primary position-relative">
            <img src={"images/cart2.svg"} alt={"Carrito"} width={32}/>
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
    </button>
    )

}

export default CartWidget;