export function createControl(config,validation){
    return {
        ...config,
        validation,
        valid:!validation,
        touched:false,
        value:''
    }
}

export function validate(value,validation=null){
    if (!validation){
        return true
    }
    let isvalid=true

    if (validation.required){
        isValid=value.trim() !== '' && isValid
    }
    return isvalid
}