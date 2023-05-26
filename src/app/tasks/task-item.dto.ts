export class TaskItem {
  constructor(public title: string) {
  }

  toogleIsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
