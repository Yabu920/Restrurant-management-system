// user.interface.ts

export interface User {
    id: string; // Assuming id is a string identifier
    username: string;
    email: string;
    password: string; // Assuming password will be hashed and stored securely
    firstName: string;
    lastName: string;
    dateOfBirth: Date; // Assuming date of birth is stored as Date type
    createdAt: Date;
    updatedAt: Date;
    role: UserRole; // Assuming UserRole is defined elsewhere, e.g., 'user' or 'admin'
    // Add other properties as needed, such as address, phone number, etc.
  }
  
  export type UserRole = 'user' | 'admin'; // Example of defining user roles
  