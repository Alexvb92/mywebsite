const initState = {
    sections:[
            {id: 1, name:'About', isSelected: true},
            {id: 2, name:'Portfolio', isSelected: false},
            {id: 3, name:'Contact', isSelected: false}
        ],
        currentSection: 'temp'
}
export default (state = initState, action) => {
    switch(action.type) {
        case'SECTION_ADD':
            return {...state, sections: state.sections.concat(action.payload)}
        default:
            return state
    }
}
