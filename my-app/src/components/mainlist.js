import React from 'react'

const Thelinks = ({id, name, isSelected}) => (

    <div className="links1 col m4">
        <div className="listy1 links1 col m4">
            {name}
        </div>
    </div>
)

export default (props) => (

    <div className="mainlist">
        {console.log(props)}
        {props['data-sections'].props.sections.map(section => <Thelinks key={section.id} {...section} />)}
    </div>

)
