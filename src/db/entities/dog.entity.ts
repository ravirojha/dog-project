import { number, string } from 'joi';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'dogs' })
export class dogEntity extends BaseEntity {
 @PrimaryColumn()
 id: number;

 @Column()
 name: string;

 @Column()
 age: number;

 @Column()
  breed: string;
}
