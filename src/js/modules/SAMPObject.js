/*
_______________________________________________________________________

				map2fs - Convert SA-MP map code to filterscript
							SAMPObject.js
	
@Author:	Akshay Mohan - https://github.com/AkshayMohan
@Version:	v0.1
@Github:	https://github.com/AkshayMohan/map2fs

_______________________________________________________________________

*/

class SAMPObject {

	#modelId;
	#fPos;
	#fRot;
	#fDrawDistance;
	constructor(modelId,
				fPosX, fPosY, fPosZ,
				fRotX, fRotY, fRotZ,
				fDrawDistance = 0.0
	) {

		this.#modelId = modelId;
		this.#fPos = {fPosX, fPosY, fPosZ};
		this.#fRot = {fRotX, fRotY, fRotZ};
		this.#fDrawDistance = fDrawDistance;
	}
	toString() {

		return `CreateObject(${this.#modelId}, ${this.#fPos.fPosX}, ${this.#fPos.fPosY}, ${this.#fPos.fPosZ}, ${this.#fRot.fRotX}, ${this.#fRot.fRotY}, ${this.#fRot.fRotZ}, ${this.#fDrawDistance});`
	}
}
