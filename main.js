var source;
function init(){

	source=new EventSource('http://localhost/nodejs/sse/data.php');

	source.onopen=function(){
	 console.log('连接已建立',this.readState);
	};

	source.onmessage=function(){
      console.log('从服务器实时获取数据',event.data);
	};
}

init();