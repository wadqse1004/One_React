import { useRef, useState } from 'react';

const OrderEditor = () => {
    const [variable, setVariable] = useState({
      menu: "",
      addr: "",
      request: ""
    });

    const addrRef = useRef();

    const onChange = (e) => {
      setVariable({
        ...variable,
        [e.target.name]: e.target.value,
      });
    }

    const onSubmit = () =>{
      if (addrRef.current.value === "") {
        addrRef.current.focus();
        return;
      }

        alert(`주문이 완료되었습니다. 메뉴 : ${variable.menu}, 주소 : ${variable.addr}, 요청사항 : ${variable.request }`);
    }

    return (
      <div
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <h2>배달의민족 주문</h2>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            메뉴 선택
          </div>
          <select 
            name = "menu"
            value={variable.menu}
            style={{ width: 300, padding: 5 }} 
            onChange={onChange}
          >
            <option value={"족발"}>족발</option>
            <option value={"떡볶이"}>떡볶이</option>
            <option value={"아이스크림"}>아이스크림</option>
            <option value={"샐러드"}>샐러드</option>
          </select>
        </div>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 주소
          </div>
          <input
            ref={addrRef}
            name="addr"
            value={variable.addr}
            style={{ width: 300, padding: 5 }}
            placeholder="주소) 서울특별시 xx동 .."
            onChange={onChange}
          />
        </div>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 요청사항
          </div>
          <textarea
            name="request"
            value={variable.request}
            style={{ width: 300, padding: 5 }}
            placeholder="배달 요청사항을 써 주세요..."
            onChange={onChange}
          />
        </div>
        <div>
          <button
            onClick={onSubmit}
            style={{ width: 300, padding: 5 }}
          >
            주문 완료
          </button>
        </div>
      </div>
    );
  };

export default OrderEditor;