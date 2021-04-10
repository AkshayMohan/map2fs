/*
_______________________________________________________________________

				map2fs - Convert SA-MP map code to filterscript
							main.js
	
@Author:	Akshay Mohan - https://github.com/AkshayMohan
@Version:	v0.1
@Github:	https://github.com/AkshayMohan/map2fs

_______________________________________________________________________

*/

const
	inputField		=	document.getElementById('input_source'),
	outputField		=	document.getElementById('output_source'),
	generateButton	=	document.getElementById('generate')
;

const myObject = new SAMPObject(1, 1.2, 0.0, 0.0, 0.0, 0.0, 0.5, 200.0);

generateButton.addEventListener('click', event => {

	outputField.value = '\
//Filterscript generated using map2fs | v0.1\n\
//https://github.com/AkshayMohan/map2fs\n\
#include <a_samp>\n\
\n\
public OnPlayerConnect(playerid) {\n\
\n\
\t';
	const mapData = parseSourceCode(inputField.value);
	mapData[1].forEach(removeData => {

			outputField.value += removeData.toString() + '\n\t';
	});
	outputField.value += 
	'return 1;\n\
}\n\
\n\
public OnFilterScriptInit() {\n\
\n\
\tfor(new i = 0, j = GetPlayerPoolSize(); i<= j; ++i) {\n\
\t\tif(!IsPlayerConnected(i)) continue;\n\
\t\tOnPlayerConnect(i);\n\
\t}\n\
\t';
	mapData[0].forEach(objectData => {

		outputField.value += objectData.toString() + '\n\t';
	});
	outputField.value +=
	'return 1;\n\
}\n';
});