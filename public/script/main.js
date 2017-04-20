var myScroll,pullDownEl, pullDownOffset,pullUpEl, pullUpOffset,generatedCount = 0;

function loaded() {
	//��������
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	myScroll = new iScroll('wrapper', {
		useTransition: true,
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '����ˢ��';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '�������ظ���';
			}
		},
		onScrollMove: function () {
		
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '�ͷ�ˢ��';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '�ͷ�ˢ��';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '������';				
				pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '������';				
				pullUpAction();	// Execute custom function (ajax call?)
			}
		}
	});
	
	// loadAction();
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);//��ֹð��
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 0); }, false);

// ��ʼ״̬����������
// function loadAction(){
// 	var el, li;
// 	el = document.getElementById('thelist');
// 	for (i=0; i<10; i++) {
// 		li = document.createElement('li');
// 		li.innerText = '��ʼ����--' + (++generatedCount);
// 		el.appendChild(li, el.childNodes[0]);
// 	}
// 	myScroll.refresh();
// }

//����ˢ�µ�ǰ����
function pullDownAction () {
	setTimeout(function () {
		//����ִ��ˢ�²���
		
		myScroll.refresh();	
	}, 400);
}

//�������ظ�������
function pullUpAction () {
	setTimeout(function () {
		// var el, li;
		// el = document.getElementById('thelist');
console.log(1);

		$(function () {
			var num = $("#num").val();
			var $_token = xx;
			$.ajax({
				url: '/getlist',
				async: false,
				type: "get",
				data: {_token: $_token, num: num},
				dataType: "json",
				error: function(data) {
					alert("����ʧ�ܻ�ʱ");
				},
				success: function(data) {
					var length = data.length;
					if (length > 0) {
						$("#num").val(Number(num) + Number(length));
						for (var i = 0; i < length; i++) {
							var str = '<li>'+data[i].name+'</li>';

							$(".getmore").before(str);
						}
					}
				}
			});
		});



		myScroll.refresh();
	}, 400);
}