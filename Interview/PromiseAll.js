Promise.all = Promise.all || function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    promises.forEach((promise, index) => {
      promise.then(result => {
        results[index] = result;
        completed += 1;
        if (completed === promises.length) {
          resolve(results);
        }
      }).catch(reject);
    });
  });
}