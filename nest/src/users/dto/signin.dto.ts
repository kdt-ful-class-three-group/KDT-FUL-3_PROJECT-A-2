import { IsString } from 'class-validator';

export class SigninDto {
  @IsString()
  userid: string;

  @IsString()
  password: string;
}
