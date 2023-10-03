import store from "./Store"
export function StudentAction(value){
    return(
        store.dispatch({
            type:'STUDENT',
            payload:value
        })
    )
}
export function AdminAction(value){
    return(
        store.dispatch({
            type:'ADMIN',
            payload:value
        })
    )
}
export function StuAuthAction(value){
    return(
        store.dispatch({
            type:'STUAUTH',
            payload:value
        })
    )
}
export function TeachAuthAction(value){
    return(
        store.dispatch({
            type:'TEACHAUTH',
            payload:value
        })
    )
}

