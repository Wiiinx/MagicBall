function shake() {
    var ball = document.getElementById("ball");

    ball.classList.add("shake");
    setTimeout(function () { ball.classList.remove("shake"); }, 1000);
    setTimeout(function () { getMenu(); }, 1000);
}

function getMenu() {
    var menu = ['番茄锅', '羊肉串', '麦当劳', '海底捞', '猫粮', '沙拉', '小馄饨', '炒饭', '韩式凉面', '狗粮', '全麦面包', '胡辣汤',
        '麻辣香锅', '沙拉', '小笼包', '减脂餐', '吃大便吧你', '虾仁炒饭', '意大利番茄面', '煎块牛排', '麻将凉皮', '酸辣粉', '减脂餐', '香辣鸡翅', '潮汕牛肉丸',
        '沙拉', '减肥吧今天', '沙拉', '麻辣烫', '减脂餐', '减脂餐', '不许吃', '北京烤鸭', '辛拉面', '黑椒牛仔骨', '吃点清淡的', '烧烤', '白切鸡', '奶油意面', '红烧牛肉面',
        '黑椒牛柳意面', '番茄牛腩', '虾仁炒饭', '西兰花炒虾仁', '吃草', '必须是麦麦', '不知道吃什么的时候就吃麦麦', 'KFC', '不许吃', '不许吃', '不许吃',
        'KFC', 'KFC', 'KFC', '今天减肥', '自己做点吃的', '吃垃圾', '减脂餐', '吃吃吃就知道吃？', '小龙虾', '奖励自己一顿好的吧', 'omakase', '东北烤冷面',
        '别吃了求你了别吃了', '越南河粉', '鹅肝', '乌冬面', '海南鸡饭', '煎饼果子', '肉夹馍', '三文鱼波奇饭', '金枪鱼波奇饭', '生姜烧肉', '盒饭',
        '兰州拉面', '麻辣烫', 'KFC', '麦当劳', '麦当劳', '麦当劳', '麦当劳', '必须是麦麦', '吃草', '今天减肥', '今天减肥', '吃吃吃就知道吃？',
        '吃吃吃就知道吃', '你现在真的饿吗?', '你现在真的饿吗？', '你现在真的饿吗？', '你现在真的饿吗？', '番茄锅', '羊肉串', '麦当劳', '海底捞', '猫粮', '沙拉', '小馄饨', '炒饭',
        '别吃了求你了别吃了', '别吃了求你了别吃了', '别吃了求你了别吃了', '别吃了求你了别吃了', '别吃了求你了别吃了', '别吃了求你了别吃了', '别吃了求你了别吃了',
        '海南鸡饭', '鸡蛋灌饼', '饭团', '肠粉', '海鲜炸酱面', '小龙虾', '披萨', '酸菜鱼', '红油抄手', '煲仔饭', '螺蛳粉', '梅子茶泡饭',
        '关东煮'
    ];

    var food = menu[Math.floor((Math.random() * menu.length))];
    showToast(food);
}

function showToast(message) {
    var toastContainer = document.getElementById("toast-container");
    toastContainer.innerHTML = ''; // Clear existing toasts

    var toast = document.createElement("div");
    toast.className = "flex items-center justify-between w-full max-w-md p-6 mb-4 text-white bg-black rounded-lg shadow-lg"; // Updated class names for styling
    toast.role = "alert";

    var text = document.createElement("div");
    text.className = "text-xl font-normal"; // Updated text size
    text.innerText = message;

    var closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "ms-auto -mx-1.5 -my-1.5 bg-black text-white hover:text-gray-300 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-700 inline-flex items-center justify-center h-8 w-8"; // Updated button styling
    closeButton.setAttribute("data-dismiss-target", "#toast-default");
    closeButton.setAttribute("aria-label", "Close");
    closeButton.innerHTML = '<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/></svg>';
    closeButton.onclick = function () {
        toastContainer.removeChild(toast);
    };

    toast.appendChild(text); // Only text is appended, icon is removed
    toast.appendChild(closeButton);
    toastContainer.appendChild(toast);

    setTimeout(() => {
        if (toastContainer.contains(toast)) {
            toastContainer.removeChild(toast);
        }
    }, 5000);
}
