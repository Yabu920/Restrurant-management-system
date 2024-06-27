export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    createdAt: Date;
    updatedAt: Date;
    role: UserRole;
}
export type UserRole = 'user' | 'admin';
