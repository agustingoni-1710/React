import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { collection, getDocs, getFirestore} from 'firebase/firestore'


const Landing = () => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [items, setItems] = useState();


  useEffect(() => {
    const db = getFirestore()
    const caps = collection(db, 'items')

    getDocs(caps).then((snapshot) => {
      if(snapshot === 0){
        console.log("No hay resultados")
      }    
    setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })

  }, [])
  /* useEffect(() => {
    const db = getFirestore()

    const caps = query(
      collection(db, 'items'),
      where('Stock', '>=', 1), 
      where ('Categoria','==','Snapback NBA')
    )

    getDocs(caps).then((snapshot) => {
      if(snapshot === 0){
        console.log("No hay resultados")
      }
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
    })
  }, []) */

 /* console.log(items); */

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Bienvenidos a MDQcaps</h1>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', gap: '20px' }}>
        {items.map((items) => (
          <div key={items.id} style={{ 
            width: '300px', 
            height: '300px', 
            border: '1px solid grey', 
            padding: '10px',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            }}>

            <h3 style={{ textAlign: 'center' }}>{items.Titulo}</h3>
            <img src="../i" alt="" />
            <p style={{ textAlign: 'center' }}>{items.Descripcion}</p>
            <p style={{ textAlign: 'center' }}>Precio: ${items.precio}</p>
            <Link style={{ textAlign: 'center' }} to={`/item/${items.id}`}>Ver detalle</Link>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button style={{ background: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', marginRight: '1rem' }} onClick={() => addToCart(items, 1)}>
                    Agregar al carrito
                </button>
                <button style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px'
                }} onClick={() => removeFromCart(items.id)}>X</button>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default Landing