import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalGuard extends AuthGuard('local') {
    handleRequest(err, user, info, context: ExecutionContext) {
        if (err || !user) {
            console.error('Error in LocalGuard:', err || info);
            throw err || new UnauthorizedException('Invalid credentials');
        }
        return user;
    }
}
