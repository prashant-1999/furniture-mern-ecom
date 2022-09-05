import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'prashant',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      
      name: "Chair",
      image: "/images/chair1.jpeg",
      brand: "ikea",
      category: "Chairs",
      description: "high quality product",
      price: 12000,
      countInStock: 10,
      "rating": 4.5,
      "numReviews": 10,
      
    },
    {
      "name": "Leather Sofa",
      "image": "/images/sofa1.jpeg",
      "brand": "century",
      "category": "sofa",
      "description": "high quality product",
      "price": 16000,
      "countInStock": 20,
      "rating": 4,
      "numReviews": 10,
    },
    
    {
      "name": "Office Table",
      "image": "/images/tab1.jpeg",
      "brand": "national",
      "category": "Table",
      "description": "high quality product",
      "price": 6000,
      "countInStock": 0,
      "rating": 4.8,
      "numReviews": 17,
    },
    {
      "name": "Bed 4 two",
      "image": "/images/bed1.jpeg",
      "brand": "ikea",
      "category": "bed",
      "description": "high quality product",
      "price": 20000,
      "countInStock": 15,
      "rating": 4.5,
      "numReviews": 14,
    },
    {
      "name": "Center Table",
      "image": "/images/tab2.jpeg",
      "brand": "century",
      "category": "table",
      "description": "high quality product",
      "price": 6500,
      "countInStock": 5,
      "rating": 4.5,
      "numReviews": 10,
    },
    {
      "name": "fluffy sofa",
      "image": "/images/sofa2.jpeg",
      "brand": "greenwood",
      "category": "sofa",
      "description": "high quality product",
      "price": 13000,
      "countInStock": 12,
      "rating": 4.5,
      "numReviews": 15,
    },
    
  ],
};
export default data;
