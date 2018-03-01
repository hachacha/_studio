x = "georgie porgieamerica d'ass rof s'THICCthe dubya stands for buns.jpgthe dubya stands for buns.jpgmitluBUSH: buns unum to1278527908248.gif1278527908248image.pngp ";

indv = x.split("");
hexString = "";
for(i =0; i<indv.length; i++){
	hexString += indv[i].charCodeAt(0).toString(16) +",";
	//hex_arr.push(hexString);
}


//4c,6f,72,65,6d,20,69,70,73,75,6d,20,64,6f,6c,6f,72,20,73,69,74,20,61,6d,65,74,2c,20,63,6f,6e,73,65,63,74,65,74,75,72,20,61,64,69,70,69,73,63,69,6e,67,20,65,6c,69,74,2c,20,73,65,64,20,64,6f,20,65,69,75,73,6d,6f,64,20,74,65,6d,70,6f,72,20,69,6e,63,69,64,69,64,75,6e,74,20,75,74,20,6c,61,62,6f,72,65,20,65,74,20,64,6f,6c,6f,72,65,20,6d,61,67,6e,61,20,61,6c,69,71,75,61,2e,20,55,74,20,65,6e,69,6d,20,61,64,20,6d,69,6e,69,6d,20,76,65,6e,69,61,6d,2c,20,71,75,69,73,20,6e,6f,73,74,72,75,64,20,65,78,65,72,63,69,74,61,74,69,6f,6e,20,75,6c,6c,61,6d,63,6f,20,6c,61,62,6f,72,69,73,20,6e,69,73,69,20,75,74,20,61,6c,69,71,75,69,70,20,65,78,20,65,61,20,63,6f,6d,6d,6f,64,6f,20,63,6f,6e,73,65,71,75,61,74,2e,20,44,75,69,73,20,61,75,74,65,20,69,72,75,72,65,20,64,6f,6c,6f,72,20,69,

// 4c,6f,72,65,6d



//hex to decimal

var x = hexString;
indv = x.split(",");
dec_string = "";
for(i =0; i<indv.length; i++){
	dec_string += parseInt(indv[i],16);
	dec_string+=" ";
	//hex_arr.push(hexString);
}
console.log(dec_string);

