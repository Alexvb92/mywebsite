import reducer from './section'

describe('section Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, {type:'ANYTHING'})
    expect(result).toBeDefined()
  })

  test('adds a section', () => {
    const startState = {
      sections: [
        {id: 1, name:'Create Static UI', isSelected: true},
        {id: 2, name:'Create Initial State', isSelected: false},
        {id: 3, name:'Use state to render UI', isSelected: false}
      ]
    }
    const expectedState = {
      sections: [
        {id: 1, name:'Create Static UI', isSelected: true},
        {id: 2, name:'Create Initial State', isSelected: false},
        {id: 3, name:'Use state to render UI', isSelected: false},
        {id: 4, name:'Added section', isSelected: false}
      ]
    }
    const action = {type:'SECTION_ADD', payload: {id: 4, name:'Added section', isSelected: false}}
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })
})
