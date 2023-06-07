export class DataBase {
    private static database: DataBase;
    constructor(
        private host: string,
        private user: string,
        private password: string,

    ) { }
    connect() {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
    }
    static getDataBase(host: string, user: string, password: string,): DataBase {
        if (DataBase.database) {
            console.log('Retornando instancia já criada');
            return DataBase.database;
        }
        console.log('Criando nova instancia');
        DataBase.database = new DataBase(host, user, password);
        return DataBase.database;
    }
}

const db1 = DataBase.getDataBase('localhost', 'root', '123456');
db1.connect();
const db2 = DataBase.getDataBase('localhost', 'root', '123456');
db2.connect();


