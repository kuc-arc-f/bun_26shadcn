
const tableData = {
  items: [],
  /**
  * 
  * @param
  *
  * @return
  */ 
  create: function(body: any){
    try {
      if(!body){
        throw new Error("nothing, body");
      }
console.log(body);
      let rNum = Math.floor(Math.random() * 10000);
      let statNum = Math.floor(Math.random() * 2);
      let stat  = "success";
      if(Number(statNum) === 0){
        stat  = "failed";
      }
      let row = {
        id: String(this.items.length + 1),
        amount: Number(body.amount),
        status: stat,
        email: body.email,
      }
      this.items.push(row);
      return this.items;
    } catch (error) {
      console.error(error);
      throw new Error("error, create");
    }
  },
  /**
  * 
  * @param
  *
  * @return
  */
  getList: function(){
    try {
      return this.items;
    } catch (error) {
      console.error(error);
      throw new Error("error, getList");
    }
  },
  /**
  * 
  * @param
  *
  * @return
  */ 
  addList: function(){
    try {
      const maxNum = 3;
      for (let i = 1; i <= maxNum; i++){
        let rNum = Math.floor(Math.random() * 10000);
        let statNum = Math.floor(Math.random() * 2);
        //console.log("statNum = ", statNum);
        let stat  = "success";
        if(Number(statNum) === 0){
          stat  = "failed";
        }
        let row = {
          id: String(i),
          amount: Number(rNum),
          status: stat,
          email: `testname-${String(rNum)}@test.com`,
        }
        this.items.push(row);
      }
      return this.items;
    } catch (error) {
      console.error(error);
      throw new Error("error, addList");
    }
  },
  /**
  * 
  * @param
  *
  * @return
  */ 
  delete: function(body: any){
    try {
      if(body) {
console.log("id=", body.id);
//        const result = this.items.filter((item) => Number(item.id) === body.id);
        const out: any[] = [];
        this.items.forEach((item) => {
          console.log(item)
          if(Number(item.id) !== body.id){
            out.push(item);
          }
        });
        this.items = out;
console.log(this.items);
        return this.items;
      }
      throw new Error("error, nothig body");
    } catch (error) {
      console.error(error);
      throw new Error("error, delete");
    }
  },
}

export default tableData;
