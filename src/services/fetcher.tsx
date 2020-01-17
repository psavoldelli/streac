import { delay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const Fetcher = < T extends {} >(url: string) => {

    const data$ = new Observable<T[]>((observer) => {
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
