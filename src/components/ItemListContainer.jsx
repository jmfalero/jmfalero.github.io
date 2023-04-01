import React, { useState, useEffect } from "react";
import {  collection, getDocs, getFirestore, query, where, } from "firebase/firestore";
import { useParams} from "react-router-dom";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    

    // Consultar la Collection de mis Productos
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
        });
    }, [id]);

    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;