$(document).ready(function(){

    jQuery.validator.addMethod("noSpace", function(value,element){
        return value.indexOf(" ")<  0 && value !="";
      },"No space please, Enter...");

    $("#submit-form").validate({
 
          rules:{
           name:{
                 required:true,
                 minlength:3,
                 noSpace:true,
                 
                
                 },
                 email:{
                   required:true,
                   email
                   },
                  PhoneNumber:{
                    required:true,
                    number:true,
                    minlength:10,
                    maxlength:10
 
                  }, 
                 
                  message:{ 
                   required:true,
                   minlength:10,
                  
           }  
          }
          })
       })
 
       $('#submitbutton').on('click', function() {
         $("#submit-form").valid();
     });