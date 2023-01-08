import { IsDate, IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MinLength(8)
  readonly password: string;

  @IsPhoneNumber()
  @MinLength(10)
  readonly phoneNumber: string;

  @IsString()
  readonly address: string;

  @IsDate()
  readonly birth: string;
}