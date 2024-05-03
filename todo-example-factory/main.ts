import { TodoServiceFactory, StandardOutputFactory } from "./factory";
import { stdOutTodoList } from "./stdOutTodoList";

await stdOutTodoList(new TodoServiceFactory(), new StandardOutputFactory());