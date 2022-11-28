import { useState } from 'react'
import Lottie from 'lottie-react'
import json from '../../../assets/lottie/machine.json'
import Logo from '../../../assets/logo.png'
import { useNavigate } from "react-router-dom"
import SvgIcon from '../../../components/SvgIcon'

function BasicLogin({ props }: any) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false)
  const [show, setShow] = useState(false)
  const [focus, setFocus] = useState('')
  const login = () => {
    navigate("/")
  }
  return (
    <div className="w-full h-screen bg-[#F4F9FD] flex justify-center items-center">
      <div className="w-[1360px] h-[770px] flex">
        <div className="p-[60px] flex-1 h-full bg-[#3F8CFF] rounded-l-2xl text-[#fff]">
          <div className="flex items-center">
            <img className="w-[50px] cursor-pointer" src={Logo} />
            <span className="ml-[20px] text-[30px] font-bold">daisyUI</span>
          </div>
          <div className="mt-4 text-[36px] font-bold tracking-widest">
            拒绝重复性搬砖,从组件库开始
          </div>
          <Lottie className="w-[500px] mt-10" animationData={json} />
        </div>
        <div className="flex-1 h-full bg-[#FFFFFF] rounded-r-2xl p-[60px]">
          <form className="flex flex-col items-center form-control">
            <span className="text-[30px] mb-4">欢迎回来！</span>
            <label className="w-[400px] mt-[100px]">
              <span className="t-label text-[14px]">用户名</span>
              <div className="relative">
                <div className="absolute left-0 top-0 w-[40px] h-full flex justify-center items-center">
                  <SvgIcon icon="account" color={focus === 'account' ? '#3F8CFF' : '#7D8592'} />
                </div>
                <input type="text" name="price" id="price" className="t-input mt-1" placeholder="请输入" required onFocus={() => setFocus('account')} onBlur={() => setFocus('')} />
              </div>
            </label>
            <label className="w-[400px] mt-[30px]">
              <span className="t-label text-[14px]">密码</span>
              <div className="relative">
                <div className="absolute left-0 top-0 w-[40px] h-full flex justify-center items-center" onClick={() => setShow(!show)}>
                  <SvgIcon icon={show ? 'lock-closed' : 'lock-open'} color={focus === 'password' ? '#3F8CFF' : '#7D8592'} />
                </div>
                <input type={show ? 'password' : 'text'} name="price" id="price" className="t-input mt-1" placeholder="请输入" required onFocus={() => setFocus('password')} onBlur={() => setFocus('')} />
              </div>
            </label>
            <div className="w-[400px] mt-[30px] flex items-center justify-between">
              <div className="flex items-center">
                <input className="checkbox" type="checkbox" checked={checked} onClick={() => setChecked(!checked)} />
                <span className="ml-2 text-sm text-[#7D8592]">记住密码</span>
              </div>
              <a className="link link-hover text-[#3F8CFF] text-sm">忘记密码?</a>
            </div>
            <button type="button" onClick={login} className="t-login mt-[30px] w-[170px] h-[48px] t-button t-shadow-blue bg-[#3F8CFF] flex justify-center items-center">
              <span className="mr-2">登 录</span>
              <SvgIcon icon="right-arrow" color="#fff" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BasicLogin