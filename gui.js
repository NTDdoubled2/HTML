// Các xử lý kịch bản cho layout.html

var def="---Từ khóa---";
var emp="";

function setTextKeyword(fn)
{
	// Hiện thị dòng chữ từ khóa trong ô tìm kiếm
	fn.txtKeyword.value=def;
	
}
	// click vào tìm kiếm mất def
function setKeyword(fn, isClick)
{
	var value=fn.txtKeyword.value;
	if (isClick) 
	{
		// Nhấn chuột vào
		if(value.trim()==def)
		{
			fn.txtKeyword.value=emp;
		}
	}else
	{
		//thoát chuột ra
		if(value.trim()==emp)
		{
			fn.txtKeyword.value=def;
		}
	}
}

function checkValidKeyword(fn)
{
	var keyword=fn.txtKeyword.value;
	
	keyword= keyword.trim()
	if((keyword==def)||(keyword==emp))
	{
		var message = "Nhập vào từ kháo cần tìm kiếm.";
		window.alert(message);
		//sau khi hiện message. con trỏ sẽ tự di chuyển đến ô tìm kiếm
		fn.txtKeyword.focus();
		fn.txtKeyword.select();
		fn.txtKeyword.value=emp;
		
	}	
		
}

























