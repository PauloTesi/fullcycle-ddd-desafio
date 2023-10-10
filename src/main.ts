import Customer from './domain/customer/entity/customer';
import Address from './domain/customer/entity/address';
import OrderItem from './domain/checkout/entity/order_item';
import Order from './domain/checkout/entity/order';


let customer = new Customer("123", "Paulo Melo");
const address = new Address("Rua 1", 2, "12345-786", "Brasilia - df");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "item 1", 10);
const item2 = new OrderItem("2", "item 2", 20);
const order = new Order("1", "123", [item1, item2]);