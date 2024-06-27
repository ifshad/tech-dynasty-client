### Welcome to TechDynasty

## Overview

This is the front-end for the e-commerce platform built with Next.js, TypeScript, ShadCN UI, Tailwind CSS, and Axios. It includes features like homepage, products page, add products for sellers, and user authentication with Firebase Auth.

## Features

- **Homepage:** Displays featured products and categories.
- **Products Page:** Lists all available products with filtering and sorting options.
- **Seller Dashboard:** Allows sellers to add, update, and manage their products.
- **User Authentication:** Secure login and signup using Firebase Auth.
- **Responsive Design:** Optimized for various screen sizes using Tailwind CSS.

## Technologies Used

- **Next.js:** Framework for server-rendered React applications.
- **TypeScript:** Typed JavaScript for safer and more scalable code.
- **ShadCN UI:** Component library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Axios:** HTTP client for making API requests.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ifshad/tech-dynasty-client
    cd tech-dynasty-client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file in the root directory and add your Firebase configuration:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Homepage:** Browse featured products.
- **Products Page:** View and filter all products.
- **Seller Dashboard:** Add or manage your products (requires login).
- **Login/Signup:** Access your account or create a new one.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
