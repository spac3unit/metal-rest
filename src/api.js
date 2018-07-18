// https://github.com/gothinkster/react-mobx-realworld-example-app/blob/master/src/agent.js
import superagent from 'superagent'

const API_ROOT = 'https://localhost:3020/api'

const handleErrors = err => {
  if (err && err.response && err.response.status === 401) {
    authStore.logout()
  }
  return err
}
const tokenPlugin = req => {
  if (commonStore.token) {
    req.set('authorization', `Token ${commonStore.token}`)
  }
}
const responseBody = res => res.body

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).end(handleErrors).then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).end(handleErrors).then(responseBody),
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).end(handleErrors).then(responseBody),
}

const Auth = {
  login: (email, password) => requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user => requests.put('/user', { user }),
}

const Genres = {
  all: (page, lim = 10) => requests.get(`/articles?${limit(lim, page)}`),
  byAuthor: (author, page, query) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag, page, lim = 10) => requests.get(`/articles?tag=${encode(tag)}&${limit(lim, page)}`),
}

const Albums = {
  byGenre: genre => request.get(`/albums/${genre}`),
}

export default {
  Albums,
  Auth,
  Genres,
}
