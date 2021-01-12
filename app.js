let button= document.querySelector('button');
let arr=['The greatest glory in living lies not in never falling, but in rising every time we fall.',
'The way to get started is to quit talking and begin doing.',
'If life were predictable it would cease to be life, and be without flavor',
'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
'Life is what happens when you\'re busy making other plans.'
]
let body= document.body;
let count=0;
let name = document.getElementById('demo');
button.addEventListener('click',generate);
let color=[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
function generate(){
	var hexa='#';
		if(count ===0 || count<=3){
			for(let x=0; x<6;x++){
				hexa+=color[Math.floor(Math.random()*color.length)];
			}
			name.style.backgroundColor=hexa;
			name.textContent=arr[count];
			count+=1;
		}else if(count===4){
			count-=4;
		}


}