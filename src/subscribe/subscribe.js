
import {store} from '../store/store';

store.subscribe(()=> {
    console.log("state is now::", store.getState());
})

