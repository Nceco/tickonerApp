import { Result } from 'antd'
import React from 'react'
import DefaultButton from "../components/common/Button/DefaultButton";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <DefaultButton
          text={'返回主页'}
          onClick={() => {
            navigate('/', { replace: true })
          }}
        />
      }
    />
  )
}

export default NotFound
