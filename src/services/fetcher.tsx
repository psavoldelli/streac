import { delay, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

const Fetcher = (url: string) => {

    const data$ = new Observable<Todo[]>((observer) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                observer.next(data);
                observer.complete();
        }).catch((err) => observer.error(err));
    });

    return data$;
};

export default Fetcher;
