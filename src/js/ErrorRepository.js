export default class ErrorRepository {
    constructor() {
        this.ErrorRep = new Map;          
    }

    addError(code, message) {
        this.ErrorRep.set(code, message);
    }


    translate(code) {
        if(!this.ErrorRep.has(code)) {
            return 'Unknown error'
        }

        return this.ErrorRep.get(code)
    }

}