/**
 * Created by Benson on 2018/1/8.
 */

const host = 'http://192.168.0.137/app/';

export const getList = function () {
  const URL = 'api/announcement/getAllAnnouncement';
  const API = host + URL;
  return API;
};
