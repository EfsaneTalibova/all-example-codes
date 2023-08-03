import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [colors, setColors] = useState(new Values('#315c72').all(10))
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10)
      setColors(newColor)
      toast.success('success')
    } catch (error) {
      toast.error(error.message)
    }
  }
  return <main>
    <Form addColor={addColor} />
    <ColorList colors={colors} />
    <ToastContainer position="top-center" />
  </main>;
};
export default App;
