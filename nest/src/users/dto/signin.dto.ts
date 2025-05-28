import { IsEmpty, IsString, MinLength } from 'class-validator';

export class SigninDto {
  @IsString()
  @IsEmpty()
  userid: string;

  @IsString()
  @IsEmpty()
  password: string;
}
