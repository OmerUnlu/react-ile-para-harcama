import React  from 'react'
import { GlobalContext} from '../GlobalState'

function Header() {
  const {money} = React.useContext(GlobalContext)
  return (
      <>
          <div className='header'>
              <h2>Harcamak İçin $ {money.toLocaleString()} Paranız Var...</h2>
          </div>
       

      </>
  )
}

export default Header