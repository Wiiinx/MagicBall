function shake(){
    var ball = document.getElementById("ball")
    var messageText = document.getElementById("message")

    if(messageText != null){
        messageText.parentNode.removeChild(messageText)
    }

    ball.classList.add("shake")
    setTimeout(function (){ball.classList.remove("shake");}, 1000)
    setTimeout(function (){getMenu();}, 1000)
}

function getMenu(){
    var menu = ['重庆老灶', 'PaPa Chicken','McDonald\'s','海底捞','王小英的猫粮', '沙拉', 'Chef Shi','Chef LuKai','麻辣烫'
    ,'麻辣香锅','沙拉','韩式部队锅','韩式年糕','番茄炒蛋','披萨','Bagel','Tino\'s Artisan Pizza','Muteki Ramen','ShakeShack','Udon','拉面',
        '葱油饼','不许吃','Pho','Jollibee','Chipotle','Samurai Sushi','Tacoria','Teazzi Tea Shop','鲜芋仙', 'Chef Tan蜀湘门第',
    'Wisp Express','小笼包','减脂餐','吃大便吧你','McDonald\'s','Samurai Sushi','ino\'s Artisan Pizza','Teazzi Tea Shop','Meet Fresh', 'Chef Tan蜀湘门第',
        'Wisp Express', '沙拉', '减肥吧今天', '沙拉', 'Chipotle', 'McDonald\'s', 'Chef LuKai', 'Chef LuKai', 'ShakeShack', 'ShakeShack', '吃垃圾',
        'PaPa Chicken','来点寿司', 'Samurai Sushi', 'Tacoria', 'Tacoria', '麻辣烫', '当然是Chef Wuni!!!!', 'Chef Shi', 'McDonald\'s','McDonald\'s',
        'McDonald\'s','Chef Tan蜀湘门第','减脂餐', '减脂餐', '不许吃', '上海青', '辛拉面', '空气炸锅随便炸炸么好嘞', '吃点清淡的','烧烤', '白切鸡','奶油意面','红烧牛肉面',
        '黑椒牛柳意面','东北老式鸡蛋拌饭', '番茄牛腩','尝试一下可乐鸡翅','Semicolon', '虾仁炒饭','西兰花炒虾仁','Izakaya Mew', '葱油拌面','吃草','让lk随便给你做点','摇晃鲨鱼','麦麦',
        'M', '金拱门', '必须是麦麦', '不知道吃什么的时候就吃麦麦', 'ino\'s Artisan Pizza', '煮饺子'
    ]

    var food = menu[Math.floor((Math.random() * menu.length))]
    var parent = document.getElementById("food")
    var newMessage = document.createElement("div")
    newMessage.setAttribute("id", "message")
    newMessage.innerHTML = "\"" + food + "\""
    parent.appendChild(newMessage)

}