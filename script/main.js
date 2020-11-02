//사용자가 접속한 디바이스 체크하기
        var mobile_keys=new Array('iPhone','iPod','Android','BlackBerry','WindowsPhone','Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');
        
        if(document.URL.match('move_pc_screen'))mobile_keys = null;
    //URL 파라미터에 'move_pc_screen' 가 포함되어 있을 땐 적용안함
        
        //위 배열값 개수만큼 반복하여 검사를 하고 모바일 사용자이면 아래 네용을 실행
        for(i in mobile_keys){ //in키워드 : 키값이 있으면 true 없으면 false
             if(navigator.userAgent.match(mobile_keys[i]) !=null){
                location.href = "http://yeanjae0312.dothome.co.kr/reebok_website/mindex.html"; //모바일 홈 연결 주소
                break;
            }
        }

$(document).ready(function(){
        
        //헤더 내비게이션
//        $('.sub_wrap').css('display','none');
        //gnb에 마우스 오버시 부모의 높이를 늘리거나 줄여서 서브가 보이게 한다.
        $('.gnb').hover(function(){
//            $('.sub_wrap').stop().slideDown();
            $('#nav_wrap').stop().animate({'height':'400px'},300);
            
        },function(){
//            $('.sub_wrap').stop().slideUp();
            $('#nav_wrap').stop().animate({'height':'57px'},300);
            
        });
        
//        var spos = $(window).scrollTop();
//        if(spos >= 130){
//            $('#nav_wrap').addClass('.nav_fixed');
//            
//        }else{
//            $('#nav_wrap').removeClass('.nav_fixed');
//        }
        
        
        //검색버튼
        var search = $('.h_icon > #h_search');
        var s_b = $('.h_icon > label > img');
        
        search.hide();
        console.log('search');
        
        s_b.click(function(){
            search.show();
            console.log('search_show');
        });
        
        search.focusout(function(){
            search.hide();
            console.log('search_hide');
        });
        
        
        
        //비쥬얼 이미지 슬라이드
        //인덱스 번호 구하기
        var c_index = $('.ctrl_btn li').index();
        
        $('.visual_img > img').hide();
        $('.visual_img > img').eq(c_index).show();
        
//        setInterval(function(){
//            $('.visual_img').append($('.visual_img > img').first());
//            $('.visual_img > img').last().hide();
//            $('.visual_img > img').first().fadeIn(1000).show();
//            
//        },4500);
        
        function moveSlide(){
            $('.ctrl_btn li').removeClass('on');//콘트롤 버튼에 서식을 모두 제거하고
            
            $('.visual_img img').hide();//보이는 슬라이드 이미지 숨기고
            
            if(c_index==3){
                c_index = 0;
            }else{
                c_index++;
            }
            
            $('.visual_img img').eq(c_index).fadeIn(1000);
            $('.ctrl_btn li').eq(c_index).addClass('on');
            
        }
        //시간객체를 활용하여 매 4초마다 슬라이드 함수를 호출한다.
        var Timer = setInterval(moveSlide, 4000);
        
        

            //top버튼 클릭시 자연스럽게 상단으로 올라가기
            $('.top_button').click(function() {  
                $('html, body').animate({
                    scrollTop: '0px'
                }, 300);
                return false; //새로고침이 안되게 해준다.
            });
        
        
        
    });