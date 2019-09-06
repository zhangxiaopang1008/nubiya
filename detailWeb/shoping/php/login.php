<?php
	include("public.php");
	//接收前面发送过来的请求
	//获取get请求过来的参数
	$uname = $_POST["uname"];
	$pwd = $_POST["upwd"];
	//到数据中查询uname，根据$uname和$pwd;
	$sql = "select uname,upwd from user where uname = '$uname'";
	//echo $sql;
	//查询语句返回的是一个结果集，
	$result = connectDB($sql);
	print_r($result);
	//将结果集体转换成数组
	$arr = mysqli_fetch_array($result);//如果没查询到数据,这里的结果是一个空数组
	//print_r($arr);
	if($arr){//用户名存在
		//用户名存在，再判断 密码是否正确 
		if($arr["upwd"] == $pwd){
			//密码正确 ，登录成功
			//跳转到学生信息页
			echo "<script>alert('登录成功');location.href='../index.html?uname=".$arr["uname"]."';</script>";
		}else{
			//密码错误，登录失败
			//跳转到登录页
			echo "<script>alert('密码错误，请重新登录');location.href='../login.html';</script>";
		}
	}else{//用户名不存在 
		//跳转到登录页
		echo "<script>alert('用户名不存在，请重新登录');location.href='../login.html';</script>";
	}
?>