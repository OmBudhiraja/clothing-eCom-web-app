
interface Item {
    id: string,
    name: string,
    imageUrl: string;
    price: number
}

export const addItemToCart = (cartItems: any, newItem: any) =>{
    const existingCartItem = cartItems.find((item:any) => item.id === newItem.id)
    if(existingCartItem){
        return cartItems.map((item: any) =>
           item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item
        )
    }else {
        return [...cartItems, {...newItem, quantity: 1}]
    }
}