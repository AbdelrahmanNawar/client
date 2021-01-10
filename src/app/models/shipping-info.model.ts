import { ShippingMethod } from "../enums/shipping-method";

export interface ShippingInfo{
    shippingInfoId: string;
    shippingMethod: ShippingMethod;
    shippingCost: number;
}