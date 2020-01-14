import Vue from 'vue'
import store from '@/store'

// 判断是否有权限操作按钮
/**
 *  v-auth 传入权限编码，在菜单管理中配置，目录、菜单、按钮权限
 *  exclusion 如果与本按钮互斥的权限存在则删除本节点
 *  text 用于将原DOM元素展示为Text,如table表格内，点击元素，查看详情功能
 */
const directive = Vue.directive('auth', {
  inserted: (el, binding) => {
    const authValue = binding.value || ''
    const authObj = typeof authValue === 'object' ? authValue : {}
    const auth = authObj.auth || authValue
    if (!auth) return
    const roles = store.getters.permission
    if (!(roles.indexOf(auth) !== -1) && el.parentElement) {
      if (authObj.text) {
        //将权限控制到可用text替换内容（如table表格点击查看详情）
        el.innerHTML = authValue.text
        return
      }
      el.parentElement.removeChild(el)
    }
    if (authObj.exclusion && roles.indexOf(authObj.exclusion) !== -1 && el.parentElement) {
      //将权限添加约束条件
      el.parentElement.removeChild(el)
    }
  }
})
// 输入框不能填写含有\的数据
const filterSpecialChar = Vue.directive('filterSpecialChar', {
  update: function(el, binding) {
    try {
      var pattern = binding.arg
        ? new RegExp(`[^${binding.arg}\.a-zA-Z0-9\\u4E00-\\u9FA5\_\-]`, 'g')
        : new RegExp(`[^\.a-zA-Z0-9\\u4E00-\\u9FA5\_\-]`, 'g')
      let newVal = el.children[0].value ? el.children[0].value.replace(pattern, '') : ''
      if (el.children[0].value !== newVal) {
        el.children[0].value = newVal
        el.children[0].dispatchEvent(new Event('input'))
      }
    } catch (e) {
      console.log(e)
    }
  }
})

export { directive, filterSpecialChar }
