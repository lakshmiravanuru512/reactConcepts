import React,{lazy,Suspense} from 'react'

const Header=lazy(()=>import("./Header"));
const Body=lazy(()=>import("./Body"));
const Footer=lazy(()=>import("./Footer"));

const LazyComponent = () => {
  return (
    <div>
        <Suspense fallback={<div>Loading....</div>}>
            <Header/>
            <Body/>
            <Footer/>
        </Suspense>
    </div>
  )
}

export default LazyComponent