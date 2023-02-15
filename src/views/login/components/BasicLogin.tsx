import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import json from '../../../assets/lottie/machine.json'
import Logo from '../../../assets/logo.png'
import { useNavigate } from "react-router-dom"
import SvgIcon from '../../../components/SvgIcon'
import Alert  from '../../../components/Alert'
import axios from 'axios'

function BasicLogin() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('123456')
  const [checked, setChecked] = useState(false)
  const [show, setShow] = useState(true)
  const [focus, setFocus] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }, [])
  useEffect(() => {
    async function token() {
      const url = new URL(location.href)
      const code = url.searchParams.get('code')
      if (code) {
        const params = {
          client_id: '745df44f436c4e0d8c8d',
          client_secret: 'eff7c6e9bbd83c5707818054a31314c55a78f2c0',
          code
        }
        const headers = {
          Accept: 'application/json'
        }
        try {
          const token = (await axios.post('/api-token', params, { headers }))?.data?.access_token
          const user = (await axios.get('/api-user', { headers: { ...headers, Authorization: `Bearer ${token}` } }))?.data
          if (user) {
            localStorage.setItem('user', JSON.stringify({ avatar: user.avatar_url, name: user.name }))
            localStorage.setItem('token', token)
          }
        } catch(err) {
          console.log(err)
        }
        navigate('/')
      }
    }
    token()
    
  }, [location.href])
  const login = () => {
    let msg
    if (!username) msg = '用户名未填'
    if (!password) msg = '密码未填'
    if (!['admin', 'sineava'].includes(username)) msg = '用户名错误'
    if (password !== '123456') msg = '密码错误'
    if (msg) {
      setError(msg)
      const timer = setTimeout(() => {
        setError('')
        clearTimeout(timer)
      }, 3000)
      return false
    }
    localStorage.setItem('username', username)
    localStorage.setItem('token', 'daisyui')
    navigate("/")
  }
  const auth = () => {
    const query = new URLSearchParams({
      client_id: '745df44f436c4e0d8c8d',
      redirect_uri: 'https://sineava-ui.netlify.app/login'
    })
    location.href = `https://github.com/login/oauth/authorize?${query}`
  }
  const toBlog = () => {
    window.open('https://sineava.netlify.app/', '_blank')
  }
  return (
    <div className="dark:bg-gray-800 w-full h-screen bg-[#F4F9FD] flex justify-center items-center">
      <div className="w-[1360px] h-[770px] flex">
        <div className="dark:bg-gray-900 p-[60px] flex-1 h-full bg-[#3F8CFF] rounded-l-2xl text-[#fff] opacity-90">
          <div className="flex items-center">
            <img className="w-[50px] h-[50px] cursor-pointer" src={Logo} />
            <span className="ml-[20px] text-[30px] font-bold">daisyUI</span>
          </div>
          <div className="mt-4 text-[36px] font-bold tracking-widest">
            拒绝重复性搬砖,从组件库开始
          </div>
          <Lottie className="w-[500px] mt-10" animationData={json} />
        </div>
        <div className="dark:bg-gray-900 flex-1 h-full bg-[#FFFFFF] rounded-r-2xl p-[60px] opacity-90">
          <form className="flex flex-col items-center form-control">
            <span className="dark:text-[#fff] text-[30px] mb-4">欢迎回来！</span>
            <label className="w-[400px] mt-[100px]">
              <span className="t-label text-[14px]">用户名</span>
              <div className="relative group">
                <div className="absolute left-0 top-0 w-[40px] h-full flex justify-center items-center cursor-pointer">
                  <SvgIcon icon="account" size={20} color={focus === 'account' ? '#3F8CFF' : '#7D8592'} />
                </div>
                <input className={`dark:bg-gray-800 dark:text-[#fff] dark:border-none t-input mt-1`} required type="text" name="price" id="price" placeholder="请输入"
                  defaultValue={username}
                  onFocus={() => setFocus('account')}
                  onBlur={() => setFocus('')}
                  onChange={(e: any) => setUsername(e.target.value)}
                />
              </div>
            </label>
            <label className="w-[400px] mt-[30px]">
              <span className="t-label text-[14px]">密码</span>
              <div className="relative">
                <div className="absolute left-0 top-0 w-[40px] h-full flex justify-center items-center cursor-pointer" onClick={() => setShow(!show)}>
                  <SvgIcon icon={show ? 'lock-closed' : 'lock-open'} size={20} color={focus === 'password' ? '#3F8CFF' : '#7D8592'} />
                </div>
                <input className="dark:bg-gray-800 dark:text-[#fff] dark:border-none t-input mt-1" type={show ? 'password' : 'text'} name="price" id="price" placeholder="请输入" required
                  defaultValue={password}
                  onFocus={() => setFocus('password')}
                  onBlur={() => setFocus('')}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
            </label>
            <div className="w-[400px] mt-[30px] flex items-center justify-between">
              <div className="flex items-center">
                <input className="dark:border-[#3F8CFF] checkbox" type="checkbox" defaultChecked={checked} onClick={() => setChecked(!checked)} />
                <span className="ml-2 text-sm text-[#7D8592]">记住密码</span>
              </div>
              <a className="link link-hover text-[#3F8CFF] text-sm">忘记密码?</a>
            </div>
            <div className="flex items-center mt-[30px]">
              <button type="button" onClick={login} className="dark:bg-gray-800 t-login w-[170px] h-[48px] mr-2 t-button t-shadow-blue bg-[#3F8CFF] flex justify-center items-center">
                <span className="w-[40px] mr-2">登 录</span>
                <SvgIcon icon="right-arrow" color="#fff" size={24} />
              </button>
              
            </div>
            <div className="w-2/3 mx-auto divider mt-8 text-xs dark:text-white">其他方式登录</div>
            <div className="flex">
              <div className="mx-2 w-[30px] h-[30px] cursor-pointer dark:text-white hover:scale-110" onClick={auth}>
                <SvgIcon icon="github" size={30} />
              </div>
              <div className="mx-2 w-[30px] h-[30px] cursor-pointer dark:text-white text-gray-800 hover:scale-110" onClick={toBlog}>
                <SvgIcon icon="pencil" size={30} />
              </div>
            </div>
          </form>
        </div>
      </div>
      { error && <Alert msg={error} /> }
    </div>
  )
}

export default BasicLogin