import { useSearchParams } from "react-router-dom";
export default function Home() {
  const [params , setParams] = useSearchParams();

  // 1. 단일 파라미터 설정
  const setSingleParam = () => {
    setParams({ value: "new-value" });
  };

  // 2. 여러 파라미터 동시 설정
  const setMultipleParams = () => {
    setParams({
      value: "test-value",
      page: "1",
      category: "diary"
    });
  };

  // 3. 기존 파라미터 유지하면서 새로운 파라미터 추가
  const addNewParam = () => {
    const newParams = new URLSearchParams(params);
    newParams.set("newKey", "newValue");
    setParams(newParams);
  };

  // 4. 특정 파라미터만 업데이트
  const updateParam = () => {
    const newParams = new URLSearchParams(params);
    newParams.set("value", "updated-value");
    setParams(newParams);
  };

  // 5. 특정 파라미터 삭제
  const deleteParam = () => {
    const newParams = new URLSearchParams(params);
    newParams.delete("value");
    setParams(newParams);
  };

  return (
    <>
    <div>{params.get("value")}</div>
    <div>Home</div>
    <button className="border mx-3"
    onClick={setSingleParam}>파라미터 설정</button>
    <button className="border mx-3"
    onClick={setMultipleParams}>여러 파라미터 설정</button>
    <button className="border mx-3"
    onClick={addNewParam}>새 파라미터 추가</button>
    <button className="border mx-3"
    onClick={updateParam}>파라미터 업데이트</button>
    <button className="border mx-3"
    onClick={deleteParam}>파라미터 삭제</button>
    </>
  );
};
