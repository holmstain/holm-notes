/* eslint-disable default-case */
const useCreateDate = () => {
    const dateObj = new Date();
    const month = dateObj.getMonth();
    let monthName;
    switch(month) {
            case 0: monthName ="Ocak";
            break;
            case 1: monthName = "Şubat";
            break;
            case 2: monthName = "Mart";
            break;
            case 3: monthName = "Nisan";
            break;
            case 4: monthName = "Mayıs";
            break;
            case 5: monthName = "Haziran";
            break;
            case 6: monthName = "Temmuz";
            break;
            case 7: monthName = "Ağustos";
            break;
            case 8: monthName = "Eylül";
            break;
            case 9: monthName = "Ekim";
            break;
            case 10: monthName = "Kasım";
            break;
            case 11: monthName = "Aralık";
            break;
        }
        const date = `${dateObj.getDate()} ${monthName} ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`
        return date;
}

export default useCreateDate