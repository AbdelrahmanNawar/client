import { OrderProduct } from "../models/order-Product";

export interface DisplayOrderViewmodel {
    orderId: number;
    deliveryDate: any;
    orderDate: any;
    totalCost: number;
    orderStatus: string;
    creditCardNumber: string;
    creditCardExpirationDate: any;
    shippingId: number;
    userId: string;
    orderProducts: Array<OrderProduct>;
}