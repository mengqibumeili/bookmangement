function ajax(options) {

    // 1、设置默认值
    var defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {
            'content-Type': 'application/x-www-form-urlencoded'
        },
        success: function () { },
        error: function () { }
    };

    // 2、覆盖默认值
    Object.assign(defaults, options);

    //3、 创建ajax对象
    var xhr = new XMLHttpRequest();

    // 拼接请求参数的变量
    var params = '';
    for (attr in defaults.data) {
        params += attr + '=' + defaults.data[attr] + '&';
    }
    
    // 将最后一个&符号截取掉
    params = params.substr(0, params.length - 1);
    //  console.log(params);
    // 判断请求类型，确定请求地址的内容 
    if (defaults.type == 'get') {
        defaults.url = defaults.url + '?' + params;
    }

    //  配置ajax对象
    xhr.open(defaults.type, defaults.url);

    // 判断请求类型，确定请求地址的内容 
    if (defaults.type == 'post') {
        var contentType = defaults.header['content-Type'];
        xhr.setRequestHeader('content-Type', contentType);

        if (contentType = 'application/json') {
            xhr.send(JSON.stringify(defaults.data))
        } else {
            xhr.send(params);
        }
    } else {
        xhr.send();
    }

    // 监听xhr对象下面的onload事件
    // 当xhr对象接收完响应数据后触发
    xhr.onload = function () {
        var contentType = xhr.getResponseHeader('content-Type');
        var responseText = xhr.responseText;

        if (contentType.includes('application/json')) {
            responseText = JSON.parse(responseText)
        }

        if (xhr.status == 200) {
            defaults.success(responseText, xhr);
        } else {
            defaults.error(responseText, xhr);
        }

    }
}
