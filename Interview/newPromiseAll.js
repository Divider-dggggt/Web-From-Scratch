Promise.All = Promise.All || function (promises) {
    return new Promise(function(resolve, reject) {
        var length = promises.length;
        var results = [];
        
        for (var i = 0; i < length; i++) {
            (function(i) {
                Promise.resolve(promises[i]).then(function(value){
                    results.push(value);
                }).catch(function(error) {
                    reject(error);
                });
            })(i);
        }
    });
};