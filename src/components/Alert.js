import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className="alert alert-warning" role="alert" style={{top:props.position}}>
            <strong>{props.alert.type}</strong> : {props.alert.message}
        </div>

    )
}
