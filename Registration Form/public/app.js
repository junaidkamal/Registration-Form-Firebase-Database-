// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { ref, set, push, getDatabase, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJlq8YFI6WUO0UWiYa39wFfmLq2l_v92E",
  authDomain: "registrationform-ca686.firebaseapp.com",
  projectId: "registrationform-ca686",
  databaseURL: "https://registrationform-ca686-default-rtdb.firebaseio.com",
  storageBucket: "registrationform-ca686.appspot.com",
  messagingSenderId: "856947013487",
  appId: "1:856947013487:web:0d46812da07e0e28cb1a9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();




const selectCity = document.querySelector('.details select');
const fullname = document.querySelector('.details input');
const email = document.querySelector('.details input[type="email"]');
const cnic = document.querySelector('input[placeholder="CNIC"]');
 const dob = document.querySelector('input[type="date"]');
 const course = document.getElementById('selectCourse');
 const fatherName = document.querySelector('input[placeholder = "Father Name"]');
 const phoneNumber = document.querySelector('input[type ="number"]');
 const fatherCnic = document.querySelector('input[placeholder="Father CNIC (Optional)"]');
 const gender = document.getElementById('gender');
 const address = document.getElementById('address');
 const lastQuali = document.getElementById('lastQuali');
 const laptop = document.getElementById('laptop');
 const photo = document.getElementById('photo');

 window.abc = function(){
 const obj = {
    city:selectCity.value,
    FullName:fullname.value,
    email:email.value,
    CNIC:cnic.value,
    dob:dob.value,
    courseEvent:course.value,
    FatherName:fatherName.value,
    phoneNumber:phoneNumber.value,
    fatherCNIC:fatherCnic.value,
    Gender:gender.value,
    Address:address.value,
    Qualification:lastQuali.value,
    Laptop:laptop.value,

 };

  obj.id = push(ref(database,"Task/")).key; 
    var reference = ref(database, `Task/${obj.id}`);
     set(reference,obj);


};


function getData() {
    var reference = ref(database, "Task/");
    onValue(reference, function (data) {
      console.log(data.val());
    });
  }
  getData();
