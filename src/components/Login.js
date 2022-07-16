import React, { useState } from 'react';
import './Login.css';
import Error from './Error';

const Login=()=>{
    const [page,setPage]=useState('row-reverse');
    const [textNext,setTextNext]=useState('مطالعه شد')
    const go_to_next_page=()=>{
        if(page=='row-reverse'){
            setPage('row');
            setTextNext('قوانین')
        }else{
            setPage('row-reverse');
            setTextNext('مطالعه شد')
        }

    }
    return(
        <div className="Login">
            <Error></Error>
            <div className="content-Login">
                <div className="part-Login">
                    <div className="items-Login" style={{flexDirection:page}}>
                        <div className="inputPart-Login" >
                            <div className="inputsItem-Login">
                            <div className="titl-Login">
                                <p>حامی چت</p>
                            </div>
                            <div className="inputs-Login">
                                <div className="code-Login">
                                    <p >:کدملی</p>
                                    <input type="text" />

                                </div>
                                <div className="number-Login">
                                    <p>:شماره تلفن </p>
                                    <input type="text" />

                                </div>

                            </div>
                            <div className="check-Login">
                                <label htmlFor="check-Login">قوانین را مطالعه کرده و پذیرفته ام</label>
                                <input type="checkbox" id='check-Login'/>

                            </div>
                            <div className="submit-Login">
                                <button>ورورد</button>

                            </div>
                            </div>

                        </div>
                        <div className="rulesPart-Login">
                           <div className="rulesItem-Login">
                            <div className="titl-Login">
                                <p>قوانین:</p>
                            </div>
                            <div className="rule-Login" id='rule1-Login'>
                                <p>به جهت افزایش رضایت و پاسخگویی بهتر به شما عزیزان کلیه مکالمات تصویری و متنی با کارشناسان ما ضبط می گردد .</p>

                            </div>
                            <div className="rule-Login" id='rule2-Login'>
                                <p>رعایت کلیه شئونات اسلامی در هنگام برقراری ارتباط با کارشناسان ما الزامی می باشد.</p>
                            </div>
                            <div className="rule-Login" id='rule3-Login'>
                                <p>رعایت کلیه شئونات اسلامی در هنگام برقراری ارتباط با کارشناسان ما الزامی می باشد.</p>

                            </div>
                            <div className="autograph-Login" >
                                <p>طراحی شده توسط رابین </p>

                            </div>


                           </div>

                        
                                                        
                        </div>
                        <div className="next-Login">
                            <button onClick={go_to_next_page}>{textNext} </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
}

export default Login; 