import { AppDataSource } from "./data-source"
import { Question } from "./entity/Question"


AppDataSource.initialize().then(async () => {

    // const answersCount = 1111
    // console.log("Inserting a new user into the database...")
    // const question = new Question()
    // question.title = "提问"
    // question.description = "test12398383"
    // question.answersCount = 12
    // // await AppDataSource.manager.save(question)
    // const question123 = new Question()
    // question123.title = "提问123"
    // question123.description = "tes383"
    // question123.answersCount = 1111
    // const question_Repositories = AppDataSource.getRepository(Question)
    // await question_Repositories.save(question)
    // await question_Repositories.save(question123)
    
    // console.log("Saved a new sample01_post with id: " + question.id)

    // console.log("Loading Question() from the database...")
    // const find_question = await question_Repositories.createQueryBuilder('quest')
    // find_question.where(`quest.answersCount = :answersCount`, { answersCount })
    // const q = await find_question.getOne()
    // console.log("Loaded Question: ", q)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
