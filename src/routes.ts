import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export default function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Felipe',
        email: 'felipe.decome@hotmail.com',
        password: '123456789',
        techs: [
            'NodeJS',
            'ReactJS',
            'ReactNative',
            { title: 'JavaScript', experience: 100 },
        ]
    })

    

    return response.json({message: "Hello World", user});
}