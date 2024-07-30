"use client"
import React, { useContext } from 'react'
import { LoginContext } from '../useContextHook/page';

function DummyComponent() {
    const login=useContext(LoginContext);
    console.log("login=="+login);
  return (
    <div>D</div>
  )
}

export default DummyComponent