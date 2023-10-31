import { createStore } from 'vuex'
const store=createStore({
  state(){
      return {
        // 发现音乐
        songList:{},
        playNum:'',
        // 歌单详情数据
        songDate:{}
      }
  },
  // getters相当于computed属性，当对应的state中的数据变化时执行
  getters:{
      // // 第一个参数默认是state，当msg变化时具有响应式
      // reverMsg(state){
      //     return state.msg.split('').reverse().join('')
      // },
      // // getters是当前store下的getters属性
      // getLength(state,getters){
      //     return getters.reverMsg.length
      // }
  },
  mutations:{
      // //通过store.commit方法触发对应函数状态变更，是同步函数  
      // //  默认第一个参数时createStore中的state
      // btnClick(state,value){
      //     state.count+=value
      // },
      // btnMsg(state,Msg){
      //     state.msg=Msg
      // }
    // 获取歌单总数据
    getSonglist(state,song){
      state.songList=song
    },
   //获取歌单播放次数  
    getplayNum(state,num){
      state.playNum=num
    },
    // 获取歌单详情数据
    getsongDate(state,songDate){
      state.songDate=songDate
      console.log('getsongDate:',songDate);
    }
  },
  // 异步函数
  actions: {
  },
  // 局部store模块
  modules: {
  }
})
export default store

