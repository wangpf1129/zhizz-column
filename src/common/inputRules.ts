interface RuleRef {
  type: 'required' | 'email' | 'custom'
  message: string
  validator?: () => boolean
}

export type RulesProp = RuleRef[]
export type TagProp = 'input' | 'textarea'

export const emailReg = /^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/;

export const emailRules: RulesProp = [
  {type: 'required', message: '电子邮箱地址不能为空'},
  {type: 'email', message: '请输入正确的电子邮箱格式'},
];
export const passwordRules: RulesProp = [
  {type: 'required', message: '密码不能为空'},
  {type: 'custom', message: '长度至少为6'},
];
export const nicknameRules: RulesProp = [
  {type: 'required', message: '昵称不能为空'},
];
