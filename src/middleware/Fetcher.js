// const fetcherMiddleware = store => next => action => {
//     store.dispatch({
//         type: "fetch_started"
//     });
//     next(action)
//     fetch("https://jsonplaceholder.typicode.com/todos")
// 			.then(res => res.json())
// 			.then(response => {
//                 store.dispatch()
//                 next({
//                     type: "fetch_completed",
//                     payload: response
//                 })
// 			})
// 			.catch();
// }