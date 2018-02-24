//run to make sure jquery is on the page with all the goodies (find)


var deleted_char_array = [];
var running_char_array = [];
var filesystem = undefined;

// var just_cut = false;
function onInitFs(fs){
	filesystem = fs;
}
function makeNewFile(del_text)	{
	webkitRequestFileSystem(PERSISTENT, 1024*1024, function(filesystem) {

	 filesystem.root.getFile("bslog.txt", { create: true }, function(file) {
	  file.createWriter(function(writer) {
	   writer.addEventListener("write", function(event) {
	    // location = file.toURL();
	    console.log("congrats you have done the thing.")
	   });
	   writer.addEventListener("error", console.error);

      writer.onwriteend = function(e) {
        console.log('Write mofo.');
      };
      writer.onwriteerror = function(e) {
        console.log('Write fucked up.');
        console.log(e);
      };
	   writer.write(new Blob([ "\n" ]));
	   console.log(writer);
	  }, console.error)
	 }, console.error)
	}, console.error);
 }

function errorHandler(e,del_text) {
 // if no file found then. do it
 console.log("errornhandler");
 console.log(e);
 console.log(e.name);
 if(e.name=="NotFoundError"){
 	console.log("yeah not found.");
 	makeNewFile(del_text);
 }

  // console.log('Error: ' + msg);
}


function readFile()	{
	console.log("i am read file fuck");

  filesystem.root.getFile('bslog.txt', {}, function(fileEntry) {

    // Get a File object representing the file,
    // then use FileReader to read its contents.
    fileEntry.file(function(file) {
       var reader = new FileReader();

       reader.onloadend = function(e) {
         var txtArea = document.createElement('textarea');
         // txtArea.value = this.result;
         console.log(typeof this.result);
         alert(this.result);
         document.body.appendChild(txtArea);
         return this.result;
       };
       //reading that file.
       reader.readAsText(file);
       
    }, errorHandler);

  }, errorHandler);


}


function writeToFile(del_text){
    filesystem.root.getFile("bslog.txt", {create: false}, function(fileEntry) {
    	console.log(fileEntry);
      fileEntry.createWriter(function(writer) {
      	writer.seek(writer.length);
      	console.log(writer.length);
      	console.log(writer);
      	writer.position+=1;
        writer.onwriteend = function(e) {
			            
        };
        var blob = new Blob(["\n"+del_text],{type:'text/plain'});
        writer.write(blob);
        // writer.truncate(0);
    }, errorHandler);
  }, errorHandler);
}



function positioning(event)	{
	selection = false;
	letter = "";
	var ctl = document.activeElement;
	// if(ctl.nodeName=="INPUT" || ctl.nodeName=="TEXTAREA")
    var startPos = ctl.selectionStart;
    var endPos = ctl.selectionEnd;
    var in_value = ctl.value;
    

    if(startPos!=endPos){//there is some text that has been selected. have to determine if the next key pressed will remove the selection or just cancel it.
    	selection = true;
    }

	if(event.type=="keydown"){
		key_type = event.which;
		letter = event.key;
	}
	// else if(event.type=="cut")	{
	// 	just_cut=true;
	// 	if(selection){//deleted the whole selection.
	// 		console.log("i am here doing it");
	// 		dead_selection = in_value.slice(startPos,endPos);
	// 		dead_selection = dead_selection.split('');
	// 		deleted_char_array.push.apply(deleted_char_array,dead_selection);
			
	// 		return;
	// 	}
	// 	return;
	// }

	
	


	if(key_type == 8 || key_type == 46){ //this is backspace.

		if(selection){//deleted the whole selection.
			dead_selection = in_value.slice(startPos,endPos);
			// dead_selection = dead_selection.split('');
			// deleted_char_array.push.apply(deleted_char_array,dead_selection);
			writeToFile(dead_selection);
		}
		else if(key_type==8){
			dead = in_value.slice(endPos-1,endPos);
			deleted_char_array.push(dead);
			writeToFile(dead);
		}
		else if(key_type==46){
			dead = in_value.slice(endPos,endPos+1);

			deleted_char_array.push(dead);
			writeToFile(dead);
		}
		
		
	}
	else{//if it's not bs or del. 
		if(selection){//still overwrites for selection for other characters.
			dead_selection = in_value.slice(startPos,endPos);
			// deleted_char_array.push.apply(deleted_char_array,dead_selection);
			writeToFile(dead_selection);
		}
		// console.log(just_cut);
		// console.log(deleted_char_array);
	}
}

document.addEventListener("keydown", function(event) {
	// just_cut=false;
	positioning(event);  	
});

//request to save on the thingies.
navigator.webkitPersistentStorage.requestQuota(1024*1024*5, function(grantedBytes) {
  window.webkitRequestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);
}, function(e) {
  console.log('Error', e);
});
// document.addEventListener("cut", function(event)	{
	
// 	if(!just_cut)
// 		positioning(event);
// });


// chrome.fileSystem.getWritableEntry(chosenFileEntry, function(writableFileEntry) {
//     writableFileEntry.createWriter(function(writer) {
//       writer.onerror = errorHandler;
//       writer.onwriteend = callback;

//     chosenFileEntry.file(function(file) {
//       writer.write(file);
//     });
//   }, errorHandler);
// });
