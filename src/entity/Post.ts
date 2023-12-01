import { ChildEntity, Column } from "typeorm";
import { Content1 } from "./Content1";

@ChildEntity()
export class Post extends Content1 {
    @Column()
    viewCount: number
}