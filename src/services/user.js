import { request } from 'umi';

export default {
  async login(data) {
    return request('/login', {
      data,
      method: 'post',
    });
  },
};
