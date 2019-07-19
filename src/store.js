import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 const state={   //要设置的全局访问的state对象
     showFooter: true,
     changableNum:0,
     BackGroundColor:""
     //要设置的初始属性值
   };
const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //承载变化的showFooter的值
       return state.showFooter
    },
    getChangedNum(){  //承载变化的changebleNum的值
       return state.changableNum
    },
    GetBackGroundColor()
    {
        return state.BackGroundColor;
    }
};
const mutations = {
    show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.showFooter = true;
    },
    hide(state) {  //同上
        state.showFooter = false;
    },
    newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
       state.changableNum+=sum;
    },
    setBackGroundColor(state,SetValue){
        state.BackGroundColor=SetValue;
    }
};

const store = new Vuex.Store({
       state,
       getters,
       mutations
});

export default store;
//可以用 this.$store.commit('show')
// 或 this.$store.commit('hide') 
//以及 this.$store.commit('newNum',6) 
//在别的组件里面进行改变showfooter和changebleNum的值了