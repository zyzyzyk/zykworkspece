import {State} from '@/store/home/interface';
import {Commit} from 'vuex';
import {getMovieList} from '@/api/movie'
const getters =  {

}

// 声明变量的类型， 变成强类型语言
const state: State = {
  movieList: [
    {
      name: 'hhh',
      title: '',
      id: '111'
    },
  ]
}

const mutations = {

}

const actions = {
  // api前后端的分离点
  // commit mutations
  async movieList(context: {commit: Commit}, cate: string) {
    const res = await getMovieList(cate)
      .then((response) => response)
    return res;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}