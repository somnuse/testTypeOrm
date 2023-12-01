import { Photo } from "../entity/Photo";
import { AppDataSource } from "../data-source";

AppDataSource.initialize()
  .then(async () => {
    //const savedPhotos = await AppDataSource.manager.find(Photo)
    //console.log("数据库中的所有照片：", savedPhotos)
    const photoRepository = AppDataSource.getRepository(Photo);
    const photo_update = await photoRepository.findOneBy({ id: 1 });
    console.log("所有已查看的照片：", photo_update );
    photo_update.name = "xiaowang";
    await photoRepository.save(photo_update);
  })
  .catch((error) => console.error());
