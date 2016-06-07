/**
 * Created by kissy小鬼 on 16/6/7下午6:00.
 */
const APIs = {

    urlRoot: 'http://h5.becomingjenny.net/kaola',

    reddit(reddit) {
        return this.urlRoot + `/${reddit}.json`
    }

}

export default APIs