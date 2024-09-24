import HttpCommon from "../lib/HttpCommon";

const CrudIndex = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  create:  async function(values: any) {
    try{
//console.log("#getList");
      let item  = values;     
      const json = await HttpCommon.post(item, "/api/todo/create");
      let items = json;
      console.log(json);
      return items;
    } catch (e) {
      console.error(e);
    } 
  },  
  /**
  * 
  * @param
  *
  * @return
  */ 
  update:  async function(values: any) {
    try{
//console.log("#getList");
      let item  = values;     
      const json = await HttpCommon.post(item, "/api/todo/update");
      let items = json;
      console.log(json);
      return items;
    } catch (e) {
      console.error(e);
    } 
  },  

  /**
  * 
  * @param
  *
  * @return
  */ 
  getList:  async function() {
    try{
//console.log("#getList");
      let item  = {}      
      const json = await HttpCommon.post(item, "/api/todo/get_list");
      let items = json;
      //console.log(json);
      return items;
    } catch (e) {
      console.error(e);
    } 
  },
    /*
  * 
  * @param
  *
  * @return
  */ 
  getItem:  async function(id: number) {
    try{
      let item  = {
        id: id
      }      
      const json = await HttpCommon.post(item, "/api/todo/get");
      let items = json;
      //console.log(json);
      return items;
    } catch (e) {
      console.error(e);
    } 
  },    
  /**
  * 
  * @param
  *
  * @return
  */ 
  delete:  async function(id : number) {
    try{
//console.log("#getList");
      let item  = {
        id: id
      }      
      const json = await HttpCommon.post(item, "/api/todo/delete");
      let items = json;
      console.log(json);
      return items;
    } catch (e) {
      console.error(e);
    } 
  }, 
  
}
export default CrudIndex;