import React from 'react'
import Products from '../product.json'
import Product from './Product'

function Content() {
  return (
    <>
        <div className='containerr'>
           {Products.map(product =>{
            return <Product product={product} key={product.id} />})}
        </div>
    </>
  )
}

export default Content