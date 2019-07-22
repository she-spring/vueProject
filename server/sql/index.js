const sql = {

    //封装一个添加的函数
    insert: function (Collection, insertData) {
      return new Promise(function (resolve, reject) {
        Collection.insertMany(insertData, (err) => {
          if (err) throw err;
          resolve()
        })
      })
    },
    //封装一个查找的函数
    find: function (Collection, whereObj, showObj) {
      return new Promise(function (resolve, reject) {
        Collection.find(whereObj, showObj).exec((err, data) => {
          if (err) throw err;
          resolve(data)
        })
      })
  
    },
    //封装一个编辑的函数
    update: function (Collection, whereObj, updateObj, updateType) {
      return new Promise((resolve, reject) => {
        updateType = updateType || 'updateOne'
        Collection[updateType](whereObj, updateObj, (err) => {
          if (err) throw err;
          resolve();
        })
      })
    },
    //封装一个删除的函数
    delete: function (Collection, whereObj, deleteType) {
      return new Promise((resolve, reject) => {
        deleteType = deleteType || 'deleteOne';
        Collection[deleteType](whereObj, (err) => {
          if (err) throw err;
          resolve();
        })
      })
    },
    //封装一个分页的函数
    paging: function (Collection, whereObj, showObj, count, pageNum) {
      return new Promise(function (resolve, reject) {
        Collection.find(whereObj, showObj).limit(count).skip((pageNum - 1) * count).exec((err, data) => {
          if (err) throw err;
          resolve(data)
        })
      })
  
    },
    //封装一个分类的函数（一般常用电商网站的商品分类）
    class: function (Collection, type) {
      return new Promise(function (resolve, reject) {
        Collection.distinct(type).exec((err, data) => {//去重
          if (err) throw err;
          resolve(data);
        })
      })
  
    }
  
  }
  
  module.exports = sql;
  