import * as React from 'react';

import './../App.css';

const Switch: React.SFC<{on: boolean, onClick: any}> = ({on, onClick}) => 
  (
      <div className="toggle">
        <input
          className="toggle-input"
          type="checkbox"
        />
        <button className={getClasses(on).join(" ")} onClick={onClick}/>     
      </div>
  )

// const toggle = () => {

// }

const getClasses = (on: boolean) => {
  return ["toggle-btn " , (on ? 'toggle-btn-on':'toggle-btn-off')];
}
  

  

// class Switch extends React.Component <{on: boolean}>{
  
//   constructor(props: any) {
//     super(props);
//     // code...
//   }
//   state= {on:this.props.on}
//   getClasses = () => {
//     return ["toggle-btn " , (this.state.on ? 'toggle-btn-on':'toggle-btn-off')];
//   }

//   toggle = () => {
//     this.setState({on:!this.state.on})
//   }

//   render(){
//     return (
//       <div className="toggle">
//         <input
//           className="toggle-input"
//           type="checkbox"
//         />
//         <button className={this.getClasses().join(" ")} onClick={this.toggle}/>     
//       </div>
//     )
//   }
  
// }

export default Switch;