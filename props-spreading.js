import React from "react"


// You have to pass all the props to the button component and even the ones you don't use or know beforehand
export default function Button(props) {
    return (
        <button 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}
            style={props.style}
            className={props.className}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            {/*... etc. ...*/}
            {props.children}
        </button>
    )
}


// You can use the spread operator to pass all the props to the button component
export default function Button(props) {
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}

// You can also do this by destructuring the props
export default function Button({children, variant, ...props}) {
  return (
      <button {...props}>
          {children}
      </button>
  )
}