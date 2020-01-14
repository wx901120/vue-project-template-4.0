const NODE_ENV = "pro"; //正式环境
// const NODE_ENV = 'local' //本地联调-首先打开注释，然后修改需要联调的local-IP

const hostUrl = {
  pro: process.env.VUE_APP_HOST_URL, // 线上IP地址 --- 不要改,这里的HOST_URL需要在根目录下的env中配置,详见各env.xx文件
  local: "http://10.8.xxx.xxx", // 本地联调IP
  // local:'http://10.8.xxx.xxx',      // 本地联调IP
  bzl: "http://10.8.xxx.xxx" //.net环境
};
const proxy = {
  pro: {
    identity: hostUrl.pro,
    common: hostUrl.pro,
    mes: hostUrl.pro,
    devicesimulator: hostUrl.pro,
    bzl: hostUrl.bzl + ":9090"
  },
  local: {
    identity: hostUrl.local + ":8082",
    common: hostUrl.local + ":8083",
    mes: hostUrl.local + ":8084",
    devicesimulator: hostUrl.pro + ":8084",
    bzl: hostUrl.bzl + ":9090"
  }
};
const host = hostUrl[NODE_ENV];
const hostproxy = proxy[NODE_ENV];

module.exports = {
  host,
  hostproxy
};
