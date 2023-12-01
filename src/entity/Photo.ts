import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Relation, ManyToOne, ManyToMany } from "typeorm";
import { PhotoMetadata } from "./PhotoMetadata";
import { Author } from "./Author";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("double")
  views: number;

  @Column()
  isPublished: boolean; 

  // @OneToOne(()=>PhotoMetadata,(metadata)=>metadata.photo)
  // metadata: Relation<PhotoMetadata>

  @ManyToMany(() => Author, (author) => author.photos)
  authors: Author[]
}