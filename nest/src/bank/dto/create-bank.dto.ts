import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBankDto {
  @IsString()
  @IsNotEmpty()
  member_id: string;

}