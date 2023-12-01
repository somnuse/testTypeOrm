import { AppDataSource } from "./data-source";
import { Category } from "./entity/Category";
import { Question } from "./entity/Question";

AppDataSource.initialize()
  .then(async () => {
    const category1 = new Category()
category1.name = "animals"
await AppDataSource.manager.save(category1)

const category2 = new Category()
category2.name = "zoo"
await AppDataSource.manager.save(category2)

const question = new Question()
question.title = "測試01"
question.text = "test01"
question.categories = Promise.resolve([category1, category2])
await AppDataSource.manager.save(question)

const [question1] = await AppDataSource.getRepository(Question).find()
const categories = await question1.categories

console.log(categories)
  })
  .catch((error) => console.error());
