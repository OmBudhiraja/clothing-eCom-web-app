
export interface Item {
    id: number,
    name: string,
    imageUrl: string;
    price: number;
}

export interface SavedItem extends Item {
    quantity: number
}

export const addItemToCart = (cartItems: SavedItem[], newItem: Item) =>{
    const existingCartItem = cartItems.find((item) => item.id === newItem.id)
    if(existingCartItem){
        return cartItems.map((item) =>
           item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item
        )
    }else {
        return [...cartItems, {...newItem, quantity: 1}]
    }
}

export const removeItemFromCart = (cartItems: SavedItem[], itemToRemove: SavedItem)=>{
    return cartItems.filter((item) => item.id !== itemToRemove.id)
}

export const decreaseQuantityFromCart = (cartItems: SavedItem[], itemToDecrease: SavedItem) =>{
    return cartItems.map(item =>{
        if(item.id === itemToDecrease.id) return {...item, quantity: item.quantity -1}
        return item
    })
}