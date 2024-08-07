import React from 'react' 

export default function Alart(props) {
    const capitalize = (word)=>{ // Arrow Function and word variables.
        const lower = word.toLowerCase(); // converts the input word to all lowercase letters. 
        return lower.charAt(0).toUpperCase() + lower.slice(1); 
        // lower.charAt(0) gets the first character of the lower string. 
        // lower.charAt(0).toUpperCase() converts this first character to uppercase.
        // lower.slice(1) gets the rest of the string starting from the second character (index 1) to the end. 
        // + concatenates the uppercase first character with the rest of the string.
    }
  return ( 
    props.alart && <div className={`alert alert-${props.alart.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alart.type)}</strong> {props.alart.msg} 
    </div> 
  )
}
