import { Entity, TableInheritance, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Content1 {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string
}