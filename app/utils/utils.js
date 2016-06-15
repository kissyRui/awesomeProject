/**
 * Created by kissy小鬼 on 16/6/15-上午12:48.
 */
let Util = {
    /*
     * fetch简单封装
     * url: 请求的URL
     * successCallback: 请求成功回调
     * failCallback: 请求失败回调
     *
     * */
    get: (url, successCallback, failCallback) => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                successCallback(json)
            })
            .catch((err) => {
                failCallback(err)
            })
    }
}

export default Util