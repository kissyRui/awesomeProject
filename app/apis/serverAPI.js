/**
 * Created by kissy小鬼 on 16/6/7下午6:00.
 */
const APIs = {

    urlRoot: 'http://h5.becomingjenny.net/kaola',

    url: 'http://food.boohee.com/fb/v1',

    reddit(reddit) {
        return this.urlRoot + `/${reddit}.json`
    },

    cartList() {
        return this.urlRoot + `/cart.json`
    },

    banners() {
        return this.url + '/home/banners'
    },

    feeds(page) {
        return this.url + `/feeds?page=${page}&per=10`
    }

}

export default APIs