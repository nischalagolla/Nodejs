import { Controller, Get, Param, Post, Render, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';

@Controller('user')
export class UserController {

    @Get()
    homepage(@Res() res:Response) {
        return res.render("homepage")
      }


    @Get('/signup')
    signupuser(@Res() res:Response) {
      return res.render("signup")
    }

    @Post('/login')
    loginuser(@Res() res:Response){
        return res.render("login")

    }

    @Post('/welcome')
    welcomeuser(@Res() res:Response){
        return res.render("welcome")

    }
}