# Corsia Streetwear - E-commerce Website
This project is a full-stack e-commerce application designed to provide an interactive shopping experience for users and administrative tools for managing the website. It consists of a **frontend**, **backend**, and **admin** panel for streamlined product and order management.


## Key Features
### Admin Panel
- Product Management: Admin can add new products, view the list of products currently available on the website, and edit or delete them as needed.

- Order Management: Admin can view, update, and manage customer orders effectively.

- Authentication: Secured access for admins through an adminAuth middleware.
Admin Panel

### Frontend
The user-facing frontend provides a rich, responsive experience for browsing and purchasing products.

#### Components:
1. BestSellers: Highlights top-selling products.
2. Cart: Displays items added to the shopping cart and calculates the total.
3. Total: Summarizes the total amount for the cart items.
4. Footer: Displays contact and policy information.
5. Hero (Home): Features a prominent section for promoting products or collections on the homepage.
6. LatestCollections: Showcases the latest arrivals in the store.
7. OurPolicy: Highlights the website’s policies like shipping, return, and customer care.
8. ProductItem: Represents individual products, showing their details.
9. RelatedProducts: Displays products related to the one being viewed.
10. SearchBar: Allows users to search for products across the site.
    
#### Pages:
1. About: Provides information about the brand.
2. Cart: Displays items added to the cart with an option to checkout.
3. Collection: Showcases product collections.
4. Contact: A form or details to contact the store.
5. Home: The main landing page with promotional content and featured products.
6. Login: Authentication page for users.
7. Orders: Shows order details for users or admins.
8. PlaceOrder: Page for confirming an order.
9. Product: Displays details of a specific product.
10. Verify: Handles user or order verification.
11. App: The root component for the application.
12. Main: Acts as the main layout or routing controller.
13. ShopContext: Context provider for managing global states like cart, authentication, and user session.

Backend
The backend is built with Express.js and serves as the API for the application. It handles user authentication, product management, and order processing.

Controllers:
CartController: Manages operations related to the shopping cart.
OrderController: Handles order creation, updates, and retrieval.
ProductController: Manages product data (CRUD operations).
UserController: Handles user registration, login, and authentication.
Middlewares:
adminAuth: Protects admin-specific routes to ensure only authenticated admins can access them.
auth: Secures user routes by verifying authentication tokens.
multer: Middleware for handling file uploads, such as product images.
Models:
OrderModel: Defines the schema for storing and managing orders.
ProductModel: Represents products in the database.
UserModel: Manages user data including credentials and roles.
Routes:
CartRoute: Endpoints for adding, updating, and removing items in the cart.
OrderRoute: Endpoints for creating and managing orders.
ProductRoute: Endpoints for managing product data.
UserRoute: Handles user-related functionalities like login and registration.
Server:
The entry point of the backend, which initializes middleware, routes, and database connections, and starts the Express server.

Technologies Used
Frontend:
React.js: For building the user interface.
Context API: For managing global state like authentication and cart data.
Backend:
Node.js with Express.js: For building the RESTful API.
MongoDB: For storing product, user, and order data.
Multer: For handling image uploads.
JSON Web Tokens (JWT): For authentication.

Home Page:

![Screenshot 2024-12-02 000857](https://github.com/user-attachments/assets/c8bb8c71-e7a8-4480-9bba-2288fa0940f7)
![Screenshot 2024-12-02 000914](https://github.com/user-attachments/assets/5453ebd4-14bc-42c5-8e19-37fd9b8e36c9)
![Screenshot 2024-12-02 000941](https://github.com/user-attachments/assets/b9d423d5-20a8-4a81-b8e4-fc7e3d632020)
![Screenshot 2024-12-02 000951](https://github.com/user-attachments/assets/ac85f0be-7076-4494-8006-9826c7ae8cfc)

Collection Page:

![Screenshot 2024-12-02 001139](https://github.com/user-attachments/assets/88bdad90-de83-49bd-a49a-7572fd13795e)
![Screenshot 2024-12-02 001220](https://github.com/user-attachments/assets/c455989b-f43b-4f3e-90ee-d06cc41fd822)

Collection Page with Sort and Filters:

![Screenshot 2024-12-02 001203](https://github.com/user-attachments/assets/29d9336a-4dbe-43dd-907f-a084e388928d)

Product Page:

![Screenshot 2024-12-02 001818](https://github.com/user-attachments/assets/f9ba3f39-61b2-4ad7-856f-213d37716527)
![Screenshot 2024-12-02 001833](https://github.com/user-attachments/assets/f15ac04d-c14f-45e1-a6ca-f2b9dccbb75f)

About Us Page:

![Screenshot 2024-12-02 001229](https://github.com/user-attachments/assets/7dd1f6e1-63cf-4ea3-a3b5-6327f135375d)
![Screenshot 2024-12-02 001236](https://github.com/user-attachments/assets/094ce0d1-6f95-46be-9edf-3b3ded78e806)

Contact Us Page:

![Screenshot 2024-12-02 001252](https://github.com/user-attachments/assets/86d9eecb-1076-4125-9834-2286748aaf1a)

Login Page:

![Screenshot 2024-12-02 001321](https://github.com/user-attachments/assets/5cd27ed9-16df-4022-ac40-6419056b92a8)

Sign Up Page:

![Screenshot 2024-12-02 001336](https://github.com/user-attachments/assets/c0d08f7c-b3ef-4517-8980-ac3ee8b73b9a)

Cart Page:

![Screenshot 2024-12-02 001407](https://github.com/user-attachments/assets/c410a6bd-2169-486d-ab8a-01ff299d2cfa)

Delivery Information Page and Payment Method:

![Screenshot 2024-12-02 001423](https://github.com/user-attachments/assets/af6c210b-1ee2-4d79-8777-cb5c9d098f80)

Stript Payment:

![Screenshot 2024-12-02 001632](https://github.com/user-attachments/assets/744074c7-8eae-4907-8bb2-f22a3646144f)

Order Page:

![Screenshot 2024-12-02 001551](https://github.com/user-attachments/assets/c9de6a33-7fc5-4b58-a649-bfa2aa5311f8)

Admin: Login Page:

![Screenshot 2024-12-02 001713](https://github.com/user-attachments/assets/dfb674e0-217c-4408-a925-f2bcad21b72d)

Admin: Add Items Page:

![Screenshot 2024-12-02 001725](https://github.com/user-attachments/assets/0603a5f6-7be4-466c-b7aa-e36bb6f228ff)

Admin: List Items Page:
![Screenshot 2024-12-02 001734](https://github.com/user-attachments/assets/f2495cba-9618-464c-8b17-27552dd6c82d)

Admin: Orders Page:

![Screenshot 2024-12-02 001753](https://github.com/user-attachments/assets/2f6ff081-856e-4300-b095-e3aef6f65740)
