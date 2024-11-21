import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Popup = ({ isOpen, onClose, method }) => {
  const { navigate } = useContext(ShopContext);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Order Placed Successfully</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-4xl"
          >
            X
          </button>
        </div>
        <p className="mb-4">
          Your order has been placed successfully with {method}.
        </p>
        <p>Congratulations! You got 100 reward points.</p>
        <br />
        <button
          onClick={() => navigate("/orders")}
          className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200"
        >
          Go to Orders
        </button>
      </div>
    </div>
  );
};

export default Popup;
