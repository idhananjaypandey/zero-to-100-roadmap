// Callback example
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Async data';
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

// Promise example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async data');
        }, 1000);
    });
}

fetchData().then(data => console.log(data));

// Async/Await example
async function fetchData() {
    const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async data');
        }, 1000);
    });
    console.log(data);
}
fetchData();
