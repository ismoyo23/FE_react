interface ITask {
  id: number;
  title: string;
  description: string;
  status: number;
  createdAt: string;
}

type TaskState = {
  task: ITask[];
};

type TaskAction = {
  type: string;
  task: ITask;
};
type DispatchType = (args: ArticleAction) => ArticleAction;
