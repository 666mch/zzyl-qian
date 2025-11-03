import request from '@/utils/request'

// 查询护理等级列表
export function listLevel(query) {
  return request({
    url: '/system/level/list',
    method: 'get',
    params: query
  })
}

// 查询护理等级详细
export function getLevel(id) {
  return request({
    url: '/system/level/' + id,
    method: 'get'
  })
}

// 新增护理等级
export function addLevel(data) {
  return request({
    url: '/system/level',
    method: 'post',
    data: data
  })
}

// 修改护理等级
export function updateLevel(data) {
  return request({
    url: '/system/level',
    method: 'put',
    data: data
  })
}

// 删除护理等级
export function delLevel(id) {
  return request({
    url: '/system/level/' + id,
    method: 'delete'
  })
}
