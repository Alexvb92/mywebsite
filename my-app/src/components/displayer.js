import React from 'react'

export default (props) => {

   const {currentSection} = props


    return (
    <div className="displayer">
        <div className="display1 col m8">
        {console.log(props)}
        <input type="text" value={currentSection} />
        </div>
    </div>
    )
}
