import React, {useEffect,useState} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import {runFireworks} from "../lib/utils"
import { useStateContext } from '../context/StateContext';

const Success = () => {

    const {setCartItems,setTotalPrice,setTotalQuantities}=useStateContext();
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    },[])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for you order !</h2>
            <p className='email-msg'> Check your email inbox for the receipt</p>
            <p className='description'>
                if you have any questions please email
                <a className='email' href='mailto:lamluongit2000@gmail.com'>lamluongit2000@gmail.com</a>
            </p>
            <Link href={"/"}>
                <button type='button' width="300px" className='btn'> Continue shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success