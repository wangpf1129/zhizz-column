interface RuleRef {
  type: 'required' | 'email' | 'password' | 'nickname';
  message: string;
}

export type RulesProp = RuleRef[]
export const emailReg = /^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/;
// 长度至少为8，至少含有一个字母和一个数字
export const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const emailRules: RulesProp = [
  {type: 'required', message: '电子邮箱地址不能为空'},
  {type: 'email', message: '请输入正确的电子邮箱格式'},
];
export const passwordRules: RulesProp = [
  {type: 'required', message: '密码不能为空'},
  {type: 'password', message: '长度至少为8，至少含有一个字母和一个数字'},
];
export const nicknameRules: RulesProp = [
  {type: 'required', message: '昵称不能为空'}
];
