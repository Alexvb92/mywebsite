import React from 'react'

const Thelinks = ({id, name, isSelected}) => (

    <div className="links1 col m4">
        <div className="listy1 links1 col m4">
            {name}
        </div>
    </div>
)

    <div className="mainlist">
        {console.log(this)}
        {props['data-sections'].props.sections.map(section => <Thelinks key={section.id} {...section} onclick="logthis()" />)}
    </div>

)
