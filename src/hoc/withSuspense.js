import React, {Suspense} from "react";
import Preloader from '../common/Preloader/Preloader';


export const withSuspense = (Component, addProps) => (props) => {
  return <Suspense fallback={<Preloader />}>
    <Component addProps={addProps} {...props}/>
  </Suspense>
}

// export const withSuspense = (Component, addProps) => {
//   return (props) => {
//     return <Suspense fallback={<Preloader />}>
//       <Component addProps={addProps} {...props}/>
//     </Suspense>
//   }
// }