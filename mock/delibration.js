import Mock from 'mockjs'

const Random = Mock.Random

export default [
    // 取得當前所列的所有議事
    // Random response five delibrations
    {
        url: '/delibration',
        type: 'get',
        response: () => {
            let delibrations = []
            for (let i = 0; i < 5; i++) {
                let delibration = {
                    "delibrationID": 'AX' + (i + 100).toString(),
                    "name": '第' + Random.cword('零一二三四五六七八九十') + '次財委會',
                    "createTime": '109-' + Random.date('MM-dd') + ' ' + Random.time('HH:mm:ss'),
                    "startTime": '109-' + Random.date('MM-dd') + ' ' + Random.time('HH:mm:ss'),
                    "endTime": '109-' + Random.date('MM-dd') + ' ' + Random.time('HH:mm:ss'),
                    "position": '第' + Random.cword('零一二三四五六七八九十') + Random.cword('零一二三四五六七八九十') + '期學生代表大會 財委',
                    "semester": Random.integer(100, 110),
                    "period": Random.integer(1, 4)
                }
                delibrations.push(delibration)
            }
            return delibrations
        }
    }
]