import { Injectable } from '@nestjs/common';
import { AuthPayloadDTO } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const Users =[
    {
        "_id": "bfahe3ui34hjbj4",
        "email": "admin@admin.com",
        "isAdmin": 1,
        "password": "12345"
    },
    {
        "_id": "khb2hkb343b4fw24k",
        "email": "lauren@test.com",
        "isAdmin": 0,
        "password": "12345"
    }
]


@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService
    ){}

    validateUser( { email, password } : AuthPayloadDTO ){
        const findUser = Users.find( (user) => user.email === email )
        if(!findUser) 
            return null;
        if(password == findUser.password){
            const { password , ...user } = findUser;

            return this.jwtService.sign(user);
        }
    }
}
