import { Entity, PrimaryColumn, Generated, Column } from "typeorm"


@Entity({database:"sample01_post"})
export class Post_sample01_post {
    @PrimaryColumn()
    @Generated()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @Column({ nullable: false })
    likesCount: number
}