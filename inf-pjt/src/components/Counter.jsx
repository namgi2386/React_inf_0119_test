// src/components/Counter.jsx
import { useRecoilState } from 'recoil';
import { counterState } from '../recoil/atoms/counterAtom';

function Counter() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold italic underline">카운터: {count}</h1>
        
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          증가
        </button>
        
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count - 1)}
        >
          감소
        </button>
        
    </div>
  );
}

export default Counter;