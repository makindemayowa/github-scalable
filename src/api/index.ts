import { fetchRequest } from './rest'

export function searchUsers (body: {}) {
  return fetchRequest('/search/users',
    'get',
    body)
}
