const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function thisFileUpload()
{
	var x=document.getElementById('file').value;
	console.log(x);

	document.getElementById('file').click();
}


//drag drop
var input = document.getElementById( 'file' );
 var infoArea = document.getElementById( 'path' );

 input.addEventListener( 'change', showFileName );

 function showFileName( event ) { 

//   // the change event gives us the input it occurred in

   var input = event.srcElement; 

//   // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.

   var fileName = input.files[0].name; 

//   // use fileName however fits your app best, i.e. add it into a div

  infoArea.textContent = 'File name: ' + fileName;

 }


// Drag and Drop
var dropzone = document.getElementById("dropzone");
var listing = document.getElementById("path");

function scanAndLogFiles(item, container) {
  var elem = document.createElement("li");
  elem.innerHTML = item.name;
  container.appendChild(elem);

  if (item.isDirectory) {
    var directoryReader = item.createReader();
    var directoryContainer = document.createElement("ul");
    container.appendChild(directoryContainer);

    directoryReader.readEntries(function(entries) {
      entries.forEach(function(entry) {
        scanAndLogFiles(entry, directoryContainer);
      });
    });
  }
}

dropzone.addEventListener(
  "dragover",
  function(event) {
    event.preventDefault();
  },
  false
);

dropzone.addEventListener(
  "drop",
  function(event) {
    var items = event.dataTransfer.items;

    event.preventDefault();
    listing.innerHTML = "";

    for (var i = 0; i < items.length; i++) {
      var item = items[i].webkitGetAsEntry();

      if (item) {
        scanAndLogFiles(item, listing);
      }
    }
  },
  false
);

// Create  Folder
// function createFolder(){
// 	var inp=document.createElement('div');
// 	inp.innerHTML();
// }

// const html = document.documentElement;
// const body = document.body;
// import { constants } from './constants.js'
const constants = {
	
  }
  
  const form = document.getElementById("fo");
  console.log(form);


  async function createFolder() {

   

    try

    {


      var file=document.getElementById("file").files[0];

      var data=new Date();

     

     




var formData = new FormData();

 formData.append("file",file);



var requestOptions = {

  method: 'POST',

  body:formData,

};



await fetch("http://localhost:57927/api/document/upload/"+sessionStorage.getItem("id")+"/"+data.toISOString()+"/"+sessionStorage.getItem("folderid"), requestOptions)

.then((fileCreateResponse) => {

  console.log(fileCreateResponse);

  listFolders();

})

 

    }

    catch(err)

    {

      console.log(err);

    }

  }




  
//   async function createFolder() {
// 	  var data=new Date();
// 	  var file=document.getElementById("file").files[0];
// 	try
// 	{
// 	 fetch('http://localhost:57927/api/document', {
// 	   body: JSON.stringify({
//         "dName": form.value,
//     "contentType": "text",
//     "size": 1900,
//     "createdBy": sessionStorage.getItem("id"),
//     "createdAt": data.toISOString(),
//     "folderId": sessionStorage.getItem("folderid"),
//     "isDeleted": null,


// 	  }),
// 	   method: 'POST',
// 	   headers: {
// 		'Content-Type': 'application/json'
// 	  },
// 	 }).then((folderCreateResponse) => {
// 		console.log(folderCreateResponse);
// 		 listFolders();
// 	 });
// 	}
// 	catch(err)
// 	{
// 	  console.log(err);
// 	}
//   }





//   async function createFolder() {
//     try{
//     //   var dname=document.getElementById("filename1").value;
//       var file=document.getElementById("file").files[0];   

//       var abc=new Date();
// var formData = new FormData();
//  formData.append("file",file);

// var requestOptions = {
//   method: 'POST',
//   body:formData,
// };

// await fetch("http://localhost:57927/api/document/upload/"+sessionStorage.getItem("id")+"/"+abc.toISOString()+"/"+sessionStorage.getItem("folderid"), requestOptions)

