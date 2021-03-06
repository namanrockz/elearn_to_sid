var mongoose=require('mongoose');
const validator=require('validator');

//User Schema For Total Available Courses
const UserSchema=mongoose.Schema({
    course_name:{
        type:String,
        required:true
    },
    instructor_name:{
        type:String,
        required:true
    },
  content:[
      {
          topic: String,
          description: String
      }
    ]
});

const User=module.exports=mongoose.model('Total Courses',UserSchema);