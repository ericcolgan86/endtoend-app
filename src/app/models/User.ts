export class User {
    public id: string;
    public firstName: string;
    public job: string;


constructor(data: any) {
    const self = this;

    Object.assign(self, data);
}

}