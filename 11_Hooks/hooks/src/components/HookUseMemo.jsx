import {useState, useEffect, useMemo} from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0);

    const premiumNumber = useMemo(() => {
        return ["0", "100", "200"];
    }, []);

    useEffect(() => {
        console.log("Premium numbers foi alterado!")
    }, [premiumNumber]);

  return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
        {premiumNumber.includes(number) ? <p>Acertou</p> : ""}
        <hr />
    </div>
  )
}

export default HookUseMemo;