import fetch from "cross-fetch";
/* an async self invoking function which should fetch data from an API */

/*(
    async function () {
        function getUsers() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('after 3 seconds');
                }, 3000);
            })
        }
        console.log('it is an async function');
        const value = await getUsers();
        console.log(value);
    }
)();*/
/*
* it is an async function
* after 3 seconds
* */


/* async await fetch */
(
    async function() {
        function getUsers() {
            return new Promise( ((resolve, reject) => {
                fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then(response => response.json())
                    .then(res => {
                        console.log('res ',res);
                        resolve(res);
                    })
                    .catch(err => console.log(err));
            }));
        }

        console.log('it is an async function');
        const value = await getUsers();
        console.log(value);
        console.log('after await');
    }
)();

/*
* it is an async function
* res  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
* { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
* after await
* */
