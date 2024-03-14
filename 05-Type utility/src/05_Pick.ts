interface OrderInfo{
    readonly id: string,
    user: string,
    city: string,
    state: string,
}

type ShippingInfo = Pick<OrderInfo, "city" | "state" | "user">