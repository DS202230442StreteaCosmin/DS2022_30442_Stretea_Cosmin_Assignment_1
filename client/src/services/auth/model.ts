export enum UserRoles {
    ADMIN = 'admin',
    CLIENT = 'client',
}

export interface IUser {
    name: string;
    email: string;
    role: string;
    id: string;
}

export interface ILoginUser {
    email: string;
    password: string;
}

export interface IRegisterUser extends ILoginUser {
    name: string;
}
