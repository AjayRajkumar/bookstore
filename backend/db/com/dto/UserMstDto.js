const MasterMongoConnector=require('../util/MasterMongoConnector');

/**
 * UserMstDtoSchema definition
 * @type {{lastUpdatedUserId: StringConstructor, userInfo: MapConstructor, code: NumberConstructor, name: StringConstructor, language: StringConstructor, lastUpdatedDateTime: DateConstructor, userName: StringConstructor, corpCode: StringConstructor}}
 */
const UserMstDtoSchemaObj={
    name:String,
    code:Number,
    userName:String,
    lastUpdatedUserId:String,
    lastUpdatedDateTime:Date,
    corpCode:String,
    language:String,
    userInfo:Map,
};

const UserMstDtoSchema=new MasterMongoConnector.Schema(UserMstDtoSchemaObj,{ strict: false });

/**
 * name used to return the name
 * @param name
 * @returns {Query|void|number|never|bigint|T|T}

UserMstDtoSchema.methods.name=function (name) {
    return this.model.find({name:this.name},name);
};
 */
const UserMstDto=new MasterMongoConnector.model('UserMstDto',UserMstDtoSchema);

/**
 * Exporting the UserMstDto
 * @type {{UserMstDto}}
 */
module.exports=UserMstDto;


