var forEach = function(array, callback) {
    for (var item = 0; item < array.length; item++)
    {
        callback(array[item]);
    }
};