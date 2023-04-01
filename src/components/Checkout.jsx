import React, { useContext, useState } from "react";  
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore, } from "firebase/firestore";


const Checkout = () => {
    const {cart, clear, sumTotal, cartTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, price_total:item.quantity * item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal(),
            quantity: cartTotal()
        };
    
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id)
            
            clear();

        });
    }

    
    
    
    return (
        <div className="Container">
             <div className="row my-5">
                <div className="col">
                <form>
                    <div className="mb-3">
                        <label htmlFor="Nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="Email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="Telefono" placeholder="Ingrese su Telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    <button type="button" onClick={generarOrden} className="btn btn-primary">Generar Orden</button>
                </form>
                    
                </div>   
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                </tr>


                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>   
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-success" role="alert">
                        <h1>Felicitaciones!</h1>
                        <p>Tu Número de Orden es: {orderId}</p>
                    </div> : ""}  
                </div>    
            </div>                 

        </div>   
    )

}

export default Checkout;