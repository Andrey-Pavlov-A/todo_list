export const maxLength = (maxNumber) => (value) => {
	if(value != undefined){
		if (value.length > maxNumber) return `Max length is ${maxNumber}`
	}
	
	return undefined
}