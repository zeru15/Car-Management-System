import Car1 from './../Images/11.jpg'
import Car2 from './../Images/12.jpg'

export const RequestData = {
    getCarsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'John Doe',
                description: 'Product Description',
                image: Car1,
                price: 65,
                dName: 'Abera Alemu',
                quantity: 24,
                inventoryStatus: 'AVAILABLE',
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Anne Marie',
                description: 'Product Description',
                image: Car2,
                price: 72,
                dName: 'Abebe Bekele',
                quantity: 61,
                inventoryStatus: 'UNAVAILABLE',
                rating: 4
            },
            
        ];
    },

    getProductsWithOrdersData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1000-0',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 65,
                        quantity: 1,
                        customer: 'David James',
                        status: 'PENDING'
                    },
                    {
                        id: '1000-1',
                        productCode: 'f230fh0g3',
                        date: '2020-05-14',
                        amount: 130,
                        quantity: 2,
                        customer: 'Leon Rodrigues',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1000-2',
                        productCode: 'f230fh0g3',
                        date: '2019-01-04',
                        amount: 65,
                        quantity: 1,
                        customer: 'Juan Alejandro',
                        status: 'RETURNED'
                    },
                    {
                        id: '1000-3',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 195,
                        quantity: 3,
                        customer: 'Claire Morrow',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1001-0',
                        productCode: 'nvklal433',
                        date: '2020-05-14',
                        amount: 72,
                        quantity: 1,
                        customer: 'Maisha Jefferson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1001-1',
                        productCode: 'nvklal433',
                        date: '2020-02-28',
                        amount: 144,
                        quantity: 2,
                        customer: 'Octavia Murillo',
                        status: 'PENDING'
                    }
                ]
            },
            
        ];
    },

    getCarsMini() {
        return Promise.resolve(this.getCarsData().slice(0, 3));
    },

    getCarsSmall() {
        return Promise.resolve(this.getCarsData().slice(0, 10));
    },

    GeolocationCoordinates() {
        return Promise.resolve(this.getCarsData());
    },

    getCarsWithOrdersSmall() {
        return Promise.resolve(this.getCarsWithOrdersData().slice(0, 10));
    },

    getCarsWithOrders() {
        return Promise.resolve(this.getCarsWithOrdersData());
    }
};

