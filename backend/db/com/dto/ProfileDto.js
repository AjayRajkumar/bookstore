const MasterMongoConnector=require('../util/MasterMongoConnector');

/**
 * ProfileDtoSchema definition
 * @type {{profileName: StringConstructor, firstName: StringConstructor, lastName: StringConstructor, lastUpdatedUserId: StringConstructor, description: StringConstructor, location: StringConstructor, lastUpdatedDateTime: DateConstructor, profileNumber: NumberConstructor, experience: ArrayConstructor}}
 */
const ProfileDtoSchemaObj={
    profileName:String,
    firstName:String,
    lastName:String,
    profileNumber:Number,
    location:String,
    experience:Array,
    lastUpdatedDateTime: Date,
    lastUpdatedUserId: String,
    description:String
};

const ProfileDtoSchema=new MasterMongoConnector.Schema(ProfileDtoSchemaObj,{ strict: false });
const ProfileDto=new MasterMongoConnector.model('ProfileDto',ProfileDtoSchema);



/**
 * getProfile method used to the profile name
 * @param name
 * @returns {Query|void|number|never|bigint|T|T}

ProfileDto.methods.getProfile=function (name) {
    return this.model.find({name:this.name},name)
};

 */

/**
 *Export the require Dto
 * @type {{ProfileDto}}
 */
module.exports=ProfileDto;