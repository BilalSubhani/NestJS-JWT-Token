import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guards';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {

    constructor( private authService: AuthService ) {}

    @Post('login')
    @UseGuards(LocalGuard)
    login(
        @Req()
        req: Request
    ){
        return req.user;
    }


    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(
        @Req()
        req: Request
    ){
        return req.user;
    }
}
