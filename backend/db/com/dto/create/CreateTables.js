const UserMstDto=require('../UserMstDto');
const ProfileDto=require('../ProfileDto');

let UserMstDtoModel=new UserMstDto({
    name:"Rajkumar",
    code:"2000"
});

let ProfileDtoModel=new ProfileDto({
    name:"Rajkumar",
    code:"2000"
});


UserMstDtoModel.save().then(function () {
    
});


ProfileDtoModel.save().then(function () {
    
});

