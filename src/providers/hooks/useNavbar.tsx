
import * as React from 'react';
import { Subject } from 'rxjs';

const subject$ = new Subject<boolean>();

/**
 * Custom Hook to manage a view Model for Users view components
 */
const useNavbar = (): [boolean, () => void, () => void ,() => void ] => {
    const [state, setState] = React.useState<boolean>(false);
    const open  = () => subject$.next(true);
    const close = () => subject$.next(false);
    const toogle = () => subject$.next(!state);

    /**
     * Build selectors for 'open' state changes
     * Manage subscriptions with auto-cleanup
     */
    React.useEffect(() => {
        const sub = subject$.subscribe( {  next: (value) => setState( value ) });

        return () => {
            sub.unsubscribe();
        };
    },[]);

    return [state, open, close, toogle];
};

export default useNavbar;
