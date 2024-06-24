import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/auth-login.dto';
// import { UpdateAuthDto } from './dto/auth-register.dto';
import { AuthRegisterDto} from './dto/auth-register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/auth.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>

  ){}

  // async signUp(authRegisterDto: AuthRegisterDto){

  //   const { username, email, password } = authRegisterDto;

  //   const userAuth = await this.userRepository.create({username, email, password});

  //   return await this.userRepository.save(userAuth);
 
  // }

  

  async signUp(authRegisterDto: AuthRegisterDto){

    const { username, email, password } = authRegisterDto;
    
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    //console.log('salt', salt)
    //console.log('hash', hash);
    
    const userAuth = await this.userRepository.create({username, email, password: hashPassword});

    //console.log(userAuth);
    //return 'hola' 


   

    const getUser = await this.userRepository.findOne({
      where: {
        email
      }
    })
    
    if ( getUser) throw new ConflictException('Email already exists');

    return await this.userRepository.save(userAuth);
    
    
  }

  

}


  // signUp(authRegisterDto: AuthRegisterDto) {
  //   console.log('Servicio', authRegisterDto);

  //   return 'hola'

  // }

  
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }

