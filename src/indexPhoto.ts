import { AppDataSource } from "./data-source";
import { Author } from "./entity/Author";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";

AppDataSource.initialize()
  .then(async () => {
    // 创建几个相册
    const album1 = new Author();
    album1.name = "Bears1";

    const album2 = new Author();
    album2.name = "Me1";

    await AppDataSource.manager.save(album2);
    await AppDataSource.manager.save(album1);

    console.log("作者已储存");

    // 创建几张照片
    const photo = new Photo();
    photo.name = "Me and Bears231";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;
    photo.authors = [album1, album2];

    await AppDataSource.manager.save(photo)
    console.log("照片已储存");

    // 现在我们的照片已保存，并且相册已与其关联
    // 现在让我们加载它们：
    // const loadedPhoto = await photoRepository.findOne({
    //   where: {
    //     id: 1,
    //   },
    //   relations: {
    //     authors: true,
    //   },
    // });
    // console.log(loadedPhoto);
  })
  .catch((error) => console.error());
