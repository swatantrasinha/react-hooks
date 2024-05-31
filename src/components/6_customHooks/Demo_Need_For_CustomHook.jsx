import { useState } from 'react'

export const Demo_Need_For_CustomHook = () => {
    const [name, setName] = useState('');

    const bigInputStyle = {
      width: '500px',
      height: '50px',
      fontSize: '40px',
    };
  return (
    <>
        <h1>NeedForCustomHook</h1>
        <input type="text" className="big-input" style={bigInputStyle} value={name} onChange={e => setName(e?.target?.value)} />
    </>
  )
}
export default Demo_Need_For_CustomHook;