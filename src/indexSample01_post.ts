import { AppDataSource } from "./data-source"
import { Post_sample01_post } from "./entity/sample01_post"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the Sample01_post database...")
    const sample01_post = new Post_sample01_post()
    sample01_post.text = "Timber123"
    sample01_post.title = "Saw"
    sample01_post.likesCount = 25
    await AppDataSource.manager.save(sample01_post)
    console.log("Saved a new sample01_post with id: " + sample01_post.id)

    console.log("Loading sample01_post from the database...")
    const sample01_post1 = await AppDataSource.manager.find(Post_sample01_post)
    console.log("Loaded sample01_post: ", sample01_post1)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
