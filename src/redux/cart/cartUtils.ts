
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