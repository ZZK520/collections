import React from 'react'
const  Description=(props)=> {
    const { text = '', className = '' } = props;
    return (
        <section className={className}>{text}</section>
    )
}
export default  React.memo(Description);