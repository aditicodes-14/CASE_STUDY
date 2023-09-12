class UserService{
    getApiBaseUrl(){
        return "http://localhost:5027/api/"
    }
}
async createHashRouter(data){
    var msg='';

await fetch(this.getApiBaseUrl()+'User/AddUser',{
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    bosy:JSON.stringify(data)
})
.then(res => res.json())
.then(res=>msg=res)
.catch(err=>msg=err)
return msg;
}
async getUser(){
    var result=[];
    await  fetch(this.getApiBaseUrl()+'User/GetAll')
    .then(res=>res.json())//response
    .then(res=>result=res)//Access response
    .catch(err=>result=result.push(err))
    return result;
}
}
export default new UserService();
