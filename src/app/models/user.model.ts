export class UserModel {
  public id: string;
  constructor(
    public userName: string = '',
    public userEmail: string = '',
    public category: string = '',
    public group_name: string = '',
    public password: string = ''//
  ) { }
}
