import React from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';
function Home() {
    let navigate = useNavigate();
    return (
        <section>
            <div class='masthead-image' id='master-container'>
                <div class='content center'>
                    <h1 id='master'>
                        <div>Hello</div>
                        <div id='master-container-scroller'>
                            <div class='master-container-scroller_item'>
                                BSSM.
                            </div>
                            <div class='master-container-scroller_item'>
                                Teacher.
                            </div>
                            <div class='master-container-scroller_item'>
                                Friend.
                            </div>
                            <div class='master-container-scroller_item'>
                                Junior.
                            </div>
                            <div class='master-container-scroller_item'>
                                Senior.
                            </div>
                            <div class='master-container-scroller_item'>
                                Gamer.
                            </div>
                            <div class='master-container-scroller_item'>
                                Principal.
                            </div>
                            <div class='master-container-scroller_item'>
                                Originator.
                            </div>
                            <div class='master-container-scroller_item'>
                                Couple.
                            </div>
                            <div class='master-container-scroller_item'>Everyone.</div>
                        </div>
                        <div>Nice to see you.</div>
                    </h1>
                    <div className='haha'>
                        <button class="nickname-btn" onClick={() => {
                            navigate('/login')
                        }}>Let's GENERATE</button>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Home;