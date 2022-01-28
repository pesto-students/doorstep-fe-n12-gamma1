import React from 'react'

const ApiDetails= {
    login:{
        apiName:'auth/googlelogin',
        method:'POST',
        header:false,
        loader:false
    },
    uploadFile:{
        apiName:'admin/uploadFile',
        method:'POST',
        header:true,
        loader:true
    },
    payment:{
        apiName:'user/payment',
        method:'POST',
        header:true,
        loader:true
    }


}
  export default ApiDetails ;