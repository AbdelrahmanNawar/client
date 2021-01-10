import { OrderProduct } from './order-Product';
import { OrderStatus } from './../enums/order-status';

export interface Order {
    orderId: number;
    deliveryDate: Date;
    orderDate: Date;
    totalCost: number;
    orderStatus: OrderStatus;
    creditCardNumber: string;
    creditCardExpirationDate: Date;
    shippingId: number;
    userId: string;
    orderProducts: Array<OrderProduct>;
}