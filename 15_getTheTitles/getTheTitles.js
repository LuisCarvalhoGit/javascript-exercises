const getTheTitles = function(arr) {

    return arr.reduce((array, value) => {
        array.push(value.title)
        return array
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
