import React from 'react'

export default function Alert(prop) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    prop.alert && <div class={`alert alert-${prop.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(prop.alert.typ)}</strong>: {prop.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
