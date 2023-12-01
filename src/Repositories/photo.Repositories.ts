import { Photo } from "../entity/Photo";
import { AppDataSource } from "../data-source";

AppDataSource.initialize()
  .then(async () => {
    //const savedPhotos = await AppDataSource.manager.find(Photo)
    //console.log("数据库中的所有照片：", savedPhotos)
    const photoRepository = AppDataSource.getRepository(Photo);
    const allViewedPhotos = await photoRepository.findBy({ views: 1 });
    console.log("所有已查看的照片：", allViewedPhotos);
    const [photos, photosCount] = await photoRepository.findAndCount();
    console.log("所有照片：", photos);
    console.log("照片数量：", photosCount);
  })
  .catch((error) => console.error());
