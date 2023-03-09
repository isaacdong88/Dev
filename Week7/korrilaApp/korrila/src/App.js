import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import receiptData from "./models/receiptData";
import Receipt from "./components/Receipt";

function App() {
  // const [receipt, setReceipt] = useState(receiptData);
  const allReceipts = receiptData.map((rec) => {
    return rec.paid ? null : <Receipt ticket={rec} />;
  });

  return (
    <div>
      <Header />
      <div className="receiptBox">
        {
          allReceipts /* {receiptData[0].paid ? null : <Receipt ticket={receipt[0]} />}
        {receiptData[1].paid ? null : <Receipt ticket={receipt[1]} />}
        {receiptData[2].paid ? null : <Receipt ticket={receipt[2]} />} */
        }
      </div>
    </div>
  );
}

export default App;
