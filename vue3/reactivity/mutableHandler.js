/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-09-06 15:51:52
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-10-30 13:06:39
 */
import { isObject } from "../shared/utils";
import { reactive } from "./reactive";
import { hasOwnProperty, isEqual } from '../shared/utils';

const get = createGetter(), // creator
      set = createSetter(); // creator

function createGetter () {
  return function get (target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    // todo ......
    console.log('响应式获取：' + target[key]);
    
    if (isObject(res)) {
      return reactive(res);
    }
    console.log('res----->'+res)
    return res;
  } 
}

function createSetter () {
  return function set (target, key, value, receiver) {
    const isKeyExist = hasOwnProperty(target, key),
          oldValue = target[key],
          res = Reflect.set(target, key, value, receiver);
    // todo ......
    
    if (!isKeyExist) {
      console.log('响应式新增：' + value);
    } else if (!isEqual(value, oldValue)) {
      console.log('响应式修改：' + key + '=' + value);
    }
    console.log('res----->'+res)
    return res;
  }
}

const mutableHandler = {
  get,
  set
}

export {
  mutableHandler
}