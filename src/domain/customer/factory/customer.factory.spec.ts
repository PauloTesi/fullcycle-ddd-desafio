import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit test", () => {

    it("Should create a customer", () => {
        const customer = CustomerFactory.create("Paulo");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Paulo");
        expect(customer.address).toBeUndefined();
    })

    it("Should create a customer with an address", () => {
        const address = new Address("rua1", 1, "72210220", "Brasilia");
        const customer = CustomerFactory.createWithAddress("Paulo", address);

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Paulo");
        expect(customer.address).toBe(address);
    })



});