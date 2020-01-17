import { delay, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject as Subject } from 'rxjs';
import Fetcher from '@services/fetcher';

class IngredientService {

    public root: string = 'https://localhost:5001';

    private _subject: Subject<IngredientItem[]> = new Subject<IngredientItem[]>([]);

    get todos$(): Subject<IngredientItem[]> {
        return this._subject;
    }

    load = () => {
        Fetcher<IngredientItem>( `${this.root}/ingredient`).pipe(
            tap( (result) => this._subject.next(result) )
        ).subscribe();
    }

    refresh = () => {
        this._subject.next( [] );

        // reload data
        this.load();
    }
}

export default new IngredientService();
