function infomation(name,sex,money,birthday,color,likes,follow,age) {
    return `${name} ${sex} ${money} ${birthday} ${color} ${likes} ${follow} ${age}`
}

let user = { name:'李玲芳', sex:'女', money:100, birthday:'5-21', color:'红',likes:['看剧'],follow:'周杰伦',age:'18'};
information(user);