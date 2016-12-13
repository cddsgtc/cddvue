/**
 * Created by Administrator on 2016/10/13.
 */
function storageAvailable(type){
    try{
        var storage = window[type],
            x = '_storage_test_';
        storage.setItem(x,x);
        storage.removeItem(x);
        return true;
    }
    catch(e){
        return false;
    }
}