// URL函数
//  参数一：目标文件相对于本文件的相对路径
//  参数二：本文件的绝对路径
export const getTabBarImgURL = imgName =>
  new URL(`../assets/img/tab-bar/${imgName}`, import.meta.url).href
