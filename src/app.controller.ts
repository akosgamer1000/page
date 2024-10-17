import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './user.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  @Get("order")
  @Render("rend")
  getrend(){
    return{

        errors:[],
        data:{}
    }
  }
  @Post("order")
  getpost(@Body() data:UserDto,@Res() res:Response){
    let errors:string[]=[]
    if(!data.acceptedTerms && !data.bankAccount && !data.name){
      errors.push("mindent ki kell tölteni")
    }
    if(errors.length>0){
      res.render("rend",{errors,data})
    }
    res.redirect(303,"succes")
  }
  @Get("succes")
  @Render("siker")
  getsiker(){

  }
}
