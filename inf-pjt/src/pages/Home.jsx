import { useSearchParams } from "react-router-dom";
export default function Home() {
  const [params , setParams] = useSearchParams();

  return (
    <>
    <div>{params.get("value")}</div>
    <div>Home</div>
    </>
  );
};
