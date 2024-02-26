import db from "../database";

function queryAsync(sql: any, values?: any): any {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

export default queryAsync;