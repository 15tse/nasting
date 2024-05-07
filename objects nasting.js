//ex one what to do? creat object with prperty and nasting the property adress as aobject with its own property
// adding multiple methods 

const student={
    FirstName:'tsegaye',
    Lastname:'abadi',
    age:'30',
    Adress:{// called nasting 
        city:'verginia',
        street:'22012',
        zipcode:'803',
    }


}
//ex-2
student.greet=()=>{
    console.log('hello '+student.FirstName);//add
}
student.changeadress=(newcity,newstreet)=>{
    student.Adress.city='MDV'
    student.Adress.street='2326'
    student.Adress.zipcode=22033
  
   

}// modifay or change
student.greet();// b/c we do not use return 
console.log(student.FirstName);
console.log(student.Lastname);
console.log(student.age);
student.changeadress();
console.log(student.Adress.city);//modified
console.log(student.Adress.street);//modified
console.log(student.Adress.zipcode);//not modified

