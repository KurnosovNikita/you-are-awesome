// DO WHATEVER YOU WANT HERE
const sortFilter = (left, right) => left.photo - right.photo;

const createEnumerableProperty = (enumerableProperty) => {
    return enumerableProperty
};

const createNotEnumerableProperty = (notEnumerableProperty) => {
    Object.defineProperty(Object.prototype, notEnumerableProperty, {
        enumerable: false,
        value: 'value'
    });
    return notEnumerableProperty;
};

const createProtoMagicObject = () => {
    var newFunctionForPhoto = function () {};
    newFunctionForPhoto.prototype = newFunctionForPhoto.__proto__;
    return newFunctionForPhoto;
};

var inc = 0;
const incrementor = () => {
    inc++;
    return incrementor;
};

incrementor.valueOf = function () {
    return inc;
}

const asyncIncrementor = () => {};

const createIncrementer = () => {
    return increment();

};

function* increment() {
    var inc = 1;
    while (true) {
        yield inc++;
    }
}

// return same argument not earlier than in one second, and not later, than in two

const returnBackInSecond = (delay) => {
    return new Promise((resolve) => setDelay(resolve, delay));
};

function setDelay(resolve, delay) {
    setTimeout(() => {
        resolve(delay);
    }, 1001);
}

const getDeepPropertiesCount = () => {};

const createSerializedObject = () => ({
    property: "object",
    toJSON: () => "",
    toString: () => "",
});

const toBuffer = () => {};

const sortByProto = (objects) => objects.sort(sortFilter);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
