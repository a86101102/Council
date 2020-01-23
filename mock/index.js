import Mock from 'mockjs'
import user from './user'
import delibration from './delibration'
import proposal from './proposal'

const baseUrl = '/api'

const mocks = [
    ...user,
    ...delibration,
    ...proposal
]

for (const i of mocks) {
    Mock.mock(baseUrl + i.url, i.type || 'get', i.response)
}