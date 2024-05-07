/* eslint-disable prettier/prettier */
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { catchError, Observable, tap } from 'rxjs';
import { AUTH_SERVICE } from './services';
import { ClientProxy } from '@nestjs/microservices';
import { User } from 'apps/auth/src/users/schemas/user.schema';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private authClient: ClientProxy) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const authentication = this.getAuthentication(context)
    return this.authClient.send('validate_user', {
        Authentication: authentication
    }).pipe(tap((res) => {
        this.addUser(res, context);
    }), catchError(() =>{
        throw new UnauthorizedException();
    }));
  }
    addUser(res: any, context: ExecutionContext) {
        if (context.getType() === 'rpc') {
            context.switchToRpc().getData().user = User
        } else if (context.getType() === 'http') {
            context.switchToHttp().getRequest().user = User
        }
    }
  private getAuthentication(context: ExecutionContext) {
    let authentication: string;
    if (context.getType() === 'rpc') {
        authentication = context.switchToRpc().getData().Authentication;
    } else if(context.getType() === 'http'){
        authentication = context.switchToHttp().getRequest().cookies?.Authentication
    }
    if (!authentication) {
        throw new UnauthorizedException('Value was not provided for this authentication');
    }
    return authentication;
  }
}
