/*
_______________________________________________________________________

				map2fs - Convert SA-MP map code to filterscript
							converter.js
	
@Author:	Akshay Mohan - https://github.com/AkshayMohan
@Version:	v0.1
@Github:	https://github.com/AkshayMohan/map2fs

_______________________________________________________________________

*/

const
	CREATE_OBJECT = "CreateObject",
	REMOVE_BUILDING = "RemoveBuildingForPlayer"
;

function parseFunction(strFunction) {

	let funcData = null;
	try {
		funcData = strFunction.match(/[^,()]+/g);
		if(funcData != null)
			funcData = funcData.map((item) => {
				return item.trim();
			});
	} catch(e) {

		console.log('Caught exception: ' + e);
	}
	return funcData;
}


function makeFunctionObject(funcData) {

	var retObject = null;
	if(funcData != null) {
		if(funcData[0] === CREATE_OBJECT) {

			retObject = new SAMPObject(funcData[1],
									funcData[2], funcData[3], funcData[4],
									funcData[5], funcData[6], funcData[7],
									(typeof funcData[8] === 'undefined' || funcData[8] === ';') ? 0.0 : funcData[8]
						);
		} else if(funcData[0] === REMOVE_BUILDING) {

			retObject = new RemovedBuilding(funcData[2],
										funcData[3], funcData[4], funcData[5],
										funcData[6]
						);
		}
	}
	return retObject;
}
function parseSourceCode(sourceCode) {

	const
		createdObjects = [],
		removedBuildings = [],
		sourceLines = sourceCode.split('\n')
	;
	let funcObject = null;
	sourceLines.forEach((func) => {

		funcObject = makeFunctionObject(parseFunction(func));
		if(funcObject instanceof SAMPObject) {

			createdObjects.push(funcObject);
		} else if(funcObject instanceof RemovedBuilding) {

			removedBuildings.push(funcObject);
		} else {

			console.log('Unidentified function call!');
		}
	});
	return [createdObjects, removedBuildings];
}

