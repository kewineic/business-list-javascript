class DateHelper{

    stringToDate(string){
        return new Date(...
            string.value
            .split("-")
            .map((item, index) => {
                if(index == 1){
                    return item - 1
                }
                return item
            })
        );

    }

    dateToString(date){
        return `${ date.getDate() }/${ (date.getMonth() + 1) }/${ date.getFullYear() }` 
    }

}