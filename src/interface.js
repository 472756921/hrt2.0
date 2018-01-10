/**
 * Created by Benson on 2018/1/8.
 */

const host = 'http://118.31.38.185:8081/app/api';
//公告list
export const getList = function () {
  const URL = '/announcement/getAllAnnouncement';
  const API = host + URL;
  return API;
};
// save 公告
export const saveAn = function () {
  const URL = '/announcement/save';
  const API = host + URL;
  return API;
};


//团队列表
export const teamList = function () {
  const URL = '/team/list';
  const API = host + URL;
  return API;
};
//添加团队
export const teamAdd = function () {
  const URL = '/team/add';
  const API = host + URL;
  return API;
};


//上传图片
export const uploadImg = function () {
  const URL = '/team/uploadImg';
  const API = host + URL;
  return API;
};

//健管师列表
export const healthTeacherList = function () {
  const URL = '/team/healthTeacherList';
  const API = host + URL;
  return API;
};
