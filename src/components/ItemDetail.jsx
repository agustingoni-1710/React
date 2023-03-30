import React, { useContext, useState } from 'react'
import { useParams } from 'react-router';
import { CartContext } from '../Context/CartContext';
import { collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemDetail = () => {

  const { itemsId } = useParams()

  const { addToCart, removeFromCart } = useContext(CartContext)

  const [items, setItems] = useState();
  
  
  
  const db = getFirestore()

    const caps = 
      collection(db, 'items')

    getDocs(caps).then((snapshot) => {
      if(snapshot === 0){
        console.log("No hay resultados")
      }else{
        const lista = snapshot.docs.map((producto)=>{
          return{
            id: producto.id, ...producto.data()
          }
        })
        setItems(lista)
      }
    })
      
    
  
  
  const selectItem = items.find(product => product.id === itemsId)


  return (
    <div style={{  justifyContent: 'center', padding: '50px', gap: '20px' }}>
    
      <h2>{selectItem.Titulo}</h2>
      <p>Price: {selectItem.precio}</p>
      <p>Description: {selectItem.descripcion}</p>
      <button style={{ background: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', marginRight: '1rem' }} onClick={() => addToCart(selectItem, 1)}>
        Agregar al carrito
      </button>
      <button style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '25px',
        height: '25px'
        }} onClick={() => removeFromCart(selectItem.id)}>X</button>
    </div>
  )}


export default ItemDetail