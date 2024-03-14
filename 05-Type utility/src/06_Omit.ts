interface OrderInfo{
    readonly id: string,
    user: string,
    city: string,
    state: string,
}

type x = Omit<OrderInfo, "city">