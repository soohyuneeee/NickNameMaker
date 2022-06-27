import React from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';
function Home() {
    let navigate = useNavigate();
    return (
        <section>
            <div className='haha'>
                <button class="nickname-btn" onClick={() => {
                    navigate('/maker')
                }}>NICKNAME MAKER</button>
            </div>
        </section>

    )
}
export default Home;