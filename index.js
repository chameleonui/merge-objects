function MergeObjects(objectA, objectB) {

    var merge = function(objectA, objectB) {
        if (typeof objectB === 'object') {
            for (var i in objectB) {
                if (!(objectA[i])) {
                    objectA[i] = objectB[i];
                } else {
                    merge(objectA[i], objectB[i]);
                }
            }
        }
    };

    if (typeof objectA === 'object' && typeof objectB === 'object') {
        merge(objectA, objectB);
    } else {
        throw '"' + objectA + '" and/or "' + objectB + '" is not a object';
    }

    return objectA;
}

module.exports = MergeObjects;