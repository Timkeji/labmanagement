
window.onload = function () {
    var url=location.search;
    var formid;
    var Request = new Object();
    if(url.indexOf("?")!=-1)
    {
    var str = url.substr(1);
    strs= str.split("&");
    for(var i=0;i<strs.length;i++)
    {
    Request[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
    }
    }
    formid= Request["formid"];
    console.log(formid);
    tjtr = function () {
        var tab = $("#tab");
        var tr = ` <tr>
      <td><input type="text" name="equipment"></td>
      <td><input type="text" name="equipment_model"></td>
      <td><input type="text" name="number"></td>
      <td><input type="text" name="attachment"></td>
    </tr>`
        tab.append(tr);
        console.log(tab)

        var pdtr = $("#tab tr");
        if (pdtr.length >= 6) {
            $(".contain").css('height', '100%')
        }
    }

    qrtj = function () {
        // var a=document.getElementById("forminfo").serialize();
        // console.log(a)
        // var a = $("#forminfo").serialize();
        // data_params = decodeURIComponent(a, true);
        // console.log(data_params);

        var tr = $("#tab tr"); // 获取table中每一行内容
        var result = []; // 数组
        for (var i = 0; i < tr.length; i++) {// 遍历表格中每一行的内容
            var tds = $(tr[i]).find("td");
            if (tds.length > 0) {
                result.push({
                    "equipment_name": $(tds[0]).find("input").val(),
                    "equipment_model": $(tds[1]).find("input").val(),
                    "number": $(tds[2]).find("input").val(),
                    "attachment": $(tds[3]).find("input").val()
                })
            }
        }

        var userToken = window.localStorage.getItem("yq_token"); 
        function clear(str) { 
            str = str.replace(/,/g, "");//取消字符串中出现的所有逗号 
            return str; 
            }
            clear(userToken),
            console.log(userToken);
           var vdata={
            department:$("#department").val(),
            expect_time:$("#expect_time").val(),
            useinfo :$("#useinfo").val(),
            borrow_name :$("#borrow_name").val(),
           phone :$("#phone").val(),
           start_time :$("#start_time").val(),
        token: userToken,
        queipmentarray: result
           }
    console.log(vdata)
        $.ajax({
            // headers: {
            //     "token": userToken//此处放置请求到的用户token
            // },
            type: "post",
            url: 'http://blog.coderth.cn/api/ordinadmin/addequipment',
            // contentType: "application/json;charset=UTF-8",
     
            data: vdata,


            // 将json数据转化为字符串
            // cache: false,
            dataType: "json",
            success: function (data) {
             
                    if(data.code==200){
                        console.log("成功了"),
                        console.log( data)
                    }else{
                        alert("表单填写错误")
                    }
               
            },
            error: function (XMLHttpRequest, textStatus, readyState) {
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
            }
        })


    }

}