// .then((fileCreateResponse) => {
//   console.log(fileCreateResponse);
//   ListFiles();
// })
//     }
//     catch(err)
//     {
//       console.log(err);
//     }
//   }

  
  function listFolders() {
	try
	{
	  var create = document.getElementById("mainn");
	  create.innerHTML = '';
	fetch("http://localhost:57927/api/document/"+sessionStorage.getItem("folderid"), {
	  method: 'GET'
	})
	.then(response => response.json())
	.then((folders) => {
	  console.log(folders);
	  folders.forEach(folder => {
		// debugger;
		var create = document.getElementById("mainn");

		var createChild=document.createElement("div");
  
	   
  
		createChild.classList.add("abc2");
  
		var div1 = document.createElement("div");
  
		div1.classList.add("abc");
  
	   
  
		// var img1 = document.createElement("img");
  
	   
  
		let con='';
  
		con += "<i class='bx bxs-file-image' style='color:skyblue;'></i>";
  
		con += "<br/><p style='color:black'><b>";
  
		con += folder.dName+"<b><p>";
  
	   
  
  
  
		div1.innerHTML=con;
  
		var div2 = document.createElement("span");
  
		let con2='';
  
		// con2+=`<button type="button" class='btn btn-success'  onclick="openfile()">Add file</button>&nbsp;`;
		// con2+=`<img src="https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/folder_delete.png" alt="img"  onclick='deletefolder(${folder.docId}>`
		// con2 += `<i class='bx bxs-folder-open'  onclick="openfile(${folder.id})" style="cursor:pointer;margin-left:5%;color:navy;font-size:150%"></i>&nbsp;`;
		con2 += `<i class='bx bx-error-circle'  onclick='viewdetails(${folder.docId},"${folder.dName}",${folder.createdBy},"${folder.createdAt}")' style="cursor:pointer;margin-left:10%;color:green;font-size:150%"></i>`;

		con2 += `<i class='bx bx-trash' onclick ='popup(${folder.docId})' style="cursor:pointer;margin-left:50%;color:red;font-size:150%"></i>`;
        div2.classList.add("btn123");
  
		div2.innerHTML=con2;
  
		// <i class='bx bx-x-circle'></i>
		// <i class='bx bxs-comment-x'></i>
	   
  
		
  
  
		// div.innerHTML = folder.fName;
  
	   createChild.appendChild(div1);
  
	   createChild.appendChild(div2);
  
	   create.append(createChild);
	  });
	})
	
	}
	catch(err)
	{
	  console.log(err);
	}
  }
  
  function onLoad() {
	listFolders();
  }
  
  onLoad();
  function openfile(){

	window.location.href="file.html";
	
			}
	  
            function deletefolder(folder) {
                
            var raw = "";
            var requestOptions = {
              method: 'DELETE',
              body: raw,
              redirect: 'follow'
              
              };
              
              let deleteurl = "http://localhost:57927/api/document/" + folder;
              fetch(deleteurl,requestOptions)
              .then(response=>response.text())
			  .then(result => console.log(listFolders()))
              .catch(error => console.log('error', error));
               
              }
				  function search1() {
					try
					{
					  
					  var id1=document.getElementById("search")
					  if(id1.value=="")
					  {
						  location.reload();
					  }
					  else{
					  var create = document.getElementById("mainn");
					  create.innerHTML = '';
					fetch("http://localhost:57927/api/Document/folder/"+sessionStorage.getItem("folderid")+"/"+id1.value, {
					  method: 'GET'
					})
					.then(response => response.json())
					.then((folders) => {
					  console.log(folders);
					  folders.forEach(folder => {
						var create = document.getElementById("mainn");

						var createChild=document.createElement("div");
				  
					   
				  
						createChild.classList.add("abc2");
				  
						var div1 = document.createElement("div");
				  
						div1.classList.add("abc");
				  
					   
				  
						// var img1 = document.createElement("img");
				  
					   
				  
						let con='';
				  
						con += "<i class='bx bxs-folder-open' style='color:skyblue;'></i>";
				  
						con += "<br/><p style='color:black'><b>";
				  
						con += folder.dName+"<b><p>";
				  
					   
				  
				  
				  
						div1.innerHTML=con;
				  
						var div2 = document.createElement("span");
				  
						let con2='';
				  
						con2 += `<i class='bx bx-error-circle'  onclick='viewdetails(${folder.id},"${folder.fName}",${folder.createdBy},"${folder.createdAt}")' style="cursor:pointer;margin-left:10%;color:green;font-size:150%"></i>`;

						con2 += `<i class='bx bx-trash' onclick ='popup(${folder.id})' style="cursor:pointer;margin-left:50%;color:red;font-size:150%"></i>`;
										div2.classList.add("btn123");
				  
						div2.innerHTML=con2;
						// div.innerHTML = folder.fName;
				  
					   createChild.appendChild(div1);
				  
					   createChild.appendChild(div2);
				  
					   create.append(createChild);
					});
					})
					
					}
				}
					catch(err)
					{
					  console.log(err);
					}
				}
                function logout(){
                    sessionStorage.clear();
                    window.location.href="index.html";
                }
				function popup(folder) {
					Swal.fire({
						title: 'Are you sure?',
						text: "You won't be able to revert this!",
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, delete it!'
				
					}).then((result) => {
						if (result.isConfirmed) {
							Swal.fire(
								
							   
								deletefolder(folder),
								'Deleted!',
								'Your file has been deleted.',
								'success'
							)
						}
					})
				}
				
				function viewdetails(docId,dName,createdBy,createdAt){
					
				//    console.log(folderid);
				   Swal.fire(
					   "File Id : " + docId + "\n"+
					   "File Name : " + dName +"\n"+
					   "Created By : " + createdBy + "\n"+
					   "Created At : " + createdAt + "\n" 
				   )
			   }


			//    async function createFolder() {

   

			// 	try
			
			// 	{
			
			
			
			
			
			
			
			// 	  var dName=document.getElementById("filename1").value;
			
			// 	  var file=document.getElementById("file").files[0];
			
				 
			
			// 	  var abc=new Date();
			
				 
			
				 
			
			
			
			
			// var formData = new FormData();
			
			//  formData.append("file",file);
			
			
			
			// var requestOptions = {
			
			//   method: 'POST',
			
			//   body:formData,
			
			// };
			
			
			
			// await fetch("http://localhost:57927/api/document/upload/"+sessionStorage.getItem("id")+"/"+abc.toISOString()+"/"+sessionStorage.getItem("folderId"), requestOptions)
			
			// .then((fileCreateResponse) => {
			
			//   console.log(fileCreateResponse);
			
			//   listFolders();
			
			// })
			
			 
			
			// 	}
			
			// 	catch(err)
			
			// 	{
			
			// 	  console.log(err);
			
			// 	}
			
			//   }




