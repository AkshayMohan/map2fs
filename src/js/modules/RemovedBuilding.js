/*
_______________________________________________________________________

				map2fs - Convert SA-MP map code to filterscript
							RemovedBuilding
	
@Author:	Akshay Mohan - https://github.com/AkshayMohan
@Version:	v0.1
@Github:	https://github.com/AkshayMohan/map2fs

_______________________________________________________________________

*/

class RemovedBuilding {

    #modelId;
    #fPos;
    #fRadius;
    constructor(modelId, fPosX, fPosY, fPosZ, fRadius) {

        this.#modelId = modelId;
        this.#fPos = {fPosX, fPosY, fPosZ};
        this.#fRadius = fRadius;
    }
    toString() {

        return `RemoveBuildingForPlayer(playerid, ${this.#modelId}, ${this.#fPos.fPosX}, ${this.#fPos.fPosY}, ${this.#fPos.fPosZ}, ${this.#fRadius});`
    }
}
