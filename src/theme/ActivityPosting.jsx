import '../index.css';
import React,{useEffect, useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Commentm from '../country/Commentm';

function ActivityPosting(){
    const [comments,setComments]=useState(()=>{
        const savedComments=localStorage.getItem('activityComments');
        return savedComments ? JSON.parse(savedComments):[]
    });
    const [commentInput,setCommentInput]=useState('');

    const addComment=()=>{
        if(commentInput){
            setComments(prevComments=>[...prevComments,commentInput])
            setCommentInput('')
        }
    }
    useEffect(()=>{
        localStorage.setItem('tourismComments',JSON.stringify(comments))
        Aos.init({
            duration: 1200,
            once: false
        })
    },[comments])
    return(
        <div className='allAlign' data-aos="fade-up">
            
            <img src={`${process.env.PUBLIC_URL}/img/Jump.jpg`} className='img'  alt='New Zealand'/>
            <div className='mainpage' data-aos="fade-up">
                <h1>액티비티 중심의 여행지 추천:</h1> 
                <h1>퀸스타운, 뉴질랜드</h1>
                퀸스타운은 뉴질랜드 남섬에 위치한 모험의 도시로, 
                액티비티를 중심으로 한 여행을 계획하고 있다면 이보다 완벽한 선택지가 없습니다. 
                퀸스타운은 아름다운 자연 경관과 함께 다양한 야외 활동을 제공하여, 
                모험을 사랑하는 여행자들에게 최고의 목적지로 손꼽힙니다.<p />

                <div className='highlight'>번지 점프</div> 퀸스타운에서는 세계에서 가장 유명한 번지 점프 중 하나를 경험할 수 있습니다. 
                카와라우 다리는 세계 최초의 상업적 번지 점프 사이트로, 43미터 높이에서의 도전은 아드레날린을 폭발시키기에 충분합니다. 
                <p />

                <div className='highlight'>제트 보트</div>
                샷오버 강을 따라 질주하는 제트 보트는 스릴 넘치는 경험을 선사합니다. 
                빠른 속도로 급류를 가로지르며 아름다운 협곡의 경치를 감상할 수 있는 이 액티비티는 모험을 즐기는 이들에게 놓칠 수 없는 기회입니다.<p />
            <p />
            <hr />
            <p />
            </div>
            <Commentm />
        </div>
    );
}


export default ActivityPosting;