export const initialState = {
  items: [],
}


const reducer = (state, action) => {
  switch (action.type) {
    // adding the parsed item to items
    case 'ADD_TO_ITEMS':
      return {
        ...state,
        items: [...state.items, action.item]
      }


    // removing the selected item from items
      case 'REMOVE_FROM_ITEMS':
      const index = state.items.findIndex(
        existingItem => existingItem.id === action.id
      )

      let newItems = [...state.items]

      if(index >= 0) {
        newItems.splice(index, 1)
      } else {
        console.warn(`item(id: ${action.id}) does not exist in items!`)
      }

      return {
        ...state,
        items: newItems
      }

      // removing all items
      case 'REMOVE_ITEMS':
        let emptyItems = []
      return {
        ...state,
        items: emptyItems
      }

      default: return state
  }
}

export default reducer