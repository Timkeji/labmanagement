/***
 * 实验室借用申请表渲染
 */


var totalPageasd = 2
var res
    //请求参数
    //
$.ajax({
    //请求方式
    type: "get",
    cache: true,
    //请求的媒体类型
    //contentType: "application/json;charset=UTF-8",
    //请求地址
    url: "http://blog.coderth.cn//api/superadmin/getfinalform",
    //数据，json字符串
    data: { type: 2 },
    dataType: 'json',
    async: false,
    //请求成功
    success: function(result) {
        res = result
        console.log(result.code)
        totalPageasd = result.data.last_page
        console.log(typeof totalPageasd);
        var str = '';
        console.log(result)
        if (result.code === 200) {
            for (var i = 0; i < result.data.data.length; i++) {
                str += `<tr class="am-text-center am-text-middle">
                        <td class="am-text-center am-text-middle" ><input type="checkbox"></td>
                        <td class="am-text-center am-text-middle">${result.data.data[i].form_id}</td>
                        <td class="am-text-center am-text-middle">${result.data.data[i].recorder_name}</td>
                        <td class="am-text-center am-text-middle">${result.data.data[i].created_at}</td>
                        <td class="am-text-center am-text-middle">
                            <a href="../html/inspectionrecord.html?id=${result.data.data[i].form_id}"><button type="button" class="btn-look">查看</button></a>
                            <a><button type="button" class="but-use" >导出</button></a>
                        </td>
                    </tr>`
            }
            console.log(str);
            document.getElementById("FormBody").innerHTML = str;
        } else {
            console.log(123)
                //alert("用户名或者密码错误！")
        }

    },
    //请求失败，包含具体的错误信息
    error: function(e) {

    }
});




// 分页

$.jqPaginator('#pagination2', {
    totalPages: totalPageasd,
    visiblePages: 8,
    currentPage: 1,
    first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
    prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
    next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
    last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
    page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
    onPageChange: function(num, type) {
        $.ajax({
            //请求方式
            type: "get",
            cache: true,
            //请求的媒体类型
            //contentType: "application/json;charset=UTF-8",
            //请求地址
            url: "http://blog.coderth.cn/api/superadmin/getfinalform?page=" + num,
            //数据，json字符串
            data: { type: 2 },
            dataType: 'json',
            async: false,
            //请求成功
            success: function(result) {
                res = result
                console.log(result.code)
                totalPageasd = result.data.last_page
                console.log(typeof totalPageasd);
                var str = '';
                console.log(result.code)
                if (result.code === 200) {
                    for (var i = 0; i < result.data.data.length; i++) {
                        str += `<tr class="am-text-center am-text-middle">
                                <td class="am-text-center am-text-middle" ><input type="checkbox"></td>
                                <td class="am-text-center am-text-middle">${result.data.data[i].form_id}</td>
                                                        <td class="am-text-center am-text-middle">${result.data.data[i].recorder_name}</td>

                                <td class="am-text-center am-text-middle">${result.data.data[i].created_at}</td>
                                <td class="am-text-center am-text-middle">
                                    <a href="../html/inspectionrecord.html?id=${result.data.data[i].form_id}"><button type="button" class="btn-look">查看</button></a>
                                    <a><button type="button" class="but-use" >导出</button></a>
                                </td>
                            </tr>`
                    }
                    console.log(str);
                    document.getElementById("FormBody").innerHTML = str;
                } else {
                    console.log(123)
                        //alert("用户名或者密码错误！")
                }

            },
            //请求失败，包含具体的错误信息
            error: function(e) {

            }
        });

        // $('#FormBody').text(type + '：' + num);
    }
});

function search() {
    $(function() {
        //请求参数
        $id = document.getElementById("input_search").value;
        //
        $.ajax({
            //请求方式
            type: "post",
            cache: false,
            //请求的媒体类型
            //contentType: "application/json;charset=UTF-8",
            //请求地址
            url: "http://blog.coderth.cn/api/superadmin/selectfinalformbyid",
            //数据，json字符串
            data: { type: 2, id: $id },
            dataType: 'json',
            //请求成功
            success: function(result) {
                console.log(result.code)

                console.log(result);
                var str = '';
                console.log(result.code)
                if (result.code === 200) {
                    for (var i = 0; i < result.data.length; i++) {
                        str += `<tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle" ><input type="checkbox"></td>
                            <td class="am-text-center am-text-middle">${result.data[i].form_id}</td>
                                                    <td class="am-text-center am-text-middle">${result.data.data[i].recorder_name}</td>

                            <td class="am-text-center am-text-middle">${result.data[i].created_at}</td>
                            <td class="am-text-center am-text-middle">
                                <button type="button" class="btn-look">查看</button>
                                <button type="button" class="but-use">导出</button>
                            </td>
                        </tr>`
                    }
                    console.log(str);
                    document.getElementById("FormBody").innerHTML = str;
                } else {
                    console.log(123)
                        //alert("用户名或者密码错误！")
                }

            },
            //请求失败，包含具体的错误信息
            error: function(e) {

            }
        });
        return false

    })
}