var des = document.getElementsByClassName('des_box')[0];
var lis = des.getElementsByTagName('li');
var jiant = document.getElementsByClassName("jiant");
var dess =document.getElementsByClassName("des");
var slide4_1 = document.getElementsByClassName("slide4-1")[0];
var slide4_2 = document.getElementsByClassName("slide4-2")[0];
var lis_img = lis[0].getElementsByTagName("img");
var min_pe = document.getElementsByClassName("mim-pe");
var des_bg = document.getElementsByClassName("des_bg")[0];
var des_pe = document.getElementsByClassName("des_pe");
var clo = document.getElementsByClassName("clo")[0];
var slide5_2 =document.getElementsByClassName("slide_5-2")[0];
var four = document.getElementById("four")
var swiper_container = document.getElementsByClassName("swiper-container")[0];
//插入背景音乐
var music = document.createElement("audio");
music.src='img/陈翔、付辛博、胡夏 - 梦想.mp3';
music.autoplay = 'autoplay';
document.body.appendChild(music)
//暂停背景音乐
var pause = document.getElementsByClassName("pause")
for(var i=0;i<pause.length;i++){
	pause[i].addEventListener("touchstart",function(){
		if(music.paused){
			music.play();
		}else{
			music.pause()
		}
	})
}


var jt = 0;
for(var a=0;a<min_pe.length;a++){
	min_pe[a].index = a
	min_pe[a].addEventListener("touchstart",function(){
		console.log(this.index)
		for(var j=0;j<des_pe.length;j++){
			des_pe[j].style.display = "none";
		}
		slide5_2.style.display="block"
		des_bg.style.display = "block";
		clo.style.display = "block"
		des_pe[this.index].style.display = "block";
	},false)
}

//点击关闭，将提名人物详细信息页面关闭
clo.addEventListener("touchstart",function(){
	slide5_2.style.display="none"
})

//点击头像出现详细信息
slide4_2.style.zIndex = 9
for(var i=0;i<dess.length;i++){
	dess[i].index = i
	dess[i].addEventListener("touchstart",function(){
		// slide4_1.style.left = -lis[0].offsetWidth*this.index+"px"
		slide4_1.style.opacity = 1;
		slide4_1.style.zIndex = 10
		for(var j=0;j<dess.length;j++){
			dess[j].style.width ="0px";
			dess[j].style.height = "0px"
			dess[j].style.transition = "all 0.5s"
		}
		slide4_1.style.transition = "all 0.5s 0.5s";	
	},false)
}

//滑动切换图片
for(var i=0;i<lis.length;i++){
	lis[i].index = i;
	lis[i].addEventListener("touchstart",function(){
		start_pagx = event.touches[0].pageX
		this.addEventListener("touchmove",function(){
			j = this.index
			dir = event.touches[0].pageX-start_pagx;
			//手指滑动的坐标减去手指刚放上去的坐标，小于则向左滑；大于0，则向右滑
			if(dir<0){
				jt = this.index+1
				j++
				if(j >8){
					des.style.left = "0px";
					des.style.transition = "all 0s"
					j = 1
				}
			des.style.left = -lis[0].offsetWidth*j+"px"
			des.style.transition = "all 0.5s linear";
			// if(jt >8){
			// 		jt = 1
			// 	}		
			}
			if(dir>0){
				jt = this.index-1
				j--
				if(j < 0){
					des.style.left = -lis[0].offsetWidth*(8)+"px";
					des.style.transition = "all 0s";
					j = 7
				}
				des.style.left = -lis[0].offsetWidth*j+"px"
				des.style.transition = "all 0.5s linear"
				if(jt < 0){
					jt = 7
				}
			}
		},false)
	},false)

}

//点击箭头切换图片
jiant[1].addEventListener("touchstart",function(){
	jt++;
	if(jt>8){
		des.style.left = "0px";
		des.style.transition = "all 0s";
		jt = 1
	}
	des.style.left = -lis[0].offsetWidth*jt+"px"
	des.style.transition = "all 0.5s linear"
},false)

jiant[0].addEventListener("touchstart",function(){
	console.log(jt)
	jt--;
	if(jt<0){
		des.style.left = -lis[0].offsetWidth*8+"px";
		des.style.transition = "all 0s";
		jt = 7
	}
	des.style.left = -lis[0].offsetWidth*jt+"px"
	des.style.transition = "all 0.5s linear"
},false)


swiper_container.addEventListener("touchstart",function(){
	if(four.className != "swiper-slide swiper-slide-active"){
			slide4_1.style.opacity = 0
			slide4_1.style.transition = "0s"
		}
},false)

