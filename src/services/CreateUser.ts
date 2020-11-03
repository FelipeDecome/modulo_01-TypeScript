interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}

interface User extends CreateUserData {}

export default function createUser({ name, email, password, techs }: CreateUserData): User {
    const user = {
        name,
        email,
        password,
        techs
    }

    return user;
}