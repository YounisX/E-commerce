
class ApiFeature {

constructor(mongooseQuery,queryData){
    this.mongooseQuery = mongooseQuery;
    this.queryData = queryData;
}

paginate(){
    let{page,size} = this.queryData;
    if(!page||page<=0){
        page = 1 ; 
      }
      if(!size||size<=0){
        size = 3 ; 
      }
      //equation to get the number of pages to skip in pagination
      let skip  = (page - 1) * size;
     this.mongooseQuery.skip(skip).limit(size);
     return this;

}

filter(){
let excludeQueryParams = ['page','size','sort','search','fields'];
let filterQuery ={...this.queryData}
excludeQueryParams.forEach(param=> delete filterQuery[param]);
this.mongooseQuery.find(JSON.parse(JSON.stringify(filterQuery).replace(/(gt|gte|lt|lte|in|nin|eq|neq)/g,match=>`$${match}`)));
return this 
}

sort(){
this.mongooseQuery.sort(this.queryData.sort?.replaceAll(","," ")) ; 
return this ; 
}

search(){

if(this.queryData.search){
  this.mongooseQuery.find({
    $or:[
    {name:{$regex:this.queryData.search,$options:'i'}},
    {description:{$regex:this.queryData.search,$options:'i'}}
    ]
  })
}
return this ; 
}
}


export default ApiFeature;