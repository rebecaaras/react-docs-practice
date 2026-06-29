import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ManagingStates from "./pages/ManagingStates";

export default function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/managing-states" element={<ManagingStates/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}