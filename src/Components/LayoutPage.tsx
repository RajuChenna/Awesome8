import React from 'react';
import { BellOutlined, CheckCircleFilled,
    HeartOutlined, MessageOutlined, BookOutlined, EllipsisOutlined
} from '@ant-design/icons';
import Rectangle from '../Assests/Rectangle.svg';
import bell from '../Assests/bell.svg';
import img1 from '../Assests/img1.svg';
import img2 from '../Assests/img2.svg';
import img3 from '../Assests/img3.png';
import img4 from '../Assests/img4.jpg';

const LayoutPage: React.FC = () => {

    return (
        <div className="container">
            <div className="container__header">
                <div className='header__p1'>
                    <img src={Rectangle} alt="" />
                </div>
                <div className='header__p2'>
                    Title
                </div>
                <div className='header__p3'>
                    <img src={bell}  alt="" />
                </div>
            </div>
            <div className="container__content">
                <div className='container__content__body'>
                    <div className='Profile__Details'>
                        <div className='Profile__Details__p1'>
                            <div>
                                <img src={img1} className='image1' alt="" />
                            </div>
                            <div>
                                <div>
                                    <span className='fs__14 fw__7 mr__5 ls__5'>awesome8</span>
                                    <CheckCircleFilled />
                                    <span className='fs__10 fw__6 ml__5 sub__profile '>1k</span>
                                </div>
                                <div>
                                    <span className='fs__12 fw__4 ls__5 sub__profile '>165cm . 53kg </span>
                                </div>
                            </div>
                        </div>
                        <div className='Profile__Details__p2'>
                            <button>submit</button>
                        </div>
                    </div>
                    <p className='fs__14 fw__7 ls__5 p__head'>Click the left and right switch buttons to preview multiple images. </p>
                    <p className='fs__12 fw__5 ls__5 p__body'>Click the left and right switch buttons to preview multiple images. </p>
                    <p className='fs__12 fw__5 ls__5 p__body'>Click the left and right switch buttons to preview multiple images. </p>
                    <p className='fs__12 fw__5 ls__5 p__body'>Click the left and right switch buttons to preview multiple images. Click the left and right switch buttons to preview multiple images. </p>
                    <div className='content__tag'>
                        <span>#2023</span>
                        <span>#TODAYISMONDAY</span>
                        <span>#TOP</span>
                    </div>
                    <div className='content__tag'>
                        <span>#WOW</span>
                        <span>#ROW</span>
                    </div>
                </div>
                <div className='body__image'>
                    <img src={img4} />
                </div>
                <div className='icon__div icon__clr'>
                    <HeartOutlined /><span className='number'>5</span>
                    <MessageOutlined /><span className='number'>5</span>
                    <BookOutlined /><EllipsisOutlined />
                </div>
                <div className='container__content__comment'>
                    <div className='container__content__comment__body'>
                        <div className='comment__logo'>
                            <img src={img1} className='image1' alt="" />
                            <span className='fs__14 fw__7 mr__5 ls__5'>awesome8</span>
                            <CheckCircleFilled />
                            <span className='fs__10 fw__6 ml__5 sub__profile '>1k</span>
                        </div>
                        <div className='comment__icon'>
                            <EllipsisOutlined />
                        </div>
                    </div>
                    <div className='pl__50'>
                        <p className='fs__12 fw__4 ls__5 p__body'>Click the left and right switch buttons to preview multiple images. Click the left and right switch buttons to preview multiple images. </p>
                        <div className='cmnt__icon__clr'>
                            <HeartOutlined /><span className='number'>5</span>
                            <MessageOutlined /><span className='number'>5</span>
                        </div>
                        <div className='comment__reply'>
                            <div className='comment__logo'>
                                <img src={img2} className='image2' alt="" />
                                <span className='fs__14 fw__7 mr__5 ls__5'>awesome8</span>
                                <span className='fs__10 fw__6 ml__5 sub__profile '>1k</span>
                            </div>
                            <div className='comment__icon'>
                                <EllipsisOutlined />
                            </div>
                        </div>
                        <div className='pl__50'>
                            <p className='fs__12 fw__4 ls__5 p__body'>Click the left and right switch buttons to preview multiple images. </p>
                            <div className='cmnt__icon__clr'>
                                <HeartOutlined /><span className='number'>5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container__footer">
                <div className='container__footer__p1'>
                    <img src={img3} className='mr__12' />
                    <span className='fs__12 fw__4 ls__5'>awesome8</span>
                </div>
                <div>
                    <span className='fs__12 fw__4 ls__5'>send</span>
                </div>
            </div>
        </div>
    );
};

export default LayoutPage;