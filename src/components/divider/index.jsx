import React from 'react'

import './index.css'

const Divider = ({heading}) => {
  return ( 
    <>
    <div className="worldmap mt-5 ml-5 mb-3">
      <p className="worldcasemap mt-1 mb-1">{heading}</p>
    </div>
    </>
   );
}
 
export default Divider;