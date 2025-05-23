import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    
      <div style={{height:'50px'}}>
      {/* below "props.alert &&" is used to check if the alert is not null */}
      {/* if alert is not null then only it will show the alert */}
      {/* props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show"} role="alert`>  */}
      {props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
        </div>
      
    
  )
}

export default Alert

