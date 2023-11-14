import React from "react";
import DefaultButton from "@/components/common/Button/DefaultButton";
import {useNavigate} from "react-router-dom";

const Asset:React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      开发中喽.....
      <DefaultButton
        text={'详情'}
        type={'link'}
        onClick={() => {
          navigate('/main/analysis/detail')
        }}
      />
    </>
  )
}

export default Asset
