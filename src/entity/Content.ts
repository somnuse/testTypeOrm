import { PrimaryGeneratedColumn, Column, Entity } from "typeorm"


export abstract class Content {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string
}