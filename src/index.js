import React from "react";
import ReactDOM from "react-dom/client"
//import test
import ThisIsWork3 from "./class1";

const root = ReactDOM.createRoot(document.querySelector('#root'))


class ThisIsWork2 extends React.Component{
  render(){
    return(
      <>
      <div>root.render보다 이전에 만들어진 class component</div>
      <p>정상적으로 작동합니다.</p>
      </>
    )
  }
}




root.render(
  <React.StrictMode>
    <div>Hello world</div>
    <ThisIsWork/>
    <ThisIsWork2/>
    {/* <ThisIsnotWork/> */}
    <ThisIsWork3/>
  </React.StrictMode>
)



// component initial text must be upper case 

function ThisIsWork (){
  return(
    <>
      <div>function component는 작동합니다</div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  )
}

// 주석처리한 error part
// class ThisIsnotWork extends React.Component{
//   render(){
//     return(
//       <>
//       <div>root.render보다 늦게 만들어진 class component</div>
//       <p>작동하지 않습니다.</p>
//       </>
//     )
//   }
// }