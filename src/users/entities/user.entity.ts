import { Column, IsDate, IsEmail, Length, Model, Table, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {

  @Unique
  @Column
  @IsEmail
  readonly email: string;

  @Column
  readonly name: string;

  @Column
  @Length({ min: 8, max: 16 })
  readonly password: string;

  @Column
  @Length({ min: 10, max: 20 })
  readonly phoneNumber: string;

  @Column
  readonly address: string;

  @Column
  @IsDate
  readonly birth: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}