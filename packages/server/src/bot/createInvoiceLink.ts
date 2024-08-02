import { Product } from "@prisma/client";
import { Bot } from "grammy";

interface Counter<T> {
    data: T
    counter: number
}

export const createInvoiceLink = async (bot: Bot, payload: string, productCounterList: Counter<Product>[]) => {
    const prices = productCounterList.map(productCounter => ({
        label: `${productCounter.data.name} x ${productCounter.counter}`,
        amount: productCounter.counter * productCounter.data.price * 100
    }))
    
    console.log("Prices:", prices);

    const invoiceLink = await bot.api.createInvoiceLink(
        'Товары',
        'Произведите оплату товара',
        payload,
        process.env.PROVIDER_TOKEN || "",
        'RUB',
        prices,
        {
            need_phone_number: true,
            need_shipping_address: true,
        }
    );

    console.log('invoiceLink is created');

    return invoiceLink
}