export type User = {
    _id:string;
    email:string;
    name:string;
    country:string;
    city:string;
    addressLine1:string
}

export type MenuItem = {
    _id:string;
    name:string;
    price:string;

}

export type Restaurant = {
    _id:string;
    user:string;
    restaurantName:string;
    city:string;
    country:string;
    deliveryPrice:number;
    estimatedDeliveryTime:number;
    cuisines:string[];
    menuItems:MenuItem[];
    imageUrl: string;
    lastUpdated:string

}

export type RestaurnatSearchResponse = {
    data: Restaurant[]
    pagination:{
        total:number;
        page:number;
        pages:number;

    }
}