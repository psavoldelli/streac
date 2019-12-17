import { delay, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import Fetcher from '@services/fetcher';

class TodosService {
    private _subject: Subject<Todo[]> = new Subject<Todo[]>();

    get todos$(): Subject<Todo[]> {
        return this._subject;
    }

    load = () => {
        Fetcher('https://jsonplaceholder.typicode.com/todos').pipe(
            delay(3000), tap( (result) => this._subject.next(result) )
        ).subscribe();
    }

    refresh = () => {
        this._subject.next( [] );

        // reload data
        this.load();
    }
}

export default new TodosService();
