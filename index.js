function myUID (baseNum = 16) {
    /**--------------------------------------*
     * baseNum is only ranged for 2 -> 32
     * baseNum can accept only Integer value
     *---------------------------------------*/

    var timeNum = new Date().getTime();
    var randNum = Math.floor(
        Math.random(100, 999) * 10000
    );

    // prepare unique number
    var uNum = timeNum * randNum || timeNum;

    // generate the id key
    var idKey = uNum.toString(baseNum);

    // return the result
    return idKey;
}

module.exports = myUID;