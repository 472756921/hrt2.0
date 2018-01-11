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
// del 公告
export const delan = function () {
  const URL = '/announcement/deleteAnnouncementById';
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
//修改团队
export const teamedit = function () {
  const URL = '/team/edit';
  const API = host + URL;
  return API;
};
//团队详情
export const teamdetail = function () {
  const URL = '/team/detail';
  const API = host + URL;
  return API;
};
//团队删除
export const teamdelete = function () {
  const URL = '/team/delete';
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
//健管师列表
export const healthTheacher = function () {
  const URL = '/healthTheacher/findAllPage';
  const API = host + URL;
  return API;
};
export const newhealthTheacher = function () {
  const URL = '/healthTheacher/save';
  const API = host + URL;
  return API;
};
export const deletehealthTheacher = function () {
  const URL = '/healthTheacher/delete';
  const API = host + URL;
  return API;
};
