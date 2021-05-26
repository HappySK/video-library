import React from 'react'

export const TextError = (props) => {
   return (
      <div style={{color : 'white',fontWeight : 'bold', margin : 'auto', width : '50%'}}>
         { props.children }
      </div>
   )
}
