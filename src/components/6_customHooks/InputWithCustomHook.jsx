import useLocalStorage from './useLocalStorage';

export const InputWithCustomHook = () => {
    const [name, setName] = useLocalStorage('name', '');

    const bigInputStyle = {
      width: '500px',
      height: '50px',
      fontSize: '40px',
    };
  return (
    <>
        <h1>Custom Hook </h1>
        <input type="text" className="big-input" style={bigInputStyle} value={name} onChange={e => setName(e?.target?.value)} />
    </>
  )
}
