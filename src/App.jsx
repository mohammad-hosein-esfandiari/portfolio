import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { db } from "./core/config/firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { GalleryHolder } from "./Components/Index/GalleryHolder";
import "./App.css";
import { Loading } from "./Components/common/Loading";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const portfolioConnectionsRef = collection(db, "portfolio");
  const getSkills = async () => {
    setLoading(true);
    try {
      const data = await getDocs(portfolioConnectionsRef);
      const latestData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      if (latestData.length) {
        setData(latestData);
        setLoading(false);
      } else {
        alert("Plz turn on your VPN");
      }
    } catch (error) {
      // console.log(error);
      console.log("sdvsdvsdvdsv");
    }
  };
  useEffect(() => {
    getSkills();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 0.5, 5] }}>
        <GalleryHolder data={data} />
      </Canvas>
    </>
  );
}

export default App;
