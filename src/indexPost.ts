import { AppDataSource } from "./data-source"
import { Post } from "./entity/Post"


AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const post_1= new Post()
    post_1.title = "Post1"
    post_1.description = "test12398383"
    post_1.viewCount = 12
    // await AppDataSource.manager.save(question)
    const question_Repositories = AppDataSource.getRepository(Post)
    await question_Repositories.save(post_1)
    
    console.log("Saved a new Post with id: " + post_1.id)

    console.log("Loading Post() from the database...")
    const find_question = await question_Repositories.findOneBy({id:1})
    console.log("Loaded Post: ", find_question)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
