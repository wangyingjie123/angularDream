import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 11, name: '宫本武藏'},
            {id: 12, name: '亚瑟'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: '安其拉'},
            {id: 15, name: '东皇太一'},
            {id: 16, name: '赵云'},
            {id: 17, name: '狄仁杰'},
            {id: 18, name: '小乔'},
            {id: 19, name: '项羽'},
            {id: 20, name: '诸葛亮'}
        ];
        return {heroes};
    }
}