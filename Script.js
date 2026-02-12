function validateRegister(){
 let n=name.value;
 let a=age.value;
 let c=contact.value;
 let e=email.value;

 if(n.length < 3){ alert("Name too short"); return false; }
 if(a < 1 || a > 120){ alert("Invalid age"); return false; }
 if(c.length != 10){ alert("Contact must be 10 digits"); return false; }
 if(!e.includes("@")){ alert("Invalid email"); return false; }

 alert("Registration Successful");
 return false;
}

function validateLogin(){
 if(user.value === "admin" && pass.value === "1234")
   alert("Login Success");
 else
   alert("Invalid Login");
}

function searchDoctor(){
 let v = search.value.toLowerCase();
 document.querySelectorAll("#doctorTable tbody tr")
 .forEach(r=>{
   r.style.display =
   r.cells[1].innerText.toLowerCase().includes(v) ? "" : "none";
 });
}

function sortTable(){
 let rows = [...medTable.rows].slice(1);
 rows.sort((a,b)=>
   a.cells[0].innerText.localeCompare(b.cells[0].innerText));
 rows.forEach(r=>medTable.appendChild(r));
}

function rate(n){
 document.querySelectorAll(".stars span")
 .forEach((s,i)=> s.classList.toggle("active", i < n));
}

function book(){
 alert("Appointment Booked");
}
