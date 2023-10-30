export class TaskModel {
  public readonly id: string = "";
  public readonly name: string = "";
  public readonly description: string = "";
  public readonly reference: string = "";
  public readonly provider: string = "";
  public readonly task: string = "";

  isFree() {
    return false;
  }

  async loadModel() {
    throw new Error("Not implemented");
  }
}
