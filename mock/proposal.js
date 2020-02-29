//import Mock from 'mockjs'

//const Random = Mock.Random

const delibration = [
  {
    delibrationID: 'AX100',
    proposals: [{
        "proposalID": 'A320000',
        "sponsor": "學生會長",
    }, {
        "proposalID": 'A320001',
        "sponsor": "文學院代",
    }]
  },
  {
    delibrationID: 'AX101',
    proposals: [{
        "proposalID": 'A320000',
        "sponsor": "工學院代",
    }, {
        "proposalID": 'A320001',
        "sponsor": "理學院代",
    },{
      "proposalID": 'A320002',
      "sponsor": "學生會長",
    }]
  }
]

const proposal = {
    "dept": "會長 蔡一愷",
    "reason": "行政部門第一預算期間追加預算三讀案，共計76,700元整",
    "description": ["一、第一預算期間(6月至9月)追加預算共76,700元整，詳如附表。", "二、第一會期第一次常會(6 / 11) 一讀通過， 附帶決議准許行政部門先動支後補正程序", "三、 第一會期第一次財政與預算委員會二讀通過， 詳見會議記錄。"],
    "discussion": "討論中",
}

const vote = {
    "isVote": "1",
    "proposalID": "A320000",
    "result": "同意"
}

export default [
    //取得某特定議事的所有議案 /proposal/:delibrationID
    //Request for AX100, return two proposals
    {
        url: '/proposal/' + delibration[0].delibrationID,
        method: 'get',
        response: () => {
            return delibration[0].proposals
        }
    },
    //Request for AX101, return three proposals
    {
      url: '/proposal/' + delibration[1].delibrationID,
      method: 'get',
      response: () => {
          return delibration[1].proposals
      }
    },
    //取得某特定議案內容 /proposal/:delibrationID/:proposalID
    //Request for AX100/A320000, Return proposal
    {
        url: '/proposal/' + delibration[0].delibrationID + '/' + delibration[0].proposals[0].proposalID,
        method: 'get',
        response: () => {
            return proposal
        }
    },
    //針對當前議案進行記名投票 /proposal/vote
    {
        url: '/proposal/vote',
        method: 'post',
        response: (req) => {
            const {
                proposalID,
                isTime,
                studentID
            } = req.body
            if (proposalID && isTime && studentID) {
                return vote
            } else {
                return {
                    "isVote": "0",
                    "proposalID": null,
                    "result": null
                }
            }
        }
    },
    //計算並顯示當前議案的投票結果 /proposal/voteResults
    {
        url: '/proposal/voteResults',
        method: 'post',
        response: (req) => {
            const {
                caseID
            } = req.body
            if (caseID) {
                return {
                    "caseName": "修正動議投票",
                    "result": "同意",
                    "vote": {
                        "agree": 22,
                        "against": 2,
                        "null": 1
                    },
                    "percent": {
                        "agree": 88,
                        "against": 8,
                        "null": 4
                    }
                }
            } else {
                return {
                    code: 60204,
                    message: "request body not valid"
                }
            }
        }
    },
    //顯示當前議案記名投票的詳細結果 /proposal/resultsList
    {
        url: '‘/proposal/resultsList',
        method: 'post',
        response: (req) => {
            const {
                delibrationID,
                proposalID
            } = req.body

            if (delibrationID && proposalID) {
                return [{
                        "index": 1,
                        "department": '不分系代',
                        "name": '暫無',
                        "voteResult": 0
                    },
                    {
                        "index": 2,
                        "department": '中文系代',
                        "name": '賴偉軒',
                        "voteResult": 1
                    }
                ]
            } else {
                return {
                    code: 60204,
                    message: "request body not valid"
                }
            }
        }
    }
]