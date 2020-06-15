import React from 'react'



function Posts(props){
    console.log(props.e.title)
return(
    <div>
        <p>{props.e.title}</p>
    </div>
)
}

export default Posts