import '../index.css';
import React,{useState,useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Commentm from '../country/Commentm';

function FallPosting(){
    const [comments,setComments]=useState(()=>{
        const savedComments=localStorage.getItem('fallComments');
        return savedComments ? JSON.parse(savedComments):[];
    });
    const [commentInput,setCommentInput]=useState('');

    const addComment=()=>{
        if(commentInput){
            setComments(prevComments=>[...prevComments,commentInput])
            setCommentInput('')
        }
    }
    useEffect(()=>{
        localStorage.setItem('fallComments',JSON.stringify(comments));
        Aos.init({
            duration: 1200,
            once: false
        })
    },[comments])
    return(
        <div className='allAlign' data-aos="fade-up">
            <img src={`${process.env.PUBLIC_URL}/img/Fall.jpg`} className='img' alt='America' />
            <div className='mainpage' data-aos="fade-up">
                <h2>가을철 여행지 추천: 뉴욕, 미국</h2>
                
                뉴욕의 가을은 같은 제목의 영화처럼 로맨틱함이 곳곳에 묻어나는 계절이에요. 
                이 계절에는 소복이 쌓인 낙엽을 밟으며 센트럴파크를 걷는 걸 추천해요.
                굳이 한 편의 영화를 떠올리지 않더라도 어디서 본 듯한 수많은 장면들이 뇌리를 스쳐 지나가죠.
                가까운 마트에서 샌드위치와 커피를 구입한 후 잔디에 앉으면 뉴요커처럼 햇살을 즐기실 수 있어요.<p />

                하이 라인 파크도 가을에 걷기 좋은 곳이에요.
                버려진 기찻길을 천천히 따라가는 것만으로도 운치가 있지만 
                뉴욕 여행의 필수 코스인 첼시 마켓으로 바로 이어져서 편리하기까지 하죠.
                 맛집이 가득한 이곳에서 인스타에 자주 올라오는 랍스터나 나초를 먹으며 이국적인
                  분위기를 만끽하고 군침 도는 사진을 남겨보세요.<p />
            <hr />
            <p />
            </div>
            <Commentm />
        </div>

    );
}
export default FallPosting;