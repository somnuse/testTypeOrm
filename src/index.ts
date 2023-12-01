import path from "path"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")
    const queryRunner = AppDataSource.createQueryRunner()

    // 从连接池中获取一个连接
    await queryRunner.connect()
    
    // 使用该连接执行查询
    const users = await queryRunner.manager.find(User)
    console.log(users)
    
    // 使用完毕后不要忘记释放连接
    await queryRunner.release()
    console.log(path.join(__dirname,"/entity/*.ts"))

}).catch(error => console.log(error))
